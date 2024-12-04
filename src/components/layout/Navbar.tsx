import { getAllNewsCategories } from "@/lib/dataFetcher";
import { Input } from "@/components/ui/input";

const Navbar = async () => {
  const data = await getAllNewsCategories();
  data.reverse();

  const renderBigScreenNavBar = () => {
    return (
      <div className="flex h-full justify-between divide-x divide-white">
        {data.map((item) => (
          <div
            className="group relative w-full pr-5 pl-1 pt-2 pb-1  text-3xl font-bold text-start text-white font-noto_serif"
            key={item.fields.id}
          >
            <div
              className="absolute left-0 right-0 top-0 h-0.5 opacity-0 transition-all duration-500 group-hover:h-2 group-hover:opacity-100 "
              style={{ backgroundColor: item.fields.color }}
            />
            {item.fields.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-guardianBlue">
      <div className="container mx-auto flex border bg-guardianBlue">
        <div className="scrollbar-hidden container mx-auto overflow-x-scroll">
          {renderBigScreenNavBar()}
        </div>
        <Input className="m-1 ml-2 max-w-52 rounded-none h-10 bg-white focus-visible:outline-none focus-visible:ring-0" />
      </div>
    </div>
  );
};

export default Navbar;
