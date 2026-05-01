import { ChangeEvent, JSX, useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { STYLES } from "@/utils/constants/styles";
import useAdmin from "@/hooks/admin/useAdmin";

interface UpdateUserData {
    id: number | null;
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

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();
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
        <form
            onSubmit={handleSubmit}
            className="flex-column-relative center w-full"
        >
            <h2 className="text-base">Update user</h2>

            <label htmlFor="update-user-id" className="sr-only">
                User ID
            </label>
            <input
                {...sharedProps}
                id="update-user-id"
                name="id"
                type="number"
                value={data.id ?? ""}
                placeholder="User ID"
                required
            />

            <label htmlFor="update-username" className="sr-only">
                Username (optional)
            </label>
            <input
                {...sharedProps}
                id="update-username"
                name="username"
                type="text"
                value={data.username ?? ""}
                placeholder="New username"
                autoComplete="username"
            />

            <label htmlFor="update-email" className="sr-only">
                Email (optional)
            </label>
            <input
                {...sharedProps}
                id="update-email"
                name="email"
                type="email"
                value={data.email ?? ""}
                placeholder="New email"
                autoComplete="email"
            />

            <SubmitButton />
        </form>
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

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();
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
        <form
            onSubmit={handleSubmit}
            className="flex-column-relative center w-full"
        >
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
            <SubmitButton />
        </form>
    );
};
