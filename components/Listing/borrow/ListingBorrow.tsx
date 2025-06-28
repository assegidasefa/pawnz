"use client";
import React, { useEffect, useState } from "react";
import ListingTable from "../ListingTable";
import SelectMemecoins from "../SelectMemecoins";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart3, Grid3X3, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ListingBorrowTable from "./Table";
import { Card } from "@/components/ui/card";
import ListingBorrowSkeleton from "./ListingBorrowTableSkeleton";
import TableToolbar from "@/components/Shared/TableToolbar";
import debounce from "lodash.debounce";
import ActivityIcon from "@/components/icons/ActivityIcon";
import FireIcon from "@/components/icons/FireIcon";
import AuctionIcon from "@/components/icons/AuctionIcon";
type MarketItem = {
  name: string;
  symbol: string;
  activity: string;
  ask: string;
  offer: string;
  time: string;
  image?: string;
  askImage?: string;
};

const mockMarket: MarketItem[] = Array.from({ length: 20 }, () => ({
  name: "Ponke",
  symbol: "",
  activity: "Listed",
  ask: "134M",
  offer: "Offer",
  time: "2min ago",
  image: "/images/ponk.png",
  askImage: "/images/coins/USDC.svg",
}));
const ListingBorrow = () => {
  const [marketLoading, setMarketLoading] = useState<boolean>(true);
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [marketData, setMarketData] = useState<MarketItem[]>([]);

  // Simulate initial loading
  useEffect(() => {
    setMarketLoading(true);
    const timeout = setTimeout(() => {
      setMarketData(mockMarket);
      setMarketLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };

  const debouncedSearch = debounce((value: string) => {
    setMarketLoading(true);
    setTimeout(() => {
      if (value.trim() === "") {
        setMarketData(mockMarket);
      } else {
        const filteredMarkets = mockMarket.filter((market) =>
          market.name.toLowerCase().includes(value.toLowerCase())
        );
        setMarketData(filteredMarkets);
      }
      setMarketLoading(false);
    }, 300);
  }, 300);

  return (
    <div className="flex justify-between w-full  ">
      <div className="w-full">
        <div className="flex space-x-4 mb-4  w-full">
          <Tabs defaultValue="listing" className="w-full">
            <TabsList className="flex justify-between w-full">
              <div className="flex items-center gap-x-1">
                <TabsTrigger value="activity">
                  <ActivityIcon />
                  Activity
                </TabsTrigger>
                <TabsTrigger value="listing">
                  <FireIcon />
                  Listing
                </TabsTrigger>
                <TabsTrigger value="auction">
                  <AuctionIcon />
                  Auction
                </TabsTrigger>
              </div>
              <TableToolbar
                showLayoutIcons
                showSearch
                showMaximize={false}
                showClose={false}
                onSearchChange={debouncedSearch}
                onMaximizeClick={() => {}}
                onCloseClick={() => {}}
                onLayoutChange={handleLayoutChange}
                layout={layout}
              />
            </TabsList>
            <TabsContent value="activity">Activity</TabsContent>
            <TabsContent value="listing">
              {/* <ListingTable headers={headers} tokens={tokens} /> */}
              <ListingBorrowTable
                marketData={marketData}
                layout={layout}
                isLoading={marketLoading}
              />
            </TabsContent>
            <TabsContent value="auction">auction.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default ListingBorrow;
