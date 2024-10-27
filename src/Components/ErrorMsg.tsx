interface IProps {
  msg: string;
}

const ErrorMsg = ({ msg }: IProps) => {
  return msg ? (
    <span className="text-[14pxpx] text-[#d70000] font-medium block my-0.5 mx-0">
      {msg}
    </span>
  ) : null;
};

export default ErrorMsg;
