import { Link } from "react-router-dom";
import { config } from "~/config";
import { Button } from "../Button";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col bg-white rounded-lg shadow-sm p-5">
      <h1 className="text-2xl text-gray-800 font-bold text-center">
        Đăng nhập
      </h1>
      <div className="p-8 md:p-5 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
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

        <Button label="Đăng nhập" />
      </div>
    </div>
  );
};

export default Login;
