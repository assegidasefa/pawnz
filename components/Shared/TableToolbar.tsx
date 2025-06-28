import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  X as XIcon,
} from "lucide-react";
import Grid2Icon from "@/components/icons/Grid2Icon";
import Grid3Icon from "@/components/icons/Grid3Icon";
import MaximizeIcon from "@/components/icons/MaximizeIcon";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import GridIcon from "../icons/GridIcon";

type ToolbarProps = {
  showLayoutIcons?: boolean;
  showSearch?: boolean;
  showMaximize?: boolean;
  showClose?: boolean;
  onSearchChange?: (value: string) => void;
  onMaximizeClick?: () => void;
  onCloseClick?: () => void;
  onLayoutChange?: (layout: "grid" | "list") => void;
  layout?: "grid" | "list";

};

const TableToolbar: React.FC<ToolbarProps> = ({
  showLayoutIcons = true,
  showSearch = true,
  showMaximize = true,
  showClose = true,
  onSearchChange,
  onMaximizeClick,
  onCloseClick,
  onLayoutChange = () => { },
  layout = "list",

}) => {
  return (
    <div className="flex items-center gap-4">
      {showLayoutIcons && (
        <ToggleGroup type="single" defaultValue={layout} onValueChange={onLayoutChange} className="flex items-center gap-1">
          <ToggleGroupItem value="grid" aria-label="Grid view" className="hidden md:hidden">
            <GridIcon className="size-5"  />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view" >
            <Grid2Icon className="size-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      )}

      {showSearch && (
        <>
          {/* Mobile: Just the search icon */}
          <Card className="p-2 md:hidden flex items-center justify-center rounded-sm">
            <Search className="w-4 h-4" />
          </Card>

          {/* Desktop: Full search input with icon */}
          <Card className="relative p-0 rounded-sm hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search Collateral"
              className="pl-10 placeholder-gray-400 w-64"
            />
          </Card>
        </>
      )}

      {showMaximize && (
        <Button onClick={onMaximizeClick} variant="ghost" size="icon"  >
          <MaximizeIcon className="size-6" />
        </Button>
      )}

      {showClose && (
        <Card className="p-2 rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 flex items-center justify-center">
            <XIcon />
          </div>
        </Card>
      )}
    </div>
  );
};

export default TableToolbar;
