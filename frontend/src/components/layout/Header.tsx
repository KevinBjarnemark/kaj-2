"use client";

import { JSX, useState } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Link from "next/link";
import NavBar from "./NavBar";

interface SVGLogoProps {
    hovered: boolean;
}

const SVGLogo = ({ hovered }: SVGLogoProps): JSX.Element => {
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

const Logo = (): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Link
            href="/"
            rel="noopener noreferrer"
            className="flex-column-relative align-center w-[140px]"
            style={{
                height: `${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT - 5}px`,
            }}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            <div
                className="flex-column-relative center mt-[3px]"
                style={{
                    height: `${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT * 0.65}px`,
                }}
            >
                <SVGLogo hovered={hovered} />
            </div>
            <p
                className={
                    "flex-column-relative center font-['Lilita_One',sans-serif] " +
                    "transition-[fill] duration-200"
                }
                style={{
                    color: hovered ? "#ffffff" : "#969fa1ff",
                    transform: `scale(${hovered ? 1.1 : 1})`,
                }}
            >
                Admin
            </p>
        </Link>
    );
};

const Header = (): JSX.Element => {
    const height = APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT;

    return (
        <header
            className="flex-column-fixed w-full top-0 border-b-4 border-[#34383bff]"
            style={{
                height: `${height}px`,
            }}
        >
            <section className="flex-column-relative center w-full">
                <Logo />
                <NavBar />
            </section>
        </header>
    );
};

export default Header;
