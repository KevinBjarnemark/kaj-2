"use client";

import { JSX } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";

const LogInForm = (): JSX.Element => {
    const sharedProps = {
        className: STYLES.INPUT.BASE,
    };

    return (
        <form className="w-5/6 sm:w-82">
            <input
                {...sharedProps}
                name="username"
                type="text"
                placeholder="Username"
            />
            <input
                {...sharedProps}
                name="password"
                type="password"
                placeholder="Password"
            />
            <SubmitButton
                onClick={() => {
                    alert("This feature is coming soon!");
                }}
                label="Login"
            />
        </form>
    );
};

export default LogInForm;
