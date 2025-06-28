"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { PlusCircleIcon } from "lucide-react";
import { format } from "date-fns";

import { AmountInput } from "./AmountInput";
import { LTVDetails } from "./LTVDetails";
import CustomCalendar from "@/components/Shared/CustomCalendar";
import UserLoanCard from "../../../Shared/LendandBorrowModalHeaderCard";

type CoinOption = {
  symbol: string;
  iconUrl?: string;
  decimals?: number;
};

type BorrowModalProps = {
  defaultCollateral?: number;
  defaultAsk?: number;
  defaultMinAsk?: number;
  defaultCollateralCoin?: string;
  defaultAskCoin?: string;
  coinOptions: CoinOption[];
  borrowerData: {
    name: string;
    avatarUrl: string;
    askingAmount: number;
    collateralAmount: number;
    priceChange: string;
    contractAddress: string;
  };
  onCreateOffer: (data: {
    collateral: number;
    ask: number;
    minAsk: number;
    date: Date | undefined;
    collateralCoin: string;
    askCoin: string;
  }) => void;
};

export default function BorrowModalContent({
  defaultCollateral = 1_998_000_000,
  defaultAsk = 999_000_000,
  defaultMinAsk = 100_000,
  defaultCollateralCoin = "PONKE",
  defaultAskCoin = "USDC",
  coinOptions,
  borrowerData,
  onCreateOffer,
}: BorrowModalProps) {
  const [collateral, setCollateral] = useState(defaultCollateral);
  const [collateralCoin, setCollateralCoin] = useState(defaultCollateralCoin);

  const [ask, setAsk] = useState(defaultAsk);
  const [askCoin, setAskCoin] = useState(defaultAskCoin);

  const [minAsk, setMinAsk] = useState(defaultMinAsk);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleSubmit = () => {
    onCreateOffer({
      collateral,
      ask,
      minAsk,
      date,
      collateralCoin,
      askCoin,
    });
  };

  return (
    <div className="m-0">
      <div className="space-y-4">
        <div className="bg-card transition-colors overflow-y-auto p-0">
          <CardContent className="flex flex-col space-y-4 px-0">
            <div className="p-6 md:px-6 md:py-4 flex flex-col space-y-4">
              {/* Header Info */}
              <UserLoanCard
                name={borrowerData.name}
                avatarUrl={borrowerData.avatarUrl}
                askingAmount={borrowerData.askingAmount}
                collateralAmount={borrowerData.collateralAmount}
                priceChange={borrowerData.priceChange}
                contractAddress={borrowerData.contractAddress}
              />

              <hr />

              {/* Amount Inputs */}
              <AmountInput
                label="Collateral"
                value={collateral}
                coin={collateralCoin}
                onChange={(delta) =>
                  setCollateral((prev) => Math.max(prev + delta, 0))
                }
                onCoinChange={setCollateralCoin}
              />

              <AmountInput
                label="Ask for"
                value={ask}
                coin={askCoin}
                onChange={(delta) =>
                  setAsk((prev) => Math.max(prev + delta, 0))
                }
                onCoinChange={setAskCoin}
              />

              <AmountInput
                label="Minimum Ask"
                value={minAsk}
                coin={askCoin}
                onChange={(delta) =>
                  setMinAsk((prev) => Math.max(prev + delta, 0))
                }
                onCoinChange={setAskCoin}
              />

              {/* Date Picker */}
              <div>
                <div className="text-sm text-gray-600 mb-2">Duration</div>
                <div className="flex items-center gap-2">
                  <div className="w-full border text-center p-2 rounded-sm bg-primary">
                    {date ? format(date, "dd/MM/yyyy") : "Pick a date"}
                  </div>
                  <CustomCalendar date={date} setDate={setDate} />
                </div>
              </div>

              {/* LTV Details */}
              <LTVDetails
                ask={ask}
                collateral={collateral}
                askCoin={askCoin}
                coin={collateralCoin}
              />
            </div>

            {/* Footer */}
            <div className="m-0 px-0 pb-0 md:pb-6 pt-0 md:px-6 md:py-4">
              <Button
                className="w-[100vw] md:w-full bg-[#BBEE4D] hover:bg-[#BBEE4D]/70 p-0 text-black font-semibold md:py-3 rounded-none md:rounded-lg"
                onClick={handleSubmit}
              >
                <div className="flex items-center justify-center gap-2">
                  <PlusCircleIcon width={16} height={16} /> Create Offer
                </div>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
