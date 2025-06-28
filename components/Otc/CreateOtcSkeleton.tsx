"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CreateOtcSkeleton() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-3/5 rounded" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-5 w-20 rounded" />
          </div>
          <Skeleton className="h-9 w-28 rounded-md" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Duration Skeleton */}
        <div className="border rounded-md p-4 space-y-2">
          <Skeleton className="h-4 w-20 rounded" />
          <div className="flex space-x-2">
            <Skeleton className="flex-1 h-10 rounded" />
            <Skeleton className="w-10 h-10 rounded" />
          </div>
        </div>

        {/* Counterparty Wallet Skeleton */}
        <div className="border rounded-md p-4 space-y-2">
          <Skeleton className="h-4 w-48 rounded" />
          <div className="flex items-center space-x-2 mt-2">
            <Skeleton className="flex-1 h-10 rounded" />
            <Skeleton className="w-10 h-10 rounded" />
          </div>
          <div className="flex items-center mt-3 space-x-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-48 rounded" />
          </div>
        </div>
      </div>

      {/* Offerings and Wanted Tokens Section */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-start">
        {/* My offerings */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32 rounded" />
            <Skeleton className="h-8 w-24 rounded" />
          </div>
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} className="h-16 rounded" />
          ))}
        </div>

        {/* Arrow icon in center */}
        <div className="flex justify-center pt-10">
          <Skeleton className="w-10 h-10 rounded-full border border-gray-300" />
        </div>

        {/* What I'd like to get */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-36 rounded" />
            <Skeleton className="h-8 w-24 rounded" />
          </div>
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-16 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
