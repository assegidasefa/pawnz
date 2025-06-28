"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import AdminTable from "./AdminTable/AdminTable";
import { AdminActionBar } from "./AdminActionBar";
import TokenCard from "./TokenCard";
import WalletCard from "./WalletCard";
import RecentTransactions from "./RecentTransactions";
import { Skeleton } from "../ui/skeleton";
import debounce from "lodash.debounce";

// --- Types ---
type TokenData = {
  amount: string;
  token: string;
  value: string;
  symbol: string;
};

type Transaction = {
  type: string;
  from: string;
  amount: string;
  token: string;
  status: string;
  statusColor: string;
  date: string;
  avatar: string;
};

type AvatarItem = {
  src: string;
  bg: string;
};

// --- Skeletons ---
const TokenCardSkeleton = () => (
  <div className="w-full border rounded-lg p-4 space-y-3">
    <Skeleton className="h-6 w-1/3" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-8 w-full" />
  </div>
);

const WalletCardSkeleton = () => (
  <div className="w-full border rounded-lg p-4 space-y-3">
    <Skeleton className="h-6 w-1/3" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-8 w-1/2" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

const RecentTransactionsSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-6 w-1/3" />
    {[...Array(2)].map((_, i) => (
      <Skeleton key={i} className="h-16 w-full rounded-md" />
    ))}
  </div>
);

// --- Main Component ---
const Admin = () => {
  const [activeAction, setActiveAction] = useState<
    "deposit" | "withdraw" | "adminTable"
  >("adminTable");

  const [loading, setLoading] = useState(true);
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [avatars, setAvatars] = useState<AvatarItem[]>([]);
  const [wallet, setWallet] = useState({
    address: "",
    netWorth: "",
    change: "",
  });
  const [transactionsToday, setTransactionsToday] = useState<Transaction[]>([]);
  const [transactionsOlder, setTransactionsOlder] = useState<Transaction[]>([]);
  // full transaction lists
  const [allTodayTxs, setAllTodayTxs] = useState<Transaction[]>([]);
  const [allOlderTxs, setAllOlderTxs] = useState<Transaction[]>([]);

  // filtered transactions shown in UI
  const [filteredTodayTxs, setFilteredTodayTxs] = useState<Transaction[]>([]);
  const [filteredOlderTxs, setFilteredOlderTxs] = useState<Transaction[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
const today = [
        {
          type: "Deposit",
          from: "0x123...",
          amount: "1000",
          token: "USDC",
          status: "Processing",
          statusColor: "text-yellow-500",
          date: "2025-06-21 10:00",
          avatar: "/pawnzLogo.svg",
        },
      ];

      const older = [
        {
          type: "Deposit",
          from: "0x123...",
          amount: "500",
          token: "USDC",
          status: "Completed",
          statusColor: "text-green-500",
          date: "2025-05-01 12:30",
          avatar: "/pawnzLogo.svg",
        },
      ];
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Replace with actual API calls
      setTokenData([
        {
          amount: "200K",
          token: "DINGOCOIN",
          value: "999.000.000",
          symbol: "PONKE",
        },
      ]);
      setAvatars([
        { src: "/pawnzLogo.svg", bg: "bg-blue-500" },
        { src: "/pawnzLogo.svg", bg: "bg-yellow-400" },
        { src: "/pawnzLogo.svg", bg: "bg-green-500" },
        { src: "/pawnzLogo.svg", bg: "bg-orange-400" },
        { src: "/pawnzLogo.svg", bg: "bg-purple-500" },
      ]);
      setWallet({
        address: "0x12c5A45b3A772d456e4c5D91fD7622B89F",
        netWorth: "$12.11B",
        change: "+25.3%",
      });
       setAllTodayTxs(today);
    setAllOlderTxs(older);

    setFilteredTodayTxs(today);
    setFilteredOlderTxs(older);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = useMemo(
    () =>
      debounce((query: string) => {
        const normalized = query.toLowerCase();

        const filterTx = (txs: Transaction[]) =>
          txs.filter(
            (tx) =>
              tx.token.toLowerCase().includes(normalized) ||
              tx.type.toLowerCase().includes(normalized) ||
              tx.status.toLowerCase().includes(normalized) ||
              tx.date.toLowerCase().includes(normalized) ||
              tx.from.toLowerCase().includes(normalized)
          );

        setFilteredTodayTxs(filterTx(allTodayTxs));
        setFilteredOlderTxs(filterTx(allOlderTxs));
      }, 300),
    [allTodayTxs, allOlderTxs]
  );

  return (
    <div className="w-full py-[8px] lg:py-[16px] px-[12px] 2xl:px-[24px]">
      <Button
        onClick={() => setActiveAction("adminTable")}
        className="mb-[8px] lg:mb-[16px] border cursor-pointer bg-card hover:bg-[#D5FF40] hover:text-black text-[12px] lg:text-[14px] font-bold"
      >
        Admin Settings
      </Button>
      <hr />
      <AdminActionBar
        activeAction={activeAction}
        setActiveAction={setActiveAction}
      />
      <hr />

      {activeAction === "adminTable" ? (
        <AdminTable />
      ) : (
        <div className="flex gap-2 justify-between lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            {loading ? (
              <TokenCardSkeleton />
            ) : (
              tokenData.map((offering, idx) => (
                <TokenCard
                  key={idx}
                  data={{
                    value: 100,
                    symbol: offering.symbol,
                    available: offering.amount,
                    image: "/pawnzLogo.svg",
                    estimatedFeeUsd: "$12",
                    estimatedFeeEth: "0.0012",
                  }}
                  onDeposit={() => console.log("Deposit triggered")}
                  onValueChange={(val) => console.log("New Value:", val)}
                  onTokenChange={() => console.log("Token select opened")}
                />
              ))
            )}
          </div>

          <div className="lg:w-1/2 w-full">
            {loading ? (
              <WalletCardSkeleton />
            ) : (
              <WalletCard
                walletAddress={wallet.address}
                netWorth={wallet.netWorth}
                netWorthChange={wallet.change}
                avatars={avatars}
                tokens={[]}
                onConnectWallet={() => console.log("Connect Wallet")}
                onDeposit={() => console.log("Deposit action")}
              />
            )}
          </div>
        </div>
      )}

      {(activeAction === "deposit" || activeAction === "withdraw") && (
        loading ? (
          <RecentTransactionsSkeleton />
        ) : (
          <RecentTransactions
            title="Recent Transactions"
            walletAddress={wallet.address}
            transactionsToday={filteredTodayTxs}
            transactionsOlder={filteredOlderTxs}
            onSearch={handleSearch}
          />
        )
      )}
    </div>
  );
};

export default Admin;
