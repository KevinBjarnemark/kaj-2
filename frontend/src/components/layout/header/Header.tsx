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
        className={
          "flex-column-absolute top-0 sm:top-1/2 h-[45%] sm:h-[65%] " +
          "mt-[0] sm:mt-[3px] sm:-translate-y-1/2"
        }
      >
        <LogoIcon hovered={hovered} />
      </div>
      <p
        className={
          "flex-column-absolute top-1/2 sm:top-[90%] font-['Lilita_One',sans-serif] " +
          "transition-[fill] duration-200 text-xs sm:text-l -translate-y-1/2"
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
      <section
        className={
          "flex-column-relative items-center justify-center " +
          "w-full sm:items-start sm:justify-start"
        }
      >
        <Logo />
        <NavBar />
      </section>
    </header>
  );
};

export default Header;
