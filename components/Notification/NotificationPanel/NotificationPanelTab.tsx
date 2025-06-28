import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Minimize2, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationPanelContent from "./NotificationPanelContent";

export default function Notification() {
  return (
    <div className="w-full max-w-md rounded-lg shadow-xl">
      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full px-6">
        <div className="flex justify-between ">
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
          <NotificationPanelContent />
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
