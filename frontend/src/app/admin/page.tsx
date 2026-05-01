import AdminDashBoard from "@/components/admin/dashboard/AdminDashboard";
import { JSX } from "react";

export const metadata = {
    title: "Admin",
};

const Admin = (): JSX.Element => {
    return (
        <div
            className={`
                flex-column-relative w-full justify-start 
                px-[2vw] py-[2vh] 
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <h1 className="sr-only">Admin</h1>
            <AdminDashBoard />
        </div>
    );
};

export default Admin;
