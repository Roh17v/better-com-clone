interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps) => {
  return <div>{content}</div>;
};

export default Button;
