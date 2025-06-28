import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CollapseIcon from "@/components/icons/CollapseIcon";
import AuctionRightSideTable from "./AuctionRightSideTable";
import TableToolbar from "../Shared/TableToolbar";

const AuctionCollapsibleContent = ({
  onCollapse,
  onToggleFullscreen,
}: {
  onCollapse: () => void;
  onToggleFullscreen: () => void;
}) => {
  const [layout, setLayout] = useState<"grid" | "list">("list");

  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };

  const tokens = Array.from({ length: 5 }, () => ({
    name: "PONKE",
    collateral: "100M",
    avatar: "/images/ponk.png",
    symbol: "PONKE",
    currentBid: "134M",
    discount: "-17%",
    timeLeft: "6hr 30m",
    offer: "Bid",
  }));

  const headers = [
    "COLLATERAL",
    "CURRENT BID",
    "DISCOUNT",
    "TIME LEFT",
    "OFFER",
  ];

  return (
    <div className="flex justify-between w-full py-4">
      <div className="w-full">
        <div className="flex space-x-4 mb-4 w-full">
          <Tabs defaultValue="auction" className="w-full">
            <TabsList className="flex justify-between w-full">
              <div>
                <TabsTrigger disabled value="activity">
                  Activity
                </TabsTrigger>
                <TabsTrigger disabled value="listing">
                  Listing
                </TabsTrigger>
                <TabsTrigger value="auction">Auction</TabsTrigger>
              </div>
              <div className="flex gap-x-2 items-center">
                <TableToolbar
                  showLayoutIcons
                  showSearch={false}
                  showMaximize={true}
                  showClose={false}
                  onLayoutChange={handleLayoutChange}
                  layout={layout}
                  onMaximizeClick={onToggleFullscreen}
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 p-1"
                  onClick={onCollapse}
                >
                  <CollapseIcon />
                </Button>
              </div>
            </TabsList>
            <TabsContent value="auction">
              <AuctionRightSideTable
                headers={headers}
                tokens={tokens}
                layout={layout}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuctionCollapsibleContent;
