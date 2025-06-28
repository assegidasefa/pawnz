"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings, List, Grid, CopyIcon, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BorrowTabTableContent from "./Borrow/BorrowTabTableContent";
import LiveTabContent from "./Auction/LiveAuctionTabContent";
import LendTabTableContent from "./Lend/LendTabContent";
import { LendModal } from "../Market/LendModal/LendModal";
import EndedAuctionTabContent from "./Auction/EndedAuctionTabContent";
import { Card } from "../ui/card";
import TelegramIcon from "../icons/TelegramIcon";
import XIcon from "../icons/XIcon";
import NewtabIcon from "../icons/NewtabIcon";
import TableToolbar from "../Shared/TableToolbar";
import { useRouter } from "next/navigation";

export default function MemeCoinProfile() {
  // const [activeTab, setActiveTab] = useState("Borrow")
  const [activeTab, setActiveTab] = useState("Borrow");
const [auctionTab, setAuctionTab] = useState("Live");
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [rightSideLayout ,setRightSideLayout] = useState<"grid" | "list">("list")
    const router = useRouter();
  
  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };
  const handleRightSideLayoutChange = (newLayout: "grid" | "list") => {
    setRightSideLayout(newLayout);
  };
  return (
    <div className="py-4 px-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b ">
        <h1 className="text-lg font-medium">Memecoin Profile</h1>
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Token Info Section */}
      <div className="flex justify-between border-b mb-3">
        <div className="flex p-4 gap-x-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
              P
            </div>
            <div className="flex gap-x-4">
              <div className="flex flex-col items-center ">
                <span className="font-medium">Porke</span>
                <span className="text-sm">PORKE</span>
              </div>
              <div className="flex flex-col items-center ">
                <span>$0.14</span>
                <span className="text-green-400 text-sm">+7.31%</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-4 text-sm">
            <div>
              <div className="mb-1">Total Loans</div>
              <div>$ 1.4458</div>
            </div>
            <div>
              <div className="mb-1">Total Lend</div>
              <div>$ 1.4458</div>
            </div>
            <div>
              <div className="mb-1">Total Auctions</div>
              <div>$ 1.4458</div>
            </div>
            <div>
              <div className="mb-1">Average LTV</div>
              <div className="text-red-400">40% High Yield</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Card className="px-4 py-3">Borrow</Card>
          <Card className="px-4 py-3">Lend</Card>
          <Card className="flex flex-row items-center gap-x-2 px-4 py-3">
            5z3EqY...SWmrRC
            <CopyIcon height={16} width={16} />
          </Card>
          <Card className="px-4 py-3 ">
            <TelegramIcon />
          </Card>
          <Card className="px-4 py-3 ">
            <XIcon />
          </Card>
          <Card className="px-4 py-3 ">
            <Globe />
          </Card>
          <Card className="px-4 py-3 ">
            <NewtabIcon />
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* LEFT SIDE - Borrow/Lend/OTC */}
        <div className="w-full lg:w-1/2  rounded-md">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <TabsList className="flex gap-x-2">
                  <TabsTrigger value="Borrow">Borrow</TabsTrigger>
                  <TabsTrigger value="Lend">Lend</TabsTrigger>
                  <TabsTrigger disabled value="OTC">
                    OTC
                  </TabsTrigger>
                </TabsList>
                <LendModal
                  children={
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent"
                    >
                      Create Listing
                    </Button>
                  }
                />
              </div>
              <TableToolbar
                showLayoutIcons
                showSearch={false}
                showMaximize={false}
                showClose={false}
                layout={layout}
                onLayoutChange={handleLayoutChange}
                onCloseClick={() => {}}
              />
            </div>

            <TabsContent value="Borrow">
              <BorrowTabTableContent layout={layout} />
            </TabsContent>
            <TabsContent value="Lend">
              <LendTabTableContent layout={layout} />
            </TabsContent>

            {/* You can add more TabsContent for Lend / OTC here if needed */}
          </Tabs>
        </div>

        {/* RIGHT SIDE - Live / Ended Auctions */}
        <div className="w-full lg:w-1/2 border-l-[1px]">
          <Tabs defaultValue={"live"}>
            <div className="flex items-center p-4 border-b">
              <div className="flex items-center  text-sm w-full">
                <TabsList className="w-full flex justify-between">
                  <div className="flex gap-x-2">
                    <TabsTrigger value="live">Live Auctions</TabsTrigger>
                    <TabsTrigger value="ended">Ended Auctions</TabsTrigger>
                  </div>
                  <TableToolbar
                    showLayoutIcons
                    showSearch={false}
                    showMaximize={false}
                    showClose={false}
                    layout={rightSideLayout}
                    onLayoutChange={handleRightSideLayoutChange}
                    onCloseClick={() => {}}
                  />
                </TabsList>
              </div>
            </div>

            {/* Table Content */}
            <TabsContent value="live">
              <LiveTabContent layout={rightSideLayout}/>
            </TabsContent>
            <TabsContent value="ended">
              <EndedAuctionTabContent layout={rightSideLayout}/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
