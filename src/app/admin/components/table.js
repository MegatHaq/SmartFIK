import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function Tables({ tableHeaders, tableItems }) {
  return (
    <Table>
      <TableCaption className="mb-2">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader className="bg-gray-900">
        <TableRow>
          {tableHeaders.map((header) => {
            return <TableHead className="text-white">{header}</TableHead>;
          })}
          {/* <TableHead>Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableItems.map((items) => {
          return (
            <TableRow>
              <TableCell>{items.invoice}</TableCell>
              <TableCell>{items.status}</TableCell>
              <TableCell>{items.method}</TableCell>
              <TableCell>${items.amount}.00</TableCell>
            </TableRow>
          );
        })}
        {/* <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
}
