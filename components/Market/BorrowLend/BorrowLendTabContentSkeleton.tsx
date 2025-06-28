import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const BorrowLendTabContentSkeleton = () => {
  return (
    <div>
        <div className="space-y-6 w-full">
        {/* Simulate the horizontal layout */}
        <div className="flex gap-x-3 w-full">
          <div className="flex-1 p-4 border rounded-lg">
            {/* PortfolioSection skeleton */}
            <Skeleton className="h-6 w-32 mb-4 rounded-md" />
            <Skeleton className="h-48 w-full rounded-md" />
          </div>
          <div className="w-[300px] p-4 border rounded-lg">
            {/* RightSideInfoCard skeleton */}
            <Skeleton className="h-6 w-48 mb-2 rounded-md" />
            <Skeleton className="h-4 w-full mb-2 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* LoanAndListing skeleton */}
        <div className="p-4 border rounded-lg">
          <Skeleton className="h-6 w-48 mb-4 rounded-md" />
          <Skeleton className="h-32 w-full rounded-md" />
        </div>

        {/* MarketTable skeleton */}
        <div className="p-4 border rounded-lg">
          <Skeleton className="h-6 w-48 mb-4 rounded-md" />
          <Skeleton className="h-48 w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default BorrowLendTabContentSkeleton