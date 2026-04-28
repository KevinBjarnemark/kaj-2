"use client";

import { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <article
            className={`
                flex-column-relative w-full justify-start
                px-[2vw] py-[2vh]
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <section
                className={`
                    flex-column-relative w-full items-center
                    justify-start mt-[20px]
                `}
            >
                <h2 className="underline">Project Kaj</h2>

                <p>......</p>
            </section>
        </article>
    );
};

export default Home;
