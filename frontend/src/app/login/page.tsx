import LogInForm from "@/components/forms/login/LogInForm";
import { JSX } from "react";

export const metadata = {
    title: "Login",
};

const Login = (): JSX.Element => {
    return (
        <div
            className={`
                flex-column-relative w-full 
                justify-start items-center px-[2vw] py-[2vh]
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <h1 className="underline">Login</h1>
            <LogInForm />
        </div>
    );
};

export default Login;
