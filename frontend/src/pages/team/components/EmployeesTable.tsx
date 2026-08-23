import { useAuraTable } from "@/hooks/table.hooks";
import { useEmployeeColumns } from "@/pages/team/hooks/employees.hooks";
import type { EmployeesTableProps } from "@/pages/team/types/team.types";
import { MaterialReactTable } from "material-react-table";
import React from "react";
import { useTranslation } from "react-i18next";

const EmployeesTable: React.FC<EmployeesTableProps> = ({ employees, teams, renderRowActions }) => {
  const { t } = useTranslation();

  const columns = useEmployeeColumns(teams);

  const table = useAuraTable({
    columns,
    data: employees,
    searchPlaceholder: t("team.employees.search"),
    enableRowActions: true,
    renderRowActions: ({ row }) => renderRowActions(row.original),
  });

  return <MaterialReactTable table={table} />;
};

export default EmployeesTable;
