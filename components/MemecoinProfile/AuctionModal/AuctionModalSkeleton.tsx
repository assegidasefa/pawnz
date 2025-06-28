import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const AuctionModalSkeleton = () => {
  return (
    <div>
        <div className="m-0 shadow-none w-full p-4 space-y-4">
        {/* Header Skeleton */}
        <div className="flex items-center gap-x-2">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-1/3 h-5 rounded-md" />
            <div className="flex justify-between items-center">
              <Skeleton className="w-1/4 h-4 rounded-md" />
              <Skeleton className="w-10 h-6 rounded-sm" />
            </div>
          </div>
        </div>

        <hr />

        {/* Price and Contract Skeleton */}
        <div className="flex justify-between text-xs text-[#666]">
          <div className="flex gap-x-3 items-center">
            <Skeleton className="w-8 h-4 rounded-md" />
            <Skeleton className="w-20 h-6 rounded-md" />
          </div>
          <div className="flex gap-x-3 items-center">
            <Skeleton className="w-8 h-4 rounded-md" />
            <Skeleton className="w-36 h-6 rounded-md" />
          </div>
        </div>

        {/* Time Left Skeleton */}
        <div className="flex justify-between items-center text-xs text-[#666]">
          <Skeleton className="w-16 h-4 rounded-md" />
          <Skeleton className="w-24 h-6 rounded-md" />
        </div>

        <hr />

        {/* Bid Section Skeleton */}
        <div className="space-y-2">
          <Skeleton className="w-12 h-4 rounded-md" />
          <div className="flex gap-2 items-end">
            <Skeleton className="flex-1 h-12 rounded-sm" />
            <Skeleton className="w-12 h-12 rounded-full" />
          </div>
          <Skeleton className="w-full h-6 rounded-md" />
        </div>

        <hr />

        {/* Minimum Bid Skeleton */}
        <Skeleton className="w-48 h-5 rounded-md" />

        {/* Button Skeleton */}
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>
    </div>
  )
}

export default AuctionModalSkeleton