"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import debounce from "lodash.debounce";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

import TableToolbar from "../Shared/TableToolbar";
import FullscreenWrapper from "../Shared/FullscreenWrapper";
import ArrowRightTopIcon from "../icons/ArrowRightTopIcon";

export interface MarketItem {
  id?: string;
  name: string;
  symbol: string;
  activity: string;
  ask: string;
  image: string;
  askImage?: string;
  offer: string;
  time: string;
}

const mockMarket: MarketItem[] = [
  {
    name: "Ponke",
    symbol: "PONKE",
    activity: "Accepted",
    ask: "9.09M",
    askImage: "/images/coins/USDC.svg",
    offer: "123M",
    time: "1d ago",
    image: "/images/coins/ponk.png",
  },
  {
    name: "ShibaToken",
    symbol: "SHIB",
    activity: "Accepted",
    ask: "9.09M",
    askImage: "/images/coins/USDC.svg",
    offer: "912M",
    time: "2h ago",
    image: "/images/coins/shiba.png",
  },
  {
    name: "MemeMaster",
    symbol: "MM",
    activity: "Listed",
    ask: "8M",
    askImage: "/images/coins/DAI.svg",
    offer: "245M",
    time: "5m ago",
    image: "/images/coins/mememaster.png",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    activity: "Auction",
    ask: "-",
    askImage: "",
    offer: "456M",
    time: "3m ago",
    image: "/images/coins/doge.png",
  },
  {
    name: "ShibaToken",
    symbol: "SHIB",
    activity: "Won",
    ask: "9.99M",
    askImage: "/images/coins/USDC.svg",
    offer: "789M",
    time: "1h ago",
    image: "/images/coins/shiba.png",
  },
  {
    name: "Floki Inu",
    symbol: "FLOKI",
    activity: "Listed",
    ask: "5.5M",
    askImage: "/images/coins/USDC.svg",
    offer: "3.8M",
    time: "2d ago",
    image: "/images/coins/floki.png",
  },
  {
    name: "PuppyPunk",
    symbol: "PPUNK",
    activity: "Accepted",
    ask: "3.2M",
    askImage: "/images/coins/USDC.svg",
    offer: "2.5M",
    time: "4h ago",
    image: "/images/coins/puppypunk.png",
  },
  {
    name: "CheemsCoin",
    symbol: "CHEEMS",
    activity: "Auction",
    ask: "-",
    askImage: "",
    offer: "1.2M",
    time: "30m ago",
    image: "/images/coins/cheemscoin.png",
  },
];

const headers = ["COIN", "ACTIVITY", "ASK", "OFFER", "TIME", "TRANSACTION"];

const getActivityColor = (activity: string) => {
  const colors: Record<string, string> = {
    Accepted: "text-[#059669]",
    Pending: "text-[#CC5F62]",
    Offer: "text-red-600",
    Listed: "text-blue-500",
    Won: "text-red-500",
    Auction: "text-red-800",
    Filled: "text-green",
  };
  return colors[activity] || "";
};

const RecentActivityTable: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketItem[]>(mockMarket);
  const [marketLoading, setMarketLoading] = useState(false);
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };

  const debouncedSearch = debounce((value: string) => {
    setMarketLoading(true);
    setTimeout(() => {
      const filtered = value.trim()
        ? mockMarket.filter((m) => m.name.toLowerCase().includes(value.toLowerCase()))
        : mockMarket;
      setMarketData(filtered);
      setMarketLoading(false);
    }, 300);
  }, 300);

  const renderTableRows = (data: MarketItem[]) => (
    data.map((token, idx) => (
      <TableRow key={idx} className="w-full rounded-lg overflow-hidden">
        <TableCell>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 rounded-sm overflow-hidden">
              <Image src={token.image} alt={token.name} width={32} height={32} className="object-cover" />
            </div>
            <span className="font-medium">{token.name}</span>
          </div>
        </TableCell>
        <TableCell>
          <div className={cn("px-0.5 py-1 text-center", getActivityColor(token.activity))}>{token.activity}</div>
        </TableCell>
        <TableCell>
          <div className="px-0.5 py-1 text-center">
            <div className="flex items-center justify-center gap-x-2">
              {token.askImage && (
                <div className="w-4 h-4 rounded-full overflow-hidden">
                  <Image src={token.askImage} alt="ask" width={16} height={16} className="object-cover" />
                </div>
              )}
              <span>{token.ask}</span>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="px-0.5 py-1 text-center">{token.offer}</div>
        </TableCell>
        <TableCell>
          <div className="px-0.5 py-1 text-gray-500 text-center">{token.time}</div>
        </TableCell>
        <TableCell>
          <div className="flex justify-end">
            <div className="border w-6 h-6 flex items-center justify-center rounded-sm">
              <ArrowRightTopIcon />
            </div>
          </div>
        </TableCell>
      </TableRow>
    ))
  );

  const renderGridCards = (data: MarketItem[]) => (
    data.map((token, idx) => (
      <Card key={idx} className="rounded-lg shadow p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="size-12 rounded-sm overflow-hidden">
            <Image src={token.image} alt={token.name} width={48} height={48} className="object-cover size-full" />
          </div>
          <span className="font-medium">{token.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className={cn("text-sm", getActivityColor(token.activity))}>{token.activity}</div>
          <div className="flex items-center gap-2">
            {token.askImage && (
              <div className="w-4 h-4 rounded-full overflow-hidden">
                <Image src={token.askImage} alt="ask" width={16} height={16} className="object-cover" />
              </div>
            )}
            <span>{token.ask}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>{token.offer}</div>
          <div className="text-xs text-gray-500">{token.time}</div>
        </div>
      </Card>
    ))
  );

  const renderContent = () => (
    layout === "list" ? (
      <Table className="border-separate border-spacing-y-2">
        <TableHeader>
          <TableRow>
            {headers.map((header, i) => (
              <TableHead
                key={i}
                className={cn(
                  "font-medium border-b text-muted-foreground text-[12px] py-3",
                  i === 0 ? "text-left" : i === headers.length - 1 ? "text-right" : "text-center"
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{renderTableRows(marketData)}</TableBody>
      </Table>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        {renderGridCards(marketData)}
      </div>
    )
  );

  const renderToolbar = () => (
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <TableToolbar
        showClose={false}
        showSearch
        showLayoutIcons
        onSearchChange={debouncedSearch}
        onLayoutChange={handleLayoutChange}
        layout={layout}
        onMaximizeClick={() => setIsFullscreen((prev) => !prev)}
        onCloseClick={() => {}}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-y-[10px]">
      {isFullscreen ? (
        <FullscreenWrapper open onOpenChange={() => setIsFullscreen((prev) => !prev)}>
          {renderToolbar()}
          <div className="w-full overflow-auto">{renderContent()}</div>
        </FullscreenWrapper>
      ) : (
        <>
          {renderToolbar()}
          <div className="w-full overflow-auto">{renderContent()}</div>
        </>
      )}
    </div>
  );
};

export default RecentActivityTable;