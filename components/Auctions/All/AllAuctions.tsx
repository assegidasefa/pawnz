"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import LiveNowTable from "../LiveNowTable";
import AllAuctionsSkeleton from "./AllAuctionSkeleton";
import AuctionSection from "./AuctionSection";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";

export type AuctionItem = {
  name: string;
  avatar: string;
  collateral: string;
  collateralImage: string;
  latestBid: string;
  bidImage: string;
  timeLeft: string;
  winner?: string;
};

const AllAuctions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [auctions, setAuctions] = useState<AuctionItem[]>([]);
  const [fullscreenSection, setFullscreenSection] = useState<"latest" | "ended" | null>(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      // Simulated API call
      setTimeout(() => {
        setAuctions([
          {
            name: "Ponke",
            avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=ponke",
            collateral: "345M",
            collateralImage: "https://api.dicebear.com/7.x/identicon/svg?seed=usdc",
            latestBid: "12M",
            bidImage: "https://api.dicebear.com/7.x/identicon/svg?seed=usdc",
            timeLeft: "6hr 30min",
            winner: "mMEn6A",
          },
          // Add more items as needed
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchAuctions();
  }, []);

  const mockTokens = [
    {
      symbol: "SOL",
      color: "bg-yellow-500",
      collateral: "Solana Land #123",
      currentBid: "1,200",
      discount: "-5%",
      ltv: "60%",
      ltvRisk: "Moderate",
      ltvRiskColor: "border-yellow-500 text-yellow-500",
      timeLeft: "2h 15m",
      offer: "2,000",
    },
    {
      symbol: "ETH",
      color: "bg-red-500",
      collateral: "Ethereum Parcel",
      currentBid: "2,300",
      discount: "-10%",
      ltv: "85%",
      ltvRisk: "High",
      ltvRiskColor: "border-[#CC5F62] text-[#CC5F62]",
      timeLeft: "45m",
      offer: "2,800",
    },
    {
      symbol: "USDC",
      color: "bg-green-500",
      collateral: "Stablecoin Vault",
      currentBid: "800",
      discount: "-2%",
      ltv: "30%",
      ltvRisk: "Low",
      ltvRiskColor: "border-green-500 text-green-500",
      timeLeft: "5h 40m",
      offer: "1,000",
    },
  ];

  const stats = [
    { label: "Collateral", value: "$ 1.41M" },
    { label: "Liquidation", value: "$ 1.41M" },
    { label: "Auctions", value: "$ 1.41M" },
    { label: "Average LTV", value: "45% High Yield" },
  ];

  const handleFullscreenToggle = (section: "latest" | "ended") => {
    setFullscreenSection((prev) => (prev === section ? null : section));
  };

  const renderAuctionSection = (
    title: string,
    isEnded: boolean,
    sectionKey: "latest" | "ended"
  ) => {
    const isFullscreen = fullscreenSection === sectionKey;

    const sectionContent = (
      <AuctionSection
        title={title}
        auctions={auctions}
        isEnded={isEnded}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => handleFullscreenToggle(sectionKey)}
      />
    );

    return isFullscreen ? (
      <FullscreenWrapper
        open
        onOpenChange={() => handleFullscreenToggle(sectionKey)}
      >
        {sectionContent}
      </FullscreenWrapper>
    ) : (
      sectionContent
    );
  };

  if (isLoading) return <AllAuctionsSkeleton />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card
        style={{
          backgroundImage: `url('/auctionBg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-5 w-[90vw] md:w-full"
      >
        <CardContent className="text-white p-0 flex flex-col gap-y-6">
          <h2 className="text-2xl font-bold">Collateral Sales</h2>
          <div className="border w-full md:w-[450px] rounded-xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 2xl:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-sm opacity-80 mb-1">{stat.label}</p>
                  <p className="text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auction Sections */}
      {renderAuctionSection("Latest Auctions", false, "latest")}
      {renderAuctionSection("Ended Auction", true, "ended")}

      {/* Live Now Table */}
      <LiveNowTable
        headers={[
          "COLLATERAL",
          "CURRENT BID",
          "DISCOUNT",
          "LTV",
          "TIME LEFT",
          "OFFER",
        ]}
        tokens={mockTokens}
      />
    </div>
  );
};

export default AllAuctions;
