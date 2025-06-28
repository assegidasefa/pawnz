interface ActivityRowProps {
  coinName: string;
  coinIcon: string;
  activity: string;
  activityColor: string;
  askAmount?: string;
  askIcon?: string;
  offerText: string;
  offerIcon: string;
  offerColor?: string;
  timeAgo: string;
  highlighted?: boolean;
}

export const ActivityRow = ({
  coinName,
  coinIcon,
  activity,
  activityColor,
  askAmount,
  askIcon,
  offerText,
  offerIcon,
  offerColor = 'text-white',
  timeAgo,
  highlighted = false
}: ActivityRowProps) => {
  return (
    <div className={`flex overflow-hidden flex-col gap-3 justify-center pr-6 mt-1 w-full rounded ${highlighted ? 'bg-white bg-opacity-10' : ''} max-md:pr-5 max-md:max-w-full`}>
      <div className="flex flex-wrap gap-3 items-center py-1 w-full rounded max-md:max-w-full">
        <div className="flex overflow-hidden flex-1 shrink gap-3 items-center self-stretch pl-2 my-auto whitespace-nowrap basis-0 min-w-[150px]">
          <img
            src={coinIcon}
            className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square"
            alt={coinName}
          />
          <div className="overflow-hidden flex-1 shrink self-stretch my-auto text-white basis-0 min-h-6 text-ellipsis">
            {coinName}
          </div>
        </div>
        <div className={`flex-1 shrink self-stretch my-auto ${activityColor} basis-0 min-w-[70px]`}>
          {activity}
        </div>
        <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto whitespace-nowrap basis-0 min-w-[70px]">
          {askIcon && (
            <img
              src={askIcon}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
          )}
          <div className="flex-1 shrink self-stretch my-auto text-white basis-0 min-w-[50px]">
            {askAmount || '-'}
          </div>
        </div>
        <div className={`flex flex-1 shrink gap-3 items-center self-stretch my-auto whitespace-nowrap rounded-lg basis-0 min-h-6 min-w-[70px] ${offerColor}`}>
          <img
            src={offerIcon}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            alt=""
          />
          <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-[50px]">
            {offerText}
          </div>
        </div>
        <div className="flex-1 shrink self-stretch my-auto text-right text-white basis-0 min-w-[100px]">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};
