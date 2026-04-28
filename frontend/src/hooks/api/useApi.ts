import ApiContext from "@/context/ApiContext";
import { useContext } from "react";

const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }
    return context;
};

export default useApi;
