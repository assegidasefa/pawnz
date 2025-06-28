import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Card } from "../ui/card";

const memecoins = [
  { name: "Ponke", color: "bg-orange-500" },
  { name: "FluffyCoin", color: "bg-pink-500" },
  { name: "BarkBucks", color: "bg-red-500" },
  { name: "WoofToken", color: "bg-brown-500" },
  { name: "Doge", color: "bg-yellow-500" },
  { name: "MemeMoola", color: "bg-purple-500" },
  { name: "FurFi", color: "bg-blue-500" },
  { name: "SnoofCash", color: "bg-green-500" },
  { name: "PawPrints", color: "bg-pink-500" },
];

const SelectMemecoins = ({
  selectedCoins,
  setSelectedCoins,
  searchQuery,
  setSearchQuery,
}: {
  selectedCoins: string[];
  setSelectedCoins: React.Dispatch<React.SetStateAction<string[]>>;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  const toggleCoin = (coinName: string) => {
    setSelectedCoins((prev) =>
      prev.includes(coinName)
        ? prev.filter((name) => name !== coinName)
        : [...prev, coinName]
    );
  };

  const filtered = memecoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-64 p-4">
      <h3 className="font-medium mb-4">Select Memecoins</h3>
      <div className="mb-4">
        <Card className="relative flex p-0 m-0 rounded-md">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search Collateral"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Card>
      </div>

      <div className="space-y-3">
        {filtered.map((coin, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Card className="p-0 rounded-md">
              <Checkbox
                id={`coin-${index}`}
                checked={selectedCoins.includes(coin.name)}
                onCheckedChange={() => toggleCoin(coin.name)}
              />
            </Card>
            <div
              className={`w-6 h-6 ${coin.color} rounded-full flex items-center justify-center`}
            >
              <span className="text-xs font-bold">
                {coin.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm">{coin.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SelectMemecoins;
