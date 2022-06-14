import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";

import { icons } from "~/icons";
import { Button } from "../Button";
import { config, configHeader } from "~/config";

interface IProfile {
  banner?: string;
}

const Profile = ({ banner }: IProfile) => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[2] as string;
  console.log(path);

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
        <div className="text-xl font-bold py-2">SOF MainZ</div>
      </div>
      {path === "followers" || path === "friends" ? (
        <div
          className="flex items-center h-14 border-b border-gray-800"
          style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
        >
          <Link
            to={config.route.FLOWER_P}
            className="relative flex-1 h-full flex flex-col justify-center items-center hover:bg-[#202327] cursor-pointer"
          >
            Flowwers
            <div
              className={`w-1/3 h-1 bg-blue-500 rounded-full ${
                path === "followers" ? "absolute" : "hidden"
              } bottom-[1px]`}
            />
          </Link>
          <Link
            to={config.route.FRIEND_P}
            className="relative flex-1 h-full flex flex-col justify-center items-center hover:bg-[#202327] cursor-pointer"
          >
            Friends
            <div
              className={`w-1/3 h-1 bg-blue-500 rounded-full ${
                path === "friends" ? "absolute" : "hidden"
              } bottom-[1px]`}
            />
          </Link>
        </div>
      ) : (
        <>
          <div>
            <div className="w-full h-48 relative">
              {banner ? (
                <img
                  src={banner}
                  className="w-full h-full object-cover"
                  alt="anh bia"
                />
              ) : (
                <div className="w-full h-full bg-[#202327]" />
              )}

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
                alt="avatar"
                className="absolute h-32 w-32 bottom-0 translate-y-1/2 left-5 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex p-5">
            <div className="flex-1" />
            <Button label="Chỉnh sửa" css="py-1.5 px-3 rounded-full" />
          </div>

          <div className="flex px-5">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[1.1rem]">SOF MainZ</h1>
              <div className="flex items-center gap-3 text-[0.9rem]">
                <Link
                  to={config.route.FRIEND_P}
                  className="font-bold cursor-pointer hover:underline decoration-1"
                >
                  8{" "}
                  <span className="font-light text-gray-400 text-[0.85rem]">
                    Bạn bè
                  </span>
                </Link>
                <Link
                  to={config.route.FLOWER_P}
                  className="font-bold cursor-pointer hover:underline decoration-1"
                >
                  0{" "}
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
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
