"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ListingLendTableSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-[10px] w-[86vw] md:w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-normal text-[12px] text-muted-foreground flex ml-8 items-center">
              COIN
            </TableHead>
            <TableHead className="font-normal text-[12px] text-muted-foreground">
              ACTIVITY
            </TableHead>
            <TableHead className="font-normal text-[12px] text-muted-foreground">
              ASK
            </TableHead>
            <TableHead className="font-normal text-[12px] text-muted-foreground text-center">
              OFFER
            </TableHead>
            <TableHead className="font-normal text-[12px] text-muted-foreground text-right">
              TIME
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[...Array(8)].map((_, i) => (
            <TableRow key={i} className="border-none h-[41px]">
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-8 h-8 rounded-sm border mr-3" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-3 w-12" />
              </TableCell>
              <TableCell>
                <div className="flex gap-x-3 items-center">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-3 w-14" />
                </div>
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-20 rounded-md" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-3 w-10 ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListingLendTableSkeleton;
