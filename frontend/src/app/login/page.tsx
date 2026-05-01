import LogInForm from "@/components/forms/login/LogInForm";
import { JSX } from "react";

const title = "Login";
const description = "Sign in to your account";

export const metadata = {
    title,
    description,

    openGraph: {
        title,
        description,
        type: "website",
    },

    twitter: {
        card: "summary",
        title,
        description,
    },
    robots: {
        index: false,
        follow: true, // ❕ Can follow links to other pages
    },
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
