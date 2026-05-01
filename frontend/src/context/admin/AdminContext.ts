"use client";
import { createContext } from "react";

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

export interface UserDto {
    id: number;
    email: string;
    username: string;
    createdAt: string; // ❕ Java serializes dates as ISO strings by default
}

export interface ApiContextType {
    createUser: (data: CreateUserData) => Promise<UserDto>;
    loadUsers: () => Promise<UserDto[]>;
    updateUserById: (data: UpdateUserData) => Promise<UserDto>;
    deleteUser: (id: number) => Promise<Response>;
    loadedUsers: UserDto[];
}

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;
