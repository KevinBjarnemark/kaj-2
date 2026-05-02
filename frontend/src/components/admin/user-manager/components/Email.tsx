import { JSX } from "react";

interface UserNameProps {
    email: string;
}

const Email = ({ email }: UserNameProps): JSX.Element => {
    return (
        <div
            className={`
                flex-column-relative w-2/5 rounded
                items-start justify-center h-full py-1.5 
                text-[#b3bbbeff] ml-5 bg-[#3b3e41ff]
            `}
            style={{
                overflowX: "auto",
            }}
        >
            <p
                className={`
                    flex-column-relative center font-extrabold
                    font-lilita
                `}
            >
                {email}
            </p>
        </div>
    );
};

export default Email;
