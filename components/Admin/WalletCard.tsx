"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Copy, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { toast, Toaster } from "sonner";

export type WalletToken = {
  name: string;
  icon: string;
  value: string;
  change: string;
  address: string;
};

export type AvatarItem = {
  src: string;
  bg: string;
};

interface WalletCardProps {
  walletAddress: string;
  netWorth: string;
  netWorthChange: string;
  tokens: WalletToken[];
  avatars: AvatarItem[];
  onConnectWallet?: () => void;
  onDeposit?: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({
  walletAddress,
  netWorth,
  netWorthChange,
  tokens,
  avatars,
  onConnectWallet,
  onDeposit,
}) => {
  const [copied, setCopied] = useState(false);

  const truncateAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    toast.success("Wallet address copied to clipboard.");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="flex justify-between py-2">
        <h1 className="text-[16px] lg:text-[20px] font-medium">Connect Wallet</h1>
        <Button
          onClick={onConnectWallet}
          className="w-[114px] h-[26px] lg:h-[32px] bg-[#BBEE4D] rounded-[8px] px-4 text-[12px] lg:text-[14px] text-[#171717] font-medium"
        >
          <PlusCircle />
          Add Wallet
        </Button>
      </div>

      <Card className="bg-transparent space-y-3 p-3 w-full rounded-[8px]">
        {/* Top Row */}
        <div className="flex justify-between gap-2">
          <Button
            onClick={onDeposit}
            className="lg:w-[137px] h-[35px] lg:h-[44px] rounded-[8px] bg-card border font-medium text-[12px] lg:text-[14px]"
          >
            ETH Wallet
            <Image
              src="/pawnzLogo.svg"
              alt="ETH"
              width={16}
              height={16}
              className="ml-2 rounded-full"
            />
          </Button>

          <div className="flex items-center">
            {avatars.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border-2 border-white ${item.bg} flex items-center justify-center ${index !== 0 ? "-ml-2" : ""
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
            <div className="-ml-2 w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
              <div className="flex gap-[2px]">
                <span className="w-[2px] h-[2px] bg-gray-300 rounded-full" />
                <span className="w-[2px] h-[2px] bg-gray-300 rounded-full" />
                <span className="w-[2px] h-[2px] bg-gray-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Net Worth */}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-[12px] lg:text-[14px] font-medium">Net Worth</h1>
            <Eye className="w-4 h-4 text-[#666666]" />
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[26px] lg:text-[32px] font-medium font-sans">{netWorth}</h1>
            <h1 className="text-[12px] lg:text-[14px] font-normal text-[#00B700] font-mono">
              {netWorthChange}
            </h1>
          </div>
        </div>

        {/* Wallet Address */}
        <div className="flex justify-between items-center">
          <span className="text-[12px] lg:text-[14px] text-gray-500">Complete address</span>
          <div className="flex items-center gap-2">
            <span className="text-[12px] lg:text-[14px]">{truncateAddress(walletAddress)}</span>
            <Copy
              className={`w-4 h-4 cursor-pointer text-gray-500 hover:text-black ${copied ? "text-green-500" : ""
                }`}
              onClick={handleCopy}
            />
          </div>
        </div>
      </Card>

      <Toaster />
    </div>
  );
};

export default WalletCard;
