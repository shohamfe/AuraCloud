import type { WatchlistResource } from "@/services/resources.service";
import type {
  ArnPermissionData,
  ResourceStatus,
} from "@/services/types/resources.types";

export type FilterTabValue = "all" | "blocked" | "stale" | "unscanned" | "healthy";

export interface ResourceFilterTabsProps {
  activeFilter: FilterTabValue;
  tabCounts: Record<FilterTabValue, number>;
  showCounts: boolean;
  onFilterChange: (filter: FilterTabValue) => void;
}

export interface ResourceGridProps {
  resources: WatchlistResource[];
  permissionsMap: Record<string, ArnPermissionData>;
  resourceStatuses: Record<string, ResourceStatus>;
}
