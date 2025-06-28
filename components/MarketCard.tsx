import { ProgressBar } from './ProgressBar';

interface MarketCardProps {
  coinName: string;
  coinIcon: string;
  funded: string;
  collateral: string;
  fundedIcon: string;
  collateralIcon: string;
  timeLeft: string;
  timeIcon: string;
  actionText: string;
  actionIcon: string;
  progressPercentage: number;
  variant?: 'default' | 'warning' | 'danger';
}

export const MarketCard = ({
  coinName,
  coinIcon,
  funded,
  collateral,
  fundedIcon,
  collateralIcon,
  timeLeft,
  timeIcon,
  actionText,
  actionIcon,
  progressPercentage,
  variant = 'default'
}: MarketCardProps) => {
  const cardClasses = {
    default: 'bg-white bg-opacity-10 border-white border-opacity-10',
    warning: 'bg-amber-300 bg-opacity-10 border-white border-opacity-10',
    danger: 'bg-red-400 bg-opacity-10 border-white border-opacity-10'
  };

  const buttonClasses = {
    default: 'bg-white bg-opacity-10 border-white border-opacity-10',
    warning: 'bg-white bg-opacity-10 border-white border-opacity-10',
    danger: 'bg-red-400 bg-opacity-10 border-zinc-50 border-opacity-10'
  };

  const progressColor = variant === 'danger' ? 'red' : 'lime';

  return (
    <article className={`gap-2 self-stretch p-4 mx-auto w-full rounded-lg border border-solid shadow-sm ${cardClasses[variant]} min-h-[200px]`}>
      <header className="flex gap-4 items-center w-full">
        <div className="self-stretch my-auto w-12">
          <img
            src={coinIcon}
            className="object-contain w-12 aspect-square min-h-12"
            alt={coinName}
          />
        </div>
        <div className="flex-1 shrink gap-1 self-stretch my-auto text-sm basis-0">
          <div className="flex overflow-hidden flex-col justify-center items-start pr-4 w-full font-medium text-white whitespace-nowrap">
            <div className="flex gap-1.5 items-center min-h-5">
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                <h3 className="overflow-hidden self-stretch my-auto text-white">
                  {coinName}
                </h3>
              </div>
            </div>
          </div>
          <div className="gap-1 mt-1 w-full">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <span className="gap-1 self-start whitespace-nowrap text-zinc-400 w-[75px]">
                  Funded
                </span>
                <div className="flex gap-1 justify-center w-24 h-full leading-none text-right text-white uppercase">
                  <span className="flex-1 shrink text-white basis-0">
                    {funded}
                  </span>
                  <img
                    src={fundedIcon}
                    className="object-contain shrink-0 my-auto w-4 aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-between mt-1 w-full">
                <span className="gap-1 self-start whitespace-nowrap text-zinc-400 w-[75px]">
                  Collateral
                </span>
                <div className="flex flex-1 shrink gap-1 justify-center h-full leading-none text-right text-white uppercase basis-0">
                  <span className="flex-1 shrink text-white basis-0">
                    {collateral}
                  </span>
                  <img
                    src={collateralIcon}
                    className="object-contain shrink-0 my-auto w-4 aspect-square"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ProgressBar percentage={progressPercentage} color={progressColor} />

      <div className="flex justify-between mt-2 w-full text-sm">
        <div className="flex gap-1 items-center self-start text-zinc-400 w-[75px]">
          <img
            src={timeIcon}
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
          <span className="self-stretch my-auto w-[65px]">
            Time Left
          </span>
        </div>
        <span className="flex-1 shrink leading-none text-right text-white basis-0">
          {timeLeft}
        </span>
      </div>

      <button className={`flex gap-1 justify-center items-center px-3 py-1.5 mt-2 w-full text-sm font-medium text-center text-white rounded-lg border border-solid backdrop-blur-[20px] ${buttonClasses[variant]} min-h-8`}>
        <div className="flex flex-1 shrink gap-1 justify-center items-center self-stretch my-auto w-full basis-0">
          <img
            src={actionIcon}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
          <span className="self-stretch my-auto text-white">
            {actionText}
          </span>
        </div>
      </button>
    </article>
  );
};
