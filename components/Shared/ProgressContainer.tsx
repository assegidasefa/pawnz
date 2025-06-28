"use client";
import * as React from "react";
import { ProgressSegment } from "./ProgressSegment";

interface ProgressContainerProps {
  percentage: number;
  totalSegments?: number;
}

export const ProgressContainer: React.FC<ProgressContainerProps> = ({
  percentage,
  totalSegments = 50
}) => {
  const filledSegments = Math.round((percentage / 100) * totalSegments);

  return (
    <div className="flex relative gap-2 justify-center items-center h-10 flex-[1_0_0]">
      <span className="relative text-sm leading-4 text-right text-stone-500 max-sm:text-xs">
        0%
      </span>
      <div className="flex relative justify-between items-center flex-[1_0_0] gap-x-auto">
        {Array.from({ length: totalSegments }, (_, index) => (
          <ProgressSegment
            key={index}
            isFilled={index < filledSegments}
          />
        ))}
      </div>
      <span className="relative text-sm leading-4 text-right text-stone-500 max-sm:text-xs">
        100%
      </span>
    </div>
  );
};
