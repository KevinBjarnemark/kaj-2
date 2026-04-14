"use client"
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

export interface UserDto {
  id: number;
  email: string;
  username: string;
  createdAt: string; // ❕ Java serializes dates as ISO strings by default
}

// ❕ The `| null` is because these functions may return null  
// if another request is not processed yet. 
export interface ApiContextType {
  loadingApi: boolean;
  createUser:     (data: CreateUserData)  => Promise<UserDto | null>;
  getAllUsers:     ()                      => Promise<UserDto[]>;
  updateUserById: (data: UpdateUserData)  => Promise<UserDto | null>;
  getUserById:    (id: string | null)     => Promise<UserDto | null>;
  deleteUserById: (id: string | null)     => Promise<Response | null>;
}

const ApiContext = createContext<ApiContextType | null>(null);

export default ApiContext;