"use client";
import { ReactNode, JSX, useState, useEffect } from "react";
import ApiContext, { ApiContextType, UserDto } from "./AdminContext";
import _deleteUser from "@/utils/admin/delete-user";
import useLoading from "@/hooks/loading/useLoading";
import { API_BASE_HEADERS } from "@/utils/constants/api";

interface AdminProviderProps {
    children: ReactNode;
}

const AdminProvider = ({ children }: AdminProviderProps): JSX.Element => {
    const { addLoadingPoint, removeLoadingPoint } = useLoading();
    const [loadedUsers, setLoadedUsers] = useState<UserDto[]>([]);

    const usersEndPoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`;

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            loadUsers();
        }

        // ❕ loadUsers is not a dependency, it's loaded on mount
        // and does not change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createUser: ApiContextType["createUser"] = async (data) => {
        addLoadingPoint();
        try {
            const response = await fetch(usersEndPoint, {
                method: "POST",
                headers: API_BASE_HEADERS,
                body: JSON.stringify(data),
            });
            const parsedResponse = await response.json();
            setLoadedUsers((prev) => [...prev, parsedResponse]);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingPoint();
        }
    };

    const updateUserById: ApiContextType["updateUserById"] = async (data) => {
        addLoadingPoint();
        try {
            const { id, ...rest } = data;
            const response = await fetch(`${usersEndPoint}/${id}`, {
                method: "PATCH",
                headers: API_BASE_HEADERS,
                body: JSON.stringify(rest),
            });
            const parsedResponse = await response.json();

            setLoadedUsers((prev) =>
                prev.map((user) => (user.id === id ? parsedResponse : user)),
            );

            console.log("✉️ Response", parsedResponse);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingPoint();
        }
    };

    const deleteUser: ApiContextType["deleteUser"] = async (id) => {
        addLoadingPoint();
        try {
            const response = await _deleteUser(id);
            setLoadedUsers((prev) => prev.filter((user) => user.id !== id));
            return response;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingPoint();
        }
    };

    const loadUsers: ApiContextType["loadUsers"] = async () => {
        addLoadingPoint();
        try {
            const response = await fetch(usersEndPoint, {
                method: "GET",
                headers: API_BASE_HEADERS,
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            setLoadedUsers(parsedResponse);
            return parsedResponse as UserDto[];
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingPoint();
        }
    };

    return (
        <ApiContext.Provider
            value={{
                createUser,
                loadUsers,
                updateUserById,
                deleteUser,
                loadedUsers,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export default AdminProvider;
