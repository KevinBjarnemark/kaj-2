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
            <div
                className={`
                    flex-column-absolute top-0 sm:top-1/2 h-[45%] sm:h-[65%] 
                    mt-[0] sm:mt-[3px] sm:-translate-y-[65%]
                `}
            >
                <LogoIcon hovered={hovered} />
            </div>
            <p
                className={`
                    flex-column-absolute top-1/2 sm:top-[82%] 
                    font-['Lilita_One',sans-serif] transition-[fill] 
                    duration-200 text-xs sm:text-l -translate-y-1/2
                `}
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
    return (
        <header
            className={`
                flex-column-fixed w-full top-0 border-b-4 
                border-[#34383bff] h-[var(--header-height)]
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
