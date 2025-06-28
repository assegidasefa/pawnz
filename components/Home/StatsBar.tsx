"use client";

import React from "react";

type Stat = {
  label: string;
  subLabel: string;
  isPositive?: boolean;
};

type Props = {
  stats: Stat[];
};

const StatsBar: React.FC<Props> = ({ stats }) => {
  return (
    <div className="text-sm grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-0 md:gap-4">
      {stats.map((item, idx) => {
        const isMobileVisible = [0, 1, 4].includes(idx);
        return (
          <div
            key={idx}
            className={`
              space-y-1 pl-3 md:pl-4
              ${idx !== 0 ? "border-l border-white/16" : ""}
              ${isMobileVisible ? "block" : "hidden"}
              md:block
            `}
          >
            <div>{item.label}</div>
            <div
              className={`text-sm ${item.isPositive ? "text-[#00B700]" : ""}`}
            >
              {item.subLabel}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;