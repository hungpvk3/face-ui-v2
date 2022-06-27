import React, { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import Tippy from "@tippyjs/react";

import { icons } from "~/icons";
import { Button } from "../Button";

const ChatBox = () => {
  const { id } = useParams();
  const [isFocus, setIsForcus] = useState(false);
  const disabled = false;

  return (
    <>
      {id === "id" ? (
        <div className="h-full text-white flex items-center justify-center">
          <div className="w-[350px] px-[14px]">
            <h1 className="font-extrabold text-[2rem]">Select a message</h1>
            <p className="font-light text-gray-400 text-[0.9rem]">
              Choose from your existing conversations, start a new one, or just
              keep swimming.
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[95vh] overflow-y-scroll text-white">
          <div
            className="h-14 w-full sticky top-0 z-50 px-5 backdrop-blur-md flex items-center justify-between"
            style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
          >
            <div className="text-xl font-bold py-3 flex items-center gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU"
                alt="Avatar"
                className="h-6 w-6 rounded-full object-cover"
              />
              <h1 className="text-[1.2rem]">Damian Curu</h1>
            </div>

            <Tippy content="Details">
              <div className="rounded-full hover:bg-gray-900">
                <div className="m-2">{icons.infomation}</div>
              </div>
            </Tippy>
          </div>

          <div className="absolute bottom-0 w-full px-5 flex items-center gap-2">
            <div
              className={`w-full rounded-full ${
                isFocus
                  ? "bg-[#202327] border border-black"
                  : "bg-black border border-blue-500"
              }`}
            >
              <input
                type="text"
                className="w-full py-2.5 px-5 bg-transparent rounded-full outline-none text-[0.9rem] font-semibold"
                placeholder="Nhập tin nhắn mới"
                onFocus={() => setIsForcus(false)}
                onBlur={() => setIsForcus(true)}
              />
            </div>

            {/* <div className="rounded-full hover:bg-gray-600">
              <div className="m-2">
                {
                  <Send
                    css="text-blue-500 cursor-pointer"
                    height="5"
                    width="5"
                  />
                }
              </div>
            </div> */}
            <Button
              disabled={disabled}
              startIcon={icons.send}
              label=""
              css={`
                ${disabled
                  ? "text-blue-400"
                  : "text-blue-500 hover:bg-gray-800"} rounded-full bg-[#000000] py-3 px-[12px]
              `}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
