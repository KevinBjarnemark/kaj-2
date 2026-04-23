"use client";

import { JSX, useState } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Link from "next/link";
import NavBar from "./components/NavBar";
import LogoIcon from "../../icons/svg/LogoIcon";

const Logo = (): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Link
            href="/"
            rel="noopener noreferrer"
            className="flex-column-relative center w-[140px]"
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
                <LogoIcon hovered={hovered} />
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
            <section className="flex-column-relative start w-full">
                <Logo />
                <NavBar />
            </section>
        </header>
    );
};

export default Header;
