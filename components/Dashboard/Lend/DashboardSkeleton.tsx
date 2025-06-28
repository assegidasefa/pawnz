"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Grid3X3,
  List,
  MoreHorizontal,
  Search,
  CircleX,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLendSkeleton() {
  const isMobile = useIsMobile()

  // Number of offers and tokens to mimic
  const offerCount = isMobile ? 2 : 5;
  const tokenCount = 5;

  return (
    <div className="min-h-screen w-full p-4 space-y-8">
      {/* Header - My Offers Section Title and Controls */}
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="w-48 h-8 rounded-md" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Grid3X3 className="w-4 h-4 text-muted-foreground" />
            <List className="w-4 h-4 text-muted-foreground" />
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </div>
          <Card className="relative p-0 rounded-sm w-auto md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Skeleton className="w-full h-10 rounded-md pl-10" />
          </Card>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(offerCount)].map((_, i) => (
          <Card key={i} className="!p-0">
            <CardContent className="p-4 flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="w-24 h-5 rounded-md" />
                  <div className="flex justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-transparent text-xs px-0"
                    >
                      <Skeleton className="w-12 h-4" />
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Skeleton className="w-16 h-4 rounded-md" />
                      <Skeleton className="w-4 h-4 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-transparent text-xs px-0"
                    >
                      <Skeleton className="w-16 h-4" />
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Skeleton className="w-16 h-4 rounded-md" />
                      <Skeleton className="w-4 h-4 rounded-full border" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full border rounded-lg overflow-hidden">
                <Progress value={0} className="h-4 bg-muted" indicatorClassName={"bg-[#D5FF40]"}  />
                <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
                  <Skeleton className="w-8 h-4" />
                </span>
              </div>

              <div className="flex items-center text-xs text-muted-foreground gap-1">
                <Skeleton className="w-4 h-4" />
                <Skeleton className="w-12 h-4" />
                <div className="ml-auto">
                  <Skeleton className="w-20 h-4" />
                </div>
              </div>

              <Button className="flex w-full border bg-card text-xs text-black cursor-not-allowed">
                <Skeleton className="mr-1 w-4 h-4" />
                <Skeleton className="w-16 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Listings Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="w-48 h-8 rounded-md" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Grid3X3 className="w-4 h-4 text-muted-foreground" />
              <List className="w-4 h-4 text-muted-foreground" />
              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
            </div>
            <Card className="relative p-0 rounded-sm w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Skeleton className="w-full h-10 rounded-md pl-10" />
            </Card>
          </div>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 rounded-md" />
          ))}
        </div>

        {/* Table Rows */}
        {[...Array(tokenCount)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 mb-3 border-b border-border pb-3"
          >
            {[...Array(5)].map((__, j) => (
              <Skeleton key={j} className="h-5 rounded-md" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
