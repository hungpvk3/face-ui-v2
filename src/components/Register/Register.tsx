import { Link } from "react-router-dom";
import { config } from "~/config";
import { Button } from "../Button";
import { Spin } from "../Spin";

const Register = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col bg-white rounded-lg shadow-sm p-5">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Đăng ký</h1>
      <div className="p-8 md:p-5 flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Họ"
            className="w-[50%] px-4 py-2 bg-gray-100 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Tên"
            className="w-[50%] px-4 py-2 bg-gray-100 rounded-md outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <input
          type="date"
          placeholder="Ngày sinh"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <select className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none">
          <option value="">Nam</option>
          <option value="">Nữ</option>
        </select>

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <p className="text-[0.9rem] text-center">
          Bạn đã có tài khoản?{" "}
          <Link
            to={`../${config.route.LOGIN}`}
            className="text-blue-600 hover:underline"
          >
            Đăng nhập
          </Link>
        </p>

        <Button disabled={false} label="Đăng ký" />
      </div>
    </div>
  );
};

export default Register;
