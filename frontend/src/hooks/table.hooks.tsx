import { TABLE_ROW_ACTIONS_WIDTH, TABLE_SEARCH_WIDTH } from "@/constants";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useMaterialReactTable, type MRT_RowData } from "material-react-table";
import type { AuraTableOptions } from "@/hooks/types/table.types";


export const useAuraTable = <TData extends MRT_RowData>({
  searchPlaceholder,
  searchInputRef,
  ...options
}: AuraTableOptions<TData>) => {
  const theme = useTheme();

  return useMaterialReactTable({
    enableGlobalFilter: true,
    initialState: { showGlobalFilter: true },
    enableColumnFilters: false,
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableBottomToolbar: false,
    enableHiding: false,
    positionGlobalFilter: "right",
    positionActionsColumn: "last",

    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
      placeholder: searchPlaceholder,
      ...(searchInputRef ? { inputRef: searchInputRef } : {}),
      slotProps: {
        input: {
          sx: { width: TABLE_SEARCH_WIDTH },
          startAdornment: (
            <InputAdornment position="start">
              <MagnifyingGlassIcon />
            </InputAdornment>
          ),
        },
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      },
    },
    muiTopToolbarProps: { sx: { backgroundColor: "transparent", paddingInline: 0 } },
    muiTableContainerProps: {
      sx: {
        backgroundColor: "transparent",
        flex: 1,
        minHeight: 0,
        borderRadius: `${theme.shape.borderRadius}px`,
        thead: {
          position: "sticky",
          top: 0,
          zIndex: 2,
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        borderColor: theme.palette.border.default,
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: theme.palette.surface.base,
      },
    },
    muiTableBodyCellProps: { sx: { borderColor: theme.palette.border.default } },
    displayColumnDefOptions: {
      "mrt-row-actions": { header: "", size: TABLE_ROW_ACTIONS_WIDTH },
    },

    ...options,
  });
};
