"use client";

import { cn } from "@/_utils/helper";
import { List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "News", url: "/news" },
  { name: "Sports", url: "/sports" },
  { name: "Politics", url: "/politics" },
  { name: "Health", url: "/health" },
  { name: "Tech", url: "/tech" },
];

export function NavBar() {
  const pathName = usePathname();

  return (
    <div className="grid grid-cols-3 items-center h-12 px-5 border-t border-t-neutral-200 border-b-2 border-b-neutral-800">
      <button className=" flex items-center gap-x-1 text-neutral-800 hover:text-neutral-900">
        <List size={20} />
        <span className="text-sm">More sections</span>
      </button>
      <nav className=" justify-self-center">
        <ul className=" flex gap-x-10">
          {navLinks.map((item) => {
            const isActive = pathName.startsWith(item.url);
            return (
              <Link href={item.url}>
                <li
                  className={cn(
                    "text-sm text-neutral-500 flex justify-center relative after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-neutral-950 after:scale-0 after:transition-transform transition-colors",
                    { "text-neutral-950 after:scale-100": isActive }
                  )}
                >
                  {item.name}
                </li>
              </Link>
            );
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
