import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const TokenCard = ({
  name,
  value,
  change,
  positive,
  avatar,
}: {
  name: string;
  value: string;
  change: string;
  positive: boolean;
  avatar: string;
}) => {
  return (
    <Card className=" transition-colors py-0  pl-0 pr-4 rounded-sm">
      <CardContent className="flex items-center gap-x-2 py-2 ">
        <div className="flex size-14 aspect-square items-center relative">
          <Avatar className="size-full border">
            <AvatarImage
              src={avatar}
              alt={name}
              className="object-cover rounded-sm"
            />
            <AvatarFallback className="bg-transparent text-sm">
              {avatar}
            </AvatarFallback>

          </Avatar>
          <div className="size-5 aspect-square -bottom-1 -right-1 overflow-hidden absolute bg-zinc-100 p-0.5 rounded">
            <div className="relative size-full overflow-hidden bg-[#627EEA] rounded">
            <img src="/images/coins/ethers.svg" alt="ethers" className="size-full rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full w-full">
          <span className="text-sm font-medium whitespace-nowrap">{name}</span>
          <div className="flex  items-end  gap-x-2 ">
            <div className="text-sm text-[#ACADAE] h-full align-baseline">{value}</div>
            <div className="flex items-center ">
              <Badge
                variant="secondary"
                className={`${positive
                    ? "bg-transparent text-[#05EB05]"
                    : "bg-transparent text-[#f43f5e]"
                  } hover:bg-transparent px-0 text-sm`}
              >
                {change}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TokenCard;
