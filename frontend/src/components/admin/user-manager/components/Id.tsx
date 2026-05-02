import { JSX } from "react";

interface IdProps {
    id: number;
}

const Id = ({ id }: IdProps): JSX.Element => {
    return (
        <div
            className={`
                flex-column-relative center rounded text-center 
                w-1/12 bg-table-index px-1.5 h-full
                text-[#989fa1ff]
                overflow-x-auto
            `}
            style={{
                width: "9%",
            }}
        >
            <p>
                <span className="text-xs text-[#585c5eff]">#</span>
                {id}
            </p>
        </div>
    );
};

export default Id;
