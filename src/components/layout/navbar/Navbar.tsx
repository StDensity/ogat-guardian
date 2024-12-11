import {
  getAllNewsCategories,
  getAllNormalNews,
  getAllSportNews,
} from "@/app/lib/dataFetcher";
import NavItemRenderer from "./NavItemRenderer";
import SearchBox from "./search/SearchBox";

const Navbar = async () => {
  const data = await getAllNewsCategories();
  const normalNewsData = await getAllNormalNews();
  const sportsNewsData = await getAllSportNews();
  data.reverse();

  return (
    <div className="items-center justify-center bg-guardianBlue">
      <div className="container mx-auto flex border bg-guardianBlue">
        <div className="scrollbar-hidden container mx-auto overflow-x-scroll">
          <NavItemRenderer navData={data} />
        </div>
        <SearchBox
          normalNewsData={normalNewsData}
          sportsNewsData={sportsNewsData}
        />
      </div>
    </div>
  );
};

export default Navbar;
