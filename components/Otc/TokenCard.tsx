// Updated TokenCard to show only coin image in selected area, not text
"use client";

import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import ProgressBar from "../Shared/ProgressBar";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

const coinImages: Record<string, string> = {
  USDC: "/icons/usdc.png",
  SOL: "/icons/sol.png",
  ETH: "/icons/eth.png",
  BONK: "/icons/bonk.png",
  PONKE: "/icons/ponke.png",
  DOGE: "/icons/doge.png",
  SHIBA: "/icons/shiba.png",
};

type TokenData = {
  amount: string;
  token: string;
  value: string | number;
  symbol: string;
};

type TokenCardProps = {
  data: TokenData;
  coinOptions: string[];
  onChange?: (updated: TokenData) => void;
  showAvatars?: boolean;
  avatars?: { src: string; bg: string }[];
};

const TokenCard = ({
  data,
  coinOptions,
  onChange,
  showAvatars = false,
  avatars = [],
}: TokenCardProps) => {
  const [value, setValue] = useState(String(data.value) || "0");
  const [selectedToken, setSelectedToken] = useState(data.symbol || "?");
  const [percentage,setPercentage] = useState(50);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    if (/^\d*\.?\d*$/.test(newVal)) {
      setValue(newVal);
      onChange?.({ ...data, value: newVal });
    }
  };

  const handlePercentageChange = (newPercentage: number) => {
    setPercentage(newPercentage);
    // If you want to notify parent component about percentage change:
    // onChange?.({ ...data, percentage: newPercentage });
  };

  const increment = () => {
    const newValue = String(Number(value) + 1);
    setValue(newValue);
    onChange?.({ ...data, value: newValue });
  };

  const decrement = () => {
    const newValue = String(Math.max(0, Number(value) - 1));
    setValue(newValue);
    onChange?.({ ...data, value: newValue });
  };

  const handleSelect = (newToken: string) => {
    setSelectedToken(newToken);
    onChange?.({ ...data, symbol: newToken });
  };

  return (
    <Card className="space-y-3 p-3 pt-12">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex items-center justify-between">
          <span className="text-sm">You Have</span>
          <div className="flex items-center space-x-2 text-sm">
            <span>{data.amount || "?"}</span>
            <span>{data.token || "?"}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Image
                src="/icons/wallet.png"
                alt="wallet"
                width={16}
                height={16}
              />
            </Button>
          </div>
        </div>

        <div className="flex items-end gap-2">
          <div className="flex justify-between items-center w-full border p-2 rounded-sm bg-primary">
            <button onClick={decrement}>
              <MinusCircleIcon width={24} height={24} />
            </button>
            <div className="flex items-center gap-x-1 font-semibold text-sm">
              <input
                value={value}
                onChange={handleValueChange}
                className="w-20 text-center bg-transparent border-none focus:outline-none"
              />
              {/* <span>{selectedToken}</span> */}
            </div>
            <button onClick={increment}>
              <PlusCircleIcon width={24} height={24} />
            </button>
          </div>

          <div className="relative">
            <div className="flex items-center px-2 py-1 border rounded-sm bg-primary">
              {coinImages[selectedToken] ? (
                <Image
                  src={coinImages[selectedToken]}
                  alt={selectedToken}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 border rounded-full" />
              )}
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </div>
            <select
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleSelect(e.target.value)}
              value={selectedToken}
            >
              {coinOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ProgressBar className="w-full" percentage={percentage} onChange={handlePercentageChange}  />
        <div >
          {showAvatars && avatars.length > 0 && (
            <div className="flex md:hidden">
              {avatars.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full border-2 border-white ${
                    item.bg
                  } flex items-center justify-center ${
                    index !== 0 ? "-ml-2" : ""
                  }`}
                >
                  <Avatar className="w-full h-full rounded-full overflow-hidden">
                    <AvatarImage
                      src={item.src}
                      alt={`Avatar ${index + 1}`}
                      className="object-contain"
                    />
                    <AvatarFallback>PZ</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TokenCard;
