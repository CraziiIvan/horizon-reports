import Image from "next/image";
import { Button, LoginBtn } from "../ui/Button";
import Link from "next/link";
import SearchBar from "../ui/SearchBar";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header>
      <div className="h-12 px-3 border-b border-b-neutral-300 flex items-center justify-between">
        <div className="flex items-center gap-x-5 text-neutral-900 ">
          <span className="cursor-pointer">EN</span>
        </div>
        <div className="flex gap-x-5">
          <LoginBtn />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className=" grid grid-cols-3 items-center py-10 px-5">
        <div className="justify-self-start">
          <h5 className=" text-sm text-neutral-500">Sunday, December, 2023</h5>
        </div>
        <div className=" justify-self-center">
          <Link href={"/"}>
            <Image
              alt="header_logo"
              src={"/logo.png"}
              height={80}
              width={254}
            />
          </Link>
        </div>
        <div className=" justify-self-end">
          <SearchBar />
        </div>
      </div>
      <NavBar />
    </header>
  );
}

function NavBar() {
  return (
    <div className="grid grid-cols-3 items-center h-12 px-5 border-t border-t-neutral-300 border-b-2 border-b-neutral-800">
      <button className=" flex items-center gap-x-1 text-neutral-800 hover:text-neutral-900">
        <Menu strokeWidth={1.5} size={20} />
        <span className="text-sm">More sections</span>
      </button>
      <nav className=" justify-self-center">
        <ul className=" flex gap-x-10">
          {["News", "Sports", "Politics", "Health", "Tech"].map((item) => {
            return (<Link href={"/"}><li className="text-sm text-neutral-500">{item}</li></Link>);
          })}
        </ul>
      </nav>
      <button className=" justify-self-end flex items-center gap-x-2 text-neutral-800 hover:text-neutral-900">
        <span className="text-sm">Watch Live</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </button>
    </div>
  );
}

export default Header;
