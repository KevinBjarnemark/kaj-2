import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const SubmitButton = ({
  label = "Submit",
  className = "",
  style,
  children,
  ...rest
}: SubmitButtonProps) => {

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
      `.trim()}
      style={style}
      {...rest}
    >
      {children ?? label}
    </button>
  );
};

export default SubmitButton;