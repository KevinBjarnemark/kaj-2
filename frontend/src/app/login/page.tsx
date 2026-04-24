import LogInForm from "@/components/forms/login/LogInForm";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import { JSX } from "react";

export const metadata = {
    title: "Login",
};

const Login = (): JSX.Element => {
    return (
        <article
            className={
                "flex-column-relative w-full justify-start " +
                "px-[2vw] py-[2vh]"
            }
            style={{
                minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
            }}
        >
            <section
                className={
                    "flex-column-relative w-full items-center " +
                    "justify-start mt-[20px]"
                }
            >
                <h2 className="underline">Login</h2>
            </section>

            <section className="flex-column-relative w-full center">
                <LogInForm />
            </section>
        </article>
    );
};

export default Login;
