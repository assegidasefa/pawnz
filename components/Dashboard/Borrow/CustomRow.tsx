// components/ui/CustomRow.tsx
import React from "react";
import Image from "next/image";

type CustomRowProps = {
  label: string;
  value: string;
  image?: string;
};

export default function CustomRow({ label, value, image }: CustomRowProps) {
  return (
    <div className="flex items-center gap-x-2 text-xs text-[#666]">
      <span>{label}:</span>
      <span className="ml-auto">{value}</span>
      {image && (
        <Image
          src={image}
          alt={label}
          width={16}
          height={16}
          className="object-contain rounded-full w-4 h-4"
        />
      )}
    </div>
  );
}
