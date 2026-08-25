import { useAuraTable } from "@/hooks/table.hooks";
import { useWatchlistTableColumns } from "@/pages/resourceWatchlist/hooks/resourceWatchlist.hooks";
import type { WatchlistTableProps } from "@/pages/resourceWatchlist/types/resourceWatchlist.types";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { TrashIcon } from "@phosphor-icons/react";
import { MaterialReactTable } from "material-react-table";
import React from "react";
import { useTranslation } from "react-i18next";

const WatchlistTable: React.FC<WatchlistTableProps> = ({ resources, onRemove }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const columns = useWatchlistTableColumns();

  const table = useAuraTable({
    columns,
    data: resources,
    searchPlaceholder: t("resourceWatchlist.search"),
    enableRowActions: true,
    renderEmptyRowsFallback: () => (
      <Typography variant="body2" color="textSecondary" sx={{ paddingBlock: 3, paddingInline: 2 }}>
        {t("resourceWatchlist.noResources")}
      </Typography>
    ),
    renderRowActions: ({ row }) => (
      <IconButton
        size="small"
        color="error"
        onClick={() => onRemove(row.original.arn)}
        aria-label={t("resourceWatchlist.remove")}
      >
        <TrashIcon size={theme.iconSize.xs} />
      </IconButton>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default WatchlistTable;
