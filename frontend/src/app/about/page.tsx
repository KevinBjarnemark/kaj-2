import { JSX } from "react";

const title = "About";
const description = "Learn more about KAJ";

export const metadata = {
    title,
    description,

    openGraph: {
        title,
        description,
        type: "website",
    },

    twitter: {
        card: "summary",
        title,
        description,
    },
};

const About = (): JSX.Element => {
    return (
        <article
            className={`
                flex-column-relative w-full center
                px-[2vw] py-[2vh]
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <h1 className="flex-column-relative items-center underline">
                About
            </h1>

            <section className="flex-column-relative w-3/4 mt-5">
                <h2>Project Overview</h2>
                <p>
                    The KAJ project can be explained as a{" "}
                    <strong>blank canvas</strong>. A template for developing
                    apps tailored to industry standards. Rather than
                    constraining the direction prematurely, we've established a
                    flexible architecture that can adapt to whatever
                    requirements emerge during exploration and iteration.
                </p>
                <p>
                    The structure supports experimentation while maintaining
                    code quality standards, allowing the team to evaluate
                    different approaches before committing to a specific
                    implementation strategy.
                </p>
            </section>

            <section className="flex-column-relative w-3/4 mt-8">
                <h2>Approach</h2>
                <p>
                    We prioritize understanding the problem domain thoroughly
                    before implementing solutions. This template provides the
                    necessary infrastructure without prescribing a specific
                    product direction, enabling the team to discover the
                    optimal path through systematic exploration.
                </p>
            </section>
        </article>
    );
};

export default About;
