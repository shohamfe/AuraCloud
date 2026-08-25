import { useAuraTable } from "@/hooks/table.hooks";
import { usePresetColumns } from "@/pages/team/hooks/presets.hooks";
import type { PresetsTableProps } from "@/pages/team/types/team.types";
import { MaterialReactTable } from "material-react-table";
import React from "react";
import { useTranslation } from "react-i18next";

const PresetsTable: React.FC<PresetsTableProps> = ({
  presets,
  teams,
  employees,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();

  const columns = usePresetColumns({ teams, employees, onEdit, onDelete });

  const table = useAuraTable({
    columns,
    data: presets,
    searchPlaceholder: t("team.presets.search"),
  });

  return <MaterialReactTable table={table} />;
};

export default PresetsTable;
