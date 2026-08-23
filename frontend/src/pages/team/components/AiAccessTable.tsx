import { useAuraTable } from "@/hooks/table.hooks";
import { useAiAccessColumns } from "@/pages/team/hooks/aiAccess.hooks";
import type { AiAccessTableProps } from "@/pages/team/types/team.types";
import { MaterialReactTable } from "material-react-table";
import React from "react";
import { useTranslation } from "react-i18next";

const AiAccessTable: React.FC<AiAccessTableProps> = ({
  grants,
  currentCustomerId,
  searchInputRef,
  onDisconnect,
  isRowPending,
}) => {
  const { t } = useTranslation();

  const columns = useAiAccessColumns({ currentCustomerId, onDisconnect, isRowPending });

  const table = useAuraTable({
    columns,
    data: grants,
    searchPlaceholder: t("team.aiAccess.search"),
    searchInputRef,
  });

  return <MaterialReactTable table={table} />;
};

export default AiAccessTable;
