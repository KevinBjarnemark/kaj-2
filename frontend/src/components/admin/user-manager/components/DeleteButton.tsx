import useAdmin from "@/hooks/admin/useAdmin";
import { JSX } from "react";

interface DeleteButtonProps {
    id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps): JSX.Element => {
    const admin = useAdmin();

    const handleClick = async (): Promise<void> => {
        await admin.deleteUser(id);
    };

    return (
        <button
            className={`
                flex-column-relative center h-full 
                bg-[#353839] hover:bg-[#e84f4fff] 
                text-center rounded
            `}
            style={{
                width: "9%",
            }}
            onClick={handleClick}
        >
            X
        </button>
    );
};

export default DeleteButton;
