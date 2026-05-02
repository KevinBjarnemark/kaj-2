"use client";
import { createContext } from "react";

export interface LoadingContextType {
    loading: boolean;
    addLoadingPoint: () => void;
    removeLoadingPoint: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export default LoadingContext;
