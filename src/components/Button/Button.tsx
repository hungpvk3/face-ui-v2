import { ReactNode } from "react";

interface IProps {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  css?: string;
}

const Button = ({
  label,
  startIcon,
  endIcon,
  onClick,
  fullWidth,
  disabled,
  css,
}: IProps) => {
  return (
    <button
      disabled={disabled}
      className={`${fullWidth ? "w-full" : ""} ${
        disabled
          ? "text-gray-400 bg-gray-200"
          : "text-white cursor-not-allowed bg-[#ffb74d]"
      } flex justify-center items-center gap-3 px-5 py-2 font-semibold rounded-md cursor-pointer ${css}`}
      onClick={onClick}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

export default Button;
