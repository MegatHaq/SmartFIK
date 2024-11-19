"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const DataTable = ({ data, columns }) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <Table>
      <TableHeader className="bg-gray-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow>
            {headerGroup.headers.map((header) => (
              <TableHead className="text-white">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className={"overflow-auto"}>
        {table.getRowModel().rows.map((row) => (
          <TableRow>
            {row._getAllVisibleCells().map((cell) => (
              <TableCell>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <Pagination className={"mt-4 ml-4"}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          {pagination.pageIndex > 0 && (
            <PaginationItem>
              <PaginationLink>{pagination.pageIndex}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink className={"bg-gray-200 rounded-full"}>
              {pagination.pageIndex + 1}
            </PaginationLink>
          </PaginationItem>
          {table.getCanNextPage() && (
            <PaginationItem>
              <PaginationLink>{pagination.pageIndex + 2}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => table.getCanNextPage() && table.nextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Table>
  );
};
