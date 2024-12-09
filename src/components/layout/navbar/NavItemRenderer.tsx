"use client";

import { TypeNewsCategory } from "@/types/contentful/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemRenderer {
  navData: TypeNewsCategory<undefined, "en-US">[];
}

const NavItemRenderer = (props: NavItemRenderer) => {
  // Sorting nav
  props.navData.sort((a, b) => a.fields.id - b.fields.id);
  const pathName = usePathname();
  return (
    <div className="flex h-full justify-between divide-x divide-white">
      {props.navData.map((item) => {
        const link = `/categories/${item.fields.slug}`;
        const isActive = pathName.startsWith(link);
        return (
          <Link
            href={link}
            className="group relative w-full pb-0.5 pl-1 pr-5 pt-0.5 text-start font-noto_serif text-3xl font-bold text-white"
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
