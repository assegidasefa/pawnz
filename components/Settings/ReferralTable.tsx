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
import ArrowRightTopIcon from "../icons/ArrowRightTopIcon";
// import { BorrowModal } from "./BorrowModal";

type MarketItem = {
  name: string;
  symbol: string;
  price: string;
  listings: string;
  usdcDemand: string;
  avgLtv: string;
  topOffer: string;
  offer: string;
};

const mockMarket: any[] = Array.from({ length: 5 }, () => ({
  value: "0.14",
  symbol: "",
  amount: "100M",
  timeStamp: "2025-06-02 13:02",
}));

const ReferralTable = () => {
  const [marketData, setMarketData] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMarketData(mockMarket);
    }, 300);
  }, []);

  return (
    <div className="flex flex-col gap-y-[10px]">
        <div>
            <h2 className="text-xl font-medium">Distribution Table</h2>
        </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-normal flex items-center text-left">
                VALUE
              </TableHead>
              <TableHead className="font-normal text-center">AMOUNT</TableHead>
              <TableHead className="font-normal flex flex-row justify-center items-center">TIMESTAMP</TableHead>
              <TableHead className="font-normal text-right">TRANSACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((item, idx) => (
              <TableRow key={idx} className="border-none h-[41px]">
                <TableCell className="text-center">
                  <div className="flex items-center space-x-2">
                    
                    <span>&#36; {item.value}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="rounded-md flex flex-row justify-center">
                    <div className="flex gap-x-3 items-center">
                    <div className="w-4 h-4 rounded-full border"></div>
                    <div className="">{item.amount}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" items-center flex flex-row justify-center">
                    <Card className="py-[3px] px-1  border-none shadow-none">
                      {item.timeStamp}
                    </Card>
                  </div>
                </TableCell>

                <TableCell className="text-right  flex flex-row justify-end">
                  <div className="border text-right w-6 h-6 flex items-center justify-center rounded-sm">
                    <ArrowRightTopIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReferralTable;
