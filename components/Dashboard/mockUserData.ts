// mockUserData.ts
import { UserStats } from "./types/user";

export const mockUserStats: UserStats = {
  address: "0x712e...1334",
  avatarUrl: "/placeholder.svg?height=48&width=48",
  joined: "Joined May 2025",
  auctionsWon: "---",
  referrals: 140,
  activeLoans: "$175,000",
  activeOffers: "$175,000",
  netWorth: "$12.11B",
  netWorthChange: "+25.3%",
  netWorthChangeDirection: "up",
  contributors: [
    { name: "shadcn", avatarUrl: "https://github.com/shadcn.png" },
    { name: "leerob", avatarUrl: "https://github.com/leerob.png" },
    { name: "evilrabbit", avatarUrl: "https://github.com/evilrabbit.png" },
  ],
};
