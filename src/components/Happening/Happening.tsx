import React from "react";
import { icons } from "~/icons";
import { Button } from "../Button";

const Happening = () => {
  return (
    <div className="flex border-b border-gray-600 px-5 gap-5">
      <div className="w-10 h-10">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          alt=""
        />
      </div>

      <div className="w-[90%]">
        <input
          type="text"
          placeholder="What's happening?"
          className="py-1 mb-3 bg-black outline-none text-xl"
        />
        <div className="w-full flex items-center justify-between border-t border-gray-600 py-3">
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file">{icons.media}</label>
          <Button label="Đăng" />
        </div>
      </div>
    </div>
  );
};

export default Happening;
