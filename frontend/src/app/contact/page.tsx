"use client";

import { ChangeEvent, FormEvent, JSX, useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const Contact = (): JSX.Element => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [feedback, setFeedback] = useState<string>("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            setStatus("error");
            setFeedback("Please fill in name, email and message.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            setStatus("error");
            setFeedback("Please enter a valid email address.");
            return;
        }

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        if (!backendUrl) {
            setStatus("error");
            setFeedback("Missing NEXT_PUBLIC_BACKEND_URL in frontend .env.");
            return;
        }

        setStatus("submitting");
        setFeedback("");

        try {
            const response = await fetch(backendUrl + "/contacts", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit contact form.");
            }

            setStatus("success");
            setFeedback("Message sent successfully.");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setStatus("error");
            setFeedback("Something went wrong. Please try again.");
        }
    };

    return (
        <div
            className={`
                w-full px-4 py-6 sm:px-8
                min-h-[calc(100vh-var(--header-height))]
            `}
        >
            <section className="mx-auto w-full max-w-2xl">
                <h1 className="mb-2 text-3xl font-bold text-slate-200">
                    Contact
                </h1>

                <p className="mb-6 text-slate-400">
                    Send us a message and we will get back to you.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className={`
                      space-y-4 rounded-xl border border-slate-700 
                      bg-slate-800/60 p-5 sm:p-6`}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1 block text-sm font-semibold text-slate-300"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={`
                              w-full rounded-md border border-slate-600 
                              bg-slate-900 px-3 py-2 text-slate-100 outline-none 
                              transition focus:border-sky-400`}
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-semibold text-slate-300"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`
                              w-full rounded-md border border-slate-600 bg-slate-900 
                              px-3 py-2 text-slate-100 outline-none transition 
                              focus:border-sky-400`}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1 block text-sm font-semibold text-slate-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className={`
                              w-full rounded-md border border-slate-600 
                              bg-slate-900 px-3 py-2 text-slate-100 
                              outline-none transition focus:border-sky-400`}
                            placeholder="Write your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={`
                          rounded-md bg-sky-500 px-4 py-2 
                          font-semibold text-slate-900 transition 
                          hover:bg-sky-400 disabled:cursor-not-allowed 
                          disabled:opacity-50`}
                    >
                        {status === "submitting"
                            ? "Sending..."
                            : "Send message"}
                    </button>

                    {feedback ? (
                        <p
                            className={
                                "text-sm " +
                                (status === "success"
                                    ? "text-emerald-400"
                                    : "text-rose-400")
                            }
                        >
                            {feedback}
                        </p>
                    ) : null}
                </form>
            </section>
        </div>
    );
};

export default Contact;
