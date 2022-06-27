import React from "react";
import { Search } from "../Search";

const SearchRoot = () => {
  return (
    <div className="text-white px-5">
      <div
        className="h-14 w-full sticky top-0 z-50 px-5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
      >
        <Search />
      </div>

      <div>bha</div>
    </div>
  );
};

export default SearchRoot;
