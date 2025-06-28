"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import TokenCard from "../TokenCard";
import DashboardLineChart from "@/components/icons/DashboardLineChart";
import PortfolioSectionSkeleton from "./PortfolioSectionSkeleton";
import { cn } from "@/lib/utils";

// Mock API response
const mockPortfolioData = {
  totalValue: 15000.12,
  change: 294.9,
  tokens: [
    {
      name: "CheemseCoinn",
      value: "$175,000",
      change: "+25.3%",
      positive: true,
      avatar: "/images/coins/cheemscoin.png",
    },
    {
      name: "Kishu Inu",
      value: "$8,500",
      change: "-5.1%",
      positive: false,
      avatar: "/images/coins/kishu.png",
    },
    {
      name: "Ponke",
      value: "$3,200",
      change: "+12.4%",
      positive: true,
      avatar: "/images/coins/ponk.png",
    },
    {
      name: "Order of Champ",
      value: "$2,450",
      change: "+1.2%",
      positive: true,
      avatar: "/images/coins/mememaster.png",
    },
  ],
};


const mockLendPortfolioData = {
  totalValue: 20000.75,
  change: 150.5,
  tokens: [
    {
      name: "USDC",
      value: "$10,000",
      change: "+15.2%",
      positive: true,
      avatar: "/images/coins/USDC.svg",
    },
    {
      name: "USDT",
      value: "$5,500",
      change: "-3.8%",
      positive: false,
      avatar: "/images/coins/USDT.svg",
    },
    {
      name: "DAI",
      value: "$4,200",
      change: "+8.9%",
      positive: true,
      avatar: "/images/coins/DAI.svg",
    },
    {
      name: "PYUSD",
      value: "$5000",
      change: "+10.1%",
      positive: true,
      avatar: "/images/coins/PYUSD.svg",
    },
  ],
};

const mockBorrowPortfolioData = {
   totalValue: 15000.12,
  change: 294.9,
  tokens: [
    {
      name: "CheemseCoinn",
      value: "$175,000",
      change: "+25.3%",
      positive: true,
      avatar: "/images/coins/cheemscoin.png",
    },
    {
      name: "Kishu Inu",
      value: "$8,500",
      change: "-5.1%",
      positive: false,
      avatar: "/images/coins/kishu.png",
    },
    {
      name: "Ponke",
      value: "$3,200",
      change: "+12.4%",
      positive: true,
      avatar: "/images/coins/ponk.png",
    },
    {
      name: "Order of Champ",
      value: "$2,450",
      change: "+1.2%",
      positive: true,
      avatar: "/images/coins/mememaster.png",
    },
  ],
};

const PortfolioSection = (
  props: {
    isLendBorrowExpanded?: boolean;
  type: "LEND" | "BORROW";
  } = { isLendBorrowExpanded: false, type: "LEND" }
) => {
  const [portfolio, setPortfolio] = useState<typeof mockPortfolioData | null>(
    null
  );

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPortfolio(
        props.type === "LEND"
          ? mockLendPortfolioData
          : props.type === "BORROW"
          ? mockBorrowPortfolioData
          : mockPortfolioData
      );
    }, 300);
  }, []);

  if (!portfolio) return <PortfolioSectionSkeleton />;

  return (
    <div className="md:bg-card w-full flex flex-col md:p-4 gap-y-4 rounded-lg ">
      <hr className="flex md:hidden" />
      <div className="flex items-center space-x-4 ">
        <h1 className="text-[32px] font-bold">
          ${portfolio.totalValue.toLocaleString()}
        </h1>
        <Badge
          variant="secondary"
          className={`bg-transparent hover:bg-transparent px-2 py-1 text-sm border-none ${
            portfolio.change >= 0 ? "text-[#05EB05]" : "text-red-500"
          }`}
        >
          {/* <TrendingUp className="w-5 h-5 mr-2" /> */}
          {portfolio.change >= 0 ? "+" : ""}
          {portfolio.change}%
        </Badge>
        <DashboardLineChart />
      </div>
      <hr className="flex md:hidden" />
      <div className="h-[130px] md:hidden grid gap-2.5 grid-rows-[auto_auto] grid-flow-col w-[91vw] overflow-x-auto">
        {portfolio.tokens.map((token, idx) => (
          <TokenCard key={idx} {...token} />
        ))}
      </div>
      <div className={cn(
        "hidden flex-1 flex-wrap gap-2 md:grid grid-cols-2",
        props.isLendBorrowExpanded ? "md:grid-cols-2" : "md:grid-cols-4",
      )}>
        {portfolio.tokens.map((token, idx) => (
          <TokenCard key={idx} {...token} />
        ))}
      </div>

      <Button variant="default" className="w-full bg-card border">
        Portfolio Dashboard
      </Button>
    </div>
  );
};

export default PortfolioSection;
