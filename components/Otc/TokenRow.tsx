import { ChevronDown, RotateCcw, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Progress } from "../ui/progress";

type TokenRowProps = {
  balance: string;
  symbol: string;
  emoji?: string;
  value: string;
  avatarSrc?: string;
  fallbackEmoji?: string;
  placeholder?: string;
};

const TokenRow = ({
  balance,
  symbol,
  emoji,
  value,
  avatarSrc,
  fallbackEmoji,
  placeholder,
}: TokenRowProps) => (
  <>
    <div className="flex items-center justify-between">
      <span className="text-sm">You Have</span>
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-yellow-400">{balance}</span>
        <span>{symbol}</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Settings className="h-3 w-3" />
        </Button>
      </div>
    </div>

    <div className="flex items-center space-x-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full border">
        {emoji && <span className="text-xs">{emoji}</span>}
        {!emoji && avatarSrc && (
          <Avatar className="w-4 h-4">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{fallbackEmoji}</AvatarFallback>
          </Avatar>
        )}
      </div>

      <Input value={value} className="flex-1 text-center" />
      <Button variant="ghost" size="icon" className="">
        <RotateCcw className="h-4 w-4" />
      </Button>

      <Select>
        <SelectTrigger className="w-20">
          <div className="flex items-center space-x-1">
            {emoji && <span className="text-xs">{emoji}</span>}
            {avatarSrc && (
              <Avatar className="w-4 h-4">
                <AvatarImage src={avatarSrc} />
                <AvatarFallback>{fallbackEmoji}</AvatarFallback>
              </Avatar>
            )}
            <ChevronDown className="h-3 w-3" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={symbol.toLowerCase()}>{symbol}</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="flex items-center space-x-2 text-xs">
      <span>0%</span>
      <Progress value={100} className="flex-1 h-2" indicatorClassName={"bg-[#D5FF40]"}  />
      <span className="text-green-400">100%</span>
      <span>50%</span>
    </div>
  </>
);
export default TokenRow;