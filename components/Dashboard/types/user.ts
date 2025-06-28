// types/user.ts
export type UserStats = {
  address: string;
  avatarUrl: string;
  joined: string;
  auctionsWon: number | string;
  referrals: number;
  activeLoans: string;
  activeOffers: string;
  netWorth: string;
  netWorthChange: string;
  netWorthChangeDirection: "up" | "down";
  contributors: { name: string; avatarUrl: string }[];
};
