"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ListingBorrowSkeleton = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="w-full">
        <div className="flex space-x-4 mb-4 w-full">
          <Tabs defaultValue="listing" className="w-full">

            <TabsContent value="listing" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-normal text-[12px] text-muted-foreground flex ml-8 items-center">
                      COIN
                    </TableHead>
                    <TableHead className="font-normal text-[12px] text-muted-foreground">
                      ACTIVITY
                    </TableHead>
                    <TableHead className="font-normal text-[12px] text-muted-foreground">
                      ASK
                    </TableHead>
                    <TableHead className="font-normal text-[12px] text-muted-foreground text-center">
                      OFFER
                    </TableHead>
                    <TableHead className="font-normal text-[12px] text-muted-foreground text-right">
                      TIME
                    </TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
              {/* Skeleton table body */}
              <div className="border rounded-lg p-4 space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-5 items-center gap-4 py-2 border-b last:border-none"
                  >
                    <div className="flex items-center space-x-2">
                      <Skeleton className="w-6 h-6 rounded-full" />
                      <Skeleton className="w-20 h-4" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                    <Skeleton className="h-4 w-16 ml-auto" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Skeleton className="w-full h-32 rounded-md" />
            </TabsContent>

            <TabsContent value="auction">
              <Skeleton className="w-full h-32 rounded-md" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ListingBorrowSkeleton;
