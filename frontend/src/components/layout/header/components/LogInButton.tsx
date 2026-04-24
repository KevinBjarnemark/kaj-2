import { JSX } from "react";

const LogInButton = (): JSX.Element => {
    return (
        <button
            className={
                "flex-column-absolute top-0 right-0 " +
                "text-center center w-[10vw] h-[30px] " +
                "border-2 border-[#292c2eff] bg-[#252729ff] " +
                "mt-[2px] mr-[2px] rounded hover:bg-[#e6e8efff] " +
                "text-[#a3a6afff] hover:text-[#494b50ff] font-bold " +
                "w-[80px] sm:w-[100px]"
            }
        >
            Log in
        </button>
    );
};

export default LogInButton;
