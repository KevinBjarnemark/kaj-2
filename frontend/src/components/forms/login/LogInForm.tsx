"use client";

import ApiContext from "@/context/ApiContext";
import { ChangeEvent, JSX, useContext, useState } from "react";
import style from "./LoginForm.module.css";
import SubmitButton from "@/components/buttons/SubmitButton";

interface LogInData {
    username: string | null;
    password: string | null;
}

const LogInForm = (): JSX.Element => {
    const { login, loadingApi } = useContext(ApiContext);

    const [data, setData] = useState<LogInData>({
        username: null,
        password: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sharedProps = {
        className: "flex-column-relative center w-full " + style["input"],
        onChange: handleChange,
    };

    return (
        <form className="w-[88%] sm:w-[330px]">
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
                onClick={() => login(data)}
                disabled={loadingApi}
                label="Login"
            />
        </form>
    );
};

export default LogInForm;
