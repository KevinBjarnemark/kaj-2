"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import LogoIcon from "../../icons/svg/LogoIcon";
import LogInButton from "./components/LogInButton";

const Logo = (): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Link
            href="/"
            rel="noopener noreferrer"
            className={`
                flex-column-relative center w-[140px]
                h-[calc((var(--header-height)-5px))]
            `}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            <LogoIcon
                className={`
                    flex-column-absolute top-0 sm:top-1/2 h-[45%] sm:h-[80%] 
                    mt-[0] sm:mt-[0] sm:-translate-y-[50%]
                `}
                hovered={hovered}
            />
        </Link>
    );
};

const Header = (): JSX.Element => {
    return (
        <header
            className={`
                flex-column-fixed w-full top-0 border-b-4 
                border-[var(--border-color)] h-[var(--header-height)]
            `}
        >
            <section
                className={`
                    flex-column-relative items-center justify-center 
                    w-full sm:items-start sm:justify-start
                `}
            >
                <Logo />
                <LogInButton />
                <NavBar />
            </section>
        </header>
    );
};

export default Header;
