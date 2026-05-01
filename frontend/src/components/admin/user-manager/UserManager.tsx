"use client";

import { JSX } from "react";
import useAdmin from "@/hooks/admin/useAdmin";
import DeleteButton from "./components/DeleteButton";
import Id from "./components/Id";
import Cell from "./components/Cell";

const UserManager = (): JSX.Element => {
    const admin = useAdmin();

    return (
        <>
            <div
                className={`
                    flex-column-relative w-full h-130
                    px-2 pt-1 overflow-y-auto bg-component-background
                    rounded
                `}
            >
                <div className="flex-row-relative w-full bg-[#2a2d2e] mb-1 rounded">
                    <Cell value="Id" width="9%" centered={true} />
                    <Cell value="Username" width="41%" centered={true} />
                    <Cell value="Email" width="41%" centered={true} />
                    <Cell value="X" width="9%" centered={true} />
                </div>
                {admin.loadedUsers.map((user) => (
                    <div
                        key={user.id}
                        className="flex-row-relative w-full bg-[#2a2d2e] mb-1 rounded"
                    >
                        <Id id={user.id} />
                        <Cell value={user.username} width="41%" />
                        <Cell value={user.email} width="41%" />
                        <DeleteButton id={user.id} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserManager;
