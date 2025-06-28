// components/TokenSelectorDialog.tsx
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

import { Copy } from "lucide-react";

type Token = {
  name: string;
  icon: string;
  value: string;
  change: string;
  address: string;
};

interface TokenSelectorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tokens: Token[];
}

export function TokenSelectorDialog({
  open,
  onOpenChange,
  tokens,
}: TokenSelectorDialogProps) {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleCopy = (walletAddress: string) => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);

    toast.success("Wallet address copied to clipboard.");

    setTimeout(() => setCopied(false), 1500);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:!max-w-3xl w-full p-6 rounded-xl [&>button]:hidden">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {filteredTokens.map((token) => (
            <div
              key={token.name}
              className="flex md:w-full w-screen  items-center justify-between p-3 rounded-lg border hover:bg-muted transition"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-[42px] h-[42px]">
                  <Avatar className="w-[42px] h-[42px] bg-[#fcb900]">
                    <AvatarImage src={token.icon} alt={token.name} />
                  </Avatar>
                  <div className="absolute bottom-0 right-0 w-[16px] h-[16px] bg-[#E6EEFF] rounded-[4px] p-[2px] shadow-md translate-x-1/4 translate-y-1/4">
                    <img
                    src={token.icon}
                      alt="Toncoin"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h1 className="font-medium font-sans">{token.name}</h1>
              </div>
              <div className="flex items-center gap-4 text-[14px]">
                <div className="border rounded-[4px]">
                  <span className="font-inter text-[14px]">
                    {token.value} USD
                  </span>
                  <span className="text-green-600 font-semibold">
                    {token.change}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-background border rounded-[4px] p-[2px]">
                  <h1 className="font-mono text-[14px] bg-background text-muted-foreground">
                    {truncateAddress(token.address)}
                  </h1>
                  <Copy
                    className={`w-4 h-4 cursor-pointer ${
                      copied ? "text-green-500" : ""
                    }`}
                    onClick={() => handleCopy(token.address)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
