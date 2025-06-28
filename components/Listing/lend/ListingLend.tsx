"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  PlusCircleIcon,
  XCircleIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { LendModal } from "@/components/Market/LendModal/LendModal";
import ListingLendTableSkeleton from "./ListingLendTableSkeleton";

type MarketItem = {
  name: string;
  symbol: string;
  activity: string;
  ask: string;
  offer: string;
  time: string;
  image?: string;
  askImage?: string;
};

const mockMarket: MarketItem[] = Array.from({ length: 20 }, () => ({
  name: "Ponke",
  symbol: "",
  activity: "Listed",
  ask: "134M",
  offer: "offer",
  time: "2min ago",
  image: "https://api.dicebear.com/7.x/identicon/svg?seed=ponke",
  askImage: "https://api.dicebear.com/7.x/identicon/svg?seed=usdc",
}));

interface ListingLendTableProps {
  selectedCoins: string[];
  searchQuery: string;
}

const ListingLendTable: React.FC<ListingLendTableProps> = ({
  selectedCoins,
  searchQuery,
}) => {
  const [marketData, setMarketData] = useState<MarketItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setMarketData(mockMarket);
      setIsLoading(false);
    }, 300);
  }, []);

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Accepted":
        return "text-[#059669]";
      case "Pending":
        return "text-[#CC5F62]";
      case "Listed":
        return "text-[#3B82F6]";
      default:
        return "";
    }
  };

  const getRowBg = (activity: string) => {
    switch (activity) {
      case "Accepted":
        return "bg-accent";
      case "Pending":
        return "bg-destructive";
      default:
        return "";
    }
  };

  const renderActionButton = (item: MarketItem) => {
    const buttonContent = (
      <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
        {item.activity === "Pending" ? <XCircleIcon /> : <PlusCircleIcon />}
        {item.offer}
      </Button>
    );

    return item.activity === "Listed" ? (
      <LendModal>{buttonContent}</LendModal>
    ) : (
      buttonContent
    );
  };

  const filteredData = marketData.filter((item) => {
    const nameMatches = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const coinSelected = selectedCoins.length === 0 || selectedCoins.includes(item.name);
    return nameMatches && coinSelected;
  });

  const handleClick = (index: number) => {
    router.push(`/profile/${index}`);
  };

  if (isLoading) return <ListingLendTableSkeleton />;

  return (
    <div className="flex flex-col gap-y-[10px] w-[86vw] md:w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {["COIN", "ACTIVITY", "ASK", "OFFER", "TIME"].map((header, i) => (
              <TableHead
                key={i}
                className={`font-normal text-[12px] text-muted-foreground ${
                  header === "COIN" ? "flex ml-8 items-center" : ""
                } ${header === "OFFER" ? "text-center" : ""} ${
                  header === "TIME" ? "text-right" : ""
                }`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((item, idx) => (
            <TableRow key={idx} className={`border-none h-[41px] ${getRowBg(item.activity)}`}>
              <TableCell onClick={() => handleClick(idx)} className="cursor-pointer">
                <div className="flex items-center space-x-2">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="mr-3 rounded-sm"
                    />
                  ) : (
                    <div className="w-8 h-8 border rounded-sm" />
                  )}
                  <span>{item.name}</span>
                </div>
              </TableCell>

              <TableCell className={getActivityColor(item.activity)}>
                {item.activity}
              </TableCell>

              <TableCell>
                <div className="flex gap-x-3 items-center">
                  {item.askImage ? (
                    <Image
                      src={item.askImage}
                      alt="ask-icon"
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-4 h-4">
                      <UsdcIcon />
                    </div>
                  )}
                  {item.ask}
                </div>
              </TableCell>

              <TableCell>{renderActionButton(item)}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end">{item.time}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListingLendTable;
