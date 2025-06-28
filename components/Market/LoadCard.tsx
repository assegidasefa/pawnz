import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

const LoanCard = ({
  token,
  collateral,
  asking,
  timeLeft,
  progress,
  avatar,
}: {
  token: string;
  collateral: string;
  asking: string;
  timeLeft: string;
  progress: number;
  avatar: string;
}) => {
  return (
    <Card className="transition-colors !p-0 min-w-80 md:min-w-auto">
      <CardContent className="p-4 flex flex-col space-y-1 ">
        <div className="flex items-center space-y-1  gap-x-2">
          <div className=" size-12 aspect-square relative">
            <Avatar className="size-10">
              <AvatarImage
                src={avatar}
                alt={token}
                className="object-cover rounded-sm"
              />

              <AvatarFallback className="bg-transparent text-lg">
                {avatar}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full ">
            <div className="space-y-1 w-full ">
              <div className="font-medium ">{token}</div>
              <div className="flex justify-between w-full  ">
                <Badge
                  variant="secondary"
                  className="bg-transparent hover:bg-transparent text-[#666] text-xs px-0"
                >
                  Collateral
                </Badge>
                <div className="text-sm">{collateral}</div>
              </div>
              <div className="flex justify-between ">
                <Badge
                  variant="secondary"
                  className="bg-transparent hover:bg-transparent text-[#666] text-xs px-0"
                >
                  Asking for
                </Badge>
                <div className="text-sm">{asking}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full border rounded overflow-hidden">
          <Progress
            value={progress}
            className="h-5 flex  items-center "
            indicatorClassName={"bg-[#D5FF40]"}
          />
          {/* <span className={`absolute w-full left-${progress} inset-0 flex items-center  text-xs text-muted-foreground font-medium`}>
            {progress}%
          </span> */}
          <span
            className="absolute top-0 text-xs text-muted-foreground font-medium h-full flex items-center"
            style={{ left: `${progress >9 ? progress-5 : progress}%`, transform: "translateX(-50%)" }}
          >
            {progress}%
          </span>
        </div>

        <div className="flex items-center text-xs text-[#666] ">
          <Clock className="w-3 h-3 mr-1" />
          <span>Time Left</span>
          <span className="ml-auto">{timeLeft}</span>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoanCard;
