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
                justify-start px-[2vw] py-[2vh]
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <section
                className={`
                    flex-column-relative w-full items-center 
                    justify-start mt-[20px]
                `}
            >
                <h2 className="underline">Login</h2>

                <LogInForm />
            </section>
        </div>
    );
};

export default Login;
