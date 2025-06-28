"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type Wallet = {
  id: string;
  name: string;
  icon: string; // icon path
};

type WalletSelectorProps = {
  onChange?: (wallet: Wallet) => void;
};

export function WalletSelector({ onChange }: WalletSelectorProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

  useEffect(() => {
    // Mocked API call
    async function fetchWallets() {
      const data: Wallet[] = [
        { id: "eth", name: "ETH Wallet", icon: "/icons/eth.svg" },
        { id: "usdc", name: "USDC Wallet", icon: "/icons/usdc.svg" },
        // Add more wallets as needed
      ];
      setWallets(data);
      setSelectedWallet(data[0]);
    }

    fetchWallets();
  }, []);

  const handleSelect = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    onChange?.(wallet);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex items-center justify-between bg-card border px-4 py-2 max-w-[160px] lg:w-[160px] lg:h-[36px]">
          <div className="flex items-center gap-2">
            <h1 className="font-medium text-[10px] lg:text-[14px]">
              {selectedWallet?.name || "Select Wallet"}
            </h1>
            {selectedWallet?.icon && (
              <Image
                src={selectedWallet.icon}
                alt={selectedWallet.name}
                width={16}
                height={16}
                className="rounded-full"
              />
            )}
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-2">
        <div className="space-y-1">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleSelect(wallet)}
              className="flex border h-9 cursor-pointer w-full items-center gap-2 text-left px-2 py-1 hover:bg-muted rounded"
            >
              {wallet.name}
              <Image
                src={wallet.icon}
                alt={'icon'}
                width={16}
                height={16}
                className="rounded-full"
              />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
