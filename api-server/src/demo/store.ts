import {
  awsUsersFixture as awsUsers,
  companyFixture as company,
  employeesFixture as initialEmployees,
  inviteCodeFixture as inviteCode,
  presetResourcesFixture as presetResources,
  resourceActionsFixture,
  resourcesFixture as resources,
  teamsFixture as initialTeams,
  userPermissionsFixture as userPermissions,
  userResourceWatchlistFixture as initialUserResourceWatchlist,
  watchlistPresetsFixture as initialWatchlistPresets,
} from "./fixtures.data.js";

const resourceActionsByService = resourceActionsFixture as Record<string, unknown[]>;

export interface DemoEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleTitle: string;
  role: string;
  teamId: string | null;
  hasAwsConnected: boolean;
  createdAt: string;
}

export interface DemoTeam {
  _id: string;
  name: string;
  createdAt: string;
}

export interface DemoWatchlistPreset {
  _id: string;
  companyId: string;
  scopeType: string;
  scopeId: string;
  name: string;
  resources: Array<{ arn: string; actions: string[] }>;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface DemoWatchlistItem {
  _id: string;
  name: string;
  userId: string;
  resources: Array<{ arn: string; actions: string[]; name?: string; status?: string }>;
  createdAt: string;
  updatedAt: string;
}

export const DEMO_ADMIN_CUSTOMER_ID = initialEmployees[0]._id;

/** Frozen scan of admin@aura.com's real data, sanitized and mutable in-memory for the demo session. */
export const store = {
  company,
  inviteCode,
  teams: [...initialTeams] as DemoTeam[],
  employees: [...initialEmployees] as DemoEmployee[],
  awsUsers,
  watchlistPresets: [...initialWatchlistPresets] as DemoWatchlistPreset[],
  userPermissions,
  userResourceWatchlist: [...initialUserResourceWatchlist] as DemoWatchlistItem[],
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
