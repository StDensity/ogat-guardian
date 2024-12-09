import { getAllNewsCategories } from "@/app/lib/dataFetcher";
import { Input } from "@/components/ui/input";
import NavItemRenderer from "./NavItemRenderer";

const Navbar = async () => {
  const data = await getAllNewsCategories();
  data.reverse();

  return (
    <div className="items-center justify-center bg-guardianBlue">
      <div className="container mx-auto flex border bg-guardianBlue">
        <div className="scrollbar-hidden container mx-auto overflow-x-scroll">
          <NavItemRenderer navData={data} />
        </div>
        <Input className="mx-2 h-8 max-w-52 self-center rounded-none bg-white focus-visible:outline-none focus-visible:ring-0" />
      </div>
    </div>
  );
};

export default Navbar;
