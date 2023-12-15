import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Helper function to calculate the plural form of units
  const pluralize = (count: number, unit: string): string =>
    count === 1 ? unit : unit + "s";

  // Define time intervals in milliseconds
  const intervals = {
    year: 365 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };

  // Calculate the difference in each time interval
  const years = Math.floor(timeDifference / intervals.year);
  const months = Math.floor(timeDifference / intervals.month);
  const days = Math.floor(timeDifference / intervals.day);
  const hours = Math.floor(timeDifference / intervals.hour);
  const minutes = Math.floor(timeDifference / intervals.minute);

  // Determine the appropriate time unit and value
  if (years > 0) {
    return `${years} ${pluralize(years, "year")} ago`;
  } else if (months > 0) {
    return `${months} ${pluralize(months, "month")} ago`;
  } else if (days > 0) {
    return `${days} ${pluralize(days, "day")} ago`;
  } else if (hours > 0) {
    return `${hours} ${pluralize(hours, "hour")} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${pluralize(minutes, "minute")} ago`;
  } else {
    return "just now";
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};
