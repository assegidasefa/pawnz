"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const AllAuctionsSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Card Skeleton */}
      <Card
        style={{
          backgroundImage: `url('/auctionBg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-5 w-[90vw] md:w-full"
      >
        <CardContent className="text-white h-full p-0 flex flex-col gap-y-6">
          <Skeleton className="h-6 w-40 bg-white/20" />
          <div className="border border-white/20 rounded-xl p-4 w-full md:w-[450px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, idx) => (
                <div key={idx}>
                  <Skeleton className="h-3 w-24 mb-2 bg-white/20" />
                  <Skeleton className="h-4 w-20 bg-white/30" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest & Ended Auction Sections */}
      {[...Array(2)].map((_, sectionIdx) => (
        <div key={sectionIdx} className="space-y-4">
          <Skeleton className="h-6 w-40" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div>
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div>
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div>
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Live Now Table Skeleton */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-9 h-9 rounded-md" />
            ))}
            <Skeleton className="w-32 h-9 rounded-md" />
          </div>
        </div>
        <div className="rounded-xl border p-4 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-4 items-center border-b pb-3 last:border-0"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAuctionsSkeleton;
