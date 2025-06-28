"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import DashboardLend from "./Lend/DashboardLend";
import DashboardOffers from "./Offers/DashboardOffers";
import DashboardBorrow from "./Borrow/DashboardBorrow";
const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("borrow");

  useEffect(() => {
    const tabFromQuery = searchParams.get("tab");
    if (tabFromQuery) {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", tab);
    router.replace(`?${params.toString()}`);
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex w-full ">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full px-6">
          <div className="flex justify-between ">
            <TabsList className=" my-4 h-auto space-x-2  ">
              <TabsTrigger value="borrow" className="px-3 py-1.5 rounded-md">
                Borrow
              </TabsTrigger>
              <TabsTrigger value="lend" className="px-3 py-1.5 rounded-md">
                Lend
              </TabsTrigger>
              <TabsTrigger disabled value="auction" className="px-3 py-1.5 rounded-md">
                Auction
              </TabsTrigger>
              <TabsTrigger value="offer" className="px-3 py-1.5 rounded-md">
                Offer
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="borrow">
            <DashboardBorrow />
          </TabsContent>
          <TabsContent value="lend" className="flex w-full">
            <DashboardLend />
          </TabsContent>
          <TabsContent value="auction">auctions</TabsContent>
          <TabsContent value="offer">
            <DashboardOffers />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
