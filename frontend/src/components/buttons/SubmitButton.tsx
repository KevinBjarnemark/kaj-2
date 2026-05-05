import { ButtonHTMLAttributes, JSX } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const SubmitButton = ({
  label = "Submit",
  className = "",
  style,
  children,
  ...rest
}: SubmitButtonProps): JSX.Element => {
  return (
    <button
      className={`
        flex-column-relative center
        w-full
        rounded px-1.5 mb-1.5
        text-button-text font-extrabold
        bg-button hover:bg-button-hovered
        ${className}
      `}
      style={style}
      {...rest}
    >
      {children ?? label}
    </button>
  );
};

export default SubmitButton;
