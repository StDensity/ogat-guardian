import { getAllNewsCategories } from "@/lib/dataFetcher";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import NavItemRenderer from "./NavItemRenderer";

const Navbar = async () => {
  const data = await getAllNewsCategories();
  data.reverse();

  return (
    <div className="bg-guardianBlue">
      <div className="container mx-auto flex border bg-guardianBlue">
        <div className="scrollbar-hidden container mx-auto overflow-x-scroll">
          <NavItemRenderer navData={data} />
        </div>
        <Input className="m-1 ml-2 h-10 max-w-52 rounded-none bg-white focus-visible:outline-none focus-visible:ring-0" />
      </div>
    </div>
  );
};

export default Navbar;
