"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ListingLend from "./lend/ListingLend";
import ListingBorrow from "./borrow/ListingBorrow";
import SelectMemecoins from "./SelectMemecoins";
import { Button } from "@/components/ui/button";
import ExpandIcon from "../icons/ExpandIcon";
import CollapseIcon from "../icons/CollapseIcon";

const Listing = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("borrow");
  const [isExpanded, setIsExpanded] = useState(false);

  // NEW
  const [selectedCoins, setSelectedCoins] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "lend" || tab === "borrow") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsExpanded(false);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);

  return (
    <div className="flex px-6 w-full">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex justify-between items-center">
          <TabsList className="my-4 h-auto space-x-2">
            <TabsTrigger value="borrow" className="px-3 py-1.5 rounded-md">
              Borrow
            </TabsTrigger>
            <TabsTrigger value="lend" className="px-3 py-1.5 rounded-md">
              Lend
            </TabsTrigger>
          </TabsList>

          {!isExpanded && activeTab === 'lend' && (
            <Button size="sm" variant="outline" className="hidden md:flex p-1" onClick={handleExpand}>
              <ExpandIcon />
            </Button>
          )}
        </div>

        <TabsContent value="borrow">
          <ListingBorrow />
        </TabsContent>

        <TabsContent value="lend" className="flex w-full">
          <ListingLend selectedCoins={selectedCoins} searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>

      {isExpanded && (
        <div className="flex w-[27%] pt-4 border-l">
          <div className="flex-1">
            <SelectMemecoins
              selectedCoins={selectedCoins}
              setSelectedCoins={setSelectedCoins}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="ml-2">
            <Button size="sm" variant="outline" onClick={handleCollapse} className="p-1">
              <CollapseIcon />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;
