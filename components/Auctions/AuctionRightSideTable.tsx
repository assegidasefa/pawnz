import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuctionIcon from "../icons/AuctionIcon";
import UsdcIcon from "../icons/UsdcIcon";
import { Clock } from "lucide-react";

type Token = {
  name: string;
  avatar: string;
  collateral: string;
  currentBid: string;
  discount: string;
  timeLeft: string;
  offer: string;
};

type ListingTableProps = {
  tokens: Token[];
  headers: string[];
  layout: "list" | "grid";
};

const AuctionRightSideTable: React.FC<ListingTableProps> = ({
  tokens,
  headers,
  layout,
}) => {
  const renderAvatarWithName = (token: Token) => (
    <div className="flex items-center space-x-3">
      <Avatar className="size-6 border">
        <AvatarImage
          src={token.avatar}
          alt={token.name}
          className="object-cover rounded-sm"
        />
        <AvatarFallback className="bg-transparent text-sm">
          {token.name[0]}
        </AvatarFallback>
      </Avatar>
      <span className="font-medium">{token.collateral}</span>
    </div>
  );

  const renderListTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className="text-[#666] text-sm font-medium px-1.5 py-3"
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token, index) => (
          <TableRow key={index}>
            <TableCell className="px-1.5 py-4">
              {renderAvatarWithName(token)}
            </TableCell>

            <TableCell className="px-1.5 py-4">
              <div className="flex gap-x-2 items-center">
                <div className="w-4 h-4">
                  <UsdcIcon />
                </div>
                <span>{token.currentBid}</span>
              </div>
            </TableCell>

            <TableCell className="px-1.5 py-4 text-sm text-[#CC5F62]">
              {token.discount}
            </TableCell>

            <TableCell className="px-1.5 py-4 text-sm">
              {token.timeLeft}
            </TableCell>

            <TableCell className="px-1.5 py-4 flex gap-x-2 items-center text-sm">
              <div className="w-4 h-4">
                <AuctionIcon />
              </div>
              <span>{token.offer}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderGridCards = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      {tokens.map((token, index) => (
        <Card key={index} className="transition-colors !p-0">
          <CardContent className="p-4 flex flex-col space-y-2">
            {/* Header */}
            {renderAvatarWithName(token)}

            {/* Bid */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Bid</span>
              <div className="flex items-center gap-x-1">
                <div className="w-4 h-4">
                  <UsdcIcon />
                </div>
                <span>{token.currentBid}</span>
              </div>
            </div>

            {/* Discount */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Discount</span>
              <span className="text-[#CC5F62]">{token.discount}</span>
            </div>

            {/* Time Left */}
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              <span>Time Left</span>
              <span className="ml-auto">{token.timeLeft}</span>
            </div>

            {/* Offer */}
            <div className="flex items-center justify-between text-sm font-medium">
              <div className="flex gap-x-2 items-center">
                <div className="w-4 h-4">
                  <AuctionIcon />
                </div>
                <span>{token.offer}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-auto">
      {layout === "list" ? renderListTable() : renderGridCards()}
    </div>
  );
};

export default AuctionRightSideTable;
