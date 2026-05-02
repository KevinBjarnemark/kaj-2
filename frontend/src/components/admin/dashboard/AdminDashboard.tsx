"use client";

import React, { JSX } from "react";
import {
    CreateUserForm,
    UpdateUserByIdForm,
} from "@/components/forms/user-forms/UserForms";
import UserManager from "../user-manager/UserManager";

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
        <div
            className={`
            flex-row-relative w-full items-start 
            justify-center mt-8 mb-8
        `}
        >
            <div className="flex-column-relative center w-1/3">
                <ComponentWrapper marginTop={false}>
                    <CreateUserForm />
                </ComponentWrapper>

                <ComponentWrapper>
                    <UpdateUserByIdForm />
                </ComponentWrapper>
            </div>
            <div className="flex-column-relative center w-2/3">
                <ComponentWrapper marginTop={false}>
                    <h2 className="text-base">Users</h2>
                    <UserManager />
                </ComponentWrapper>
            </div>
        </div>
    );
};

export default AdminDashBoard;
