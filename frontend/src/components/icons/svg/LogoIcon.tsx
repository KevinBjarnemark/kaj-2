import { JSX } from "react";

interface LogoIconProps {
    hovered: boolean;
}

const LogoIcon = ({ hovered }: LogoIconProps): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            className={
                "flex-column-relative center w-full h-full rounded " +
                "[fill-rule:evenodd] [clip-rule:evenodd] [stroke-linejoin:round]" +
                "[stroke-miterlimit:2]"
            }
            viewBox="0 0 640 640"
        >
            <path
                d={
                    "M320 312c-66.3 0-120-53.7-120-120S253.7 72 320 72s120 53.7" +
                    " 120 120-53.7 120-120 120zm-30.5 56h61c9.7 0 17.5 7.8 " +
                    "17.5 17.5 0 4.2-1.5 8.2-4.2 11.4l-27.4 32 31 " +
                    "115.1h.6l34.6-138.5c2.2-8.7 11.1-14 19.5-10.8C484 " +
                    "418.3 528 478.3 528 548.5c0 15.1-12.3 27.4-27.4 " +
                    "27.4l-361.2.1c-15.1 0-27.4-12.3-27.4-27.4 0-70.2 " +
                    "44-130.2 105.9-153.8 8.4-3.2 17.3 2.1 19.5 10.8L272 " +
                    "544.1h.6l31-115.1-27.4-32c-2.7-3.2-4.2-7.2-4.2-11.4 " +
                    "0-9.7 7.8-17.5 17.5-17.5z"
                }
                className="transition-[fill] duration-150 [fill-rule:nonzero]"
                style={{
                    fill: hovered ? "#ffffff" : "#6a6f74ff",
                }}
            />
        </svg>
    );
};

export default LogoIcon;
