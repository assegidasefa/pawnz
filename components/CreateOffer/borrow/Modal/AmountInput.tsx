"use client";
import { MinusCircleIcon, PlusCircleIcon, ChevronDownIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import ProgressBar from "@/components/Shared/ProgressBar";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import UsdcIcon from "@/components/icons/UsdcIcon";
interface AmountInputProps {
  label: string;
  value: number;
  coin: string;
  onChange: (delta: number) => void;
  onCoinChange?: (coin: string) => void;
  icon?: React.ReactNode;
  isAuction?: boolean;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  label,
  value,
  coin,
  onChange,
  onCoinChange,
  icon,
  isAuction = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);
  const [percentage,setPercentage] = useState(50);

  const handlePercentageChange = (newPercentage: number) => {
    console.log(newPercentage,'test2')
    setPercentage(newPercentage);
    // If you want to notify parent component about percentage change:
    // onChange?.({ ...data, percentage: newPercentage });
  };
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/,/g, ""); // remove formatting
    const parsed = parseFloat(input);
    if (!isNaN(parsed)) {
      setTempValue(parsed);
    }
  };

  const commitManualChange = () => {
    onChange(tempValue - value); // apply delta
    setIsEditing(false);
  };

  const coinOptions = [
    { value: "USDC", src: "/icons/usdc.png" },
    { value: "PONKE", src: "/icons/ponke.png" },
    { value: "BTC", src: "/icons/btc.png" },
  ];
  const selected = coinOptions.find((c) => c.value === coin);

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="flex gap-x-2">
        {/* Value Control */}
        <div className="flex items-center border rounded px-2 py-0 flex-1 bg-primary gap-x-2">
          <MinusCircleIcon
            className="cursor-pointer h-5 w-5 "
            onClick={() => onChange(-1_000_000)}
          />

          <span className="flex-1 text-center ">
            {isEditing ? (
              <input
                type="text"
                value={fmt(tempValue)}
                onChange={handleManualChange}
                onBlur={commitManualChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    commitManualChange();
                  }
                }}
                autoFocus
                className="w-full bg-transparent text-center outline-none"
              />
            ) : (
              <span
                onClick={() => {
                  setTempValue(value);
                  setIsEditing(true);
                }}
                className="cursor-text select-none"
              >
                {fmt(value)} {coin}
              </span>
            )}
          </span>

          <PlusCircleIcon
            className="cursor-pointer w-5 h-5"
            onClick={() => onChange(1_000_000)}
          />
        </div>

        {/* Coin Selector */}
        {!isAuction ? (
          <div className="border bg-primary rounded-sm">
            <Select value={coin} onValueChange={onCoinChange}>
              <SelectTrigger className="border-none rounded-sm px-2 h-10 ">
                {selected ? (
                  <Avatar className="w-6 h-6 rounded-full overflow-hidden">
                    <AvatarImage
                      src={selected.src}
                      alt={selected.value}
                      className="object-contain"
                    />
                    <AvatarFallback>
                      {selected.value.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <SelectValue placeholder="?" />
                )}
              </SelectTrigger>

              <SelectContent>
                {coinOptions.map((item, index) => (
                  <SelectItem key={item.value} value={item.value}>
                    <Avatar className="w-5 h-5 rounded-full overflow-hidden">
                      <AvatarImage
                        src={item.src}
                        alt={`Avatar ${index + 1}`}
                        className="object-contain"
                      />
                      <AvatarFallback>{item.value.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="flex border gap-x-2 px-4 py-1.5 rounded-sm">
            <div className="w-6 h-6">
              <UsdcIcon />
            </div>
          </div>
        )}
      </div>

      <div>
        <ProgressBar
          className="w-full"
          percentage={percentage}
          onChange={handlePercentageChange}
        />
      </div>
    </div>
  );
};
