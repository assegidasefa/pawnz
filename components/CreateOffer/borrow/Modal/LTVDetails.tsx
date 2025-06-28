"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface LTVDetailsProps {
  ask: number;
  collateral: number;
  askCoin: string;
  coin: string;
}

export const LTVDetails: React.FC<LTVDetailsProps> = ({
  ask,
  collateral,
  askCoin,
  coin,
}) => {
  const ltv = ask / collateral;
  const ltvPct = Math.min(Math.round(ltv * 10000) / 100, 100);
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between items-center">
        <span>LTV</span>
        <div className="flex gap-x-3">
        <div className="text-[#CC5F63]">{ltvPct}%</div>
        <Card className="text-[#CC5F63] py-0 px-1 rounded-sm shadow-none">High Yield</Card>
        </div>
      </div>
      <div className="text-xs text-gray-600 space-y-1">
        <div className="flex justify-between">
          <span>Estimated Yield</span> <span>3M USDC</span>
        </div>
        <div className="flex justify-between">
          <span>Margin Call</span> <span>50%</span>
        </div>
        <div className="flex justify-between">
          <span>Liquidation</span> <span>30%</span>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        To borrow <b>{fmt(ask)} {askCoin}</b>, you'll need{" "}
        <b>{fmt(collateral)} {coin}</b> locked as collateral.
      </div>
    </div>
  );
};
