"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AllAuctions from "./All/AllAuctions";
import { Button } from "../ui/button";
import ExpandIcon from "../icons/ExpandIcon";
import AuctionCollapsibleContent from "./AuctionCollapsibleContent";
import FullscreenWrapper from "../Shared/FullscreenWrapper";

const Auctions = () => {
  const [isLendExpanded, setIsLendExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCollapse = () => {
    setIsLendExpanded(false);
    setIsFullscreen(false); 
  };
  return (
    <div>
      <div className="flex w-full ">
        <Tabs
          defaultValue="all"
          className={`${isFullscreen ? "hidden" : "flex w-full px-6"}`}
        >
          <div className="flex justify-between ">
            <TabsList className=" my-4 h-auto space-x-2  ">
              <TabsTrigger value="all" className="px-3 py-1.5 rounded-md">
                All
              </TabsTrigger>
              <TabsTrigger
                // disabled={true}
                value="live"
                className="px-3 py-1.5 rounded-md"
              >
                Live
              </TabsTrigger>
            </TabsList>
            {!isLendExpanded && (
              <Button
                size="sm"
                variant="outline"
                className="mr-2 p-1 mt-6 hidden xl:flex"
                onClick={() => setIsLendExpanded(true)}
              >
                <ExpandIcon />
              </Button>
            )}
          </div>
          <TabsContent value="all">
            {/* <DashboardBorrow /> */}
            <AllAuctions />
          </TabsContent>
          <TabsContent value="live" className="flex w-full">
            {/* <DashboardLend /> */}
          </TabsContent>
        </Tabs>
        {isLendExpanded && (
          <>
            {isFullscreen ? (
              <FullscreenWrapper
                open={isFullscreen}
                onOpenChange={() => setIsFullscreen((prev) => !prev)}
              >
                <AuctionCollapsibleContent
                  onCollapse={handleCollapse}
                  onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
                />
              </FullscreenWrapper>
            ) : (
              <div className="w-[45%] hidden xl:flex">
                <AuctionCollapsibleContent
                  onCollapse={handleCollapse}
                  onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Auctions;
