const { createColumnHelper } = require("@tanstack/react-table");

const columnsHelper = createColumnHelper();

export const columns = [
  columnsHelper.accessor("invoice", {
    header: () => "Invoice",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor((row) => row.status, {
    id: "status",
    cell: (info) => <div>{info.getValue()}</div>,
    header: () => <div>Status</div>,
  }),
  columnsHelper.accessor("method", {
    header: () => "Method",
    cell: (info) => info.renderValue(),
  }),
  columnsHelper.accessor("amount", {
    header: () => "Amount",
  }),
];
