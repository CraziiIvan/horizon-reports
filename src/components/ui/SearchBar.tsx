"use client"

import { cn } from "@/_utils/helper";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-fit flex gap-x-3 py-2 items-center relative">
      <Search className="cursor-pointer" size={18} />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the keywords"
        className="outline-none w-40 text-sm peer"
      />
      <div className="absolute h-[1px] bottom-0 w-full bg-neutral-300 mt-1 peer-focus:bg-neutral-800 transition-colors ease-out"/>
    </div>
  );
}

export default SearchBar;
