import React from "react";
import { Happening } from "../Happening";
import { Card } from "../Card";

const Home = () => {
  return (
    <div className="text-white">
      <div
        className="h-14 w-full sticky top-0 px-5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
      >
        <div className="text-xl font-bold py-3">Home</div>
      </div>

      <div className="pt-6">
        <Happening />
      </div>

      <div className="px-5">
        <Card
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          }
        />
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU" />
      </div>
    </div>
  );
};

export default Home;
