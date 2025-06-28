"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const DashboardBorrowSkeleton = () => {
  return (
    <div className="min-h-screen space-y-8">
      {/* === User Detail Skeleton === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
        <Skeleton className="h-10 w-32" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>

      {/* === My Loans Skeleton Cards === */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-4">
          <Skeleton className="h-6 w-24" />
          <div className="flex gap-2">
            <Skeleton className="w-10 h-10 rounded-md" />
            <Skeleton className="w-32 h-10 rounded-md" />
          </div>
        </div>

        <div className="w-[90vw] md:w-full overflow-x-auto flex md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="space-y-1 w-full">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>

                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-1/2 mx-auto" />

                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <Skeleton className="h-3 w-12" />
                  <Skeleton className="h-3 w-16" />
                </div>

                <Skeleton className="h-8 w-full rounded-md" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === Listings Table Skeleton === */}
      <section className="space-y-4 px-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <div className="flex gap-2">
            <Skeleton className="w-10 h-10 rounded-md" />
            <Skeleton className="w-32 h-10 rounded-md" />
          </div>
        </div>

        <div className="rounded-xl border p-4 space-y-4 w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-4 items-center border-b pb-3 last:border-none"
            >
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardBorrowSkeleton;
