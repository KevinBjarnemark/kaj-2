import { useState } from "react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { UserDto } from "@/context/ApiContext";
import useApi from "@/hooks/api/useApi";

export const UsersTable = () => {
    const api = useApi();
    const [users, setUsers] = useState<UserDto[]>([]);

    const handleClick = async () => {
        const fetchedUsers = await api.getAllUsers();
        setUsers(fetchedUsers);
    };

    return (
        <>
            <h2 className="text-base">Users</h2>
            <SubmitButton onClick={handleClick} label="Show usernames" />
            <div
                className={`
                    flex-column-relative w-full h-130
                    px-2 pt-1 overflow-y-auto bg-component-background
                `}
            >
                {users.map((i) => (
                    <div key={i.id} className="flex-row-relative">
                        <div
                            className={`
                                flex-row-relative rounded text-center 
                                w-7 bg-[#3b3d3eff] px-1.5
                                text-[#989fa1ff] bg-[#3b3d3eff]
                                my-0.5 mr-1
                            `}
                        >
                            <p>
                                <span className="text-xs text-[#585c5eff]">
                                    #
                                </span>
                                {i.id}
                            </p>
                        </div>
                        <div
                            className={`
                                flex-column-relative rounded text-center 
                                center h-8 py-1.5 text-[#b3bbbeff]
                            `}
                        >
                            <p
                                className={`
                                    flex-column-relative center font-extrabold
                                    font-lilita
                                `}
                            >
                                {i.username}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
