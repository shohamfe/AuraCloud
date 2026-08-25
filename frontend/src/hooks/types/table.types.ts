import type { MRT_RowData, MRT_TableOptions } from "material-react-table";
import type React from "react";

export interface AuraTableOptions<TData extends MRT_RowData>
  extends MRT_TableOptions<TData> {
  searchPlaceholder: string;
  searchInputRef?: React.Ref<HTMLInputElement>;
}
