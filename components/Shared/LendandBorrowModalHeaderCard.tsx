"use client";

import { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CopyIcon } from "lucide-react";
import MoneyIcon from "@/components/icons/MoneyIcon";
import UsdcIcon from "@/components/icons/UsdcIcon";
import { formatNumber, shortenAddress } from "@/lib/utils"; // ensure you have a formatNumber util
import { toast } from "sonner";

type LendandBorrowModalHeaderCardProps = {
  name: string;
  avatarUrl?: string;
  askingAmount: number;
  collateralAmount: number;
  priceChange: string; // e.g. "0.14 USD +7.31%"
  contractAddress: string;
  moneyIcon?: React.ReactNode;
  usdcIcon?: React.ReactNode;
};

const LendandBorrowModalHeaderCard: FC<LendandBorrowModalHeaderCardProps> = ({
  name,
  avatarUrl,
  askingAmount,
  collateralAmount,
  priceChange,
  contractAddress,
  moneyIcon = <MoneyIcon />,
  usdcIcon = <UsdcIcon />,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Wallet address copied to clipboard.");
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12 ">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} />
          ) : (
            <AvatarFallback className="bg-transparent text-lg border">
              {name[0]}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="flex flex-col w-full gap-y-3">
          <div className="flex justify-between w-full">
            <span className="font-medium">{name}</span>
            <span className="flex items-center gap-1 border px-1 rounded-sm">
              {formatNumber(collateralAmount)}
              <div className="w-4 h-4">{moneyIcon}</div>
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <div className="text-xs text-[#666]">Asking for</div>
            <span className="flex gap-1 border px-1 rounded-sm items-center">
              {formatNumber(askingAmount)}{" "}
              <div className="w-4 h-4">{usdcIcon}</div>
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <div className="text-xs text-[#666]">Collateral</div>
            <span className="flex gap-1 border px-1 rounded-sm items-center">
              {formatNumber(collateralAmount)}{" "}
              <div className="w-4 h-4 rounded-full border flex items-center justify-center">
                {usdcIcon}
              </div>
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div className="text-xs text-[#666] flex justify-between">
        <div className="flex items-center gap-3">
          Price
          <div className="p-1 border rounded-md bg-[#4ADE80]/8 text-[#00B700] text-sm">
            {priceChange}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex">Contract</div>
          <div className="border p-1 rounded-md flex gap-2 items-center text-sm">
            {shortenAddress(contractAddress)}{" "}
            <CopyIcon
              width={16}
              height={16}
              onClick={handleCopy}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendandBorrowModalHeaderCard;
