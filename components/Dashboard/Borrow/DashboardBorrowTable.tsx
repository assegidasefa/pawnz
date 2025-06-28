"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import debounce from "lodash.debounce";
import { PlusCircleIcon } from "lucide-react";

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
import UsdcIcon from "@/components/icons/UsdcIcon";
import TableToolbar from "@/components/Shared/TableToolbar";
import { Card, CardContent } from "@/components/ui/card";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";

type Token = {
  name?: string;
  symbol: string;
  color?: string;
  activity?: "Accepted" | "Pending" | string;
  apr?: string;
  offer: string;
  isPending?: boolean;
  time: string;
  coin: string;
  ask: string;
  logoUrl?: string;
};

type ListingTableProps = {
  tokens: Token[];
  headers: string[];
};

const DashboardBorrowTable: React.FC<ListingTableProps> = ({
  tokens,
  headers,
}) => {
  const [data, setData] = useState<Token[]>(tokens);
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const search = value.toLowerCase().trim();
        setData(
          search
            ? tokens.filter((token) =>
                token.coin.toLowerCase().includes(search)
              )
            : tokens
        );
      }, 300),
    [tokens]
  );

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const TokenLogo = ({ token }: { token: Token }) => (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-white border">
      {token.logoUrl ? (
        <Image
          src={token.logoUrl}
          alt={token.symbol}
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center ${
            token.color || "bg-orange-500"
          }`}
        >
          <span className="text-xs font-bold text-white">
            {token.symbol?.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );

  const TokenRow = (token: Token, index: number) => (
    <TableRow key={index} className="border-none">
      <TableCell>
        <div className="flex items-center gap-x-2">
          <TokenLogo token={token} />
          <span className="font-medium">{token.coin}</span>
        </div>
      </TableCell>
      <TableCell>{token.activity}</TableCell>
      <TableCell>
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4">
            <UsdcIcon />
          </div>
          {token.ask}
        </div>
      </TableCell>
      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="flex items-center gap-x-1 text-sm"
        >
          <PlusCircleIcon className="w-4 h-4" />
          {token.offer}
        </Button>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground">
        {token.time}
      </TableCell>
    </TableRow>
  );

  const TokenCard = (token: Token, index: number) => (
    <Card key={index} className="!p-0">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-x-2">
          <TokenLogo token={token} />
          <span className="font-medium">{token.coin}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground font-medium">Activity</span>
          <span>{token.activity}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="font-medium">Ask</span>
          <div className="flex items-center gap-x-1">
            <div className="w-4 h-4">
              <UsdcIcon />
            </div>
            <span>{token.ask}</span>
          </div>
        </div>

        <Button
          size="sm"
          className="w-full justify-center border bg-transparent hover:bg-muted/50 text-sm"
        >
          <PlusCircleIcon className="w-4 h-4 mr-1" />
          {token.offer}
        </Button>

        <div className="text-xs text-muted-foreground text-right">
          {token.time}
        </div>
      </CardContent>
    </Card>
  );

  const renderTable = () => (
    <div className="w-[90vw] md:w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="text-sm font-medium px-6 py-3 text-muted-foreground"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{data.map(TokenRow)}</TableBody>
      </Table>
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90vw] md:w-full">
      {data.map(TokenCard)}
    </div>
  );

  const renderContent = () =>
    layout === "list" ? renderTable() : renderGrid();

  return (
    <div>
      {isFullscreen ? (
        <FullscreenWrapper
          open={isFullscreen}
          onOpenChange={() => setIsFullscreen((prev) => !prev)}
        >
          <Header
            layout={layout}
            onSearchChange={handleSearchChange}
            onLayoutChange={setLayout}
            onToggleFullscreen={() => setIsFullscreen(false)}
          />
          {renderContent()}
        </FullscreenWrapper>
      ) : (
        <>
          <Header
            layout={layout}
            onSearchChange={handleSearchChange}
            onLayoutChange={setLayout}
            onToggleFullscreen={() => setIsFullscreen(true)}
          />
          {renderContent()}
        </>
      )}
    </div>
  );
};

type HeaderProps = {
  layout: "list" | "grid";
  onSearchChange: (val: string) => void;
  onLayoutChange: (layout: "list" | "grid") => void;
  onToggleFullscreen: () => void;
};

const Header = ({
  layout,
  onSearchChange,
  onLayoutChange,
  onToggleFullscreen,
}: HeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">Listings</h2>
    <TableToolbar
      layout={layout}
      showLayoutIcons
      showClose={false}
      onSearchChange={onSearchChange}
      onLayoutChange={onLayoutChange}
      onMaximizeClick={onToggleFullscreen}
      onCloseClick={() => {}}
    />
  </div>
);

export default DashboardBorrowTable;
