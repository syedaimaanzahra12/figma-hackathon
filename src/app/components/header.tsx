import Link from "next/link";
import { Search } from "lucide-react";
import { PiHandbag } from "react-icons/pi";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="w-full justify-between items-center ">
      <h1 className=" text-2xl  flex justify-center items-center mt-11">
          <span className="text-vividOrange">Food</span>
          <span>tuck</span>
        </h1>
      <div className="flex justify-around items-center p-4">
        
        <nav>
          <ul className=" hidden lg:flex lg:space-x-5">
            <Link href="#" className="hover:underline  ">
              Home
            </Link>
            <Link href="#" className="hover:underline  ">
              Menu
            </Link>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
            <Link href="#" className="hover:underline  ">
              Pages
            </Link>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Shop
            </Link>
            <Link href="#" className="hover:underline  ">
              Contact
            </Link>
          </ul>
        </nav>
        <div className="relative  lg:hidden items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-60 bg-black border border-vividOrange rounded-full pl-3 pr-4 py-2  text-gray-700 right-5"
            />
            <Search className="absolute right-3 bottom-2 " />
          </div>

        <div className="flex items-center sm:space-x-4">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 lg:hidden" />
            </SheetTrigger>
            <SheetContent className="text-white bg-black w-80 space-y-2 ">
              <ul className="space-y-2 flex flex-col">
                <Link href="#" className="hover:underline  ">
                  Home
                </Link>
                <Link href="#" className="hover:underline  ">
                  Menu
                </Link>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
                <Link href="#" className="hover:underline  ">
                  Pages
                </Link>
                <Link href="#" className="hover:underline">
                  About
                </Link>
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
                <Link href="#" className="hover:underline  ">
                  Contact
                </Link>
              </ul><div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 bg-black lg:w-60 border border-vividOrange rounded-full pl-3 pr-4 py-2  text-gray-700 right-5"
            />
            <Search className="absolute right-3  " />
          </div>

            </SheetContent>
          </Sheet>
          <div className="relative hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 bg-black lg:w-60 border border-vividOrange rounded-full pl-3 pr-4 py-2  text-gray-700 right-5"
            />
            <Search className="absolute right-3  " />
          </div>
          <PiHandbag  className="h-6 w-6 "/>
        </div>
      </div>
    </header>
  );
}
