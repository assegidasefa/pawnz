import * as React from "react";

interface StatusIndicatorProps {
  icon: string;
  text: string;
  textColor?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  icon,
  text,
  textColor = "text-zinc-400"
}) => {
  return (
    <div className={`flex gap-1 items-center self-stretch my-auto text-sm leading-none whitespace-nowrap ${textColor}`}>
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square min-h-2"
        alt=""
      />
      <span className="self-stretch my-auto">{text}</span>
    </div>
  );
};
