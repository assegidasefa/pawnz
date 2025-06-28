"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Edit, Share } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function ProfileModal() {
  const [contractAddress, setContractAddress] = useState<string>(
    "0xa2dD817c2fDc3a2996f1A5174CF8f1AaED466E82"
  );
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Wallet address copied to clipboard.");
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="w-full p-4 gap-y-2 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback className="bg-orange-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">0x712e...1334</span>
            <Copy className="w-4 h-4 cursor-pointer" onClick={handleCopy} />
            <Edit className="w-4 h-4 " />
          </div>
          <div className="text-xs ">Joined May 2020</div>
        </div>
      </div>

      {/* Net Worth */}
      <Card className="flex flex-row p-2 w-[92vw] md:w-auto">
        <div>
          <div className="text-sm">Net Worth</div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl font-bold">$12.11B</span>
            <span className="text-green-400 text-sm">+5.3%</span>
          </div>
        </div>

        {/* Token Icons */}
        <div className="flex gap-1 items-center">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            {/* <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-orange-500"></div> */}
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
            <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
            <div className="w-6 h-6 rounded-full bg-teal-500"></div>
          </div>
        </div>
      </Card>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 gap-4 w-[92vw] md:w-auto">
        <Card>
          <CardContent>
            <div className="text-sm ">Active Loans</div>
            <div className="text-xl font-bold">$175.000</div>
          </CardContent>
        </Card>

        <Card className="">
          <CardContent>
            <div className="text-sm">Active Offers</div>
            <div className="text-xl font-bold">$175.000</div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats Grid */}
      <div className="grid grid-cols-2 gap-4 w-[92vw] md:w-auto ">
        <Card>
          <CardContent>
            <div className="text-sm">Auctions won</div>
            <div className="text-lg font-medium">---</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-sm">Referrals</div>
            <div className="text-lg font-bold">140</div>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}
