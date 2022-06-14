import React from "react";
import { CardFriend } from "../CardFriend";

const ProfileFlower = () => {
  return (
    <div className="mt-4">
      <h1>Follower</h1>

      <div>
        <CardFriend
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          name="Elon Musk"
          action="follower"
        />
      </div>
    </div>
  );
};

export default ProfileFlower;
