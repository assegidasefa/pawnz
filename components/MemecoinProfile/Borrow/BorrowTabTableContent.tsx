"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

type LoanItem = {
  amount: string;
  askFor: string;
  ltv: string;
  duration: string;
  time: string;
  imgUrl: string;
};

type Props = {
  layout: "grid" | "list";
};

const MOCK_API_DELAY = 600; // ms

const BorrowTabTableContent: FC<Props> = ({ layout = "list" }) => {
  const [loanData, setLoanData] = useState<LoanItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchLoanData = async () => {
      // Replace this mock with real API fetch
      await new Promise((r) => setTimeout(r, MOCK_API_DELAY));

      setLoanData([
        {
          amount: "20M",
          askFor: "10M",
          ltv: "40%",
          duration: "3d",
          time: "1m ago",
          imgUrl: "/images/sample1.png",
        },
        {
          amount: "30M",
          askFor: "40M",
          ltv: "40%",
          duration: "12d",
          time: "1m ago",
          imgUrl: "/images/sample2.png",
        },
        {
          amount: "50M",
          askFor: "60M",
          ltv: "40%",
          duration: "5d",
          time: "1m ago",
          imgUrl: "/images/sample3.png",
        },
        {
          amount: "70M",
          askFor: "80M",
          ltv: "40%",
          duration: "30d",
          time: "1m ago",
          imgUrl: "/images/sample4.png",
        },
        {
          amount: "90M",
          askFor: "100M",
          ltv: "40%",
          duration: "6d",
          time: "1m ago",
          imgUrl: "/images/sample5.png",
        },
      ]);

      setLoading(false);
    };

    fetchLoanData();
  }, []);

  if (loading) {
    // Show skeleton UI while loading
    return layout === "list" ? (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>AMOUNT</TableHead>
            <TableHead>ASK FOR</TableHead>
            <TableHead>LTV</TableHead>
            <TableHead>DURATION</TableHead>
            <TableHead>TIME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, idx) => (
            <TableRow key={idx} className="border-none">
              <TableCell className="flex items-center gap-2">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-14 h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-14 h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-10 h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-8 h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-14 h-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-sm">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card
            key={idx}
            className="p-4 gap-y-1 space-y-3 rounded-lg border animate-pulse"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-16 h-6" />
            </div>
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-24 h-4" />
          </Card>
        ))}
      </div>
    );
  }

  // Render data normally
  return (
    <div>
      {layout === "list" ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>AMOUNT</TableHead>
              <TableHead>ASK FOR</TableHead>
              <TableHead>LTV</TableHead>
              <TableHead>DURATION</TableHead>
              <TableHead>TIME</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanData.map((item, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-muted cursor-pointer border-none"
              >
                <TableCell className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.imgUrl}
                      alt={`icon-${idx}`}
                      width={12}
                      height={12}
                      className="object-cover"
                    />
                  </div>
                  {item.amount}
                </TableCell>
                <TableCell>{item.askFor}</TableCell>
                <TableCell className="text-red-500">
                  {item.ltv} High
                </TableCell>
                <TableCell>{item.duration}</TableCell>
                <TableCell>{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-sm">
          {loanData.map((item, idx) => (
            <Card
              key={idx}
              className="p-4 gap-y-1 space-y-1 rounded-lg border hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.imgUrl}
                      alt={`icon-${idx}`}
                      width={16}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                  Amount
                </span>
                <span className="font-semibold">{item.amount}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Ask For</span>
                <span>{item.askFor}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">LTV</span>
                <span className="text-[#CC5F62] font-semibold">
                  {item.ltv} <span className="text-xs font-normal">High</span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Duration</span>
                <span>{item.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Time</span>
                <span>{item.time}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowTabTableContent;
