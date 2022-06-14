import React from "react";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";

import { Card } from "../Card";
import { icons } from "~/icons";
import { Button } from "../Button";
import { Comment } from "../Comment";

const TweetDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div className="flex-1">
        <Tippy content="close">
          <div
            className="absolute top-5 left-5 h-10 w-10 rounded-full hover:bg-[#202327] cursor-pointer flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            {icons.close}
          </div>
        </Tippy>
        <img
          className="w-full h-full max-h-[100vh] object-contain"
          src="https://pbs.twimg.com/media/FU2JEjgXoAASiuc?format=jpg&name=large"
          alt=""
        />
      </div>

      <div className="w-[400px] text-white h-[100vh] overflow-y-scroll px-5">
        <Card />

        <div className="flex items-center py-5 border-b border-gray-700 px-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://i.pinimg.com/236x/8e/51/e1/8e51e1cffd110260b96076ed3731b7a3--kancolle-kantai.jpg"
            alt=""
          />
          <input
            type="text"
            placeholder="Tweet your reply"
            className="flex-1 py-2 px-3 outline-none bg-transparent"
          />

          <Button label="Reply" css="rounded-full" />
        </div>

        <div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default TweetDetail;
