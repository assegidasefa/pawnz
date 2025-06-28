"use client";

import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

import UsdcIcon from "../icons/UsdcIcon";
import AuctionIcon from "../icons/AuctionIcon";
import TableToolbar from "../Shared/TableToolbar";
import FullscreenWrapper from "../Shared/FullscreenWrapper";

type Token = {
  symbol: string;
  logoUrl?: string;
  color: string;
  collateral: string;
  currentBid: string;
  discount: string;
  ltv: string;
  ltvRisk: string;
  ltvRiskColor: string;
  timeLeft: string;
  offer: string;
};

type LiveNowTableProps = {
  tokens: Token[];
  headers: string[];
};

const LiveNowTable: React.FC<LiveNowTableProps> = ({ tokens, headers }) => {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [filteredTokens, setFilteredTokens] = useState(tokens);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const query = value.trim().toLowerCase();
        setFilteredTokens(
          query
            ? tokens.filter((t) => t.collateral.toLowerCase().includes(query))
            : tokens
        );
      }, 300),
    [tokens]
  );

  const handleSearchChange = (value: string) => debouncedSearch(value);
  const toggleFullscreen = () => setIsFullscreen((prev) => !prev);
  const handleLayoutChange = (newLayout: "grid" | "list") =>
    setLayout(newLayout);

  const renderTokenAvatar = (token: Token) => (
    <div className="w-8 h-8 rounded-full bg-white border overflow-hidden">
      {token.logoUrl ? (
        <Image
          src={token.logoUrl}
          alt={token.symbol}
          fill
          className="object-contain"
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center ${token.color}`}
        >
          <span className="text-xs font-bold text-white">
            {token.symbol?.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );

  const renderListTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, idx) => (
            <TableHead
              key={idx}
              className="text-[#666] text-sm font-medium px-2 py-3 text-left md:text-center"
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredTokens.map((token, idx) => (
          <TableRow key={idx}>
            <TableCell className="px-2 py-4">
              <div className="flex items-center gap-3">
                {renderTokenAvatar(token)}
                <span className="font-medium">{token.collateral}</span>
              </div>
            </TableCell>
            <TableCell className="px-6 py-4">
              <div className="flex gap-x-2 items-center">
                <div className="w-4 h-4">
                  <UsdcIcon />
                </div>
                {token.currentBid}
              </div>
            </TableCell>
            <TableCell className="px-6 py-4 text-[#CC5F62] text-sm">
              {token.discount}
            </TableCell>
            <TableCell className="px-6 py-4 text-sm">
              <div className="flex gap-x-2 items-center">
                <span className="text-[#CC5F62]">{token.ltv}</span>
                <Badge
                  variant="outline"
                  className={`text-xs px-2 py-0.5 border ${token.ltvRiskColor}`}
                >
                  {token.ltvRisk}
                </Badge>
              </div>
            </TableCell>
            <TableCell className="px-6 py-4">{token.timeLeft}</TableCell>
            <TableCell className="px-6 py-4 text-sm flex items-center gap-2">
              <div className="w-4 h-4">
                <AuctionIcon />
              </div>
              {token.offer}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderGridCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredTokens.map((token, idx) => (
        <Card key={idx} className="transition-colors">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border overflow-hidden">
                {token.logoUrl ? (
                  <Image
                    src={token.logoUrl}
                    alt={token.symbol}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center ${token.color}`}
                  >
                    <span className="text-xs font-bold text-white">
                      {token.symbol?.charAt(0)}
                    </span>
                  </div>
                )}
              </Avatar>
              <div className="flex flex-col gap-1 w-full">
                <div className="font-medium">{token.collateral}</div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bid</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4">
                      <UsdcIcon />
                    </div>
                    {token.currentBid}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-[#CC5F62]">{token.discount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#CC5F62]">{token.ltv}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs px-2 py-0.5 border ${token.ltvRiskColor}`}
                  >
                    {token.ltvRisk}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              <span>Time Left</span>
              <span className="ml-auto">{token.timeLeft}</span>
            </div>
            <Button className="w-full p-0 text-xs border bg-transparent hover:bg-muted">
              <div className="w-4 h-4">
                <AuctionIcon />
              </div>
              {token.offer}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () =>
    layout === "list" ? renderListTable() : renderGridCards();

  const wrapperContent = (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Live Now</h2>
        <TableToolbar
          showLayoutIcons
          showSearch
          showMaximize
          layout={layout}
          showClose={false}
          onSearchChange={handleSearchChange}
          onLayoutChange={handleLayoutChange}
          onMaximizeClick={toggleFullscreen}
        />
      </div>
      <div className="w-[90vw] md:w-full overflow-auto">{renderContent()}</div>
    </>
  );

  return isFullscreen ? (
    <FullscreenWrapper open={isFullscreen} onOpenChange={toggleFullscreen}>
      {wrapperContent}
    </FullscreenWrapper>
  ) : (
    wrapperContent
  );
};

export default LiveNowTable;
