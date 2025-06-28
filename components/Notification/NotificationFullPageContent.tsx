"use client";

import React, { useEffect, useState } from "react";
import { NotificationItem } from "./NotificationItem";
import { Notification } from "./NotificationItem";

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "OFFERS",
    timestamp: "2025-06-02 3:37 AM",
    title: "Loan Due Alert",
    message: `Your loan of 12.1K USDC for Ponke collateral is due in 3 days. Please prepare for repayment to avoid liquidation.`,
    tag: "P",
    badgeColor: "#CCF562",
    buttons: [
      { label: "Repay Now", variant: "default" },
      { label: "Details", variant: "outline" },
    ],
  },
  {
    id: "2",
    type: "LOAN",
    timestamp: "2025-06-02 3:37 AM",
    title: "Loan Reminder",
    message: `Your loan of 12.1K USDC for Ponke collateral is due in 3 days. Please prepare for repayment.`,
  },
  {
    id: "3",
    type: "AUCTIONS",
    timestamp: "2025-06-02 3:37 AM",
    title: "Auction Started",
    message: `Your loan of 12.1K USDC for Ponke collateral is now in auction.`,
  },
  {
    id: "4",
    type: "OFFER",
    timestamp: "2025-06-02 3:37 AM",
    title: "Reminder",
    message: `Please prepare your wallet for auto-repayment.`,
  },
];

const NotificationFullPageContent = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications(mockNotifications);
    }, 500);
  }, []);

  const handleMarkAsRead = (id: string) => {
    console.log(`Marked ${id} as read`);
  };

  const handleDismiss = (id: string) => {
    console.log(`Dismissed ${id}`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="overflow-y-auto">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onMarkAsRead={handleMarkAsRead}
          onDismiss={handleDismiss}
        />
      ))}
    </div>
  );
};

export default NotificationFullPageContent;
