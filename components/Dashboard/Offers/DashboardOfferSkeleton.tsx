"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardOffersSkeleton() {
  return (
    <div className="min-h-screen w-full space-y-8 p-4">
      {/* User Profile Section Skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <Skeleton className="rounded-full w-12 h-12" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded" />
            <div className="flex gap-2">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
            </div>
            <Skeleton className="h-5 w-24 rounded mt-1" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-x-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="rounded p-4 w-32 h-20 flex flex-col justify-center"
              >
                <Skeleton className="h-4 w-20 rounded mb-2" />
                <Skeleton className="h-6 w-24 rounded" />
              </div>
            ))}
        </div>
      </div>

      {/* Listings Section Skeleton */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-7 w-48 rounded" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Icons placeholders */}
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-4 h-4 rounded" />
            </div>

            <div className="relative rounded-sm p-0 shadow-none w-64">
              <Skeleton className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded" />
              <input
                disabled
                placeholder="Search Collateral"
                className="pl-10 w-full h-8 rounded border  text-transparent cursor-wait"
              />
            </div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                {["COIN", "OFFERING", "STATUS", "FROM", "TIME"].map((header) => (
                  <th
                    key={header}
                    className="border  p-2 text-left"
                  >
                    <Skeleton className="h-4 w-20 rounded" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <tr key={i} className="border border-gray-300">
                    {Array(5)
                      .fill(0)
                      .map((__, j) => (
                        <td key={j} className="border p-2">
                          <Skeleton className="h-4 w-full max-w-[120px] rounded" />
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
