import React from "react";
import Tippy from "@tippyjs/react";
import { Button } from "../Button";

interface CardFrind {
  image: string;
  name: string;
  action?: string;
}

const ContentCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={image} alt="" className="w-12 h-12 rounded-full object-cover" />

      <h1 className="font-bold ">{name}</h1>
    </div>
  );
};

const CardFriend = ({ image, name, action = "add-friend" }: CardFrind) => {
  return (
    <div className="flex items-center justify-between bg-[#202327] rounded-lg p-3">
      <div className="flex items-center gap-3">
        <Tippy
          placement="bottom-start"
          content={<ContentCard image={image} name={name} />}
        >
          <img
            src={image}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        </Tippy>
        <h1 className="font-bold">{name}</h1>
      </div>

      {action === "add-friend" && (
        <Button label="Thêm bạn" css="px-3 py-2 text-[0.8rem] rounded-full" />
      )}

      {action === "friend" && (
        <Button
          label="Hủy kết bạn"
          css="px-3 py-2 text-[0.8rem] rounded-full"
        />
      )}

      {action === "follower" && (
        <Button label="Xóa" css="px-3 py-2 text-[0.8rem] rounded-full" />
      )}
    </div>
  );
};

export default CardFriend;
