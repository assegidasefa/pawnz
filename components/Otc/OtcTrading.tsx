"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LendTabContent from "../Market/BorrowLend/BorrowLendTabContent";
import Home from "../Home/Home";
import HorizontalCollapsible from "../HorizontalCollapsable";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Listing from "../Listing/Listing";
import CreateOtc from "./CreateOtc";
import TradingHistoryComponent from "./TradingHistoryComponent";
import { Button } from "../ui/button";
import ExpandIcon from "../icons/ExpandIcon";
import { Checkbox } from "../ui/checkbox";
const OtcTrading = () => {
  const [expanded, setExpanded] = useState(false);
  const handleCollapse = () => setExpanded(false);

  return (
    <div>
      <div className="flex  md:w-full ">
        <Tabs defaultValue="createOtc" className="w-full md:px-6">
          <div className="flex justify-between px-4 md:px-6">
            <TabsList className=" my-4 h-auto space-x-2  ">
              <TabsTrigger value="createOtc" className="px-3 py-1.5 rounded-md">
                Create OTC
              </TabsTrigger>
              <TabsTrigger
                disabled={true}
                value="myPositions"
                className="px-3 py-1.5 rounded-md"
              >
                My Positions
              </TabsTrigger>
            </TabsList>
            {!expanded && (
              <Button
                size="sm"
                variant="outline"
                className="hidden md:flex  p-1 mt-4"
                onClick={() => setExpanded(true)}
              >
                <ExpandIcon />
              </Button>
            )}
            <div className="flex md:hidden items-center space-x-2">
              <Checkbox className="rounded border" />
              <span className="text-sm ">Private Listing</span>
            </div>
          </div>
          <TabsContent value="createOtc">
            {/* <DashboardBorrow /> */}
            <CreateOtc />
          </TabsContent>
          <TabsContent value="myPositions" className="flex w-full">
            {/* <DashboardLend /> */}
          </TabsContent>
        </Tabs>
        {expanded && (
          <div className="hidden md:flex w-[70%]">
            <TradingHistoryComponent onCollapse={handleCollapse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OtcTrading;
