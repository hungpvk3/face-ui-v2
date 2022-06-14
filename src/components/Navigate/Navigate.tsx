import { useState } from "react";
import Tippy from "@tippyjs/react";
import { Link, useLocation } from "react-router-dom";

import logo from "~/assets/img/logo.png";
import { configHeader } from "~/config";
import { icons } from "~/icons";

const ContentProfile = () => {
  return (
    <div className="w-[240px]">
      <div className="flex items-center gap-3 border-b border-gray-700 py-3 pl-5">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://i.pinimg.com/236x/8e/51/e1/8e51e1cffd110260b96076ed3731b7a3--kancolle-kantai.jpg"
          alt="Avatar"
        />
        <h2>SOF MainZ</h2>
      </div>
      <div className="m-2 p-2 rounded-md hover:bg-gray-700">Log out MainZ</div>
    </div>
  );
};

const Navigate = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const path = useLocation().pathname.split("/")[1] as string;

  return (
    <div className="flex flex-col items-center gap-3">
      <img src={logo} alt="" className="h-10 w-10" />

      <ul className="flex flex-col gap-3">
        {configHeader.header.map((item, i) => (
          <Tippy content={item.tippy} key={i} placement="bottom">
            <Link to={item.to} className="rounded-full hover:bg-[#202327]">
              <li className="cursor-pointer m-3">
                {path === item.to ? item.iconActive : item.icon}
              </li>
            </Link>
          </Tippy>
        ))}
      </ul>
      <div className="rounded-full bg-blue-400">
        <button className="m-2">{icons.create}</button>
      </div>

      <Tippy
        interactive
        placement="top-start"
        content={<ContentProfile />}
        visible={profileVisible}
        onClickOutside={() => setProfileVisible(false)}
      >
        <img
          className="absolute bottom-5 h-10 w-10 rounded-full cursor-pointer object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
          alt="Avatar"
          onClick={() => setProfileVisible(true)}
        />
      </Tippy>
    </div>
  );
};

export default Navigate;
