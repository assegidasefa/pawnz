import React, { useState } from "react";
import ListingTable from "@/components/Listing/ListingTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart3, Grid3X3, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import MarketRightSideTable from "./MarketRightSideTable";
import ExpandIcon from "@/components/icons/ExpandIcon";
import CollapseIcon from "@/components/icons/CollapseIcon";
import FireIcon from "@/components/icons/FireIcon";
import AuctionIcon from "@/components/icons/AuctionIcon";
import ActivityIcon from "@/components/icons/ActivityIcon";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MarketAcitivityTable from "./MarketActivityTable";
import MarketListingTable from "./MarketListingTable";
import MarketAuctionTable from "./MarketAuctionTable";
import GridIcon from "@/components/icons/GridIcon";
import Grid2Icon from "@/components/icons/Grid2Icon";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";
import MaximizeIcon from "@/components/icons/MaximizeIcon";
interface LendCollapsibleContentProps {
  onCollapse?: () => void;
}

const LendCollapsibleContent = ({
  onCollapse,
}: LendCollapsibleContentProps) => {
  const [layout, setLayout] = React.useState<"grid" | "list">("list");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <div className="flex justify-between w-full py-4">
      {isFullscreen ? (
        <>
          <FullscreenWrapper
            open={isFullscreen}
            onOpenChange={() => setIsFullscreen((prev) => !prev)}
          >
            <div className="w-full">
              <div className="flex space-x-4 mb-4 w-full">
                <Tabs defaultValue="activity" className="w-full ">
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
                    <div className="flex gap-x-1 items-center">
                      <ToggleGroup
                        type="single"
                        defaultValue={layout}
                        value={layout}
                        onValueChange={(value: string) => {
                          setLayout(value as "grid" | "list");
                        }}
                        className="flex items-center gap-1"
                      >
                        <ToggleGroupItem
                          value="grid"
                          aria-label="Grid view"
                          onClick={() => setLayout("grid")}
                        >
                          <GridIcon className="size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="list"
                          aria-label="List view"
                          onClick={() => setLayout("list")}
                        >
                          <Grid2Icon className="size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="fullscreen"
                          aria-label="List view"
                          onClick={() => setIsFullscreen((prev) => !prev)}
                        >
                          <MaximizeIcon />
                        </ToggleGroupItem>
                      </ToggleGroup>

                      {onCollapse && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2 p-1"
                          onClick={onCollapse}
                        >
                          <CollapseIcon />
                        </Button>
                      )}
                    </div>
                  </TabsList>
                  <TabsContent value="activity">
                    <MarketAcitivityTable layout={layout} />
                  </TabsContent>
                  <TabsContent value="listing">
                    <MarketListingTable layout={layout} />
                  </TabsContent>
                  <TabsContent value="auction">
                    <MarketAuctionTable layout={layout} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </FullscreenWrapper>
        </>
      ) : (
        <>
          <div className="w-full">
            <div className="flex space-x-4 mb-4 w-full">
              <Tabs defaultValue="activity" className="w-full ">
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
                  <div className="flex gap-x-1 items-center">
                    <ToggleGroup
                      type="single"
                      defaultValue={layout}
                      value={layout}
                      onValueChange={(value: string) => {
                        setLayout(value as "grid" | "list");
                      }}
                      className="flex items-center gap-1"
                    >
                      <ToggleGroupItem
                        value="grid"
                        aria-label="Grid view"
                        onClick={() => setLayout("grid")}
                      >
                        <GridIcon className="size-5" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="list"
                        aria-label="List view"
                        onClick={() => setLayout("list")}
                      >
                        <Grid2Icon className="size-5" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="list"
                        aria-label="List view"
                        onClick={() => setIsFullscreen((prev) => !prev)}
                      >
                        <MaximizeIcon className="size-6" />
                      </ToggleGroupItem>
                    </ToggleGroup>

                    {onCollapse && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-2 p-1"
                        onClick={onCollapse}
                      >
                        <CollapseIcon />
                      </Button>
                    )}
                  </div>
                </TabsList>
                <TabsContent value="activity">
                  <MarketAcitivityTable layout={layout} />
                </TabsContent>
                <TabsContent value="listing">
                  <MarketListingTable layout={layout} />
                </TabsContent>
                <TabsContent value="auction">
                  <MarketAuctionTable layout={layout} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LendCollapsibleContent;
