import Tippy from "@tippyjs/react";
import { icons } from "~/icons";

import { Search } from "../Search";
import { CardFriend } from "../CardFriend";

const MessengerList = () => {
  return (
    <div className="h-full w-fulf">
      <div
        className="flex items-center justify-between h-14 w-full sticky top-0 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
      >
        <div className="text-xl font-bold py-3">Tin nhắn</div>

        <Tippy content="Cài đặt">
          <div className="cursor-pointer">{icons.setting}</div>
        </Tippy>
      </div>

      <Search />

      <div className="mt-3">
        <CardFriend
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          name="Elon Musk"
          action="chat"
        />
      </div>
    </div>
  );
};

export default MessengerList;
