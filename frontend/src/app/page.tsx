"use client";

import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import { CreateUserForm, DeleteUserByIdForm, GetUserByIdForm, UpdateUserByIdForm } from "@/components/forms/user-forms/UserForms";
import { UsersTable } from "@/components/tables/users-table/UsersTable";

const AdminDashBoard = () => {
  const spacing = "38px";

  return (
    <div className="flex-column-relative w-100 start">
      <div className="flex-row-relative w-100">
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <CreateUserForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }}>
          <UsersTable />
        </div>
      </div>

      <div className="flex-row-relative w-100" style={{ marginTop: spacing }}>
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <UpdateUserByIdForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }}>
          <GetUserByIdForm />
        </div>
      </div>

      <div className="flex-row-relative w-100" style={{ marginTop: spacing }}>
        <div className="flex-column-relative center" style={{ width: "45vw", marginRight: "15vw" }}>
          <DeleteUserByIdForm />
        </div>
        <div className="flex-column-relative center" style={{ width: "45vw" }} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <article
      className="flex-column-relative w-100 justify-start"
      style={{
        padding: "2vh 2vw",
        minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
      }}
    >
      <AdminDashBoard />
    </article>
  );
}