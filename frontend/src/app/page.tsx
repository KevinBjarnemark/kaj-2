"use client";

import { JSX } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import {
    CreateUserForm,
    DeleteUserByIdForm,
    GetUserByIdForm,
    UpdateUserByIdForm,
} from "@/components/forms/user-forms/UserForms";
import { UsersTable } from "@/components/tables/users-table/UsersTable";

const AdminDashBoard = (): JSX.Element => {
    const spacing = "38px";

    return (
        <div className="flex-column-relative w-full start">
            <div className="flex-row-relative center w-full">
                <div className="flex-column-relative center w-[45vw] mr-[15vw]">
                    <CreateUserForm />
                </div>
                <div className="flex-column-relative center w-[45vw]">
                    <UsersTable />
                </div>
            </div>

            <div
                className="flex-row-relative center w-full"
                style={{ marginTop: spacing }}
            >
                <div className="flex-column-relative center w-[45vw] mr-[15vw]">
                    <UpdateUserByIdForm />
                </div>
                <div className="flex-column-relative center w-[45vw]">
                    <GetUserByIdForm />
                </div>
            </div>

            <div
                className="flex-row-relative w-full"
                style={{ marginTop: spacing }}
            >
                <div className="flex-column-relative center w-[45vw] mr-[15vw]">
                    <DeleteUserByIdForm />
                </div>
            </div>
        </div>
    );
};

const Home = (): JSX.Element => {
    return (
        <article
            className={
                "flex-column-relative w-full justify-start " +
                "px-[2vw] py-[2vh]"
            }
            style={{
                minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
            }}
        >
            <AdminDashBoard />
        </article>
    );
};

export default Home;
