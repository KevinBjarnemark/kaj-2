"use client";

import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <footer
            className={`
                flex-column-relative center w-full 
                border-t-4 border-[#34383bff] 
                h-[var(--footer-height)]
            `}
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
