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
