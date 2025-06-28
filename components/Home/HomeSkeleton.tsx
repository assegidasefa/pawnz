"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const HomeSkeleton = () => {
  return (
    <div className="min-h-screen w-[88vw] md:w-full py-6 space-y-10">
      {/* Featured Collateral Skeleton */}
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="overflow-hidden md:basis-[75%] p-0 border-none">
          <CardContent className="p-0">
            <div className="w-full h-[296px] text-white relative p-6 flex flex-col justify-between">
              {/* Avatar & Info */}
              <div className="flex gap-4 mb-6">
                <Skeleton className="w-12 h-12 rounded-full bg-muted" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 bg-muted" />
                  <Skeleton className="h-3 w-32 bg-muted/80" />
                </div>
              </div>
              <Skeleton className="h-10 w-full rounded-md bg-[#d5ff40]/40" />

              {/* Stats and Icons */}
              <div className="rounded-xl flex items-end justify-between mt-auto border-white/10 border py-4 px-4 backdrop-blur-sm space-x-6">
                <div className="flex gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  ))}
                </div>
                <div className="hidden md:flex gap-3">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Card */}
        <Card className="hidden md:block overflow-hidden basis-[24%] border-none">
          <CardContent className="p-6 space-y-4 text-center">
            <Skeleton className="mx-auto w-16 h-16 rounded-full" />
            <Skeleton className="mx-auto h-4 w-24 bg-[#d5ff40]/40" />
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-10 w-full rounded-md bg-[#d5ff40]/40" />
          </CardContent>
        </Card>
      </div>

      {/* Trending Collaterals */}
      <div className="gap-3 overflow-x-auto no-scrollbar pb-4 flex w-[91vw]">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="min-w-[200px] p-4 space-y-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="w-[90vw] md:w-full">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center border p-4 rounded-md">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/6" />
              <Skeleton className="h-4 w-1/6" />
              <Skeleton className="h-4 w-1/6" />
              <Skeleton className="h-4 w-1/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
