const { createColumnHelper } = require("@tanstack/react-table");

const columnsHelper = createColumnHelper();

export const columns = [
  columnsHelper.accessor("invoice", {
    header: () => "Invoice",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("status", {
    id: "status",
    header: () => "Status",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("method", {
    header: () => "Method",
    cell: (info) => info.renderValue(),
  }),
  columnsHelper.accessor("amount", {
    header: () => "Amount",
  }),
];
