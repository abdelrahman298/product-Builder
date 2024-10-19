interface IButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
}

const ButtonUI = ({ text, className }: IButtonProps) => {
  return <button className={className}>{text}</button>;
};

export default ButtonUI;
