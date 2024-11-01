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
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((header) => {
            return <TableHead>{header}</TableHead>;
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
