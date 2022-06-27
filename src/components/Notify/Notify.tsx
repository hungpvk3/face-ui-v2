import React from "react";
import Tippy from "@tippyjs/react";
import { useLocation, Outlet } from "react-router-dom";

import { icons } from "~/icons";
import { SubNav } from "../SubNav";
import { configHeader } from "~/config";

const Notify = () => {
  const path = useLocation().pathname.split("/")[2] as string;

  return (
    <div className="text-white">
      <div
        className="flex items-center justify-between h-14 w-full sticky top-0 px-5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(0, 2, 0, 0.5)" }}
      >
        <div className="text-xl font-bold py-3">Thông báo</div>

        <Tippy content="Cài đặt">
          <div className="cursor-pointer">{icons.setting}</div>
        </Tippy>
      </div>

      <SubNav datas={configHeader.subnavNotify} active={path} />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Notify;
