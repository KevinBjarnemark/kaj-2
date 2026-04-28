"use client";
import { createContext } from "react";

interface UpdateUserData {
    id: string | null;
    username: string | null;
    email: string | null;
}

interface CreateUserData {
    username: string | null;
    email: string | null;
    password: string | null;
}

interface LogInData {
    username: string | null;
    password: string | null;
}

export interface UserDto {
    id: number;
    email: string;
    username: string;
    createdAt: string; // ❕ Java serializes dates as ISO strings by default
}

export interface ApiContextType {
    loadingApi: string[];
    createUser: (data: CreateUserData) => Promise<UserDto>;
    getAllUsers: () => Promise<UserDto[]>;
    updateUserById: (data: UpdateUserData) => Promise<UserDto>;
    getUserById: (id: string | null) => Promise<UserDto>;
    deleteUserById: (id: string | null) => Promise<Response>;
    login: (data: LogInData) => Promise<UserDto>;
}

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;
