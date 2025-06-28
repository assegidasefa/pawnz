"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircleIcon } from "lucide-react";

import TableToolbar from "@/components/Shared/TableToolbar";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";

type Token = {
  coin: string;
  symbol: string;
  color: string;
  avatar: string;
  activity: "Accepted" | "Pending" | string;
  ask: string;
  offer: string;
  time: string;
};

type ListingTableProps = {
  tokens: Token[];
  headers: string[];
};

const DashboardLendTable: React.FC<ListingTableProps> = ({
  tokens,
  headers,
}) => {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>(tokens);

  // Debounced Search
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const lower = value.toLowerCase();
        setFilteredTokens(
          tokens.filter((token) =>
            token.coin.toLowerCase().includes(lower)
          )
        );
      }, 300),
    [tokens]
  );

  const handleSearch = (value: string) => {
    debouncedSearch(value);
  };

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  useEffect(() => {
    setFilteredTokens(tokens);
  }, [tokens]);

  const renderTableView = (items: Token[]) => (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="px-6 py-3 text-sm font-medium">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((token, index) => (
            <TableRow key={index} className="border-none">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={token.avatar} />
                    <AvatarFallback className="bg-orange-500">
                      {token.coin.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{token.coin}</span>
                </div>
              </TableCell>
              <TableCell>{token.activity}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded-full" />
                  {token.ask}
                </div>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-sm hover:bg-muted/50"
                >
                  <PlusCircleIcon className="w-4 h-4 mr-1" />
                  {token.offer}
                </Button>
              </TableCell>
              <TableCell className="text-sm">{token.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderGridView = (items: Token[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((token, index) => (
        <Card key={index} className="!p-0 transition-colors">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={token.avatar} />
                <AvatarFallback className="bg-orange-500">
                  {token.coin.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-base">{token.coin}</span>
            </div>

            <div className="text-sm text-muted-foreground flex justify-between">
              <span className="font-medium">Activity:</span>
              <span>{token.activity}</span>
            </div>

            <div className="text-sm text-muted-foreground flex justify-between">
              <span className="font-medium">Ask:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border rounded-full" />
                <span>{token.ask}</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground flex justify-between">
              <span>Time</span>
              <span>{token.time}</span>
            </div>

            <Button
              size="sm"
              variant="ghost"
              className="w-full justify-center hover:bg-muted/50"
            >
              <PlusCircleIcon className="w-4 h-4 mr-1" />
              {token.offer}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const content = (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Listings</h2>
        <TableToolbar
          showLayoutIcons
          showClose={false}
          layout={layout}
          onSearchChange={handleSearch}
          onLayoutChange={setLayout}
          onMaximizeClick={toggleFullscreen}
        />
      </div>
      {layout === "list"
        ? renderTableView(filteredTokens)
        : renderGridView(filteredTokens)}
    </>
  );

  return isFullscreen ? (
    <FullscreenWrapper open={isFullscreen} onOpenChange={toggleFullscreen}>
      {content}
    </FullscreenWrapper>
  ) : (
    <div>{content}</div>
  );
};

export default DashboardLendTable;
