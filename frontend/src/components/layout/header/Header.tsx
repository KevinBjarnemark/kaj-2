"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import LogoIcon from "../../icons/svg/LogoIcon";
import LogInButton from "./components/LogInButton";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import useLoading from "@/hooks/loading/useLoading";

const Logo = (): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false);
    const loading = useLoading();

    return (
        <Link
            href="/"
            rel="noopener noreferrer"
            className={`
                flex-column-relative center w-35
                h-[calc((var(--header-height)-5px))]
            `}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            <LoadingSpinner isLoading={loading.loading}>
                <LogoIcon
                    className={`
                    flex-column-absolute top-0 sm:top-1/2 h-[45%] sm:h-[80%] 
                    sm:-translate-y-[50%]
                `}
                    hovered={hovered}
                />
            </LoadingSpinner>
        </Link>
    );
};

const Header = (): JSX.Element => {
    return (
        <header
            className={`
                flex-column-fixed w-full top-0 border-b-4 
                border-border h-(--header-height) z-2
            `}
        >
            <div
                className={`
                    flex-column-relative items-center justify-center 
                    w-full sm:items-start sm:justify-start
                `}
            >
                <Logo />
                <LogInButton />
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
