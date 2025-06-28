"use client";
import * as React from "react";
import { ProgressContainer } from "./ProgressContainer";
import { PercentageDisplay } from "./PercentageDisplay";

interface ProgressBarProps {
  percentage?: number;
  totalSegments?: number;
  className?: string;
  onChange?: (percentage: number) => void; // Properly typed
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage = 50,
  totalSegments = 50,
  className = "",
  onChange
}) => {
  return (
    <div
      className={`flex relative gap-2 items-end h-10 w-full ${className}`}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${percentage}%`}
    >
      <ProgressContainer
        percentage={percentage}
        totalSegments={totalSegments}
      />
      <PercentageDisplay
        percentage={percentage}
        onChange={onChange}
      />
    </div>
  );
};

export default ProgressBar;