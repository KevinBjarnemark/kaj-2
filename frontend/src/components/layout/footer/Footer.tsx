"use client";

import { JSX } from "react";

const Footer = (): JSX.Element => {
    return (
        <footer
            className={`
                flex-column-relative center w-full 
                border-t-4 border-border-300
                h-(--footer-height)
            `}
        >
            <p className="text-xs sm:text-sm">
                © 2026 Project Kaj. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
