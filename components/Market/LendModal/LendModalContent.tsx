// LendModalContent.tsx
"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock1 } from "lucide-react";
import UserLoanCard from "@/components/Shared/LendandBorrowModalHeaderCard";
import { AmountInput } from "@/components/CreateOffer/borrow/Modal/AmountInput";
import ProgressBar from "@/components/Shared/ProgressBar";

type CoinOption = {
  symbol: string;
  iconUrl?: string;
  decimals?: number;
};

type LoanData = {
  borrowerName: string;
  avatarUrl: string;
  askingAmount: number;
  collateralAmount: number;
  priceChange: string;
  contractAddress: string;
  alreadyFundedPercentage: number;
  claimableCollateral: string;
  timeLeft: string;
  ltv: {
    value: number;
    level: string;
    yield: string;
    estimatedYield: string;
    marginCall: number;
    liquidation: number;
  };
};

type Props = {
  coinOptions: CoinOption[];
  initialCoin?: string;
  initialOffer?: number;
  data: LoanData;
  onOfferChange?: (offer: number, coin: string) => void;
};

export default function LendModalContent({
  coinOptions,
  initialCoin = "USDC",
  initialOffer = 0,
  data,
  onOfferChange,
}: Props) {
  const [offer, setOffer] = useState(initialOffer);
  const [coin, setCoin] = useState(
    coinOptions.find((c) => c.symbol === initialCoin) || coinOptions[0]
  );

  const handleOfferChange = (delta: number) => {
    const updated = Math.max(offer + delta, 0);
    setOffer(updated);
    onOfferChange?.(updated, coin.symbol);
  };

  const handleCoinChange = (symbol: string) => {
    const selected = coinOptions.find((c) => c.symbol === symbol);
    if (selected) {
      setCoin(selected);
      onOfferChange?.(offer, selected.symbol);
    }
  };

  return (
    <div className="w-full shadow-none m-0">
      <div className="space-y-4">
        <div className="p-4 flex flex-col space-y-3 overflow-y-auto">
          <UserLoanCard
            name={data.borrowerName}
            avatarUrl={data.avatarUrl}
            askingAmount={data.askingAmount}
            collateralAmount={data.collateralAmount}
            priceChange={data.priceChange}
            contractAddress={data.contractAddress}
          />

          <hr />

          {/* Offer Input */}
          <AmountInput
            label="Offer"
            value={offer}
            coin={coin.symbol}
            onChange={handleOfferChange}
            onCoinChange={handleCoinChange}
          />

          {/* Claimable Collateral */}
          <div className="flex flex-col gap-y-2 ">
            <div className="text-sm text-gray-600">Claimable Collateral</div>
            <div className="flex relative gap-2 items-end">
              <div className="flex justify-center w-full border py-2.5 px-2 rounded-sm">
                <div className="flex gap-x-1">
                  <div>{data.claimableCollateral}</div>
                </div>
              </div>
              <div className="flex border gap-x-2 py-2.5 px-2 rounded-sm">
                <div className="w-6 h-6 border rounded-full" />
              </div>
            </div>
          </div>

          {/* Already Funded */}
          <div className="flex flex-col gap-y-2">
            <div className="text-sm text-gray-600">Already Funded</div>
            <div className="relative w-full border rounded-sm overflow-hidden">
              <Progress
                value={data.alreadyFundedPercentage}
                className="h-9.5 rounded-sm"
                indicatorClassName="bg-[#D5FF40]"
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-medium">
                {data.alreadyFundedPercentage}%
              </span>
            </div>
          </div>

          {/* Time Left */}
          <div className="flex justify-between">
            <div className="text-sm text-gray-600 mb-2">Time Left</div>
            <div className="flex gap-x-2 items-center text-sm">
              <span>{data.timeLeft}</span>
              <Clock1 width={12} height={12} />
            </div>
          </div>

          <hr />

          {/* LTV Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">LTV</span>
              <div className="flex items-center gap-2 text-[#CC5F63] text-sm">
                <span>{data.ltv.value}%</span>
                <span>{data.ltv.level}</span>
                <span>{data.ltv.yield}</span>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Yield</span>
                <span>{data.ltv.estimatedYield}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Margin Call</span>
                <span>{data.ltv.marginCall}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Liquidation</span>
                <span>{data.ltv.liquidation}%</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-2">
              This borrower is asking{" "}
              <span className="font-semibold">{data.askingAmount.toLocaleString()} {coin.symbol}</span>, they are
              locking <span className="font-semibold">{data.collateralAmount.toLocaleString()} PONKE</span> as
              collateral.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
