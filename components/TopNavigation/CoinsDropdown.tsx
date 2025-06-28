"use client";
import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

// Icon imports
import EthereumIcon from "../icons/EthereumIcon";
import XrpIcon from "../icons/XrpIcon";
import BitCoinIcon from "../icons/BitCoinIcon";
import BinanceIcon from "../icons/BinanceIcon";
import AptosIcon from "../icons/AptosIcon";
import PolygonIcon from "../icons/PolygonIcon";
import TronIcon from "../icons/TronIcon";
import ChainLinkIcon from "../icons/ChainLinkIcon";
import AvalanceIcon from "../icons/AvalanceIcon";
import SolanaIcon from "../icons/SolanaIcon";

const coins = [
  { value: "ethereum", label: "Ethereum", Icon: <EthereumIcon /> },
  { value: "xrp", label: "XRP", Icon: <XrpIcon /> },
  { value: "chainLink", label: "ChainLink", Icon: <ChainLinkIcon /> },
  { value: "avalanche", label: "Avalanche", Icon: <AvalanceIcon /> },
  { value: "bitcoin", label: "Bitcoin", Icon: <BitCoinIcon /> },
  { value: "binance", label: "Binance", Icon: <BinanceIcon /> },
  { value: "aptos", label: "Aptos", Icon: <AptosIcon /> },
  { value: "polygon", label: "Polygon", Icon: <PolygonIcon /> },
  { value: "tron", label: "Tron", Icon: <TronIcon /> },
  { value: "solana", label: "Solana", Icon: <SolanaIcon /> },
];
interface Props {
  autoHeight?: boolean;
}
export const CoinsDropdown: React.FC<Props> = ({autoHeight=false}) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(coins[0]); // Default to first coin

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-md border border-input  text-sm font-medium">
          <div className="w-6 h-6">{selected.Icon}</div>
          {/* <span>{selected.label}</span> */}
          <ChevronDown className="w-4 h-4 opacity-70" />
        </button>
      </PopoverTrigger>
      <PopoverContent className={`w-[99vw]  md:h-auto md:w-44 p-2 shadow-none border-none md:border md:shadow-lg rounded-none md:rounded-xl bg-white dark:bg-zinc-900 mt-4 ${autoHeight ? 'h-auto' : 'h-[70vh]'}`}>
        <div className="grid grid-cols-2 md:flex md:flex-col gap-1">
          {coins.map((coin) => (
            <button
              key={coin.value}
              onClick={() => {
                setSelected(coin);
                setOpen(false);
              }}
              className={cn(
                "flex border items-center w-full py-2 px-4 rounded-md transition-colors text-sm hover:bg-accent",
                selected.value === coin.value
                  ? " font-medium hover:bg-accent"
                  : "bg-muted/50 hover:bg-accent"
              )}
            >
              <div className="w-8 h-8">{coin.Icon}</div>
              <span className="ml-3 text-left">{coin.label}</span>
              {selected.value === coin.value && (
                <Check className="ml-auto h-4 w-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
