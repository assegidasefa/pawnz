import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

import AuctionIcon from "@/components/icons/AuctionIcon";
import LoadingIcon from "@/components/icons/LoadingIcon";
import ArrowRightTopIcon from "@/components/icons/ArrowRightTopIcon";
import TableToolbar from "@/components/Shared/TableToolbar";
import CustomRow from "@/components/Dashboard/Borrow/CustomRow";
import { AuctionItem } from "./AllAuctions";
import { AuctionModal } from "@/components/MemecoinProfile/AuctionModal/AuctionModal";

type AuctionSectionProps = {
  title: string;
  auctions: AuctionItem[];
  isEnded?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
};

const AuctionSection = ({
  title,
  auctions,
  isEnded = false,
  isFullscreen = false,
  onToggleFullscreen,
}: AuctionSectionProps) => {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAuctions, setFilteredAuctions] =
    useState<AuctionItem[]>(auctions);

  // Debounced search handler
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const query = value.trim().toLowerCase();
        if (!query) {
          setFilteredAuctions(auctions);
        } else {
          setFilteredAuctions(
            auctions.filter((auction) =>
              auction.name.toLowerCase().includes(query)
            )
          );
        }
      }, 300),
    [auctions]
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleLayoutChange = (newLayout: "grid" | "list") => {
    setLayout(newLayout);
  };

  const renderGridCard = (item: AuctionItem, idx: number) => (
    <Card key={idx} className="transition-colors !p-0">
      <CardContent className="p-4 flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <Avatar className="w-12 h-12 border rounded-full overflow-hidden">
            <Image src={item.avatar} alt={item.name} width={48} height={48} />
          </Avatar>
          <div className="w-full space-y-1">
            <div className="font-medium">{item.name}</div>
            <CustomRow
              label="Collateral"
              value={item.collateral}
              image={item.collateralImage}
            />
            <CustomRow
              label="Latest Bid"
              value={item.latestBid}
              image={item.bidImage}
            />
          </div>
        </div>

        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          <span>Time Left</span>
          <span className="ml-auto">{item.timeLeft}</span>
        </div>

        {isEnded ? (
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1 text-xs">
              <LoadingIcon />
              <span>Winner</span>
            </div>
            <div className="flex items-center gap-1">
              {item.winner}
              <ArrowRightTopIcon />
            </div>
          </div>
        ) : (

<AuctionModal >

          <Button className="w-full text-xs border bg-transparent hover:bg-muted">
            <div className="w-4 h-4 mr-1">
              <AuctionIcon />
            </div>
            Bid Now
          </Button>
</AuctionModal>

        )}
      </CardContent>
    </Card>
  );

  const renderTableRow = (item: AuctionItem, idx: number) => (
    <TableRow key={idx}>
      <TableCell>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage
              src={item.avatar}
              alt={item.name}
              className="object-cover"
            />
            <AvatarFallback>{item.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">{item.name}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Image
            src={item.collateralImage}
            alt="collateral"
            width={16}
            height={16}
            className="rounded-full"
          />
          <span className="text-sm">{item.collateral}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Image
            src={item.bidImage}
            alt="bid"
            width={16}
            height={16}
            className="rounded-full"
          />
          <span className="text-sm">{item.latestBid}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {item.timeLeft}
        </div>
      </TableCell>
      <TableCell className="text-right">
        {isEnded ? (
          <div className="flex justify-end items-center gap-2 text-sm text-muted-foreground">
            <LoadingIcon />
            <span>{item.winner}</span>
            <ArrowRightTopIcon />
          </div>
        ) : (
          <Button
            variant="outline"
            className="text-xs gap-1 px-2 py-1 bg-transparent hover:bg-muted border"
          >
            <div className="w-4 h-4">
              <AuctionIcon />
            </div>
            Bid Now
          </Button>
        )}
      </TableCell>
    </TableRow>
  );

  return (
    <div className="mb-8">
      {/* Header Toolbar */}
      <div className="flex items-center justify-between mb-4 mt-2.5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <TableToolbar
          showLayoutIcons
          showSearch
          showMaximize
          layout={layout}
          onLayoutChange={handleLayoutChange}
          onSearchChange={handleSearchChange}
          onMaximizeClick={onToggleFullscreen}
          showClose={false}
          onCloseClick={() => {}}
        />
      </div>

      {/* Grid Layout */}
      {layout === "grid" ? (
        <div className="overflow-x-auto w-[90vw] md:w-full flex md:grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
          {filteredAuctions.map(renderGridCard)}
        </div>
      ) : (
        // Table Layout
        <div className="overflow-x-auto w-[90vw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Participant</TableHead>
                <TableHead>Collateral</TableHead>
                <TableHead>Latest Bid</TableHead>
                <TableHead>Time Left</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{filteredAuctions.map(renderTableRow)}</TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AuctionSection;
