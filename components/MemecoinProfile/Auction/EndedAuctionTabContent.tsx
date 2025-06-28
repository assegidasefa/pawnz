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

type AuctionItem = {
  imgUrl: string;
  collateral: string;
  finalPrice: string;
  winner: string;
  discount: string;
  endedAt: string;
};

type EndedAuctionTabContentProps = {
  layout: "grid" | "list";
};

const auctionData: AuctionItem[] = [
  {
    imgUrl: "/images/sample1.png",
    collateral: "100M",
    finalPrice: "130M",
    winner: "0xAB...1234",
    discount: "-14%",
    endedAt: "2025-06-02 13:02",
  },
  {
    imgUrl: "/images/sample2.png",
    collateral: "90M",
    finalPrice: "120M",
    winner: "0xCD...4567",
    discount: "-12%",
    endedAt: "2025-06-01 18:45",
  },
  {
    imgUrl: "/images/sample3.png",
    collateral: "80M",
    finalPrice: "100M",
    winner: "0xEF...7890",
    discount: "-10%",
    endedAt: "2025-05-29 09:30",
  },
  {
    imgUrl: "/images/sample4.png",
    collateral: "110M",
    finalPrice: "140M",
    winner: "0x12...3456",
    discount: "-15%",
    endedAt: "2025-06-03 15:10",
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

const ListLayout = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>COLLATERAL</TableHead>
        <TableHead>FINAL PRICE</TableHead>
        <TableHead>WINNER</TableHead>
        <TableHead>DISCOUNT</TableHead>
        <TableHead>ENDED AT</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {auctionData.map((item, idx) => (
        <TableRow key={idx} className="hover:bg-muted cursor-pointer">
          <TableCell className="flex items-center gap-2">
            <CollateralImage src={item.imgUrl} alt={`collateral-img-${idx}`} size={16} />
            {item.collateral}
          </TableCell>
          <TableCell>{item.finalPrice}</TableCell>
          <TableCell className="text-red-500">{item.winner}</TableCell>
          <TableCell className="text-red-500">{item.discount} High</TableCell>
          <TableCell>{item.endedAt}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const GridLayout = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 text-sm">
    {auctionData.map((item, idx) => (
      <Card
        key={idx}
        className="gap-y-1 p-4 rounded-lg border hover:shadow-sm transition-shadow cursor-pointer space-y-1"
      >
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-medium flex items-center gap-2">
            <CollateralImage src={item.imgUrl} alt={`img-${idx}`} size={20} />
            Collateral
          </span>
          <span>{item.collateral}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Final Price</span>
          <span>{item.finalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Winner</span>
          <span className="text-red-500">{item.winner}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Discount</span>
          <span className="text-red-500">{item.discount} High</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground font-medium">Ended At</span>
          <span>{item.endedAt}</span>
        </div>
      </Card>
    ))}
  </div>
);

const EndedAuctionTabContent: FC<EndedAuctionTabContentProps> = ({ layout }) => {
  return <div className="px-2">{layout === "list" ? <ListLayout /> : <GridLayout />}</div>;
};

export default EndedAuctionTabContent;
