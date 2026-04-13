"use client";
import { useState } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = ({ children }) => {
  const [loadingApi, setLoadingApi] = useState(false);

  const usersEndPoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`;

  const createUser = async (data) => {
    if (loadingApi) return;
    setLoadingApi(true);
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
    } finally {
      setLoadingApi(false);
    }
  };

  const updateUserById = async (data) => {
    if (loadingApi) return;
    setLoadingApi(true);
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
    } finally {
      setLoadingApi(false);
    }
  };

  const getUserById = async (id) => {
    if (loadingApi) return;
    setLoadingApi(true);
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
    } finally {
      setLoadingApi(false);
    }
  };

  const deleteUserById = async (id) => {
    if (loadingApi) return;
    setLoadingApi(true);
    try {
      const response = await fetch(`${usersEndPoint}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const parsedResponse = response;

      console.log("✉️ Response", parsedResponse);
      return parsedResponse;
    } finally {
      setLoadingApi(false);
    }
  };

  const getAllUsers = async () => {
    if (loadingApi) return;
    setLoadingApi(true);
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
      return parsedResponse;
    } finally {
      setLoadingApi(false);
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
