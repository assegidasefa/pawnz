"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import FundMoreIcon from "@/components/icons/FundMoreIcon";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CircleX, Clock } from "lucide-react";
import TableToolbar from "@/components/Shared/TableToolbar";
import FullscreenWrapper from "@/components/Shared/FullscreenWrapper";
import DashboardLendTable from "./DashboardLendTable";
import DashboardLendSkeleton from "./DashboardSkeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

// Types
type Offer = {
  id: number;
  coin: string;
  funded: string;
  collateral: string;
  progress: number;
  timeLeft: string;
  status: "active" | "cancelled";
  avatar?: string;
};

export default function DashboardLend() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<Offer[]>([]);
  const [tokens, setTokens] = useState<any[]>([]);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Debounced search
  const handleSearch = useMemo(
    () =>
      debounce((term: string) => {
        setFilteredOffers(
          offers.filter((offer) =>
            offer.coin.toLowerCase().includes(term.toLowerCase())
          )
        );
      }, 300),
    [offers]
  );

  const onSearchChange = (value: string) => handleSearch(value);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  // Fetch demo data
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setOffers([
      {
        id: 1,
        coin: "Ponke",
        funded: "12M",
        collateral: "345M",
        progress: 10,
        timeLeft: "6hr 30min",
        status: "active",
      },
      {
        id: 2,
        coin: "Bonk",
        funded: "8M",
        collateral: "100M",
        progress: 40,
        timeLeft: "4hr 10min",
        status: "cancelled",
      },
      {
        id: 3,
        coin: "Solana",
        funded: "5M",
        collateral: "80M",
        progress: 80,
        timeLeft: "2hr 50min",
        status: "active",
      },
    ]);

    setTokens(
      Array.from({ length: 5 }, () => ({
        coin: "Ponke",
        symbol: "PONKE",
        activity: "Listed",
        ask: "350M",
        offer: "offer",
        time: "1m ago",
        avatar: "/images/ponk.png",
      }))
    );
  }, []);

  useEffect(() => {
    setFilteredOffers(offers);
  }, [offers]);

  if (loading) return <DashboardLendSkeleton />;

  const renderCard = (offer: Offer) => {
    const isCancelled = offer.status === "cancelled";

    return (
      <Card
        key={offer.id}
        className={`transition-colors !p-0 ${
          isCancelled ? "bg-destructive" : ""
        }`}
      >
        <CardContent className="p-4 space-y-2">
          {/* Header */}
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={offer.avatar} />
              <AvatarFallback className="bg-orange-500">
                {offer.coin.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="font-medium">{offer.coin}</div>
          </div>

          {/* Funded & Collateral */}
          <div className="text-sm space-y-1">
            <div className="flex justify-between text-muted-foreground">
              <span>Funded</span>
              <span className="flex items-center gap-1">
                {offer.funded}
                <div className="w-4 h-4">
                  <UsdcIcon />
                </div>
              </span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Collateral</span>
              <span className="flex items-center gap-1">
                {offer.collateral}
                <div className="w-4 h-4 border rounded-full" />
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full border rounded-md overflow-hidden">
            <Progress
              value={offer.progress}
              className="h-4"
              indicatorClassName={isCancelled ? "bg-[#CC5F62]" : "bg-[#D5FF40]"}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-muted-foreground">
              {offer.progress}%
            </span>
          </div>

          {/* Time Left */}
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            <span>Time Left</span>
            <span className="ml-auto">{offer.timeLeft}</span>
          </div>

          {/* Action Button */}
          <Button
            className={`w-full text-xs justify-center gap-2 border ${
              isCancelled
                ? "bg-transparent text-[#CC5F62] hover:bg-[#CC5F62] hover:text-white"
                : "bg-card hover:bg-[#D5FF40] hover:text-black"
            }`}
          >
            {isCancelled ? (
              <>
                <div className="w-4 h-4">
                  <CircleX />
                </div>
                Cancel Offer
              </>
            ) : (
              <>
                <div className="w-4 h-4">
                  <FundMoreIcon />
                </div>
                Fund More
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  };

  const renderTableRow = (offer: Offer) => {
    const isCancelled = offer.status === "cancelled";

    return (
      <TableRow
        key={offer.id}
        className={isCancelled ? "bg-destructive/10" : ""}
      >
        <TableCell>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={offer.avatar} />
              <AvatarFallback>{offer.coin.slice(0, 2)}</AvatarFallback>
            </Avatar>
            {offer.coin}
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-1">
            {offer.funded}{" "}
            <div className="w-4 h-4">
              <UsdcIcon />
            </div>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-1">
            {offer.collateral} <div className="w-4 h-4 border rounded-full" />
          </div>
        </TableCell>
        <TableCell>
          <div className="relative w-32 border rounded-md overflow-hidden">
            <Progress
              value={offer.progress}
              className="h-4"
              indicatorClassName={isCancelled ? "bg-[#CC5F62]" : "bg-[#D5FF40]"}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
              {offer.progress}%
            </span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {offer.timeLeft}
          </div>
        </TableCell>
        <TableCell>
          <Button
            className={`w-full text-xs justify-center gap-1 border ${
              isCancelled
                ? "bg-transparent text-[#CC5F62] hover:bg-[#CC5F62] hover:text-white"
                : "bg-card hover:bg-[#D5FF40] hover:text-black"
            }`}
          >
            {isCancelled ? (
              <>
                <CircleX className="w-4 h-4" />
                Cancel Offer
              </>
            ) : (
              <>
                <div className="w-4 h-4">
                  <FundMoreIcon />
                </div>
                Fund More
              </>
            )}
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  const renderOffers = () => {
    return layout === "grid" ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {filteredOffers.map(renderCard)}
      </div>
    ) : (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Coin</TableHead>
            <TableHead>Funded</TableHead>
            <TableHead>Collateral</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Time Left</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{filteredOffers.map(renderTableRow)}</TableBody>
      </Table>
    );
  };

  const content = (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Offers</h2>
        <TableToolbar
          showLayoutIcons
          showClose={false}
          onMaximizeClick={toggleFullscreen}
          onLayoutChange={setLayout}
          layout={layout}
          onSearchChange={onSearchChange}
        />
      </div>
      {renderOffers()}
    </div>
  );

  return isFullscreen ? (
    <FullscreenWrapper open={isFullscreen} onOpenChange={toggleFullscreen}>
      {content}
    </FullscreenWrapper>
  ) : (
    <div className="min-h-screen w-[90vw] md:w-full px-4 flex flex-col gap-y-6">
      <div>{content}</div>
      <DashboardLendTable
        headers={["COIN", "ACTIVITY", "ASK", "OFFER", "TIME"]}
        tokens={tokens}
      />
    </div>
  );
}
