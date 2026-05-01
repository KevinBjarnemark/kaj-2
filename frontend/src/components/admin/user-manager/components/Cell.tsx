import { JSX } from "react";

interface CellProps {
    value: string;
    width: string;
    centered?: boolean;
}

const Cell = ({ value, centered = false, width }: CellProps): JSX.Element => {
    return (
        <div
            className={`
                flex-column-relative px-2 rounded
                justify-center h-full py-1.5 
                text-[#b3bbbe] overflow-x-auto border-[#232527]
            `}
            style={{
                border: "1px solid #1d1f20ff",
                alignItems: centered ? "center" : "start",
                width,
            }}
        >
            <p
                className={`
                    flex-column-relative center font-extrabold
                    font-lilita
                `}
            >
                {value}
            </p>
        </div>
    );
};

export default Cell;
