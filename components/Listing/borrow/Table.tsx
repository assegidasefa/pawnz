"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircleIcon, XCircleIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { BorrowModal } from "@/components/CreateOffer/borrow/Modal/BorrowModal";
import ListingBorrowTableSkeleton from "./ListingBorrowTableSkeleton";

interface ListingBorrowTableProps {
  marketData: any[];
  layout: "list" | "grid";
  isLoading: boolean;
}

const ListingBorrowTable: React.FC<ListingBorrowTableProps> = ({
  marketData,
  layout,
  isLoading,
}) => {
  const router = useRouter();

  const handleRowClick = (index: number) => router.push(`/profile/${index}`);

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Accepted":
        return "text-[#059669]";
      case "Pending":
        return "text-[#CC5F62]";
      case "Listed":
        return "text-[#3B82F6]";
      default:
        return "";
    }
  };

  const getRowBackground = (activity: string) => {
    switch (activity) {
      case "Accepted":
        return "bg-accent";
      case "Pending":
        return "bg-destructive";
      default:
        return "";
    }
  };

  const renderActionButton = (item: any) => {
    const icon =
      item.activity === "Pending" ? <XCircleIcon /> : <PlusCircleIcon />;

    const content = (
      <Button className="flex items-center border-none shadow-none gap-2 px-2 py-1 text-sm bg-muted hover:bg-muted/70 border">
        {icon}
        {item.offer}
      </Button>
    );

    return item.activity === "Listed" ? (
      <BorrowModal>{content}</BorrowModal>
    ) : (
      content
    );
  };

  if (isLoading) return <ListingBorrowTableSkeleton />;

  return (
    <div className="flex flex-col gap-y-[10px] w-[86vw] md:w-full">
      {layout === "list" ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-3 font-normal text-[12px] text-muted-foreground flex md:ml-8 items-center">
                COIN
              </TableHead>
              <TableHead className="px-3 font-normal text-[12px] text-muted-foreground">
                ACTIVITY
              </TableHead>
              <TableHead className="px-3 text-center md:pl-4 md:text-left font-normal text-[12px] text-muted-foreground">
                ASK
              </TableHead>
              <TableHead className="px-3 font-normal md:pl-4 md:text-left text-[12px] text-muted-foreground text-center">
                OFFER
              </TableHead>
              <TableHead className="px-3 font-normal text-[12px] text-muted-foreground text-right">
                TIME
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((item, idx) => (
              <TableRow
                key={idx}
                className={`border-none h-[41px] w-full space-x-4 ${getRowBackground(
                  item.activity
                )}`}
              >
                <TableCell
                  className="cursor-pointer px-3"
                  onClick={() => handleRowClick(idx)}
                >
                  <div className="flex items-center space-x-2">
                    {item.image ? (
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={32}
                          height={32}
                          className="mr-3 rounded-sm"
                        />
                        </div>
                    ) : (
                      <div className="w-8 h-8 border rounded-sm" />
                    )}
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className={`${getActivityColor(item.activity)} px-3`}>
                  {item.activity}
                </TableCell>
                <TableCell className="px-3">
                  <div className="flex gap-x-3 items-center">
                    {item.askImage ? (
                      <Image
                        src={item.askImage}
                        alt="ask-icon"
                        width={16}
                        height={16}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-4 h-4">
                        <UsdcIcon />
                      </div>
                    )}
                    {item.ask}
                  </div>
                </TableCell>
                <TableCell className="text-center px-3">
                  {renderActionButton(item)}
                </TableCell>
                <TableCell className="text-right px-3">{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {marketData.map((item, idx) => (
            <Card
              key={idx}
              className={`rounded-lg shadow p-4 flex flex-col gap-1 ${getRowBackground(
                item.activity
              )}`}
            >
              <div className="flex items-center gap-2">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="rounded-sm border object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-sm border" />
                )}
                <span className="font-medium text-sm">{item.name}</span>
              </div>

              <div
                className={`text-sm ${getActivityColor(
                  item.activity
                )} flex justify-between w-full`}
              >
                <span className="font-medium">Activity:</span>
                <div>{item.activity}</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Ask:</span>
                <div className="flex items-center gap-2">
                  {item.askImage ? (
                    <Image
                      src={item.askImage}
                      alt="ask-icon"
                      width={16}
                      height={16}
                      className="rounded-full object-contain"
                    />
                  ) : (
                    <div className="w-4 h-4">
                      <UsdcIcon />
                    </div>
                  )}
                  <span>{item.ask}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div className="flex items-center">
                  {renderActionButton(item)}
                </div>
                <div className="flex justify-end">
                  <span className="font-medium mr-1">Time:</span>
                  {item.time}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingBorrowTable;
