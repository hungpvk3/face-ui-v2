import { Navigate, Outlet } from "react-router-dom";
import { config } from "~/config";

import logo from "~/assets/img/logo.png";

const Auth = () => {
  const user = true;

  return (
    <div>
      {!user ? (
        <div className="w-full h-[100vh] flex items-center justify-center p-10 md:p-5">
          <div className="w-[800px] h-[400px]shadow flex">
            <div className="basis-1/2 hidden md:flex items-center justify-center gap-6">
              <img src={logo} alt="logo" className="h-20 w-20" />
              <div>
                <div className="font-bold text-[2rem] text-[#e3a84e]">
                  BTEC Media
                </div>
                <div className="font-bold text-sm">
                  Explore the ideas throughout the work
                </div>
              </div>
            </div>
            <div className="md:w-[400px] w-full">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={config.route.HOME} />
      )}
    </div>
  );
};

export default Auth;
