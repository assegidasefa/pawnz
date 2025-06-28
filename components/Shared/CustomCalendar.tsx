import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Card } from "../ui/card";
import { Calendar } from "@/components/ui/calendar";

import { CalendarPlus2, ChevronDownIcon } from "lucide-react";

const CustomCalendar = ({date,setDate}:any) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Card className="py-1 px-2 shadow-none rounded-sm bg-primary">
            <div className="flex items-center justify-center gap-x-2">
              <CalendarPlus2 className="h-6 w-6" />
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </Card>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomCalendar;
