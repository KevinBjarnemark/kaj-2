import { ChangeEvent, JSX, useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";
import useApi from "@/hooks/api/useApi";

interface UpdateUserData {
    id: string | null;
    username: string | null;
    email: string | null;
}

interface GetDeleteUserData {
    id: string | null;
}

interface CreateUserData {
    username: string | null;
    email: string | null;
    password: string | null;
}

export const UpdateUserByIdForm = (): JSX.Element => {
    const api = useApi();

    const [data, setData] = useState<UpdateUserData>({
        id: null,
        username: null,
        email: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
    };

    return (
        <>
            <h4>Update user</h4>
            <input
                {...sharedProps}
                style={{ width: "60%", marginRight: "2%" }}
                name="id"
                type="number"
                placeholder="ID"
            />
            <input
                {...sharedProps}
                name="username"
                type="text"
                placeholder="Username"
            />
            <input
                {...sharedProps}
                name="email"
                type="text"
                placeholder="Email"
            />
            <SubmitButton onClick={() => api.updateUserById(data)} />
        </>
    );
};

export const GetUserByIdForm = (): JSX.Element => {
    const api = useApi();

    const [data, setData] = useState<GetDeleteUserData>({ id: null });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
    };

    return (
        <>
            <h4>Get user</h4>
            <input {...sharedProps} name="id" type="number" placeholder="ID" />
            <SubmitButton onClick={() => api.getUserById(data.id)} />
        </>
    );
};

export const DeleteUserByIdForm = (): JSX.Element => {
    const api = useApi();

    const [data, setData] = useState<GetDeleteUserData>({ id: null });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
    };

    return (
        <>
            <h4>Delete user</h4>
            <input {...sharedProps} name="id" type="number" placeholder="ID" />
            <SubmitButton onClick={() => api.deleteUserById(data.id)} />
        </>
    );
};

export const CreateUserForm = (): JSX.Element => {
    const api = useApi();

    const [data, setData] = useState<CreateUserData>({
        username: null,
        email: null,
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
        <>
            <h4>Create user</h4>
            <input
                {...sharedProps}
                name="username"
                type="text"
                placeholder="Username"
            />
            <input
                {...sharedProps}
                name="email"
                type="text"
                placeholder="Email"
            />
            <input
                {...sharedProps}
                name="password"
                type="password"
                placeholder="Password"
            />
            <SubmitButton onClick={() => api.createUser(data)} />
        </>
    );
};
