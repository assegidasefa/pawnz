"use client";

import { Skeleton } from "@/components/ui/skeleton";

const LoanAndListingSkeleton = () => {
  return (
    <div>
      {/* Header with title and toolbar */}
      <div className="flex items-center justify-between my-3">
        <Skeleton className="h-8 rounded-md  w-1/2">
          <h2 className="text-xl font-semibold"></h2>
        </Skeleton>

        <div className="flex items-center gap-2">
          {/* Simulated toolbar buttons */}
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>

      {/* Cards - mobile scroll / desktop grid */}
      <div className="flex overflow-x-auto md:grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="min-w-[180px] rounded-lg border p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanAndListingSkeleton;
