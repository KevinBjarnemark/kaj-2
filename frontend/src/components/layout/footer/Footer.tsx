"use client";

import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <footer
            className={`
                flex-column-relative center w-full 
                border-t-4 border-border-300
                h-[var(--footer-height)]
            `}
        >
            <section className="flex-column-relative center w-full">
                <p className="text-xs sm:text-sm">
                    &copy; 2026 Project Kaj. All rights reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
