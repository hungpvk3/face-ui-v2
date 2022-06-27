import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { config } from "~/config";

import logo from "~/assets/img/logo.png";
import { UserCtx } from "~/store/UserStore";
import { userApi } from "~/api/Users";

const Auth = () => {
  const { setUser } = useContext(UserCtx);
  const [authen, setAuthen] = useState<string>("");

  useEffect(() => {
    const onStateChange = async () => {
      setAuthen("pending-authen");
      try {
        const response = (await userApi.getMe()) as any;

        if (response.success) {
          setUser(response.user);
          setAuthen("authen");
        }
      } catch (error) {
        console.log("Fail to on state change", error);
        setAuthen("error");
      }
    };

    if (localStorage.getItem("refreshToken")) {
      onStateChange();
    }
  }, []);

  if (authen === "pending-authen") {
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
        <div className="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
        <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
        <div className="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
      </div>
    );
  } else if (authen === "authen") {
    return <Navigate to={config.route.HOME} />;
  } else {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center p-10 md:p-5">
        <div className="w-[800px] h-[400px]shadow flex">
          <div className="basis-1/2 hidden md:flex items-center justify-center gap-6">
            <img src={logo} alt="logo" className="h-20 w-20" />
            <div>
              <div className="font-bold text-[2rem] text-[#e3a84e]">
                BTEC Media
              </div>
              <div className="font-bold text-sm text-white">
                Explore the ideas throughout the work
              </div>
            </div>
          </div>
          <div className="md:w-[400px] w-full">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default Auth;
