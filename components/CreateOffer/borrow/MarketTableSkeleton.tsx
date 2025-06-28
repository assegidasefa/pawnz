// "use client";
import { Skeleton } from "@/components/ui/skeleton";
import { TableRow, TableCell } from "@/components/ui/table";

const MarketTableSkeleton = () => {
  return (
    <>
    {Array.from({ length: 8 }).map((_, idx) => (
      <TableRow key={idx} className="border-none">
          <TableCell>
            <div className="flex items-center space-x-2">
              <Skeleton className="w-8 h-8 rounded-sm" />
              <Skeleton className="w-16 h-4" />
            </div>
          </TableCell>
          <TableCell>
            <Skeleton className="w-24 h-6 rounded-md" />
          </TableCell>
          <TableCell>
            <div className="flex items-center space-x-2">
              <Skeleton className="w-10 h-5 rounded-sm" />
              <Skeleton className="w-4 h-4 rounded-full" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center space-x-2">
              <Skeleton className="w-4 h-4" />
              <Skeleton className="w-14 h-4" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-x-3 items-center">
              <Skeleton className="w-10 h-4" />
              <Skeleton className="w-14 h-5 rounded-sm" />
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center space-x-2">
              <Skeleton className="w-4 h-4" />
              <Skeleton className="w-14 h-4" />
            </div>
          </TableCell>
          <TableCell>
            <Skeleton className="w-28 h-8 rounded-md" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default MarketTableSkeleton;
