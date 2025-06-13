import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from 'lucide-react'
const Search = () => {
  return (
    <div className="w-[70%] flex items-center justify-between gap-2 py-2 px-4 rounded-xl group bg-[#333039] ">
      <Input />
      <SearchIcon className="w-5 h-5 cursor-pointer group-hover:text-rose-400 text-white duration-150 transition-all" />
    </div>
  );
};

export default Search;
