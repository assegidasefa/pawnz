import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircleIcon, XCircleIcon } from "lucide-react";
import { LendModal } from "@/components/Market/LendModal/LendModal";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MarketAuctionTable = ({

  layout = "list",
}: {

  layout?: "grid" | "list";
}) => {

  const tokens = [
    {
      name: "Ponke",
      symbol: "PONKE",
      activity: "Accepted",
      ask: "9.09M",
      askImage: "/images/coins/USDC.svg",
      offer: "Offer",
      time: "1d ago",
      color: "bg-orange-500",
      image: "/images/coins/ponk.png",
    },
    {
      name: "ShibaToken",
      symbol: "SHIB",
      activity: "Accepted",
      ask: "9.09M",
      askImage: "/images/coins/USDC.svg",

      offer: "Top up",
      time: "2h ago",
      color: "bg-orange-500",
      image: "/images/coins/shiba.png",
    },
    {
      name: "MemeMaster",
      symbol: "MM",
      activity: "Listed",
      ask: "8M",
      askImage: "/images/coins/USDC.svg",

      offer: "Offer",
      time: "5m ago",
      image: "/images/coins/mememaster.png",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      activity: "Auction",
      ask: "-",
      askImage: "",

      offer: "456M",
      time: "3m ago",
      image: "/images/coins/doge.png",
    },
    {
      name: "ShibaToken",
      symbol: "SHIB",
      activity: "Won",
      ask: "9.99M",
      askImage: "/images/coins/USDC.svg",
      offer: "789M",
      time: "1h ago",
      image: "/images/coins/shiba.png",
    },
    // generate for Floki Inu, PuppyPunk, CheemsCoin, MoonMeme, WagmiCoin
    {
      name: "Floki Inu",
      symbol: "FLOKI",
      activity: "Listed",
      ask: "5.5M",
      askImage: "/images/coins/USDC.svg",
      offer: "Offer",
      time: "2d ago",
      image: "/images/coins/floki.png",
    },
    {
      name: "PuppyPunk",
      symbol: "PPUNK",
      activity: "Accepted",
      ask: "3.2M",
      askImage: "/images/coins/USDC.svg",
      offer: "Top up",
      time: "4h ago",
      image: "/images/coins/puppypunk.png",
    },
    {
      name: "CheemsCoin",
      symbol: "CHEEMS",
      activity: "Auction",
      ask: "-",
      askImage: "",
      offer: "1.2M",
      time: "30m ago",
      image: "/images/coins/cheemscoin.png",
    },
  ];
  const headers = ["COIN", "ACTIVITY", "ASK", "OFFER", "TIME"];


  return (
    <div className="w-full overflow-auto">
      {layout === "list" ? (
        <Table className="border-separate border-spacing-y-2">
          <TableHeader className="">
            <TableRow className="">
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className={
                    cn(
                      `font-medium border-b text-muted-foreground text-[12px] py-3`,
                      index === headers.length - 1 ? "text-right" : "text-center",
                      index === 0 ? "text-left" : "",
                    )
                  }>
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="w-auto gap-x-1 !border-t-2 border-black">
            {[...tokens, ...tokens].map((token, index) => {
              const activityColor =
                token.activity === "Accepted"
                  ? "text-[#059669]"
                  : token.activity === "Pending"
                    ? "text-[#CC5F62]"
                    : token.activity === "Offer"
                      ? "text-red-600"
                      : token.activity === "Listed"
                        ? "text-blue-500"
                        : token.activity === "Won"
                          ? "text-red-500"
                          : token.activity === "Auction"
                            ? "text-red-800"
                            : token.activity === "Filled"
                              ? "text-green"
                              : "";

              return (
                <TableRow
                  key={index}
                  className={`w-full rounded-lg overflow-hidden`}
                >
                  <TableCell className="px-0.5 py-1 rounded-l-lg">
                    <div className="flex items-center space-x-1">

                      <div className="w-8 h-8 rounded-sm overflow-hidden">
                        <Image
                          src={token.image}
                          alt={token.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{token.name}</span>
                    </div>
                  </TableCell>

                  <TableCell className={`px-0.5 py-1 ${activityColor}`}>
                    {token.activity}
                  </TableCell>

                  <TableCell className="px-0.5 py-1">

                    <div className="flex items-center space-x-2">
                      <div className="flex gap-x-2 items-center">
                        {token.askImage && (
                          <div className="w-4 h-4 overflow-hidden rounded-full">
                            <Image
                              src={token.askImage}
                              alt="ask"
                              width={16}
                              height={16}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span>{token.ask}</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="px-0.5 py-1 text-right">
                    {token.offer}
                  </TableCell>

                  <TableCell className="px-0.5 py-1 text-sm text-gray-500 text-right rounded-r-lg">
                    {token.time}
                  </TableCell>
                </TableRow>
              );
            })
            }
          </TableBody>
        </Table>
      ) : (
        // Grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 py-2">
          {tokens.map((token, index) => {
            const activityColor =
              token.activity === "Accepted"
                ? "text-[#059669]"
                : token.activity === "Pending"
                  ? "text-[#CC5F62]"
                  : token.activity === "Offer"
                    ? "text-red-600"
                    : token.activity === "Listed"
                      ? "text-blue-500"
                      : token.activity === "Won"
                        ? "text-red-500"
                        : token.activity === "Auction"
                          ? "text-red-800"
                          : token.activity === "Filled"
                            ? "text-green"
                            : "";

            return (
              <Card
                key={index}
                className="rounded-lg shadow p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 min-h-8 min-w-8 rounded-sm overflow-hidden">
                    <Image
                      src={token.image}
                      alt={token.name}
                      width={32}
                      height={32}
                      className="object-cover size-full"
                    />
                  </div>
                  <span className="font-medium">{token.name}</span>
                </div>
                <div className="flex justify-between items-center">

                  <div className={`text-sm ${activityColor}`}>{token.activity}</div>
                  <div className="flex items-center gap-2">
                    {token.askImage && (
                      <div className="w-4 h-4 overflow-hidden rounded-full">
                        <Image
                          src={token.askImage}
                          alt="ask"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span>{token.ask}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">

                  <div className="flex justify-end">
                    {token.offer}
                  </div>
                  <div className="text-xs text-gray-500 text-right">{token.time}</div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MarketAuctionTable;
