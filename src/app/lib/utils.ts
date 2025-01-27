import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
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

export const sortedDateLatestFirst = (
  data:
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[],
) => {
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

export function getTotalArticleCount(
  newsData:
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[],
) {
  const authorCounts = newsData
    .map((item) => item.fields.author?.sys.id || "")
    .reduce((counts: Record<string, number>, authorId) => {
      counts[authorId] = (counts[authorId] || 0) + 1;
      return counts;
    }, {});
  return authorCounts;
}

export const getRandomNumbers = (max: number) => {
  const rand = Math.floor(Math.random() * max);
  return rand;
};

export const getClientHash = () => {
  let hash = localStorage.getItem("client_hash");
  if (!hash) {
    hash = Math.random().toString(36).substr(2, 9); // 9-char random string
    localStorage.setItem("client_hash", hash);
  }
  return hash;
};

export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  // Format the date
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
};
