import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "~/config";
import { userApi } from "~/api/Users";
import { Button } from "../Button";
import { Spin } from "../Spin";
import { UserCtx } from "~/store/UserStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserCtx);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataInput, setDataInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    localStorage.setItem("email", dataInput.email);
    try {
      const response = (await userApi.login(dataInput)) as any;

      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        setIsLoading(false);
        navigate(config.route.HOME);
      } else if (response.message === "Tài khoản chưa được xác thực.") {
        try {
          const response = (await userApi.resendOtp(dataInput.email)) as any;

          if (response.success) {
            setIsLoading(false);
            toast.success("Kiểm tra mã xác thực qua email");
            navigate(`../${config.route.OTP}`);
          }
        } catch (error) {}
      } else {
        toast.error("Kiểm tra email hoặc mật khẩu!");
      }
    } catch (error) {
      console.log("Fail to login", error);
      toast.error("Vui lòng kiểm tra Internet!");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full flex justify-center flex-col bg-white rounded-lg shadow-sm p-5">
      <h1 className="text-2xl text-gray-800 font-bold text-center">
        Đăng nhập
      </h1>
      <div className="p-8 md:p-5 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
          value={dataInput.email}
          onChange={handleChangeInput}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
          value={dataInput.password}
          onChange={handleChangeInput}
        />

        <p className="text-[0.9rem] text-center">
          Bạn chưa có tài khoản?{" "}
          <Link
            to={`../${config.route.REGISTER}`}
            className="text-blue-600 hover:underline"
          >
            Đăng ký
          </Link>
        </p>

        <Button
          label="Đăng nhập"
          disabled={isLoading}
          startIcon={isLoading && <Spin />}
          fullWidth
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
