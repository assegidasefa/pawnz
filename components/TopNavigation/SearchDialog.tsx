"use client";

import { useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyIcon, Search } from "lucide-react";
import Image from "next/image";

type SearchDialogProps = {
  trigger: ReactNode;
};

export function SearchDialog({ trigger }: SearchDialogProps) {
  const [search, setSearch] = useState("");

  const mockResults = new Array(6).fill({
    name: "Ponke",
    price: "0.14 USD",
    change: "+7.31%",
    icon: "/ponke.png",
    address: "5x3EqY...StmrRC",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="min-w-[60%]">
        <div className="hidden">
          <DialogTitle>Search</DialogTitle>
        </div>

        {/* Search Input */}
        <div className="relative border rounded-lg mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Collateral"
            className="pl-10 w-full"
          />
          <Button className="h-6 bg-transparent p-0 absolute right-[10px] top-1/2 transform -translate-y-1/2 px-2">
            ⟳
          </Button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-y-1 no-scrollbar">
          {mockResults.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-xl"
            >
              <div className="flex items-center px-4 cursor-pointer w-full md:w-auto">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-3"
                />
                <div className="font-medium text-sm">{item.name}</div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-3 gap-y-3 md:gap-y-0 w-full md:w-auto">
                <div className="flex-1">
                  <div className="text-xs bg-[#4ADE80]/8 p-1 border rounded-sm">
                    {item.price}{" "}
                    <span className="text-green-600">{item.change}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-gray-500 border rounded-sm flex items-center justify-between md:justify-start p-1 gap-x-2 w-full md:w-auto">
                  {item.address}
                  <CopyIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
