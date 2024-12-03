import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, Menu } from "lucide-react";
import Link from "next/link";

const TopHeaderDropdown = () => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger>
            <Menu />
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuItem>
               <Link href="/work-with-us" className="hover:underline">
                  Work with us
               </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               <Link href="/subscribe" className="hover:underline">
                  Subscribe
               </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               <Link
                  href="/sign-in"
                  className="hover:underline flex items-center"
               >
                  Sign in{" "}
                  <span className="pl-2">
                     <CircleUserRound size={"20px"} />
                  </span>
               </Link>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default TopHeaderDropdown;
