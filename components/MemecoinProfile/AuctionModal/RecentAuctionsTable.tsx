import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { AuctionModal } from "../AuctionModal/AuctionModal";

const RecentAuctionsTable = () => {
  const auctionData = Array(20).fill({
    address: "100M",
    latestBid: "130M",
    time: "5h 30m ago",
  });

  return (
    <div className="max-h-64 overflow-y-auto rounded-md">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="px-3 font-normal text-[12px] text-muted-foreground flex md:ml-8 items-center">
              ADDRESS
            </TableHead>
            <TableHead className="px-3 font-normal text-[12px] text-muted-foreground">
              LATEST BID
            </TableHead>
            <TableHead className="px-3 font-normal text-[12px] text-muted-foreground text-right">
              TIME
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {auctionData.map((item, idx) => (
            <TableRow
              key={idx}
              className="hover:bg-muted cursor-pointer border-none"
            >
              <TableCell className="flex md:ml-8">{item.address}</TableCell>
              <TableCell>{item.latestBid}</TableCell>
              <TableCell className="text-right">
                {idx === 0 ? (
                  <div className="flex justify-end items-center gap-3 text-[#BBEE4D]">
                    <span className="w-2 h-2 rounded-full bg-[#BBEE4D]" />
                    <span className="font-medium">Latest</span>
                  </div>
                ) : (
                  item.time
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Fade effect at the bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </div>
  );
};

export default RecentAuctionsTable;
