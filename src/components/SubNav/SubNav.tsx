import React from "react";
import { Link } from "react-router-dom";

interface ISubNav {
  datas: Array<{
    path: any;
    route: string;
    title: string;
  }>;
  active: string;
}

const SubNav = ({ datas, active }: ISubNav) => {
  return (
    <div
      className="flex items-center h-14 border-b border-gray-800"
      style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
    >
      {datas.map((data, i: number) => (
        <Link
          key={i}
          to={data.route}
          className="relative flex-1 h-full flex flex-col justify-center items-center hover:bg-[#202327] cursor-pointer"
        >
          {data.title}
          <div
            className={`w-1/3 h-1 bg-blue-500 rounded-full ${
              data.path === active ? "absolute" : "hidden"
            } bottom-[1px]`}
          />
        </Link>
      ))}
    </div>
  );
};

export default SubNav;
