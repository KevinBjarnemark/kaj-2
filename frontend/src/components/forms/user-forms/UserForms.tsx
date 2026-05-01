import { ChangeEvent, JSX, useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";
import useAdmin from "@/hooks/admin/useAdmin";

interface UpdateUserData {
    id: string | null;
    username: string | null;
    email: string | null;
}

interface CreateUserData {
    username: string;
    email: string;
    password: string;
}

export const UpdateUserByIdForm = (): JSX.Element => {
    const admin = useAdmin();

    const [data, setData] = useState<UpdateUserData>({
        id: null,
        username: null,
        email: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (): void => {
        // Validate and transform
        const id = Number(data.id);
        if (!id) {
            alert("ID is required");
            return;
        }

        admin.updateUserById({
            id,
            username: data.username || null,
            email: data.email || null,
        });
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
    };

    return (
        <>
            <h2 className="text-base">Update user</h2>
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
            <SubmitButton onClick={handleSubmit} />
        </>
    );
};

export const CreateUserForm = (): JSX.Element => {
    const admin = useAdmin();

    const [data, setData] = useState<CreateUserData>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (): void => {
        if (!data.username) {
            alert("Username is required");
            return;
        }
        if (!data.email) {
            alert("Email is required");
            return;
        }
        if (!data.password) {
            alert("Password is required");
            return;
        }

        admin.createUser({
            username: data.username,
            email: data.email,
            password: data.password,
        });
    };

    const sharedProps = {
        className: STYLES.INPUT.BASE,
        onChange: handleChange,
    };

    return (
        <>
            <h2 className="text-base">Create user</h2>
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
            <SubmitButton onClick={handleSubmit} />
        </>
    );
};
