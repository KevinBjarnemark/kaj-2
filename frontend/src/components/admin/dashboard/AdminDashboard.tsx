"use client";

import React, { JSX } from "react";
import {
    CreateUserForm,
    DeleteUserByIdForm,
    GetUserByIdForm,
    UpdateUserByIdForm,
} from "@/components/forms/user-forms/UserForms";
import { UsersTable } from "@/components/tables/users-table/UsersTable";

interface ComponentWrapperProps {
    children: React.ReactNode;
    className?: string;
    marginTop?: boolean;
}

const ComponentWrapper = ({
    children,
    className = "",
    marginTop = true,
}: ComponentWrapperProps): JSX.Element => {
    return (
        <div
            className={`
              flex-column-relative w-5/6 center
              ${marginTop ? "mt-9.5" : ""} 
              ${className}
            `}
        >
            {children}
        </div>
    );
};

const AdminDashBoard = (): JSX.Element => {
    return (
        <div className="flex-row-relative w-full center mt-8 mb-8">
            <div className="flex-column-relative center w-1/2">
                <ComponentWrapper marginTop={false}>
                    <CreateUserForm />
                </ComponentWrapper>

                <ComponentWrapper>
                    <UpdateUserByIdForm />
                </ComponentWrapper>

                <ComponentWrapper>
                    <GetUserByIdForm />
                </ComponentWrapper>

                <ComponentWrapper>
                    <DeleteUserByIdForm />
                </ComponentWrapper>
            </div>
            <div className="flex-column-relative center w-1/2">
                <ComponentWrapper marginTop={false}>
                    <UsersTable />
                </ComponentWrapper>
            </div>
        </div>
    );
};

export default AdminDashBoard;
