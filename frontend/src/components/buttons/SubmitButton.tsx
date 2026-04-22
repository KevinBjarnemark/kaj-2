import { ButtonHTMLAttributes, JSX } from "react";

// ❕ By extending ButtonHTMLAttributes<HTMLButtonElement>,
//     you inherit ALL standard button props (onClick, style,
//     className, etc., ).
interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string; // ❕ Label is the only non-standard button prop
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
        w-full h-full
        rounded px-[6px] mb-[5px]
        text-[#c1c8cd] font-extrabold
        bg-[#65696b] hover:bg-[#7c8184]
        py-0 px-[6px]
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
