"use client";

import React from "react";

type Props = {
  icons: React.ElementType[];
};

const ActionIcons: React.FC<Props> = ({ icons }) => {
  return (
    <div className="hidden md:flex gap-2 items-end h-full">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="p-[14px] text-white border border-white/16 rounded-xl"
        >
          <Icon className="w-4 h-4" />
        </div>
      ))}
    </div>
  );
};

export default ActionIcons;
