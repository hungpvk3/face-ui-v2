import React from "react";
import { Search } from "../Search";
import { CardFriend } from "../CardFriend";

const Friend = () => {
  return (
    <div className="w-full h-full">
      <Search />

      <div className="w-full h-max mt-4 sticky top-16 flex flex-col gap-5">
        <CardFriend
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          name="Elon Musk"
        />

        <CardFriend
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          name="Elon Musk"
        />
      </div>
    </div>
  );
};

export default Friend;
