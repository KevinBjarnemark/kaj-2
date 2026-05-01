import ContactForm from "@/components/forms/contact/ContactForm";
import { JSX } from "react";

const title = "Contact";
const description = "Get in touch with our team";

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

const Contact = (): JSX.Element => {
    return (
        <div
            className={`
                w-full px-4 py-6 sm:px-8
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <h1 className="flex-column-relative items-center underline">
                Contact
            </h1>
            <section className="mx-auto w-full max-w-2xl">
                <ContactForm />
            </section>
        </div>
    );
};

export default Contact;
