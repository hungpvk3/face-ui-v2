import { Navigate } from "../components/Navigate";
import { Outlet } from "react-router-dom";
import { Friend } from "../components/Friend";

const Layout = () => {
  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full h-full max-w-[1050px] bg-white flex">
        <div className="px-3 bg-black border-r border-gray-600 pt-3 h-[100vh] sticky top-0">
          <Navigate />
        </div>

        <div className="bg-black basis-4/5 border-r border-gray-700">
          <Outlet />
        </div>

        <div className="bg-black basis-[40%] text-white px-5">
          <Friend />
        </div>
      </div>
    </div>
  );
};

export default Layout;
