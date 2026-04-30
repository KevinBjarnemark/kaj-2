"use client";

import { ChangeEvent, JSX, useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";
import useApi from "@/hooks/api/useApi";

interface LogInData {
    username: string | null;
    password: string | null;
}

const LogInForm = (): JSX.Element => {
    const api = useApi();

    const [data, setData] = useState<LogInData>({
        username: null,
        password: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
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
            <SubmitButton onClick={() => api.login(data)} label="Login" />
        </form>
    );
};

export default LogInForm;
