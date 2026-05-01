"use client";
import { useState, ReactNode, JSX, useRef } from "react";
import LoadingContext, { LoadingContextType } from "./LoadingContext";

interface LoadingProviderProps {
    children: ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps): JSX.Element => {
    const loadingArrayRef = useRef<string[]>([]);
    const [loading, setLoading] =
        useState<LoadingContextType["loading"]>(false);

    const addLoadingPoint = (): void => {
        loadingArrayRef.current.push(".");
        setLoading(true);
    };
    const removeLoadingPoint = (): void => {
        loadingArrayRef.current.pop();
        if (loadingArrayRef.current.length === 0) {
            setLoading(false);
        }
    };

    return (
        <LoadingContext.Provider
            value={{
                loading,
                addLoadingPoint,
                removeLoadingPoint,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
