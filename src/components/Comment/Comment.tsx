import React from "react";

const Comment = () => {
  return (
    <div className="flex gap-3 items-center py-5 border-b border-gray-700 px-2">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src="https://i.pinimg.com/236x/8e/51/e1/8e51e1cffd110260b96076ed3731b7a3--kancolle-kantai.jpg"
        alt=""
      />
      <div>
        <h1 className="font-bold">SOF MainZ</h1>
        <p className="text-[0.9rem]">Everything you make is magic.</p>
      </div>
    </div>
  );
};

export default Comment;
