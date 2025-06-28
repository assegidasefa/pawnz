"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TableToolbar from "../Shared/TableToolbar";
import debounce from "lodash.debounce";
import MarketTable from "./borrow/Table";

const tokens = Array.from({ length: 20 }, (_, i) => ({
  name: `Ponke ${i + 1}`,
  symbol: `https://api.dicebear.com/7.x/identicon/png?seed=${i}`,
  price: `${(Math.random() * 2).toFixed(2)} USD`,
  listings: `${Math.floor(Math.random() * 200)}`,
  change: `${(Math.random() * 10 - 5).toFixed(2)}%`,
  usdcDemand: `${Math.floor(Math.random() * 500)}M`,
  avgLtv: `${Math.floor(Math.random() * 60)}%`,
  isHighYield: Math.random() > 0.5,
  topOffer: `${Math.floor(Math.random() * 100)}M`,
  offer: "REQUEST LOAN",
}));

const CreateOffer = () => {
  const [marketData, setMarketData] = useState<any[]>([]);
  const [marketLoading, setMarketLoading] = useState<boolean>(true);
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [activeTab, setActiveTab] = useState("borrow");

  // Simulate initial loading
  useEffect(() => {
    setMarketLoading(true);
    const timeout = setTimeout(() => {
      setMarketData(tokens);
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
        setMarketData(tokens);
      } else {
        const filteredMarkets = tokens.filter((market) =>
          market.name.toLowerCase().includes(value.toLowerCase())
        );
        setMarketData(filteredMarkets);
      }
      setMarketLoading(false);
    }, 300);
  }, 300);

  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full py-4 px-6"
      >
        <div className="flex justify-between">
          <TabsList className="h-auto space-x-2 w-full p-0">
            <TabsTrigger value="borrow" className=" px-2 py-0 h-8 ">
              Borrow
            </TabsTrigger>
            <TabsTrigger value="lend" className="px-2 py-0 h-8">
              Lend
            </TabsTrigger>
            <div className="flex justify-end w-full">
              <div className="flex items-center justify-between py-[10px]">
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
              </div>
            </div>
          </TabsList>
        </div>
        <TabsContent value="borrow">
          <MarketTable
            marketData={marketData}
            layout={layout}
            isLoading={marketLoading}
          />
        </TabsContent>
        <TabsContent value="lend" />
        {/* <TabsContent value="lend">
          <MarketTable
            marketData={marketData}
            layout={layout}
            isLoading={marketLoading}
          />
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default CreateOffer;
