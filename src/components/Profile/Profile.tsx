import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";

import { icons } from "~/icons";
import { Button } from "../Button";
import { SubNav } from "../SubNav";
import { UserCtx } from "~/store/UserStore";
import { config, configHeader } from "~/config";
import { userApi } from "~/api/Users";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserCtx);
  const path = useLocation().pathname.split("/")[2] as string;
  const [data, setData] = useState<{
    friends: [];
    followers: [];
  }>({ friends: [], followers: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = Promise.all([
        userApi.getFollowers(10, 1),
        userApi.getFriends(10, 1),
      ]);

      response.then((data: any) =>
        setData({ friends: data[1].friends, followers: data[0].followers })
      );
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <div
        className="flex z-50 items-center gap-6 h-14 w-full sticky top-0 px-5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
      >
        <div
          className="rounded-full hover:bg-[#202327] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="m-2">{icons.arowwLeft}</div>
        </div>
        <div className="text-xl font-bold py-2">{`${user.lastName} ${user.firstName}`}</div>
      </div>
      {path === "followers" || path === "friends" ? (
        <SubNav datas={configHeader.subnavFrofile} active={path} />
      ) : (
        <>
          <div>
            <div className="w-full h-48 relative">
              {user.coverImage ? (
                <img
                  src={user.coverImage}
                  className="w-full h-full object-cover"
                  alt="anh bia"
                />
              ) : (
                <div className="w-full h-full bg-[#202327]" />
              )}

              <img
                src={user.avatar}
                alt="avatar"
                className="absolute h-32 w-32 bottom-0 translate-y-1/2 left-5 rounded-full object-cover border-4 border border-black"
              />
            </div>
          </div>

          <div className="flex p-5">
            <div className="flex-1" />
            <Button label="Chỉnh sửa" css="py-1.5 px-3 rounded-full" />
          </div>

          <div className="flex px-5">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[1.1rem]">{`${user.lastName} ${user.firstName}`}</h1>
              <div className="flex items-center gap-3 text-[0.9rem]">
                <Link
                  to={config.route.FRIEND_P}
                  className="font-bold cursor-pointer hover:underline decoration-1"
                >
                  {data.friends.length || 0}{" "}
                  <span className="font-light text-gray-400 text-[0.85rem]">
                    Bạn bè
                  </span>
                </Link>
                <Link
                  to={config.route.FLOWER_P}
                  className="font-bold cursor-pointer hover:underline decoration-1"
                >
                  {data.followers.length}{" "}
                  <span className="font-light text-gray-400 text-[0.85rem]">
                    Người theo dõi
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-1" />
          </div>

          <div className="flex items-center justify-between mt-3 border-b border-gray-700">
            {configHeader.headerProfile.map((item, i) => (
              <Link
                to={item.to}
                key={i}
                className="relative flex-1 text-center py-3 hover:bg-[#202327] cursor-pointer"
              >
                {item.title}
                {path === item.active ? (
                  <div className="absolute w-1/2 h-[4px] bg-blue-500 bottom-0 left-1/2 -translate-x-1/2 rounded-full" />
                ) : null}
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="px-5">
        <Outlet context={data} />
      </div>
    </div>
  );
};

export default Profile;
