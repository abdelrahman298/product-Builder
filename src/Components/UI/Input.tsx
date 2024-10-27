import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputForm = ({ ...rest }: IProps) => {
  return (
    <input
      className="block border-2 border-gray-400 w-full h-8 rounded-md focus:border-indigo-500 focus:outline-none"
      {...rest}
    />
  );
};

export default InputForm;
