"use client";

import { type FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { HomeSkeleton } from "@/components/Home/HomeSkeleton";
import RecentActivityTable from "@/components/Home/RecentActivityTable";
import TrendingCollaterals, {
  type TrendingItem,
} from "@/components/Home/TrendingCollaterals";
import { Badge } from "@/components/ui/badge";
import TelegramIcon from "../icons/TelegramIcon";
import XIcon from "../icons/XIcon";
import NewtabIcon from "../icons/NewtabIcon";
import CustomCarousel from "./CustomCarousel";
import FeaturedCard from "./FeaturedCard";

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

async function getFeaturedCollaterals(): Promise<FeaturedCollateral[]> {
  return [
    {
      id: "featured-1",
      name: "Ponke",
      avatar: "🐸",
      address: "5z3EqY...SWmrRC",
      bgImage: "/Container.svg",
    },
    {
      id: "featured-2",
      name: "DogeToken",
      avatar: "🐕",
      address: "8x4Rt9...PLmnQW",
      bgImage: "/Container.svg",
    },
    {
      id: "featured-3",
      name: "CatCoin",
      avatar: "🐱",
      address: "2y6Hj8...XKvnER",
      bgImage: "/Container.svg",
    },
  ];
}

async function getTrendingCollaterals(): Promise<TrendingItem[]> {
  // Simulated data for trending collaterals
  return [{
    id: "1",
    name: "CheemsGoin",
    symbol: "CHEEMS",
    price: "$0.14",
    change: "+7.31%",
    positive: true,
    avatar: "/images/coins/cheemscoin.png",
  },
  {
    id: "2",
    name: "Kishu Inu",
    symbol: "KISHU",
    price: "$0.05",
    change: "-3.12%",
    positive: false,
    avatar: "/images/coins/kishu.png",
  },
  {
    id: "3",
    name: "Ponke",
    symbol: "PONK",
    price: "$0.08",
    change: "+12.45%",
    positive: true,
    avatar: "/images/coins/ponk.png",
  },
  {
    id: "4",
    name: "Order of Champ",
    symbol: "OOC",
    price: "$0.10",
    change: "+1.20%",
    positive: true,
    avatar: "/images/coins/mememaster.png",
  },
  {
    id: "5",
    name: "ShibaToken",
    symbol: "SHIB",
    price: "$0.00001",
    change: "+5.00%",
    positive: true,
    avatar: "/images/coins/shiba.png",
  },
  {
    id: "6",
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.08",
    change: "-2.50%",
    positive: false,
    avatar: "/images/coins/doge.png",
  }

  ]
}

async function getHomeStats(): Promise<Stat[]> {
  return [
    { label: "$0.14", subLabel: "+7.31%", isPositive: true },
    { label: "Total Loans", subLabel: "$1.443B" },
    { label: "Total Lend", subLabel: "$1.443B" },
    { label: "Total Auctions", subLabel: "$1.443B" },
    { label: "Average LTV", subLabel: "40% High Yield" },
  ];
}

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState<FeaturedCollateral[]>([]);
  const [trending, setTrending] = useState<TrendingItem[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [f, t, s] = await Promise.all([
          getFeaturedCollaterals(),
          getTrendingCollaterals(),
          getHomeStats(),
        ]);
        setFeaturedItems(f);
        setTrending(t);
        setStats(s);
      } catch (error) {
        console.error("Error fetching home data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading || featuredItems.length === 0) return <HomeSkeleton />;

  const icons = [TelegramIcon, XIcon, Globe, NewtabIcon];
  const carouselItems = featuredItems.slice(0, -1);
  const staticCardItem = featuredItems.at(-1)!;

  return (
    <div className="min-h-screen w-[88vw] md:w-[86vw] lg:w-full py-6">
      <div className="flex w-full gap-6 mb-8 justify-between">
        {/* Carousel */}
        <div className="flex lg:flex-[0_0_72%] min-h-[320px]">
          <CustomCarousel
            items={carouselItems.map((featured) => (
              <FeaturedCard
                key={featured.id}
                featured={featured}
                stats={stats}
                icons={icons}
              />
            ))}
            autoPlayInterval={5000}
            showArrows={false}
            className="w-[88vw] md:w-full"
          />
        </div>

        {/* Static Second Card (from API) */}
        <Card
          className="hidden lg:block overflow-hidden md:flex-[0_0_27%] border-none max-h-[290px]"
          style={{
            backgroundImage: `url('/newListingBg.svg'), linear-gradient(to right, #f97316, #f97316, #facc15)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent className="p-0">
            <div className="text-white relative">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
              <div className="relative z-10 text-center px-3 py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{staticCardItem.avatar}</span>
                </div>
                <Badge
                  variant="secondary"
                  className="text-sm mb-2 text-[#d5ff40] bg-[#d5ff40]/10"
                >
                  New Listing
                </Badge>
                <h3 className="text-2xl font-bold mb-6">
                  {staticCardItem.name}
                </h3>
                <Button className="bg-[#BBEE4D] hover:bg-[#BBEE4D] text-black px-8 py-2 w-full rounded-lg">
                  Trade now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TrendingCollaterals data={[...trending]} />

      {/* Recent Activity */}
      <div className="w-[90vw] md:w-full">
        
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Home;
