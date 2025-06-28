import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  layout: "grid" | "list";
};

type LendDataItem = {
  usdcNeeded: string;
  collateral: string;
  funded: string;
  ltv: string;
  timeLeft: string;
  imgUrl: string;
};

const lendData: LendDataItem[] = [
  {
    usdcNeeded: "100M",
    collateral: "100M",
    funded: "9M/99M",
    ltv: "45% High",
    timeLeft: "1m ago",
    imgUrl: "/images/sample1.png",
  },
  {
    usdcNeeded: "30M",
    collateral: "40M",
    funded: "40%",
    ltv: "12d",
    timeLeft: "1m ago",
    imgUrl: "/images/sample2.png",
  },
  {
    usdcNeeded: "50M",
    collateral: "60M",
    funded: "40%",
    ltv: "5d",
    timeLeft: "1m ago",
    imgUrl: "/images/sample3.png",
  },
  {
    usdcNeeded: "70M",
    collateral: "80M",
    funded: "40%",
    ltv: "30d",
    timeLeft: "1m ago",
    imgUrl: "/images/sample4.png",
  },
  {
    usdcNeeded: "90M",
    collateral: "100M",
    funded: "40%",
    ltv: "6d",
    timeLeft: "1m ago",
    imgUrl: "/images/sample5.png",
  },
  {
    usdcNeeded: "10M",
    collateral: "20M",
    funded: "40%",
    ltv: "15d",
    timeLeft: "1m ago",
    imgUrl: "/images/sample6.png",
  },
];

const LendTabTableContent: FC<Props> = ({ layout = "list" }) => {
  return (
    <div>
      {layout === "list" ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>USDC NEEDED</TableHead>
              <TableHead>COLLATERAL</TableHead>
              <TableHead>FUNDED</TableHead>
              <TableHead>LTV</TableHead>
              <TableHead>TIME LEFT</TableHead>
              <TableHead>OFFER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lendData.map((item, idx) => (
              <TableRow key={idx} className="hover:bg-muted cursor-pointer">
                <TableCell className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.imgUrl}
                      alt={`icon-${idx}`}
                      width={14}
                      height={14}
                      className="object-cover"
                    />
                  </div>
                  {item.usdcNeeded}
                </TableCell>
                <TableCell>{item.collateral}</TableCell>
                <TableCell className="text-red-500">
                  {item.funded} High
                </TableCell>
                <TableCell>{item.ltv}</TableCell>
                <TableCell>{item.timeLeft}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="border bg-transparent hover:bg-muted/50 text-sm"
                  >
                    Fund
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-sm">
          {lendData.map((item, idx) => (
            <Card
              key={idx}
              className="p-4 gap-y-1 rounded-lg border hover:shadow-sm transition-shadow space-y-1"
            >
              {/* USDC Needed with image */}
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.imgUrl}
                      alt={`icon-${idx}`}
                      width={18}
                      height={18}
                      className="object-cover"
                    />
                  </div>
                  USDC Needed
                </span>
                <span className="font-semibold">{item.usdcNeeded}</span>
              </div>

              {/* Collateral */}
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">Collateral</span>
                <span>{item.collateral}</span>
              </div>

              {/* Funded */}
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">Funded</span>
                <span className="text-[#CC5F62] font-medium">
                  {item.funded} <span className="text-xs font-normal">High</span>
                </span>
              </div>

              {/* LTV */}
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">LTV</span>
                <span>{item.ltv}</span>
              </div>

              {/* Time Left */}
              <div className="flex justify-between">
                <span className="text-muted-foreground font-medium">Time Left</span>
                <span>{item.timeLeft}</span>
              </div>

              {/* Action Button */}
              <Button
                size="sm"
                className="w-full border bg-transparent text-sm hover:bg-muted/50"
              >
                Fund
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LendTabTableContent;
