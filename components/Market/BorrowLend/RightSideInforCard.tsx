import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorrowModal } from "@/components/CreateOffer/borrow/Modal/BorrowModal";
import { LendModal } from "../LendModal/LendModal";

type RightSideInfoCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  buttonLabel: string;
  type: "LEND" | "BORROW";
};

const RightSideInfoCard = ({
  title,
  subtitle,
  description,
  buttonLabel,
  type = "BORROW",
}: RightSideInfoCardProps) => {
  return (
    <Card className=" w-40 sm:w-50 md:w-60 xl:w-80  p-4 rounded-lg ">
      <div className="flex h-full flex-col justify-between">
        <CardContent className="p-0 flex flex-col space-y-2">
          <h3 className="text-xl font-medium">
            {title}
          </h3>
          {subtitle && (
            <h4 className="text-lg font-medium ">{subtitle}</h4>
          )}
          <p className="text-base text-[#666]">{description}</p>
        </CardContent>

        {type === "BORROW" ? (
          <BorrowModal
            children={
              <Button
                variant="default"
                className="w-full !bg-transparent border"
              >
                {buttonLabel}
              </Button>
            }
          />
        ) : (
          <LendModal
            children={
              <Button
                variant="default"
                className="w-full !bg-transparent border"
              >
                {buttonLabel}
              </Button>
            }
          />
        )}
      </div>
    </Card>
  );
};

export default RightSideInfoCard;
