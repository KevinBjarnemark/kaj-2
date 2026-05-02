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
            <h1 className="underline mt-13">Login</h1>
            <LogInForm />

            <aside
                role="alert"
                className={`
                flex-column-fixed w-full 
                justify-start items-center px-[2vw]
                top-(--header-height) 
                h-10 bg-red-400 
            `}
            >
                <p className="flex-column-relative center text-white h-100 ">
                    🔨 This page is under construction
                </p>
            </aside>
        </div>
    );
};

export default Login;
