import React, { useState, useEffect, useContext } from "react";
import Tippy from "@tippyjs/react";
import { icons } from "~/icons";
import { Button } from "../Button";
import { UserCtx } from "~/store/UserStore";

const Happening = () => {
  const { user } = useContext(UserCtx);
  const [image, setImage] = useState<any>("");

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image);
    };
  }, [image]);

  const handleGetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files as any;
    setImage(URL.createObjectURL(file[0]));
  };

  const handleRemoveImage = () => {
    setImage("");
    URL.revokeObjectURL(image);
  };

  return (
    <div className="flex border-b border-gray-600 px-5 gap-5">
      <div className="w-10 h-10">
        <img
          className="w-full h-full rounded-full object-cover"
          src={user.avatar}
          alt=""
        />
      </div>

      <div className="w-[90%]">
        <input
          type="text"
          placeholder="What's happening?"
          className="py-1 mb-3 bg-black outline-none text-xl"
        />
        {image && (
          <div className="relative w-max h-max overflow-hidden mt-3 border border-gray-800 rounded-2xl mb-5">
            <Tippy content="Remove" placement="bottom">
              <div
                className="absolute top-1 left-1 bg-[#333] rounded-full cursor-pointer"
                onClick={handleRemoveImage}
              >
                <div className="m-1.5">{icons.close}</div>
              </div>
            </Tippy>
            <img
              className="max-w-[500px] max-h-[500px] object-contain"
              src={image}
              alt=""
            />
          </div>
        )}
        <div className="w-full flex items-center justify-between border-t border-gray-600 py-3">
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleGetFile}
          />
          <label htmlFor="file">{icons.media}</label>
          <Button label="Đăng" />
        </div>
      </div>
    </div>
  );
};

export default Happening;
