"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";

import TableToolbar from "../Shared/TableToolbar";
import ArrowRightTopIcon from "../icons/ArrowRightTopIcon";
import CollapseIcon from "../icons/CollapseIcon";
import { CircleX } from "lucide-react";
import { toast, Toaster } from "sonner";

type TradeItem = {
  status: string;
  timestamp: string;
  tokens: string[];
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Rejected":
      return "bg-[#FF777A]/8 text-[#CC5F62] border-[#FF777A]/8";
    case "Pending":
      return "bg-[#FEB218]/20 text-[#FFAB00] border-[#FEB218]/20";
    case "Done":
      return "bg-[#05EB05]/8 text-[#00B700] border-[#05EB05]/8";
    default:
      return "bg-gray-500/20 border-gray-500/30";
  }
};

const TokenIcons = ({ tokens }: { tokens: string[] }) => (
  <div className="flex -space-x-1">
    {tokens.map((token, i) => (
      <div key={i} className="w-5 h-5 rounded-full border overflow-hidden">
        <Image
          src={token}
          alt={`token-${i}`}
          width={20}
          height={20}
          className="object-cover w-full h-full"
        />
      </div>
    ))}
  </div>
);

const TradingHistoryComponent = ({
  onCollapse,
}: {
  onCollapse: () => void;
}) => {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [tradingData, setTradingData] = useState<TradeItem[]>([
    {
      status: "Rejected",
      timestamp: "2025-06-02 13:02",
      tokens: [
        "/images/coins/cheemscoin.png",
        "/images/coins/kishu.png",
        "/images/coins/ponk.png",
        "/images/coins/mememaster.png",
      ],
    },
    {
      status: "Pending",
      timestamp: "2025-06-02 13:02",
      tokens: [
        "/images/coins/cheemscoin.png",
        "/images/coins/kishu.png",
        "/images/coins/ponk.png",
        "/images/coins/mememaster.png",
      ],
    },
    {
      status: "Done",
      timestamp: "2025-06-02 13:02",
      tokens: [
        "/images/coins/cheemscoin.png",
        "/images/coins/kishu.png",
        "/images/coins/ponk.png",
        "/images/coins/mememaster.png",
      ],
    },
  ]);

  const handleLayoutChange = (newLayout: "grid" | "list") => setLayout(newLayout);

  const handleTxAction = (status: string, index: number) => {
    if (status === "Pending") {
      const updated = [...tradingData];
      updated[index].status = "Rejected";
      setTradingData(updated);
      toast.success("Transaction cancelled.");
    } else {
      toast.success(`Opening TX detail for row ${index + 1}`);
    }
  };

  const renderTableLayout = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>SENT</TableHead>
          <TableHead>RECEIVED</TableHead>
          <TableHead>STATUS</TableHead>
          <TableHead>TIMESTAMP</TableHead>
          <TableHead>TXS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tradingData.map((trade, index) => (
          <TableRow key={index}>
            <TableCell><TokenIcons tokens={trade.tokens} /></TableCell>
            <TableCell><TokenIcons tokens={trade.tokens} /></TableCell>
            <TableCell>
              <Badge className={`text-xs px-2 py-1 ${getStatusColor(trade.status)}`}>
                {trade.status}
              </Badge>
            </TableCell>
            <TableCell className="text-xs">{trade.timestamp}</TableCell>
            <TableCell>
              <Card
                onClick={() => handleTxAction(trade.status, index)}
                className="p-1 cursor-pointer flex justify-center items-center hover:bg-muted transition"
              >
                {trade.status === "Pending" ? <CircleX width={18} height={18} /> : <ArrowRightTopIcon />}
              </Card>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
      {tradingData.map((trade, index) => (
        <Card key={index} className="transition-colors !p-0">
          <CardContent className="p-4 flex flex-col space-y-3">
            <div className="flex justify-between flex-wrap">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Sent</div>
                <div className="flex -space-x-1">
                  {trade.tokens.map((token, i) => (
                    <div key={`sent-${i}`} className="w-6 h-6 rounded-full border overflow-hidden">
                      <Image
                        src={token}
                        alt={`sent-${i}`}
                        width={24}
                        height={24}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Received</div>
                <div className="flex -space-x-1">
                  {trade.tokens.map((token, i) => (
                    <div key={`received-${i}`} className="w-6 h-6 rounded-full border overflow-hidden">
                      <Image
                        src={token}
                        alt={`received-${i}`}
                        width={24}
                        height={24}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Status</span>
              <Badge className={`text-xs ${getStatusColor(trade.status)}`}>{trade.status}</Badge>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Timestamp</span>
              <span>{trade.timestamp}</span>
            </div>

            <div className="flex justify-end">
              <Card
                onClick={() => handleTxAction(trade.status, index)}
                className="p-1 cursor-pointer flex justify-center items-center hover:bg-muted transition w-7 h-7"
              >
                {trade.status === "Pending" ? <CircleX width={18} height={18} /> : <ArrowRightTopIcon />}
              </Card>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="w-full py-4">
      <div className="flex gap-x-2 items-center mb-4 w-full justify-end">
        <TableToolbar
          showLayoutIcons
          showSearch={false}
          showMaximize={false}
          showClose={false}
          onMaximizeClick={() => {}}
          onCloseClick={() => {}}
          onLayoutChange={handleLayoutChange}
          layout={layout}
        />
        <Button variant="outline" size="sm" className="ml-2 p-1" onClick={onCollapse}>
          <CollapseIcon />
        </Button>
      </div>

      <div className="overflow-x-auto">
        {layout === "list" ? renderTableLayout() : renderGridLayout()}
      </div>
      <Toaster />
    </div>
  );
};

export default TradingHistoryComponent;
