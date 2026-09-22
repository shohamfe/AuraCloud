import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import {
  DEMO_ADMIN_CUSTOMER_ID,
  getResourceActionsFor,
  nextId,
  store,
} from "./store.js";

declare global {
  namespace Express {
    interface Request {
      demoCustomer?: (typeof store.employees)[number];
    }
  }
}

/** No JWT to verify: every visitor is transparently signed in as the one demo account. */
function attachDemoCustomer(req: Request, _res: Response, next: NextFunction): void {
  req.demoCustomer = store.employees.find((e) => e._id === DEMO_ADMIN_CUSTOMER_ID);
  next();
}

function toCustomerResponse(customer: (typeof store.employees)[number]) {
  return {
    _id: customer._id,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    roleTitle: customer.roleTitle,
    role: customer.role,
    companyId: store.company._id,
    companyName: store.company.name,
    companySlug: store.company.slug,
    hasAwsConnected: true,
    companyAwsAccessKeyId: "AKIAIOSFODNN7EXAMPLE",
  };
}

function toEmployeeResponse(customer: (typeof store.employees)[number]) {
  return {
    _id: customer._id,
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    roleTitle: customer.roleTitle,
    role: customer.role,
    teamId: customer.teamId ?? null,
    hasAwsConnected: customer.hasAwsConnected,
    createdAt: customer.createdAt,
  };
}

