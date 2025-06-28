"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollableRow from "./ScrollableRow";

export type TrendingItem = {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
  avatar: string; // This can also be a URL
};

type Props = {
  data: TrendingItem[];
};

const TrendingCollaterals: React.FC<Props> = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="mb-8 w-full max-w-full relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Trending Collaterals</h2>
        <Card className="py-0.5 px-1.5 shadow-none text-sm font-medium border rounded-sm cursor-pointer">
          Show All
        </Card>
      </div>
      <div className="gap-3 overflow-x-auto no-scrollbar pb-4 flex w-full max-w-[91vw]">
        <ScrollableRow>
        {data.map((item) => (
          <Card key={item.id} className="min-w-[200px] flex-shrink-0 p-0 rounded-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className=" bg-blue-100  overflow-hidden flex items-center justify-center size-12 aspect-square border rounded-full min-w-12 min-h-12">
                    <img src={item.avatar} alt={item.name} className="size-full" />
                </div>
                <div className="w-full">
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="flex items-center justify-between px-1">
                    <div className="text-xs text-gray-500">Price</div>
                    <div className="flex w-full justify-end gap-x-2">
                      <div className="font-semibold text-sm">{item.price}</div>
                      <div
                        className={`text-xs flex items-center ${
                          item.positive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.change}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
            </ScrollableRow>
      </div>
    </div>
  );
};

export default TrendingCollaterals;