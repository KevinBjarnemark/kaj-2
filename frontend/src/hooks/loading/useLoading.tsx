import LoadingContext, {
    LoadingContextType,
} from "@/context/loading/LoadingContext";
import { useContext } from "react";

const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};

export default useLoading;
