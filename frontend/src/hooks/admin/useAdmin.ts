import AdminContext, { ApiContextType } from "@/context/admin/AdminContext";
import { useContext } from "react";

const useAdmin = (): ApiContextType => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within AdminProvider");
    }
    return context;
};

export default useAdmin;
