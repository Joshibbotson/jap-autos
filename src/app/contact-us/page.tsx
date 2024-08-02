"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import router from "next/router";
import { encode } from "../lib/encode";

interface IFormState {
    name: string;
    email: string;
    message: string;
}

interface IFormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [state, setState] = useState<IFormState>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<IFormErrors>({});
    const [submitError, setSubmitError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formErrors = validateFields();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const res = await fetch("/__forms.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...state }),
            });

            if (!res.ok) throw new Error("Failed to send message");

            router.push("/success");
        } catch (err) {
            console.error(err);
            setSubmitError("Failed to send message. Please try again later.");
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const validateFields = () => {
        let formErrors: IFormErrors = {};
        if (!state.name.trim()) {
            formErrors.name = "Name is required.";
        }
        if (!state.email) {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(state.email)) {
            formErrors.email = "Email address is invalid.";
        }
        if (!state.message.trim()) {
            formErrors.message = "Message is required.";
        } else if (state.message.length < 10) {
            formErrors.message = "Message must be at least 10 characters long.";
        }
        return formErrors;
    };

    const { name, email, message } = state;

    return (
        <main className={styles.main}>
            <h4>Contact us</h4>
            <form className={styles.form} onSubmit={handleSubmit} netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.wrapper}>
                    {submitError && (
                        <p className={styles.error}>{submitError}</p>
                    )}

                    <label htmlFor="yourname">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="yourname"
                        value={state.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className={styles.error}>{errors.name}</span>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="youremail">Your Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="youremail"
                        value={state.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className={styles.error}>{errors.email}</span>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="yourmessage">Message:</label>
                    <textarea
                        name="message"
                        id="yourmessage"
                        value={state.message}
                        onChange={handleChange}
                    />
                    {errors.message && (
                        <span className={styles.error}>{errors.message}</span>
                    )}
                </div>
                <div className={styles.wrapper}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>
    );
}
