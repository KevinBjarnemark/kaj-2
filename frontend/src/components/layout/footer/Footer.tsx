"use client";

import { JSX } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";

const Footer = (): JSX.Element => {
    const height = APP_CONSTANTS.DIMENSIONS.FOOTER.HEIGHT;

    return (
        <footer
            className={
                "flex-column-relative center w-full " +
                "border-t-4 border-[#34383bff]"
            }
            style={{
                height: `${height}px`,
            }}
        >
            <section className="flex-column-relative center w-full">
                <p className="text-[10px] sm:text-xs md:text-[14px]">
                    &copy; 2026 Project Kaj. All rights reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
