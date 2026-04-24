import SubmitButton from "@/components/buttons/SubmitButton";
import ApiContext, { UserDto } from "@/context/ApiContext";
import { useContext, useState } from "react";

export const UsersTable = () => {
    const { loadingApi, getAllUsers } = useContext(ApiContext);
    const [users, setUsers] = useState<UserDto[]>([]);

    const handleClick = async () => {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
    };

    const rowMargin = "2px 5px 2px 0";

    return (
        <>
            <h4>Users</h4>
            <SubmitButton
                onClick={handleClick}
                disabled={loadingApi}
                label="Show usernames"
            />
            <div
                className={
                    "flex-column-relative w-full h-[200px] " +
                    "px-[8px] overflow-y-auto bg-[#212324ff]"
                }
            >
                {users.map((i) => (
                    <div key={i.id} className="flex-row-relative">
                        <div
                            className={
                                "flex-row-relative rounded text-center " +
                                "w-[28px] bg-[#3b3d3eff] px-[5px] " +
                                "text-[#989fa1ff] bg-[#3b3d3eff]"
                            }
                            style={{
                                margin: rowMargin,
                            }}
                        >
                            <p>
                                <span className="font-xs, text-[#585c5eff]">
                                    #
                                </span>
                                {i.id}
                            </p>
                        </div>
                        <div
                            className={
                                "flex-column-relative rounded text-center " +
                                "center h-[30px] py-[5px] text-[#b3bbbeff]"
                            }
                        >
                            <p
                                className={
                                    "flex-column-relative center font-extrabold " +
                                    "font-['Lilita_One',sans-serif]"
                                }
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
