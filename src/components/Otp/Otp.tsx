import { ChangeEvent, useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Spin } from "../Spin";
import { userApi } from "~/api/Users";
import { config } from "~/config";
import { UserCtx } from "~/store/UserStore";

const Otp = () => {
  const { setUser } = useContext(UserCtx);
  const navigate = useNavigate();
  const timeRef = useRef<any>();
  const [timer, setTimer] = useState(60);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    try {
      const response = (await userApi.verifyOtp(otp)) as any;

      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);

        try {
          const user = (await userApi.getMe()) as any;

          if (user.success) {
            setUser(user.user);
            setIsLoading(false);
            navigate(config.route.HOME);
          }
        } catch (error) {
          console.log("Faile to resend email");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Faile to resend email");
    }
  };

  const handleResendCodeOtp = async () => {
    setIsLoading(true);
    try {
      const response = (await userApi.resendOtp()) as any;

      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);

        setTimer(60);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Faile to resend email");
    }
  };

  useEffect(() => {
    if (timer > 0) {
      timeRef.current = setTimeout(() => {
        setTimer((prev: number) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeRef.current);
    };
  }, [timer]);

  return (
    <div className="w-full h-full flex justify-center flex-col bg-white rounded-lg shadow-sm p-5">
      <h1 className="text-2xl text-gray-800 font-bold text-center">
        Xác thực tài khoản
      </h1>
      <div className="p-8 md:p-5 flex flex-col gap-3">
        <input
          type="number"
          placeholder="Mã xác thực"
          name="otp"
          value={otp}
          onChange={handleChangeInput}
          className="px-3 py-2 bg-gray-100 rounded-md outline-none overflow-hidden"
        />

        {timer < 2 ? (
          <Button
            disabled={isLoading}
            startIcon={isLoading && <Spin />}
            label="Gửi lại"
            fullWidth
            onClick={handleResendCodeOtp}
          />
        ) : (
          <Button
            disabled={isLoading || otp.trim() === ""}
            startIcon={isLoading && <Spin />}
            label="Xác nhận"
            fullWidth
            onClick={handleVerifyOtp}
          />
        )}
      </div>
    </div>
  );
};

export default Otp;
