"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
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
import UsdcIcon from "@/components/icons/UsdcIcon";
import { BorrowModal } from "./Modal/BorrowModal";
import MarketTableSkeleton from "./MarketTableSkeleton";

export type MarketItem = {
  name: string;
  symbol: string; // URL of icon
  price: string;
  change: string;
  listings: string;
  usdcDemand: string;
  avgLtv: string;
  isHighYield: boolean;
  topOffer: string;
  offer: string;
};

interface MarketTableProps {
  marketData: MarketItem[];
  layout: "list" | "grid";
  isLoading: boolean;
}

const CoinAvatar: React.FC<{ symbol: string; name: string }> = ({
  symbol,
  name,
}) => (
  <Image
    src={symbol}
    alt={name}
    width={32}
    height={32}
    className="border mr-3 rounded-sm object-contain"
  />
);

const PriceChange: React.FC<{ price: string; change: string }> = ({
  price,
  change,
}) => {
  const isNegative = change.startsWith("-");
  return (
    <div className="w-35 p-1 border rounded-md flex gap-x-2 bg-green-400/10">
      <span>{price}</span>
      <span className={isNegative ? "text-red-500" : "text-green-600"}>
        {!isNegative && "+"}
        {change}
      </span>
    </div>
  );
};

const HighYieldBadge: React.FC = () => (
  <Card className="text-[#CC5F62] py-0 px-1 shadow-none rounded-sm text-xs">
    High Yield
  </Card>
);

const OfferButton: React.FC<{ offerText: string }> = ({ offerText }) => (
  <BorrowModal>
    <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
      <PlusCircleIcon />
      {/* {offerText} */}
      {capitalizeFirst(offerText)}
    </Button>
  </BorrowModal>
);

const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const MarketTable: React.FC<MarketTableProps> = ({
  marketData,
  layout,
  isLoading,
}) => {
  if (!marketData) return <div className="text-red-500">No data available</div>;

  return (
    <div className="flex flex-col gap-y-2 w-[90vw] md:w-full">
      {layout === "list" ? (
        <Table>
          <TableHeader>
            <TableRow className="text-[12px]">
              <TableHead className="font-normal text-muted-foreground ml-8">
                COIN
              </TableHead>
              <TableHead className="font-normal text-muted-foreground">
                PRICE
              </TableHead>
              <TableHead className="font-normal text-muted-foreground">
                LISTING
              </TableHead>
              <TableHead className="font-normal text-muted-foreground">
                USDC DEMAND
              </TableHead>
              <TableHead className="font-normal text-muted-foreground">
                AVG LTV
              </TableHead>
              <TableHead className="font-normal text-muted-foreground">
                TOP OFFER
              </TableHead>
              <TableHead className="font-normal text-muted-foreground text-left pl-4">
                OFFER
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <MarketTableSkeleton />
            ) : (
              marketData.map((item, idx) => (
                <TableRow key={idx} className="border-none">
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CoinAvatar symbol={item.symbol} name={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <PriceChange price={item.price} change={item.change} />
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Card className="py-[3px] px-1 rounded-sm">
                        {item.listings}
                      </Card>
                      <Avatar className="w-4 h-4">
                        <AvatarFallback className="w-4 h-4" />
                      </Avatar>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-x-3 items-center">
                      <div className="h-4 w-4">
                        <UsdcIcon />
                      </div>
                      {item.usdcDemand}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-x-3 items-center">
                      <span className="text-[#CC5F62]">{item.avgLtv}</span>
                      {item.isHighYield && <HighYieldBadge />}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-x-3 items-center">
                      <div className="w-4 h-4">
                        <UsdcIcon />
                      </div>
                      {item.topOffer}
                    </div>
                  </TableCell>

                  <TableCell>
                    <OfferButton offerText={item.offer} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {marketData.map((item, idx) => (
            <Card
              key={idx}
              className="rounded-lg shadow p-4 flex flex-col gap-1"
            >
              {/* Coin */}
              <div className="flex items-center gap-3">
                <div className="size-12 min-w-12 rounded-sm overflow-hidden border bg-white">
                  <Image
                    src={item.symbol}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover size-full"
                  />
                </div>
                <span className="font-medium text-sm">{item.name}</span>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Price</span>
                <div className="px-2 py-0.5 rounded-md border bg-green-400/20 flex items-center gap-x-2">
                  <span>{item.price}</span>
                  <span
                    className={`text-sm font-medium ${
                      item.change.startsWith("-")
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {!item.change.startsWith("-") && "+"}
                    {item.change}
                  </span>
                </div>
              </div>

              {/* Listings */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Listings</span>
                <div className="flex items-center gap-x-2">
                  <span>{item.listings}</span>
                  <Avatar className="w-4 h-4">
                    <AvatarFallback className="w-4 h-4 text-[10px] bg-muted" />
                  </Avatar>
                </div>
              </div>

              {/* USDC Demand */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">USDC Demand</span>
                <div className="flex items-center gap-x-2">
                  <div className="w-4 h-4">
                    <UsdcIcon />
                  </div>
                  <span>{item.usdcDemand}</span>
                </div>
              </div>

              {/* Avg LTV */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Avg LTV</span>
                <div className="flex items-center gap-x-2">
                  <span className="text-[#CC5F62] font-medium">
                    {item.avgLtv}
                  </span>
                  {item.isHighYield && (
                    <div className="px-1 py-0.5 rounded-sm border text-xs text-[#CC5F62]">
                      High Yield
                    </div>
                  )}
                </div>
              </div>

              {/* Top Offer */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Top Offer</span>
                <div className="flex items-center gap-x-2">
                  <div className="w-4 h-4">
                    <UsdcIcon />
                  </div>
                  <span>{item.topOffer}</span>
                </div>
              </div>

              {/* Offer Button */}
              <BorrowModal>
                <Button className="w-full text-sm mt-1 gap-x-2 ">
                  <PlusCircleIcon className="w-4 h-4" />

                  {capitalizeFirst(item.offer)}
                </Button>
              </BorrowModal>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketTable;
