"use client";
import * as React from "react";

interface ProgressSegmentProps {
  isFilled: boolean;
}

export const ProgressSegment: React.FC<ProgressSegmentProps> = ({ isFilled }) => {
  return (
    <div
      className={`flex relative flex-col justify-center items-center py-0  rounded-sm border border-solid backdrop-blur-[20px] border-opacity-10 h-[9px] ${
        isFilled ? 'bg-[#BBEE4D]' : 'bg-white'
      }`}
    />
  );
};
