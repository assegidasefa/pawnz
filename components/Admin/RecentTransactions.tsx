"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

type Transaction = {
  type: string;
  from: string;
  amount: string; // e.g. "+100" or "-50"
  token: string;
  status: string;
  statusColor: string;
  date: string;
  avatar: string;
  labelColor?: string;
};

interface RecentTransactionsProps {
  title: string;
  walletAddress: string;
  transactionsToday: Transaction[];
  transactionsOlder: Transaction[];
  onSearch?: (query: string) => void;
}

const truncateAddress = (address: string) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  title,
  walletAddress,
  transactionsToday,
  transactionsOlder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  const getAmountColor = (amount: string) =>
    amount.startsWith("-") ? "text-[#CCF562]" : "text-[#00B700]";

  const renderTransactions = (transactions: Transaction[]) => (
    <>
      {transactions.map((tx, i) => (
        <div
          key={i}
          className="flex justify-between items-center py-2 "
        >
          <div className="flex gap-3 items-center">
            <div className="relative w-[36px] h-[36px] lg:w-[42px] lg:h-[42px]">
              <Avatar className="w-full h-full bg-[#fcb900]">
                <AvatarImage src={tx.avatar} alt={tx.token} />
                <AvatarFallback>{tx.token.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-[13px] h-[13px] lg:w-[16px] lg:h-[16px] bg-[#E6EEFF] rounded-[4px] p-[2px] shadow-md translate-x-1/4 translate-y-1/4">
                <img
                  src={tx.avatar}
                  alt={tx.token}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h2
                className={`text-[12px] lg:text-[14px] font-medium ${
                  tx.labelColor || ""
                }`}
              >
                {tx.type}
              </h2>
              <p className="font-normal text-[12px] lg:text-[14px] text-gray-500 font-inter">
                {truncateAddress(walletAddress)}
              </p>
            </div>
          </div>

          <div className="text-right text-sm flex flex-col items-end justify-end">
            <div className="bg-card rounded-[4px] border flex gap-2 w-[134px] font-medium px-2 justify-center">
              <p
                className={`${getAmountColor(
                  tx.amount
                )} font-medium font-mono text-[12px] lg:text-[14px]`}
              >
                {tx.amount}
              </p>
              <p className="text-[12px] lg:text-[14px] text-gray-500">
                {tx.token}
              </p>
            </div>
            <div className="flex items-center justify-end gap-1 lg:gap-2 text-xs text-gray-500 pt-1">
              <div className="border bg-red-500/5 rounded-[4px] p-[2px]">
                <span
                  className={`text-[10px] lg:text-[14px] font-mono ${tx.statusColor}`}
                >
                  {tx.status}
                </span>
              </div>
              <span className="text-[10px] lg:text-[14px] font-mono">
                {tx.date}
              </span>
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-card">
                <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full py-4 bg-transparent rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[13px] lg:text-[16px] font-semibold">{title}</h2>
        <Card className="relative p-0 hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 " />
          <Input
            placeholder="Search"
            value={searchQuery}
          onChange={handleSearchChange}
            className="pl-10  rounded-md pr-2 py-1 text-[12px] lg:text-[14px]"
          />
        </Card>
      </div>
    
      <div className="space-y-4">
        {transactionsToday.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Today</p>
            {renderTransactions(transactionsToday)}
          </div>
        )}
      <hr />
        {transactionsOlder.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Earlier</p>
            {renderTransactions(transactionsOlder)}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
