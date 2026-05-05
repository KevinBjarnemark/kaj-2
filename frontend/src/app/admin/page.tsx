import AdminDashBoard from "@/components/admin/dashboard/AdminDashboard";
import AdminProvider from "@/context/admin/AdminProvider";
import { JSX } from "react";

export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const Admin = (): JSX.Element => {
  return (
    <AdminProvider>
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
    </AdminProvider>
  );
};

export default Admin;
