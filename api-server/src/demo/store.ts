import { createRequire } from "node:module";

// tsx (dev) and esbuild (Vercel) both handle require() of JSON reliably;
// static ESM JSON imports need a runtime-specific assertion syntax this avoids.
const require = createRequire(import.meta.url);

const company = require("./fixtures/company.json");
const inviteCode = require("./fixtures/invite-code.json");
const initialTeams = require("./fixtures/teams.json");
const initialEmployees = require("./fixtures/employees.json");
const awsUsers = require("./fixtures/aws-users.json");
const initialWatchlistPresets = require("./fixtures/watchlist-presets.json");
const userPermissions = require("./fixtures/user-permissions.json");
const initialUserResourceWatchlist = require("./fixtures/user-resource-watchlist.json");
const presetResources = require("./fixtures/user-resource-watchlist-preset.json");
const resources = require("./fixtures/resources.json");
const resourceActionsByService = require("./fixtures/resource-actions.json") as Record<
  string,
  unknown[]
>;

export const DEMO_ADMIN_CUSTOMER_ID = initialEmployees[0]._id as string;

/** Frozen scan of admin@aura.com's real data, sanitized and mutable in-memory for the demo session. */
export const store = {
  company,
  inviteCode,
  teams: [...initialTeams],
  employees: [...initialEmployees],
  awsUsers,
  watchlistPresets: [...initialWatchlistPresets],
  userPermissions,
  userResourceWatchlist: [...initialUserResourceWatchlist],
  presetResources,
  resources,
};

function randomId(): string {
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
}

export function nextId(): string {
  return randomId();
}

/** Mirrors resources.routes.ts's toServiceKey so the same fixture keys resolve. */
export function toServiceKey(resourceType: string | undefined, arn: string): string {
  if (resourceType) {
    const lowerType = resourceType.toLowerCase();
    if (lowerType.includes("s3")) return "s3";
    if (lowerType.includes("iam")) return "iam";
    if (lowerType.includes("sso") || lowerType.includes("permissionset")) return "sso";
    if (lowerType.includes("ec2")) return "ec2";
  }
  const arnSegments = arn.split(":");
  return arnSegments.length > 2 ? arnSegments[2].toLowerCase() : "";
}

export function getResourceActionsFor(arn: string): unknown[] {
  const resource = store.resources.find((entry: { arn: string }) => entry.arn === arn);
  const serviceKey = toServiceKey(resource?.resourceType, arn);
  const actions = resourceActionsByService[serviceKey] ?? [];
  return actions.map((action) => ({ ...(action as object), resourceArn: arn }));
}
