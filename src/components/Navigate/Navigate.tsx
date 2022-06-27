import { useState, useContext } from "react";
import Tippy from "@tippyjs/react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import logo from "~/assets/img/logo.png";
import { configHeader } from "~/config";
import { icons } from "~/icons";
import { userApi } from "~/api/Users";
import { UserCtx } from "~/store/UserStore";

const ContentProfile = ({
  onClick,
  isLoading,
  avatar,
}: {
  onClick: any;
  isLoading: boolean;
  avatar: string;
}) => {
  return (
    <div className="w-[240px]">
      <div className="flex items-center gap-3 border-b border-gray-700 py-3 pl-5">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={avatar}
          alt="Avatar"
        />
        <h2>SOF MainZ</h2>
      </div>
      {isLoading ? (
        <div className="m-2 p-2 rounded-md hover:bg-gray-700">Loadding...</div>
      ) : (
        <div onClick={onClick} className="m-2 p-2 rounded-md hover:bg-gray-700">
          Log out MainZ
        </div>
      )}
    </div>
  );
};

const Navigate = () => {
  const { setLogout, user } = useContext(UserCtx);
  const [profileVisible, setProfileVisible] = useState(false);
  const path = useLocation().pathname.split("/")[1] as string;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = (await userApi.logout()) as any;

      if (response.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("email");
        setLogout();
      }
    } catch (error) {
      console.log();
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <img src={logo} alt="" className="h-10 w-10" />

      <ul className="flex flex-col gap-3">
        {configHeader.header.map((item, i) => (
          <Tippy content={item.tippy} key={i} placement="bottom">
            <Link to={item.to} className="rounded-full hover:bg-[#202327]">
              <li className="cursor-pointer m-3">
                {path === item.path ? item.iconActive : item.icon}
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
        content={
          <ContentProfile
            onClick={handleLogout}
            isLoading={isLoading}
            avatar={user.avatar}
          />
        }
        visible={profileVisible}
        onClickOutside={() => setProfileVisible(false)}
      >
        <img
          className="absolute bottom-5 h-10 w-10 rounded-full cursor-pointer object-cover"
          src={user.avatar}
          alt="Avatar"
          onClick={() => setProfileVisible(true)}
        />
      </Tippy>
    </div>
  );
};

export default Navigate;
