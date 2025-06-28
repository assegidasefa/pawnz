// components/NotificationItem.tsx

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
// import { Notification } from "@/types/notification";
import { MouseEventHandler, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

type NotificationItemProps = {
  notification: Notification;
  onMarkAsRead?: (id: string) => void;
  onDismiss?: (id: string) => void;
};
export type Notification = {
  id: string;
  type: "OFFERS" | "LOAN" | "AUCTIONS" | "OFFER";
  title: string;
  message: string;
  timestamp: string;
  isRead?: boolean;
  tag?: string;
  badgeColor?: string;
  buttons?: {
    label: string;
    variant?: "default" | "outline";
    onClick?: () => void;
  }[];
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  onDismiss,
}) => {
  const {
    id,
    type,
    title,
    message,
    timestamp,
    tag,
    badgeColor = "#CCF562",
    buttons = [],
  } = notification;

  return (
    <div className="p-4 border-b">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs">{timestamp}</span>
          {type && (
            <Badge variant="outline" className="text-xs px-2 py-0.5 uppercase">
              {type}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-xs"
            onClick={() => onMarkAsRead?.(id)}
          >
            MARK AS READ
          </button>
          {onDismiss && (
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4"
              onClick={() => onDismiss(id)}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm mb-3">{message}</p>

      {tag && (
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-500">
            <span className="text-xs font-bold">{tag}</span>
          </div>
          <span className="text-sm">Ponke</span>
          <Badge variant="outline" className="text-xs" style={{ color: badgeColor }}>
            DUE SOON
          </Badge>
        </div>
      )}

      {buttons.length > 0 && (
        <div className="flex gap-2">
          {buttons.map((btn, i) => (
                      <Button
                        key={i}
                        size="sm"
                        variant={btn.variant as "default" | "outline" | "link" | "secondary" | "destructive" | "ghost" || "default"}
                        onClick={btn.onClick}
                        className={btn.variant === "default" ? "bg-[#BBEE4D] text-black" : ""}
                      >
                        {btn.label}
                      </Button>
                    ))}
        </div>
      )}
    </div>
  );
};
