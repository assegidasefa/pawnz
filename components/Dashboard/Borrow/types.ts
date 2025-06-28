export type BorrowToken = {
  coin: string;
  symbol: string;
  activity: string;
  ask: string;
  offer: string;
  time: string;
};

export type LoanCard = {
  id: string | number;
  name: string;
  avatar: string;
  funded: string;
  collateral: string;
  fundedImage?: string;
  collateralImage?: string;
  progress: number;
  timeLeft: string;
};