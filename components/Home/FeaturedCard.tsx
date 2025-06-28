"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import StatsBar from "@/components/Home/StatsBar";
import ActionIcons from "@/components/Home/ActionIcons";

interface FeaturedCollateral {
  id: string;
  name: string;
  avatar: string;
  address: string;
  bgImage: string;
}

interface Stat {
  label: string;
  subLabel: string;
  isPositive?: boolean;
}

interface FeaturedCardProps {
  featured: FeaturedCollateral;
  stats: Stat[];
  icons: any[];
}

export default function FeaturedCard({
  featured,
  stats,
  icons,
}: FeaturedCardProps) {
  return (
    <Card
      className="overflow-hidden p-0 border-none"
      style={{
        backgroundImage: `url('${featured.bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardContent className="p-0">
        <div className="w-full h-[296px] text-white relative">
          {/* Main Info */}
          <div className="flex flex-col justify-between h-full py-2 relative z-10">
            <div className="max-w-[230px] flex-1 flex items-end justify-center mb-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    {featured.avatar.startsWith("http") ? (
                      <Image
                        src={featured.avatar || "/placeholder.svg"}
                        alt={featured.name}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <span className="text-2xl">{featured.avatar}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{featured.name}</h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <span>{featured.address}</span>
                      <CopyIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <Button className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black px-8 py-2 rounded-lg mb-6 w-full">
                  Trade
                </Button>
              </div>
            </div>

            {/* Stats & Actions - With z-index and background overlay */}
            <div className="z-20 relative rounded-xl flex items-end justify-between mx-4 border-white/16 border py-4 px-0 md:p-4 backdrop-blur-md ">
              <StatsBar stats={stats} />
              <ActionIcons icons={icons} />
            </div>
          </div>

          {/* Character - lower z-index */}
          <div className="hidden md:block absolute right-1/4 top-1/2 transform -translate-y-1/2 translate-x-1/4 z-0">
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
              {featured.avatar.startsWith("http") ? (
                <Image
                  src={featured.avatar || "/placeholder.svg"}
                  alt={featured.name}
                  width={96}
                  height={96}
                />
              ) : (
                <span className="text-4xl">{featured.avatar}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
