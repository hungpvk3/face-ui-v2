import { Link } from "react-router-dom";
import { icons } from "~/icons";
import { config } from "~/config";

interface ICard {
  image?: string;
}

const Card = ({ image }: ICard) => {
  return (
    <div className="flex gap-5 w-full border-b border-gray-700 py-3">
      <div className="h-12 w-12">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          alt="Avatar"
        />
      </div>

      <div className="w-[80%]">
        <h1 className="font-semibold">
          SOF MainZ ·{" "}
          <span className="text-gray-500 font-medium text-[0.9rem]">12h</span>
        </h1>
        <p className="text-[0.95rem]">
          The short-term sideways consolidation “was officially broken Thursday,
          setting up for a test of a very important $SPX 3982 .. Providing this
          holds into next week, it’s still highly likely that S&P bottomed on
          May 20 and any pullback should prove minor and buyable.”
          @MarkNewtonCMT
        </p>
        <Link to={`${config.route.TWEET}`}>
          <div className="w-max h-max overflow-hidden mt-3 border border-gray-800 rounded-2xl">
            <img
              className="max-w-[500px] max-h-[500px] object-contain"
              src={image}
              alt=""
            />
          </div>
        </Link>

        <div className="flex items-center gap-[3rem] mt-3">
          <div className="flex items-center gap-2">
            {icons.heart}{" "}
            <span className="font-normal text-[0.9rem] text-gray-500">0</span>
          </div>
          <div className="flex items-center gap-2">
            {icons.comment}{" "}
            <span className="font-normal text-[0.9rem] text-gray-500">0</span>
          </div>

          <div className="flex items-center gap-2">
            {icons.share}{" "}
            <span className="font-normal text-[0.9rem] text-gray-500">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
