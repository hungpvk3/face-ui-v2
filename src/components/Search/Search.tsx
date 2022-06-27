import React, { useState } from "react";
import { icons } from "~/icons";

const Search = () => {
  const [isFocus, setIsForcus] = useState(true);

  return (
    <div className="h-12 w-full sticky top-0 pt-1 z-50 bg-black">
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
          className="px-5 py-2 w-full rounded-r-full outline-none text-white bg-transparent"
          onFocus={() => setIsForcus(false)}
          onBlur={() => setIsForcus(true)}
        />

        <div
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 2px 4px 0px, rgba(255, 255, 255, 0.2) 0px 2px 14px 0px",
          }}
          className={`${
            isFocus ? "hidden" : "absolute z-50"
          } p-3 top-[46px] left-0 bg-black w-[100%] min-h-[80px] h-max rounded-lg`}
        >
          <p className="text-gray-500 text-center">
            Try searching for people, topics, or keywords
          </p>

          <div className="flex items-center gap-3">
            <img
              src="https://pbs.twimg.com/profile_images/1488017686219177986/cu9OZUVu_400x400.jpg"
              alt="Avatar"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold">Hana Senpai</h1>
              <div className="flex items-center gap-2">
                <span className="text-[0.8rem] text-gray-600 font-semibold">
                  10 friend
                </span>
                <span className="text-[0.8rem] text-gray-600 font-semibold">
                  1k followers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
