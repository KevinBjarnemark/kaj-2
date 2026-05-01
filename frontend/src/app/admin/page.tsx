import AdminDashBoard from "@/components/admin/dashboard/AdminDashboard";
import { JSX } from "react";

export const metadata = {
    title: "Admin",

    // ❕ This page should not be indexed on search engines
    robots: {
        index: false,
        follow: false,
        nocache: true, // ❕ Don't cache this page
    },
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
