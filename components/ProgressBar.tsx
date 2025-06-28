interface ProgressBarProps {
  percentage: number;
  color?: 'lime' | 'red' | 'white';
  showPercentage?: boolean;
}

export const ProgressBar = ({
  percentage,
  color = 'white',
  showPercentage = true
}: ProgressBarProps) => {
  const colorClasses = {
    lime: 'bg-lime-400',
    red: 'bg-red-400',
    white: 'bg-white'
  };

  return (
    <div className="flex mt-2 w-full text-xs text-black whitespace-nowrap rounded min-h-5">
      <div className="flex flex-1 shrink justify-between rounded border border-solid basis-0 bg-white bg-opacity-0 border-white border-opacity-10 size-full">
        <div
          className={`gap-1 self-stretch pt-0 pb-8 h-full ${colorClasses[color]} rounded border border-solid mix-blend-multiply border-white border-opacity-10 pl-[var(--Spacing-space-8,] pr-[var(--Spacing-space-8,]`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        >
          {showPercentage && `${percentage}%`}
        </div>
        {percentage < 100 && (
          <div className="flex flex-1 shrink gap-1 pt-0 pb-4 my-auto rounded-none basis-4 h-[26px] pl-[var(--Spacing-space-4,] pr-[var(--Spacing-space-4,]" />
        )}
      </div>
    </div>
  );
};
