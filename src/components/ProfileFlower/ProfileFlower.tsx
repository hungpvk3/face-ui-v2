import React from "react";
import { useOutletContext } from "react-router-dom";
import { CardFriend } from "../CardFriend";

const ProfileFlower = () => {
  const { followers } = useOutletContext<{
    friends: Array<any>;
    followers: Array<any>;
  }>();

  return (
    <div className="mt-4">
      {followers.length > 0 ? (
        followers.map(
          (friend: {
            _id: string;
            avatar: string;
            firstName: string;
            lastName: string;
          }) => (
            <div key={friend._id} className="mb-5">
              <CardFriend
                image={friend.avatar}
                name={`${friend.firstName} ${friend.lastName}`}
                action="follower"
              />
            </div>
          )
        )
      ) : (
        <div className="w-[336px] h-full mx-auto">
          <img
            src="https://abs.twimg.com/sticky/illustrations/empty-states/yellow-birds-power-line-800x400.v1.png"
            alt=""
            className="w-full h-full"
          />
          <h1 className="mt-5 font-bold text-[1.8rem]">
            Looking for followers?
          </h1>
          <span className="mt-2 font-normal leading-3 text-gray-400 text-[0.9rem]">
            When someone follows this account, they’ll show up here. Tweeting
            and interacting with others helps boost followers.
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileFlower;
