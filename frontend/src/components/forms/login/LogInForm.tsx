"use client";

import { JSX } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";

const LogInForm = (): JSX.Element => {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert("This feature is coming soon!");
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
    };

    return (
        <form className="w-5/6 sm:w-82" onSubmit={handleSubmit}>
            <label htmlFor="username" className="sr-only">
                Username
            </label>
            <input
                {...sharedProps}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username"
            />

            <label htmlFor="password" className="sr-only">
                Password
            </label>
            <input
                {...sharedProps}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
            />

            <SubmitButton label="Login" />
        </form>
    );
};

export default LogInForm;
