"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ReusableTableProps<T> = {
  headers: string[];
  data: T[];
  rowRenderer: (item: T, index: number) => React.ReactNode;
};

export function ReusableTable<T>({ headers, data, rowRenderer }: ReusableTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="text-sm font-medium px-2 py-3 whitespace-nowrap"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{data.map(rowRenderer)}</TableBody>
      </Table>
    </div>
  );
}
