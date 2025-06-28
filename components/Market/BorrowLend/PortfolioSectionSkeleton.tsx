"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const PortfolioSectionSkeleton = () => {
  return (
    <div className="md:bg-card w-full flex flex-col md:p-4 gap-y-4 rounded-lg">
      <hr className="flex md:hidden" />

      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-40" /> {/* Total Value */}
        <Skeleton className="h-6 w-16 rounded-md" /> {/* Change badge */}
        <Skeleton className="h-6 w-6 rounded-full" /> {/* Chart icon */}
      </div>

      <hr className="flex md:hidden" />

      {/* Mobile Token Scroll */}
      <div className="h-[130px] md:hidden grid gap-2.5 grid-rows-[auto_auto] grid-flow-col w-[91vw] overflow-x-auto">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="w-[120px] space-y-2 p-2 border rounded-lg">
            <Skeleton className="w-10 h-10 rounded-full mx-auto" />
            <Skeleton className="h-4 w-20 mx-auto" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
        ))}
      </div>

      {/* Desktop Token Grid */}
      <div className="hidden md:grid md:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-2">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="space-y-2 border rounded-lg p-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>

      {/* Button */}
      <Button variant="default" disabled className="w-full bg-card border">
        <Skeleton className="h-5 w-48 mx-auto" />
      </Button>
    </div>
  );
};

export default PortfolioSectionSkeleton;
