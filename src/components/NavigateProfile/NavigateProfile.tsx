import React from "react";
import { Link, useLocation } from "react-router-dom";
import { configHeader } from "~/config";
import { Button } from "../Button";

interface INavigate {
  banner?: string;
}

const NavigateProfile = ({ banner }: INavigate) => {
  const path = useLocation().pathname.split("/")[2] as string;

  return (
    <>
      {path === "followers" || path === "friends" ? (
        <div>Flowing</div>
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
                <div className="font-bold cursor-pointer hover:underline decoration-1">
                  8{" "}
                  <span className="font-light text-gray-400 text-[0.85rem]">
                    Bạn bè
                  </span>
                </div>
                <div className="font-bold cursor-pointer hover:underline decoration-1">
                  0{" "}
                  <span className="font-light text-gray-400 text-[0.85rem]">
                    Người theo dõi
                  </span>
                </div>
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
    </>
  );
};

export default NavigateProfile;
