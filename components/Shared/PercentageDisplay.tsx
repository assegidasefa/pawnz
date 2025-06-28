"use client";
import * as React from "react";

interface PercentageDisplayProps {
  percentage: number;
  onChange?: (percentage: number) => void; // Properly typed
}

export const PercentageDisplay: React.FC<PercentageDisplayProps> = ({
  percentage,
  onChange,
}) => {
  const [editing, setEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(percentage.toString());
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setInputValue(percentage.toString());
  }, [percentage]);

  const handleBlur = () => {
    const numericValue = Math.max(0, Math.min(100, Number(inputValue)));
    if(onChange){
      onChange(numericValue); // This will call handlePercentageChange in TokenCard
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <div
      className="flex relative justify-center items-center self-stretch px-2 py-0 rounded border border-solid backdrop-blur-[20px] border-zinc-900 border-opacity-10 min-w-[72px] cursor-pointer"
      onClick={() => setEditing(true)}
    >
      <div className="flex relative flex-col items-start self-stretch">
        <div className="flex relative flex-col justify-center items-center flex-[1_0_0] gap-0.5">
          {editing ? (
            <input
              ref={inputRef}
              type="number"
              min={0}
              max={100}
              value={inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="w-full text-xs xl:text-sm text-center bg-transparent outline-none"
            />
          ) : (
            <span className="relative xl:text-sm leading-4 text-right text-xs">
              {percentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
