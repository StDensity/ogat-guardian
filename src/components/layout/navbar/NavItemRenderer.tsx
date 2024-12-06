"use client";

import { newsCategoryType } from "@/types/contentful";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemRenderer {
  navData: newsCategoryType[];
}

const NavItemRenderer = (props: NavItemRenderer) => {
  const pathName = usePathname();
  return (
    <div className="flex h-full justify-between divide-x divide-white">
      {props.navData.map((item) => {
        const lowerCaseLink = `/categories/${item.fields.name.toLowerCase()}`;
        const isActive = pathName.startsWith(lowerCaseLink);
        console.log(pathName);
        console.log("link: ", lowerCaseLink);
        console.log("avtie: ", isActive);
        return (
          <Link
            href={lowerCaseLink}
            className="group relative w-full pb-1 pl-1 pr-5 pt-2 text-start font-noto_serif text-3xl font-bold text-white"
            key={item.fields.id}
          >
            <div
              className={
                isActive
                  ? "absolute left-0 right-0 top-0 h-2"
                  : "absolute left-0 right-0 top-0 h-0.5 opacity-0 transition-all duration-500 group-hover:h-2 group-hover:opacity-100"
              }
              style={{ backgroundColor: item.fields.color }}
            />
            {item.fields.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItemRenderer;
