import Link from "next/link";
import { JSX } from "react";
import { usePathname } from "next/navigation";

const LogInButton = (): JSX.Element | null => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";
    if (true) {
        return (
            <Link
                href="/login"
                rel="noopener noreferrer"
                className={`
                    flex-column-absolute top-0 right-0 
                    text-center center w-[10vw] h-[30px] 
                    border-2 border-[#292c2eff] bg-[#252729ff] 
                    mt-[2px] mr-[2px] rounded hover:bg-[#e6e8efff] 
                    text-[#a3a6afff] hover:text-[#494b50ff] font-bold 
                    w-[80px] sm:w-[100px] text-[80%] transition-opacity 
                    duration-1000
                `}
                style={{
                    opacity: !isLoginPage ? 1 : 0,
                }}
            >
                Log in
            </Link>
        );
    }
    return null;
};

export default LogInButton;
