import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatNumber(
  value: number | string,
  options: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    notation?: 'standard' | 'compact';
    currency?: string;
  } = {}
): string {
  const {
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    notation = 'compact', // Use 'standard' for full numbers
    currency,
  } = options;

  const number = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(number)) return '0';

  return new Intl.NumberFormat('en-US', {
    notation,
    minimumFractionDigits,
    maximumFractionDigits,
    style: currency ? 'currency' : 'decimal',
    currency: currency || undefined,
  }).format(number);
}

export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
};

// formatNumber(1200000); // "1.2M"
// formatNumber(1200000, { notation: "standard" }); // "1,200,000"
// formatNumber(99.45678, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // "99.46"
// formatNumber(5000, { currency: "USD" }); // "$5K"
// formatNumber("1000000000", { notation: "compact" }); // "1B"
