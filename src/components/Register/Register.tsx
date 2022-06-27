import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { userApi } from "~/api/Users";
import { config } from "~/config";
import { Button } from "../Button";
import { Spin } from "../Spin";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataInput, setDataInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    DoB: "2001-06-08",
    gender: 1,
    password: "",
  });
  console.log(dataInput);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setDataInput({ ...dataInput, [e.target.name]: parseInt(e.target.value) });
  };

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = (await userApi.register(dataInput)) as any;

      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("email", dataInput.email);

        setIsLoading(false);
        navigate(`../${config.route.OTP}`);
      } else {
        toast.error("Email này đã được sử dụng!");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Faile to login", error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center flex-col bg-white rounded-lg shadow-sm p-5">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Đăng ký</h1>
      <div className="p-8 md:p-5 flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Họ"
            name="lastName"
            value={dataInput.lastName}
            onChange={handleChangeInput}
            className="w-[50%] px-4 py-2 bg-gray-100 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Tên"
            name="firstName"
            value={dataInput.firstName}
            onChange={handleChangeInput}
            className="w-[50%] px-4 py-2 bg-gray-100 rounded-md outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={dataInput.email}
          onChange={handleChangeInput}
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <input
          type="date"
          placeholder="Ngày sinh"
          name="DoB"
          value={dataInput.DoB}
          onChange={handleChangeInput}
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
        />

        <select
          className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none"
          name="gender"
          value={dataInput.gender}
          onChange={handleChangeSelect}
        >
          <option value={1}>Nam</option>
          <option value={2}>Nữ</option>
        </select>

        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={dataInput.password}
          onChange={handleChangeInput}
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

        <Button
          disabled={isLoading}
          startIcon={isLoading && <Spin />}
          label="Đăng ký"
          fullWidth
          onClick={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
