import React from "react";

interface IProp {
  color?: string;
  size?: string;
}

const Spin = ({ color, size }: IProp) => {
  return (
    <div className=" flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${size ? size : "h-5 w-5"}
        } border-b-2 ${color ? color : "border-gray-900"}`}
      ></div>
    </div>
  );
};

export default Spin;
