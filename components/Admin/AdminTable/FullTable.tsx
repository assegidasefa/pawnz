"use client";

import React from "react";
import Image from "next/image";
import { Ban, CircleCheck, CopyIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MarketItem } from "./AdminTable";
import { shortenAddress } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  data: MarketItem[];
  filter?: "active" | "inactive";
  onToggleStatus: (id: number) => void;
  layout: "grid" | "list";
}

const FullTable: React.FC<Props> = ({
  data,
  filter,
  onToggleStatus,
  layout = "list",
}) => {
  const filteredData =
    filter === "active"
      ? data.filter((item) => item.isActive)
      : filter === "inactive"
      ? data.filter((item) => !item.isActive)
      : data;

  return (
    <div>
      {layout === "list" ? (
        <div className="flex flex-col gap-y-2 w-full ">
          <Table className="px-0 text-sm">
            <TableHeader></TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} className="border-none text-sm px-0">
                  <TableCell>
                    <div className="flex items-center space-x-[1px]">
                      <Image
                        src={item.symbol}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="border rounded-sm"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 items-center text-sm border p-1 rounded-md">
                      {shortenAddress(item.address)}
                      <CopyIcon width={16} height={16} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" p-1 border rounded-md flex gap-x-2 bg-[#4ADE80]/10">
                      <span>{item.price}</span>
                      <span
                        className={`${
                          item.change.startsWith("-")
                            ? "text-[#CC5F62]"
                            : "text-[#00B700]"
                        }`}
                      >
                        {!item.change.startsWith("-") && "+"}
                        {item.change}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <span
                      className={`border text-sm font-medium px-1 py-1 rounded ${
                        item.isActive
                          ? "text-[#00B700] border-[#00B700] "
                          : "text-[#CC5F62] border-[#CC5F62] "
                      }`}
                    >
                      {item.isActive ? "Active" : "Inactive"}
                    </span>
                  </TableCell>

                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`border px-0 shadow-none ${
                        item.isActive
                          ? "border-none text-[#CC5F62] hover:bg-[#CC5F62]/70"
                          : "border-none text-[#BBEE4D] hover:bg-[#BBEE4D]/70"
                      }`}
                      onClick={() => onToggleStatus(item.id)}
                    >
                      {item.isActive ? <Ban /> : <CircleCheck />}

                      {item.isActive ? "Disable" : "Enable"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-4 gap-4 text-sm">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              className="!p-0 overflow-hidden transition-colors border rounded-md"
            >
              <CardContent className="p-4 flex flex-col gap-y-1  ">
                {/* Coin Info */}
                <div className="flex items-center gap-x-2">
                  <Image
                    src={item.symbol}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="border rounded-sm"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>

                {/* Address */}
                <div className="flex items-center justify-between gap-x-1 border rounded px-2 py-1 bg-muted/40">
                  <span className="truncate">
                    {shortenAddress(item.address)}
                  </span>
                  <CopyIcon width={16} height={16} />
                </div>

                {/* Price & Change */}
                <div className="flex items-center justify-between gap-x-2 border rounded px-2 py-1 bg-[#4ADE80]/10">
                  <span>{item.price}</span>
                  <span
                    className={`font-medium ${
                      item.change.startsWith("-")
                        ? "text-[#CC5F62]"
                        : "text-[#00B700]"
                    }`}
                  >
                    {!item.change.startsWith("-") && "+"}
                    {item.change}
                  </span>
                </div>

                {/* Status */}
                <div className="flex justify-end">
                  <span
                    className={`border px-2 py-1 rounded text-sm font-medium  ${
                      item.isActive
                        ? "text-[#00B700] border-[#00B700]"
                        : "text-[#CC5F62] border-[#CC5F62]"
                    }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                {/* Action Button */}
                <div>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`w-full flex items-center justify-center gap-2 text-xs shadow-none ${
                      item.isActive
                        ? "text-[#CC5F62] hover:bg-[#CC5F62]/70"
                        : "text-[#BBEE4D] hover:bg-[#BBEE4D]/70"
                    }`}
                    onClick={() => onToggleStatus(item.id)}
                  >
                    {item.isActive ? <Ban /> : <CircleCheck />}
                    {item.isActive ? "Disable" : "Enable"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FullTable;
