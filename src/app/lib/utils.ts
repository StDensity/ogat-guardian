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
    return (
      new Date(a.fields.date).getTime() - new Date(b.fields.date).getTime()
    );
  });
  return data.reverse();
};

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

export function getTotalArticleCount(newsData: newsDataType[]) {
  const authorCounts = newsData
    .map((item) => item.fields.author.id)
    .reduce((counts: Record<string, number>, authorId) => {
      counts[authorId] = (counts[authorId] || 0) + 1;
      return counts;
    }, {});
  return authorCounts;
}
