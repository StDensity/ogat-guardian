import { newsDataType } from "@/types/contentful";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export const sortedDateLatestFirst = (data: newsDataType[]) => {
  data.sort((a, b) => {
    // @ts-ignore
    return new Date(a.fields.date) - new Date(b.fields.date);
  });
  return data.reverse();
};
