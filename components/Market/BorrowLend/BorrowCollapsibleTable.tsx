"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Grid3X3, List, Plus, Search, PlusCircleIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { BorrowModal } from "@/components/CreateOffer/borrow/Modal/BorrowModal";
import { useRouter } from "next/navigation";

type MarketItem = {
  name: string;
  symbol: string;
  activity: string;
  ask: string;
  offer: string;
  time: string;
};

const mockMarket: MarketItem[] = Array.from({ length: 20 }, () => ({
  name: "Ponke",
  symbol: "",
  activity: "Listed",
  ask: "134M ",
  offer: "offer",
  time: "2min ago",
}));

const BorrowCollapsibleTable = () => {
  const [marketData, setMarketData] = useState<MarketItem[]>([]);
  const router = useRouter();
  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setMarketData(mockMarket);
    }, 300);
  }, []);
  const handleClick = (index: any) => {
    router.push(`/profile/${index}`);
  };
  return (
    <div className="flex flex-col gap-y-[10px]">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-normal flex ml-8 items-center">
                COIN
              </TableHead>
              <TableHead className="font-normal">ACTIVITY</TableHead>
              <TableHead className="font-normal">ASK</TableHead>
              <TableHead className="font-normal text-center">OFFER</TableHead>
              <TableHead className="font-normal text-right">TIME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((item, idx) => (
              <TableRow key={idx} className="border-none h-[41px]">
                <TableCell
                  onClick={() => handleClick(idx)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    {/* <Avatar className="w-6 h-6">
                                        <AvatarFallback className="bg-transparent text-lg border">
                                        </AvatarFallback>
                                      </Avatar> */}
                    {item.symbol !== "" ? (
                      <Image
                        src={item.symbol}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="border mr-3 rounded-sm"
                      />
                    ) : (
                      <div className="w-8 h-8 border rounded-sm"></div>
                    )}
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="">{item.activity}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {/* <Card className="p-1 rounded-lg">{item.ask}</Card> */}
                    <div className="flex gap-x-3 items-center">
                      <div className="w-4 h-4">
                        <UsdcIcon />
                      </div>
                      {item.ask}
                    </div>
                    <Avatar
                      className="w-4 h-4"
                      // style={{ backgroundColor: item.color }}
                    >
                      <AvatarFallback className="w-4 h-4"></AvatarFallback>
                    </Avatar>
                  </div>
                </TableCell>
                {/* <TableCell>
                  <div className="flex gap-x-3 items-center">
                    <div>
                      <UsdcIcon />
                    </div>
                    {item.offer}
                  </div>
                </TableCell> */}
                <TableCell className="">
                  {/* <Button className="flex gap-x-2 w-full bg-transparent hover:bg-transparent border-none shadow-none">
                    <PlusCircleIcon />
                    {item.offer}
                  </Button> */}
                  <BorrowModal
                    children={
                      <Button className="flex cursor-pointer gap-x-2  w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                        <PlusCircleIcon />
                        {item.offer}
                      </Button>
                    }
                  />
                  {/* <BorrowModal title={item.offer} /> */}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex text-right justify-end">{item.time}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowCollapsibleTable;
