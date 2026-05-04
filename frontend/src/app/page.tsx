import { JSX } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";

const title = "Project KAJ";
const description = "A template app whose future is unwritten";

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

const Home = (): JSX.Element => {
    return (
        <section
            className={`
                    flex-column-relative w-full 
                    h-[calc(100vh-var(--header-height))] 
                    overflow-hidden border-b-6 
                    border-border
                `}
        >
            <div className="flex-column-relative center h-full z-2">
                <h1
                    className={`
                        text-4xl md:text-6xl font-bold mb-4 text-center 
                        text-(--kaj-color) font-lilita opacity-90
                    `}
                >
                    Project Kaj
                </h1>
                <p
                    className={`
                        text-lg md:text-xl max-w-2xl font-lilita 
                        text-center text-(--kaj-color)
                    `}
                >
                    Beyond the known universe
                </p>
            </div>

            <Image
                src={heroImage}
                alt="" // ❕ Marks as decorative
                fill
                priority
                className="object-cover opacity-61 z-1"
                quality={90}
            />
        </section>
    );
};

export default Home;
