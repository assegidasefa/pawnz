"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, CopyIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import MoneyIcon from "@/components/icons/MoneyIcon";
import ProgressBar from "@/components/Shared/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton"; // <-- Import Skeleton from shadcn UI
import AuctionModalSkeleton from "./AuctionModalSkeleton";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { AmountInput } from "@/components/CreateOffer/borrow/Modal/AmountInput";

type AuctionData = {
  avatarUrl?: string;
  name: string;
  totalAmount: string;
  collateralAmount: string;
  collateralIconUrl?: string;
  priceUsd: string;
  priceChangePercent: string;
  priceChangePositive: boolean;
  contractAddress: string;
  timeLeft: string;
  currentBid: number;
  currentBidToken: string;
  currentBidIconUrl?: string;
  minBidStart: string;
  minBidToken: string;
};

export default function AuctionModalContent() {
  const [auctionData, setAuctionData] = useState<AuctionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMockData = () => {
      return new Promise<AuctionData>((resolve) => {
        setTimeout(() => {
          resolve({
            avatarUrl: "/images/avatar.png",
            name: "Ponke",
            totalAmount: "2.3333B",
            collateralAmount: "1.996B",
            collateralIconUrl: "/images/ponk.png",
            priceUsd: "0.14 USD",
            priceChangePercent: "+7.31%",
            priceChangePositive: true,
            contractAddress: "5z3EqY...SWmrRC",
            timeLeft: "6hr 30min",
            currentBid: 2000,
            currentBidToken: "USDC",
            currentBidIconUrl: "/images/ponk.png",
            minBidStart: "999M",
            minBidToken: "USDC",
          });
        }, 800);
      });
    };

    fetchMockData().then((data) => {
      setAuctionData(data);
      setLoading(false);
    });
  }, []);

  if (loading || !auctionData) {
    return <AuctionModalSkeleton />;
  }

  // destructuring auctionData here for rendering...
  const {
    avatarUrl,
    name,
    totalAmount,
    collateralAmount,
    collateralIconUrl,
    priceUsd,
    priceChangePercent,
    priceChangePositive,
    contractAddress,
    timeLeft,
    currentBid,
    currentBidToken,
    currentBidIconUrl,
    minBidStart,
    minBidToken,
  } = auctionData;

  return (
    <div className="m-0 shadow-none w-full">
      <div className="space-y-4">
        <div className="transition-colors overflow-y-auto">
          <div className="p-4 flex flex-col space-y-2">
            {/* Header with Avatar and Name + Total Amount */}
            <div className="flex items-center space-y-1 gap-x-2">
              <div className="h-[48px] w-[48px] flex items-center">
                <Avatar className="w-12 h-12">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={`${name}-avatar`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-transparent text-lg border" />
                  )}
                </Avatar>
              </div>
              <div className="w-full">
                <div className="space-y-1 w-full">
                  <div className="flex justify-between">
                    <div className="font-medium">{name}</div>
                    <div className="flex items-center gap-x-2 border px-1 rounded-sm">
                      <div className="font-medium flex items-center">
                        {totalAmount}
                      </div>
                      <div className="w-4 h-4">
                        <MoneyIcon />
                      </div>
                    </div>
                  </div>

                  {/* Collateral */}
                  <div className="flex justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-transparent hover:bg-transparent text-[#666] text-xs px-0"
                    >
                      Collateral
                    </Badge>
                    <div className="flex gap-x-2 border px-1 rounded-sm items-center">
                      <div className="text-sm">{collateralAmount}</div>
                      {collateralIconUrl ? (
                        <Image
                          src={collateralIconUrl}
                          alt="collateral-icon"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full border" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Price and Contract */}
            <div className="flex gap-y-3 md:gap-y-0 flex-col md:flex-row items-start md:items-center justify-between w-full text-xs text-[#666]">
              <div className="flex justify-between md:justify-start gap-x-3 items-center w-full md:w-auto">
                <div>Price</div>
                <div
                  className={`p-1 border rounded-md flex gap-x-2 ${
                    priceChangePositive ? "bg-[#4ADE80]/8" : "bg-[#F87171]/10"
                  }`}
                >
                  <div>{priceUsd}</div>
                  <div
                    className={`${
                      priceChangePositive ? "text-[#00B700]" : "text-[#B00020]"
                    }`}
                  >
                    {priceChangePercent}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex justify-between md:justify-start gap-x-3 items-center w-full md:w-auto">
                  <div>Contract</div>
                  <div className="w-35 p-1 border rounded-md flex gap-x-2">
                    <div>{contractAddress}</div>
                    <CopyIcon width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Time Left */}
            <div>
              <div className="flex items-center justify-between text-xs text-[#666] w-full">
                <span>Time Left</span>
                <div className="flex items-center gap-x-2 border rounded-md">
                  <span className="ml-auto">{timeLeft}</span>
                  <Clock className="w-3 h-3" />
                </div>
              </div>
            </div>

            <hr />

            {/* Bid Section */}

            <AmountInput
              label="BId"
              value={Number(currentBid)}
              coin={currentBidToken}
              onChange={(delta) => {
                setAuctionData((prev) => {
                  if (!prev) return prev;
                  const prevBid = Number(prev.currentBid) || 0;
                  const newBid = Math.max(prevBid + delta, 0);
                  return {
                    ...prev,
                    currentBid: newBid,
                  };
                });
              }}
              isAuction={true}
            />
            <hr />

            {/* Minimum bid */}
            <div className="text-muted-foreground font-normal text-sm">
              minimum bid starts at
              <span className="font-semibold"> {minBidStart} </span>
              <span>{minBidToken} ...</span>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#BBEE4D] hover:bg-[#BBEE4D]/70 text-black font-semibold py-3 rounded-lg"
              onClick={() => alert("Bid Now clicked!")}
            >
              Bid Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
