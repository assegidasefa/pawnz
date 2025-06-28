import { BorrowToken, LoanCard } from "./types";

export const mockBorrowTokens: BorrowToken[] = [
  {
    coin: "Ponke",
    symbol: "PONKE",
    activity: "Listed",
    ask: "350M",
    offer: "300M",
    time: "1m ago",
  },
  {
    coin: "Bonk",
    symbol: "BONK",
    activity: "Listed",
    ask: "120M",
    offer: "110M",
    time: "2m ago",
  },
];

export const mockLoanCards: LoanCard[] = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  name: "Ponke",
  funded: "12M",
  collateral: "345M",
  progress: 10,
  timeLeft: "6hr 30min",
  avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=ponke",
  collateralImage: "https://api.dicebear.com/7.x/identicon/svg?seed=usdc",
  fundedImage: "https://api.dicebear.com/7.x/identicon/svg?seed=usdc",
}));