"use client";

import React, { useMemo, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TableToolbar from "@/components/Shared/TableToolbar";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";
import CorrectIcon from "@/components/icons/CorrectCircleIcon";
import WrongCircleIcon from "@/components/icons/WrongCircleIcon";

type Token = {
  name: string;
  symbol: string;
  color: string;
  activity: "Accepted" | "Pending" | string;
  apr: string;
  offer: string;
  offering: string;
  from: string;
  time: string;
};

type ListingTableProps = {
  tokens: Token[];
  headers: string[];
};

const DashboardOfferTable: React.FC<ListingTableProps> = ({ tokens, headers }) => {
  const [layout, setLayout] = useState<"grid" | "list">("list");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>(tokens);

  useEffect(() => {
    setFilteredTokens(tokens);
  }, [tokens]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const term = value.toLowerCase();
        const filtered = tokens.filter((token) =>
          [token.name, token.symbol, token.activity, token.from]
            .join(" ")
            .toLowerCase()
            .includes(term)
        );
        setFilteredTokens(filtered);
      }, 300),
    [tokens]
  );

  const handleSearchChange = (value: string) => {
    debouncedSearch(value);
  };

  const renderTableRows = (tokenList: Token[]) => (
    <TableBody>
      {tokenList.map((token, index) => (
        <TableRow key={index} className="border-none">
          <TableCell className="py-1">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${token.color} rounded-full flex items-center justify-center`}>
                <span className="text-xs font-bold">{token.symbol.charAt(0)}</span>
              </div>
              <span className="font-medium">{token.name}</span>
            </div>
          </TableCell>
          <TableCell className="py-1">{token.offering}</TableCell>
          <TableCell className="py-1">
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  token.activity === "Accepted"
                    ? "default"
                    : token.activity === "Pending"
                    ? "secondary"
                    : "outline"
                }
                className="bg-green-100 text-green-800 flex items-center gap-1"
              >
                <CorrectIcon />
                Accept
              </Badge>
              <div className="flex items-center gap-1 text-orange-800 text-sm">
                <WrongCircleIcon />
                Decline
              </div>
            </div>
          </TableCell>
          <TableCell className="py-1">
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:bg-transparent px-0"
            >
              {token.from}
            </Button>
          </TableCell>
          <TableCell className="py-1 text-sm text-right">{token.time}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  const renderGridCards = (tokenList: Token[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90vw] md:w-full">
      {tokenList.map((token, index) => (
        <Card key={index} className="!p-0 transition-colors">
          <CardContent className="p-4 flex flex-col space-y-2">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${token.color} rounded-full flex items-center justify-center text-white`}>
                <span className="text-sm font-bold">{token.symbol.charAt(0)}</span>
              </div>
              <span className="font-medium">{token.name}</span>
            </div>

            <div className="text-sm text-muted-foreground flex justify-between">
              <span className="font-medium">Offering:</span>
              <span className="text-foreground">{token.offering}</span>
            </div>

            <Button
              size="sm"
              variant="ghost"
              className="p-0 text-sm w-fit text-muted-foreground"
            >
              {token.from}
            </Button>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    token.activity === "Accepted"
                      ? "default"
                      : token.activity === "Pending"
                      ? "secondary"
                      : "outline"
                  }
                  className="bg-green-100 text-green-800 flex items-center gap-1 px-2 py-0.5"
                >
                  <CorrectIcon />
                  Accept
                </Badge>
                <div className="flex gap-1 items-center text-orange-800 text-sm">
                  <WrongCircleIcon />
                  Decline
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{token.time}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Offer Received</h2>
        <TableToolbar
          showLayoutIcons
          showClose={false}
          layout={layout}
          onLayoutChange={setLayout}
          onSearchChange={handleSearchChange}
          onMaximizeClick={() => setIsFullscreen((isFullscreen)=>!isFullscreen)}
          onCloseClick={() => {}}
        />
      </div>
      {layout === "list" ? (
        <div className="w-[90vw] md:w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((header, index) => (
                  <TableHead key={index} className="text-sm font-medium px-6 py-3">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            {renderTableRows(filteredTokens)}
          </Table>
        </div>
      ) : (
        renderGridCards(filteredTokens)
      )}
    </>
  );

  return (
    <>
      {isFullscreen ? (
        <FullscreenWrapper open={isFullscreen} onOpenChange={() => setIsFullscreen(false)}>
          {renderContent()}
        </FullscreenWrapper>
      ) : (
        renderContent()
      )}
    </>
  );
};

export default DashboardOfferTable;
