"use client";

import { Input } from "@/components/ui/input";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Link from "next/link";
import React, { useState } from "react";

interface SearchBoxProps {
  normalNewsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[];
  sportsNewsData: TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[];
}

const SearchBox = (props: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allNewsData = [...props.normalNewsData, ...props.sportsNewsData];

  const newsTitles = allNewsData.map((item) => ({
    id: item.sys.id,
    newsTitle: item.fields.newsTitle,
  }));

  const filteredItem = searchTerm
    ? newsTitles.filter((news) =>
        news.newsTitle.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  //   console.log(newsTitles);
  return (
    <div className="relative mx-2 flex items-center">
      <Input
        className="h-8 max-w-52 self-center rounded-none bg-white focus-visible:outline-none focus-visible:ring-0"
        onChange={(text) => setSearchTerm(text.target.value)}
      />
      <div className="absolute top-10 w-full flex-col items-center bg-gray-300 shadow-md " >
        <div className="text-sm text-gray-800  max-h-72 overflow-auto scrollbar-hidden">
          {filteredItem.map((item) => {
            return (
              <div className="border-b-2 hover:bg-gray-400 p-2">
                  <Link className="" href={`/article/${item.id}`} key={item.id}>
                    {item.newsTitle}
                  </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