export function createDemoApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(attachDemoCustomer);

  // ── Auth ─────────────────────────────────────────────────────────────────
  // Any email/password "logs in" as the single demo account; signup connects
  // the visitor to the same account instead of creating a new one.
  app.post("/api/auth/signup", (req, res) => {
    res.status(201).json({ token: "demo-token", customer: toCustomerResponse(req.demoCustomer!) });
  });

  app.post("/api/auth/login", (req, res) => {
    res.json({ token: "demo-token", customer: toCustomerResponse(req.demoCustomer!) });
  });

  app.get("/api/auth/me", (req, res) => {
    res.json(toCustomerResponse(req.demoCustomer!));
  });

  // ── Company ──────────────────────────────────────────────────────────────
  app.get("/api/companies/:slug", (req, res) => {
    if (req.params.slug !== store.company.slug) {
      res.status(404).json({ message: "Company not found" });
      return;
    }
    res.json(store.company);
  });

  app.get("/api/companies/:slug/aws-users", (req, res) => {
    if (req.params.slug !== store.company.slug) {
      res.status(404).json({ message: "Company not found" });
      return;
    }
    res.json(store.awsUsers);
  });

  app.get("/api/company/invite-code", (_req, res) => {
    res.json(store.inviteCode);
  });

  // ── Teams ────────────────────────────────────────────────────────────────
  app.get("/api/teams", (_req, res) => {
    res.json(store.teams);
  });

  app.post("/api/teams", (req, res) => {
    const { name } = req.body ?? {};
    if (typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "name is required" });
      return;
    }
    const team = { _id: nextId(), name: name.trim(), createdAt: new Date().toISOString() };
    store.teams.push(team);
    res.status(201).json(team);
  });

  app.put("/api/teams/:id", (req, res) => {
    const { name } = req.body ?? {};
    if (typeof name !== "string" || !name.trim()) {
      res.status(400).json({ message: "name is required" });
      return;
    }
    const team = store.teams.find((t) => t._id === req.params.id);
    if (!team) {
      res.status(404).json({ message: "Team not found" });
      return;
    }
    team.name = name.trim();
    res.json(team);
  });

  app.delete("/api/teams/:id", (req, res) => {
    const index = store.teams.findIndex((t) => t._id === req.params.id);
    if (index === -1) {
      res.status(404).json({ message: "Team not found" });
      return;
    }
    const [team] = store.teams.splice(index, 1);
    for (const employee of store.employees) {
      if (employee.teamId === team._id) employee.teamId = null;
    }
    store.watchlistPresets = store.watchlistPresets.filter(
      (preset) => !(preset.scopeType === "team" && preset.scopeId === team._id),
    );
    res.status(204).send();
  });

  // ── Employees ────────────────────────────────────────────────────────────
  app.get("/api/employees", (_req, res) => {
    res.json(store.employees.map(toEmployeeResponse));
  });

  app.delete("/api/employees/:id", (req, res) => {
    if (req.params.id === DEMO_ADMIN_CUSTOMER_ID) {
      res.status(400).json({ message: "You cannot remove your own account" });
      return;
    }
    const index = store.employees.findIndex((e) => e._id === req.params.id);
    if (index === -1) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }
    store.employees.splice(index, 1);
    res.status(204).send();
  });

  app.put("/api/employees/:id/role", (req, res) => {
    const { role } = req.body ?? {};
    if (role !== "manager" && role !== "employee") {
      res.status(400).json({ message: "role must be 'manager' or 'employee'" });
      return;
    }
    const employee = store.employees.find((e) => e._id === req.params.id);
    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }
    employee.role = role;
    res.json(toEmployeeResponse(employee));
  });

  app.put("/api/employees/:id/team", (req, res) => {
    const { teamId } = req.body ?? {};
    if (teamId !== null && typeof teamId !== "string") {
      res.status(400).json({ message: "teamId must be a string or null" });
      return;
    }
    const employee = store.employees.find((e) => e._id === req.params.id);
    if (!employee) {
      res.status(404).json({ message: "Employee not found" });
      return;
    }
    if (teamId !== null && !store.teams.some((t) => t._id === teamId)) {
      res.status(404).json({ message: "Team not found" });
      return;
    }
    employee.teamId = teamId;
    res.json(toEmployeeResponse(employee));
  });

  // ── Resources ────────────────────────────────────────────────────────────
  app.get("/api/resources", (_req, res) => {
    res.json(store.resources);
  });

  app.get("/api/resources/:arn/actions", (req, res) => {
    const arn = decodeURIComponent(req.params.arn);
    res.json(getResourceActionsFor(arn));
  });

  // ── Watchlist presets ────────────────────────────────────────────────────
  app.get("/api/watchlist-presets", (_req, res) => {
    res.json(store.watchlistPresets);
  });

  app.put("/api/watchlist-presets", (req, res) => {
    const { scopeType, scopeId, name, resources } = req.body ?? {};
    if (scopeType !== "team" && scopeType !== "individual") {
      res.status(400).json({ message: "scopeType must be 'team' or 'individual'" });
      return;
    }
    if (typeof scopeId !== "string") {
      res.status(400).json({ message: "scopeId is required" });
      return;
    }
    if (!Array.isArray(resources)) {
      res.status(400).json({ message: "resources must be an array of {arn, actions[]}" });
      return;
    }

    const existing = store.watchlistPresets.find(
      (preset) => preset.scopeType === scopeType && preset.scopeId === scopeId,
    );
    if (existing) {
      existing.resources = resources;
      if (typeof name === "string") existing.name = name;
      existing.updatedAt = new Date().toISOString();
      res.json(existing);
      return;
    }

    const preset = {
      _id: nextId(),
      companyId: store.company._id,
      scopeType,
      scopeId,
      name: typeof name === "string" ? name : "",
      resources,
      createdBy: DEMO_ADMIN_CUSTOMER_ID,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    store.watchlistPresets.push(preset);
    res.json(preset);
  });

  app.delete("/api/watchlist-presets/:id", (req, res) => {
    const index = store.watchlistPresets.findIndex((p) => p._id === req.params.id);
    if (index === -1) {
      res.status(404).json({ message: "Preset not found" });
      return;
    }
    store.watchlistPresets.splice(index, 1);
    res.status(204).send();
  });

  // ── User / permissions / watchlist ──────────────────────────────────────
  app.get("/api/user-permissions", (_req, res) => {
    res.json(store.userPermissions);
  });

  app.put("/api/user/profile", (req, res) => {
    const { firstName, lastName, roleTitle } = req.body ?? {};
    if (!firstName || !lastName || !roleTitle) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const customer = req.demoCustomer!;
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.roleTitle = roleTitle;
    res.json(toCustomerResponse(customer));
  });

  app.put("/api/user/link-aws-user", (req, res) => {
    res.json(toCustomerResponse(req.demoCustomer!));
  });

  app.get("/api/user-resource-watchlist/preset", (_req, res) => {
    res.json(store.presetResources);
  });

  app.get("/api/user-resource-watchlist", (_req, res) => {
    res.json(store.userResourceWatchlist);
  });

  app.post("/api/user-resource-watchlist", (req, res) => {
    if (store.userResourceWatchlist.length > 0) {
      res.status(409).json({
        message: "Watchlist already exists",
        watchlist: store.userResourceWatchlist[0],
      });
      return;
    }
    const watchlist = {
      _id: nextId(),
      name: `${req.demoCustomer!.firstName} ${req.demoCustomer!.lastName}'s Watchlist`,
      userId: store.userPermissions.userId,
      resources: req.body.resources ?? [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    store.userResourceWatchlist.push(watchlist);
    res.status(201).json(watchlist);
  });

  app.put("/api/user-resource-watchlist/:id", (req, res) => {
    const watchlist = store.userResourceWatchlist.find((w) => w._id === req.params.id);
    if (!watchlist) {
      res.status(404).json({ message: "Watchlist not found" });
      return;
    }
    watchlist.resources = req.body.resources ?? [];
    watchlist.updatedAt = new Date().toISOString();
    res.json(watchlist);
  });

  // ── AWS onboarding (disconnected in the demo) ───────────────────────────
  app.post("/api/aws/onboard-credentials", (req, res) => {
    res.json(toCustomerResponse(req.demoCustomer!));
  });

  // ── OAuth / AI client grants (not wired up in the demo) ─────────────────
  app.get("/api/oauth/grants", (_req, res) => {
    res.json([]);
  });

  app.get("/api/oauth/grants/company", (_req, res) => {
    res.json([]);
  });

  app.delete("/api/oauth/grants/:id", (_req, res) => {
    res.status(204).send();
  });

  return app;
}
