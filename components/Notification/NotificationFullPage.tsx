"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Minimize2,
  Settings,
  Circle,
  CircleCheck,
  XIcon,
  Check,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AllAuctions from "../Auctions/All/AllAuctions";
import NotificationFullPageContent from "./NotificationFullPageContent";
import { Card } from "../ui/card";
import { useRouter } from "next/navigation";

export default function NotificationFullPage() {
  const router = useRouter();
  return (
    <div className="h-full w-full rounded-lg shadow-xl">
      <div className="w-full flex items-center justify-between px-6 py-4 ">
        <Badge variant={'outline'} className="px-2 py-1 rounded-xl font-bold">Notifications</Badge> 
        <div className="flex items-center gap-x-2">
          <Card className="p-1 ">
            <Check width={16} height={16}/>
          </Card>
          <Card onClick={() => router.back()} className="p-1 ">
            <XIcon width={16} height={16}/>
          </Card>
        </div>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full ">
        <div className="flex justify-between px-6 border-b ">
          <TabsList className=" my-4 h-auto space-x-2  ">
            <TabsTrigger value="all" className="px-3 py-1.5 rounded-md">
              All
            </TabsTrigger>
            <TabsTrigger
              disabled={true}
              value="loan"
              className="px-3 py-1.5 rounded-md"
            >
              Loan
            </TabsTrigger>
            <TabsTrigger
              disabled={true}
              value="offers"
              className="px-3 py-1.5 rounded-md"
            >
              Offers
            </TabsTrigger>
            <TabsTrigger
              disabled={true}
              value="auctions"
              className="px-3 py-1.5 rounded-md"
            >
              Auctions
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          {/* <DashboardBorrow /> */}
          <NotificationFullPageContent />
        </TabsContent>
        <TabsContent value="live" className="flex w-full">
          {/* <DashboardLend /> */}
        </TabsContent>
        <TabsContent value="offers" className="flex w-full">
          {/* <DashboardLend /> */}
        </TabsContent>
        <TabsContent value="auctions" className="flex w-full">
          {/* <DashboardLend /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
