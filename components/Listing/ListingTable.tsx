import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import UsdcIcon from "../icons/UsdcIcon";
import { BorrowModal } from "../CreateOffer/borrow/Modal/BorrowModal";
import { PlusCircleIcon } from "lucide-react";
import { LendModal } from "../Market/LendModal/LendModal";

type Token = {
  name: string;
  symbol: string;
  color: string;
  activity: "Accepted" | "Pending" | string;
  ask: string;
  offer: string;
  isPending: boolean;
  time: string;
};

type ListingTableProps = {
  tokens: any[];
  headers: string[];
};

const ListingTable: React.FC<ListingTableProps> = ({ tokens, headers }) => {
  return (
    <div className="overflow-auto w-[86vw] md:w-full">
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
        <TableBody>
          {tokens.map((token, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 ${token.color} rounded-sm flex items-center justify-center`}
                  >
                    <span className="text-xs font-bold">
                      {token.symbol.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium">{token.name}</span>
                </div>
              </TableCell>

              <TableCell className="px-6 py-4">
                <div
                  
                  className={
                    token.activity === "Accepted"
                      ? " text-green-800 "
                      : token.activity === "Pending"
                      ? " text-orange-800"
                      : " text-blue-800 "
                  }
                >
                  {token.activity}
                </div>
              </TableCell>

              <TableCell className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className="flex gap-x-3 items-center">
                    <div className="w-4 h-4">
                      <UsdcIcon />
                    </div>
                    {token.ask}
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-4">
                <LendModal
                    children={
                      <Button className="flex cursor-pointer gap-x-2  w-auto bg-transparent hover:bg-transparent border-none shadow-none">
                        <PlusCircleIcon />
                        {token.offer}
                      </Button>
                    }
                  />
              </TableCell>

              <TableCell className="px-6 py-4 text-sm text-gray-500">
                {token.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListingTable;
