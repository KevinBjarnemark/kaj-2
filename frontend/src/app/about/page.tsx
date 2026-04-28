import { JSX } from "react";

export const metadata = {
    title: "About",
};

const About = (): JSX.Element => {
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
                <h2 className="underline">About</h2>
            </section>

            <section className="flex-column-relative w-full start w-[96%]">
                <p>
                    This is an experimental project for managing platforms as
                    an admin. The project allows you to manage users, perform
                    database operations, view logging, and use admin tools.
                </p>
            </section>
        </article>
    );
};

export default About;
