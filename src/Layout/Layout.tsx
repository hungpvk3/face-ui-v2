import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "../components/Navigate";
import { Friend } from "../components/Friend";
import { MessengerList } from "../components/MessengerList";

const Layout = () => {
  const path = useLocation().pathname.split("/")[1] as string;

  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full h-full max-w-[800px] lg:max-w-[1050px] bg-white flex">
        <div className="px-3 bg-black border-r border-gray-600 pt-3 h-[100vh] sticky top-0">
          <Navigate />
        </div>

        <div className="bg-black lg:w-4/5 w-full border-r border-gray-700">
          <Outlet />
        </div>

        <div className="hidden lg:block bg-black basis-[40%] text-white px-5">
          {path === "messenger" ? <MessengerList /> : <Friend />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
