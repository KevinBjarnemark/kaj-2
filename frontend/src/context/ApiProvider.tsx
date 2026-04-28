"use client";
import { useState, ReactNode, JSX } from "react";
import ApiContext, { ApiContextType, UserDto } from "./ApiContext";

interface ApiProviderProps {
    children: ReactNode;
}

const ApiProvider = ({ children }: ApiProviderProps): JSX.Element => {
    const [loadingApi, setLoadingApi] = useState<ApiContextType["loadingApi"]>(
        [],
    );

    const addLoadingElement = (): void => {
        setLoadingApi((prev) => [...prev, "."]);
    };
    const removeLoadingElement = (): void => {
        setLoadingApi((prev) => prev.slice(0, -1));
    };

    const usersEndPoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`;

    const createUser: ApiContextType["createUser"] = async (data) => {
        addLoadingElement();
        try {
            const response = await fetch(usersEndPoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    const updateUserById: ApiContextType["updateUserById"] = async (data) => {
        addLoadingElement();
        try {
            const { id, ...rest } = data;
            const response = await fetch(`${usersEndPoint}/${id}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rest),
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    const getUserById: ApiContextType["getUserById"] = async (id) => {
        addLoadingElement();
        try {
            const response = await fetch(`${usersEndPoint}/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    const deleteUserById: ApiContextType["deleteUserById"] = async (id) => {
        addLoadingElement();
        try {
            const response = await fetch(`${usersEndPoint}/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            console.log("✉️ Response", response);
            return response;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    const getAllUsers: ApiContextType["getAllUsers"] = async () => {
        addLoadingElement();
        try {
            const response = await fetch(usersEndPoint, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            return parsedResponse as UserDto[];
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    const login: ApiContextType["login"] = async (data) => {
        addLoadingElement();
        try {
            const response = await fetch(`${usersEndPoint}/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const parsedResponse = await response.json();
            console.log("✉️ Response", parsedResponse);
            return parsedResponse;
        } catch (error) {
            console.error("❌ API Error:", error);
            throw error;
        } finally {
            removeLoadingElement();
        }
    };

    return (
        <ApiContext.Provider
            value={{
                loadingApi,
                createUser,
                getAllUsers,
                updateUserById,
                getUserById,
                deleteUserById,
                login,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;
