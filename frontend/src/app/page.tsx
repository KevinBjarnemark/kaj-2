import { JSX } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";

const Home = (): JSX.Element => {
    return (
        <article className="flex-column-relative w-full">
            <section
                className={`
                    flex-column-relative w-full 
                    h-[calc(100vh-var(--header-height))] 
                    overflow-hidden border-b-6 
                    border-[var(--border-color)] 
                `}
            >
                <Image
                    src={heroImage}
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover opacity-61"
                    quality={90}
                />

                <div className="flex-column-relative center h-full">
                    <h1
                        className={`
                        text-4xl md:text-6xl font-bold mb-4 text-center 
                        text-[var(--kaj-color)] font-['Lilita_One',sans-serif]
                    `}
                    >
                        Project Kaj
                    </h1>
                    <p
                        className={`
                        text-lg md:text-xl max-w-2xl font-['Lilita_One',sans-serif] 
                        text-center text-[var(--kaj-color)]
                    `}
                    >
                        Beyond the known universe
                    </p>
                </div>
            </section>
        </article>
    );
};

export default Home;
