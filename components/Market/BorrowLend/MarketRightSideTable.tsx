import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircleIcon, XCircleIcon } from "lucide-react";
import { LendModal } from "@/components/Market/LendModal/LendModal";
import Image from "next/image";

const MarketRightSideTable = ({
  tokens,
  headers,
  layout = "list",
}: {
  tokens: any[];
  headers: string[];
  layout?: "grid" | "list";
}) => {
  return (
    <div className="w-full overflow-auto">
      {layout === "list" ? (
        <Table className="border-separate border-spacing-y-2">
          <TableHeader className="">
            <TableRow className="">
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className={`font-medium border-b text-muted-foreground text-[12px] py-3 ${index === headers?.length - 1 ? "text-right" : "text-center"
                    }`}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="w-auto gap-x-1 !border-t-2 border-black">
            {tokens.map((token, index) => {
              const activityColor =
                token.activity === "Accepted"
                  ? "text-[#059669]"
                  : token.activity === "Pending"
                    ? "text-[#CC5F62]"
                    : token.activity === "Offer"
                      ? "text-red-600"
                      : token.activity === "Listed"
                        ? "text-blue-500"
                        : token.activity === "Won"
                          ? "text-red-500"
                          : token.activity === "Auction"
                            ? "text-red-800"
                            : token.activity === "Filled"
                              ? "text-green"
                              : "";

              return (
                <TableRow
                  key={index}
                  className={`w-full rounded-lg overflow-hidden`}
                >
                  <TableCell className="px-0.5 py-1 rounded-l-lg">
                    <div className="flex items-center space-x-1">

                      <div className="w-8 h-8 rounded-sm overflow-hidden">
                        <Image
                          src={token.image}
                          alt={token.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{token.name}</span>
                    </div>
                  </TableCell>

                  <TableCell className={`px-0.5 py-1 ${activityColor}`}>
                    {token.activity}
                  </TableCell>

                  <TableCell className="px-0.5 py-1">

                    <div className="flex items-center space-x-2">
                      <div className="flex gap-x-2 items-center">
                        {token.askImage && (
                          <div className="w-4 h-4 overflow-hidden rounded-full">
                            <Image
                              src={token.askImage}
                              alt="ask"
                              width={16}
                              height={16}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span>{token.ask}</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="px-0.5 py-1 text-right">
                    {token.activity === "Listed" ? (
                      <LendModal>
                        <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                          <PlusCircleIcon />
                          {token.offer}
                        </Button>
                      </LendModal>
                    ) : (
                      <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                        {token.activity === "Pending" ? (
                          <XCircleIcon />
                        ) : (
                          <PlusCircleIcon />
                        )}
                        {token.offer}
                      </Button>
                    )}
                  </TableCell>

                  <TableCell className="px-0.5 py-1 text-sm text-gray-500 text-right rounded-r-lg">
                    {token.time}
                  </TableCell>
                </TableRow>
              );

            })
            }
          </TableBody>
        </Table>
      ) : (
        // Grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 py-2">
          {tokens.map((token, index) => {
            const activityColor =
              token.activity === "Accepted"
                ? "text-[#059669]"
                : token.activity === "Pending"
                  ? "text-[#CC5F62]"
                  : token.activity === "Offer"
                    ? "text-red-600"
                    : token.activity === "Listed"
                      ? "text-blue-500"
                      : token.activity === "Won"
                        ? "text-red-500"
                        : token.activity === "Auction"
                          ? "text-red-800"
                          : token.activity === "Filled"
                            ? "text-green"
                            : "";

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 min-h-8 min-w-8 rounded-sm overflow-hidden">
                    <Image
                      src={token.image}
                      alt={token.name}
                      width={32}
                      height={32}
                      className="object-cover size-full"
                    />
                  </div>
                  <span className="font-medium">{token.name}</span>
                </div>
                <div className={`text-sm ${activityColor}`}>{token.activity}</div>
                <div className="flex items-center gap-2">
                  {token.askImage && (
                    <div className="w-4 h-4 overflow-hidden rounded-full">
                      <Image
                        src={token.askImage}
                        alt="ask"
                        width={16}
                        height={16}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span>{token.ask}</span>
                </div>
                <div className="flex justify-end">
                  {token.activity === "Listed" ? (
                    <LendModal>
                      <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                        <PlusCircleIcon />
                        {token.offer}
                      </Button>
                    </LendModal>
                  ) : (
                    <Button className="flex cursor-pointer gap-x-2 w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                      {token.activity === "Pending" ? (
                        <XCircleIcon />
                      ) : (
                        <PlusCircleIcon />
                      )}
                      {token.offer}
                    </Button>
                  )}
                </div>
                <div className="text-xs text-gray-500 text-right">{token.time}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MarketRightSideTable;
