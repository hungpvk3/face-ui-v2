import React, { useState } from "react";
import { icons } from "~/icons";

const Search = () => {
  const [isFocus, setIsForcus] = useState(true);
  console.log(isFocus);
  return (
    <div className="h-12 w-full sticky top-0 pt-1 bg-black">
      <div
        className={`relative ${
          isFocus
            ? "bg-[#202327] border border-black"
            : "bg-black border border-blue-500"
        } flex items-center rounded-full px-5 py-0.5`}
      >
        <div>{icons.search}</div>
        <input
          type="text"
          placeholder="Search Btec Media"
          className="px-5 py-2 rounded-r-full outline-none text-white bg-transparent"
          onFocus={() => setIsForcus(false)}
          onBlur={() => setIsForcus(true)}
        />

        <div
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 2px 4px 0px, rgba(255, 255, 255, 0.2) 0px 2px 14px 0px",
          }}
          className={`${
            isFocus ? "hidden" : "absolute"
          } p-3 top-[46px] left-0 bg-black w-[100%] h-[80px] rounded-lg`}
        >
          Try searching for people, topics, or keywords
        </div>
      </div>
    </div>
  );
};

export default Search;
