"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Tabs */}
      <div className="flex w-[200px] gap-4 mb-6">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>

      {/* Referral Header and Actions */}
      <div className="flex justify-between items-center">
        <Skeleton className="w-36 h-7 rounded" />
        <div className="flex gap-x-2">
          <div className="border rounded-md flex items-center gap-x-2 px-3 py-1.5 w-auto max-w-xs">
            <Skeleton className="h-5 w-32 rounded" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          <div className="border rounded-md p-2 w-10 h-10" />
        </div>
      </div>

      {/* Your Tier */}
      <div className="flex items-center space-x-2">
        <Skeleton className="w-20 h-5 rounded" />
        <div className="border rounded-sm p-1 flex items-center gap-x-2 w-auto max-w-xs">
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-4 w-4 rounded" />
        </div>
      </div>

      <hr className="" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="border rounded-xl p-6 space-y-6"
          >
            <div className="space-y-2">
              <Skeleton className="h-4 w-40 rounded" />
              <div className="border rounded-sm p-4 flex justify-center">
                <Skeleton className="h-8 w-24 rounded" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-56 rounded" />
              <div className="border rounded-sm p-4 flex justify-center items-center gap-x-3">
                <Skeleton className="h-8 w-24 rounded" />
                <Skeleton className="h-8 w-8 border rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="" />

      {/* Referral Table Skeleton */}
      <div className="mt-6 w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse border ">
          <thead>
            <tr>
              {["VALUE", "AMOUNT", "TIMESTAMP", "TRANSACTION"].map((header) => (
                <th
                  key={header}
                  className="border p-2 text-left"
                >
                  <Skeleton className="h-4 w-20 rounded" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <tr key={i} className="border ">
                  {Array(4)
                    .fill(0)
                    .map((__, j) => (
                      <td key={j} className="border p-2">
                        <Skeleton className="h-4 w-full max-w-[100px] rounded" />
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
