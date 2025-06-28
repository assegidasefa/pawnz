import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AuctionModal } from "../AuctionModal/AuctionModal";

type LiveTabContentProps = {
  layout: "grid" | "list";
};

type AuctionItem = {
  imgUrl: string;
  collateral1: string;
  currentBid: string;
  discount: string;
  ltv: string;
  timeLeft1: string;
};

const auctionData: AuctionItem[] = [
  {
    imgUrl: "/images/sample1.png",
    collateral1: "100M",
    currentBid: "130M",
    discount: "-17%",
    ltv: "40% High",
    timeLeft1: "5h 30m",
  },
  {
    imgUrl: "/images/sample2.png",
    collateral1: "90M",
    currentBid: "125M",
    discount: "-15%",
    ltv: "35% High",
    timeLeft1: "3h 20m",
  },
  {
    imgUrl: "/images/sample3.png",
    collateral1: "80M",
    currentBid: "110M",
    discount: "-12%",
    ltv: "38% High",
    timeLeft1: "2h 10m",
  },
  {
    imgUrl: "/images/sample4.png",
    collateral1: "70M",
    currentBid: "100M",
    discount: "-10%",
    ltv: "40% High",
    timeLeft1: "6h 5m",
  },
];

const CollateralImage = ({ src, alt, size }: { src: string; alt: string; size: number }) => (
  <div
    className="bg-orange-500 rounded-full overflow-hidden flex items-center justify-center"
    style={{ width: size, height: size }}
  >
    <Image src={src} alt={alt} width={size - 2} height={size - 2} className="object-cover" />
  </div>
);

const ListLayout: FC = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>COLLATERAL</TableHead>
        <TableHead>CURRENT BID</TableHead>
        <TableHead>DISCOUNT</TableHead>
        <TableHead>LTV</TableHead>
        <TableHead>TIME LEFT</TableHead>
        <TableHead>OFFER</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {auctionData.map((item, idx) => (
        <TableRow key={idx} className="hover:bg-muted cursor-pointer">
          <TableCell className="flex items-center gap-2">
            <CollateralImage src={item.imgUrl} alt={`img-${idx}`} size={16} />
            {item.collateral1}
          </TableCell>
          <TableCell>{item.currentBid}</TableCell>
          <TableCell className="text-red-500">{item.discount}</TableCell>
          <TableCell className="text-red-500">{item.ltv}</TableCell>
          <TableCell>{item.timeLeft1}</TableCell>
          <TableCell>
            <AuctionModal>
              <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                Bid
              </Button>
            </AuctionModal>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const GridLayout: FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-sm">
    {auctionData.map((item, idx) => (
      <Card
        key={idx}
        className="p-4 gap-y-1 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer space-y-1"
      >
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-medium flex items-center gap-2">
            <CollateralImage src={item.imgUrl} alt={`img-${idx}`} size={20} />
            Collateral
          </span>
          <span>{item.collateral1}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Current Bid</span>
          <span>{item.currentBid}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Discount</span>
          <span className="text-red-500">{item.discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">LTV</span>
          <span className="text-red-500">{item.ltv}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Time Left</span>
          <span>{item.timeLeft1}</span>
        </div>
        <AuctionModal>
          <Button className="w-full border flex gap-x-2 justify-center bg-card shadow-none hover:bg-transparent cursor-pointer">
            Bid
          </Button>
        </AuctionModal>
      </Card>
    ))}
  </div>
);

const LiveTabContent: FC<LiveTabContentProps> = ({ layout }) => {
  return <div className="px-2">{layout === "list" ? <ListLayout /> : <GridLayout />}</div>;
};

export default LiveTabContent;
