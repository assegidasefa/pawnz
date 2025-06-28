"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import ProgressBar from "../Shared/ProgressBar";
import { AddMemecoinDialog } from "./AddMemeCoinDialog";
import { SearchDialog } from "../TopNavigation/SearchDialog";

export type TokenData = {
  value: number;
  symbol: string;
  available: string;
  image: string;
  estimatedFeeUsd: string;
  estimatedFeeEth: string;
};

interface TokenCardProps {
  data: TokenData;
  onValueChange?: (newValue: number) => void;
  onDeposit?: () => void;
  onTokenChange?: () => void;
}

const TokenCard: React.FC<TokenCardProps> = ({
  data,
  onValueChange,
  onDeposit,
  onTokenChange,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number>(data.value);

  const increaseValue = () => {
    const newValue = value + 1;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const decreaseValue = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      onValueChange?.(newValue);
    }
  };

  return (
    <div>
      <div className="flex justify-start py-2">
        <h1 className="text-[16px] lg:text-[20px] font-normal font-sans">
          Select Token
        </h1>
      </div>

      <Card className="bg-transparent space-y-3 p-3 w-full">
        <div className="flex flex-col gap-y-2 w-full">
          {/* Value input + token select */}
          <div className="flex items-end gap-2">
            <div className="flex bg-accent justify-between items-center w-full border p-2 rounded-sm">
              <MinusCircleIcon
                width={24}
                height={24}
                onClick={decreaseValue}
                className="cursor-pointer"
              />
              <div className="flex gap-x-1 text-[12px] lg:text-[14px]">
                <span>{value}</span>
                <span>{data.symbol}</span>
              </div>
              <PlusCircleIcon
                width={24}
                height={24}
                onClick={increaseValue}
                className="cursor-pointer"
              />
            </div>

            <SearchDialog
              trigger={
                <div
                  onClick={() => {
                    onTokenChange?.();
                  }}
                  className="bg-accent flex items-center border gap-x-2 p-2 rounded-sm cursor-pointer"
                >
                  <div className="w-6 h-6 border rounded-full" />
                  <ChevronDownIcon />
                </div>
              }
            />
          </div>

          {/* Progress Bar */}
          <ProgressBar className="w-full" />

          {/* Available */}
          <div className="flex justify-between text-[12px] lg:text-[14px] text-[#666666]">
            <span>Available</span>
            <div className="flex items-center gap-x-1 border px-2 py-1 rounded-md">
              <span>
                <span className="text-primary-foreground">
                  {data.available}{" "}
                </span>
                {data.symbol}
              </span>
              <Image
                src={data.image}
                alt={data.symbol}
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Deposit */}
          <Button
            onClick={onDeposit}
            style={{ backgroundColor: "#BBEE4D" }}
            className="w-full h-[36px] lg:h-[44px] rounded-[8px] text-[12px] lg:text-[14px] text-[#171717] font-medium"
          >
            Deposit Now
          </Button>

          {/* Estimated Fee */}
          <div className="flex justify-between text-[12px] lg:text-[14px] text-[#666666]">
            <span>Estimated Fee:</span>
            <div className="flex items-center gap-x-1">
              <span>
                {data.estimatedFeeUsd} ≈ {data.estimatedFeeEth} ETH
              </span>
              <Image
                src={data.image}
                alt={data.symbol}
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TokenCard;
