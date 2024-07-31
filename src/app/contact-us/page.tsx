import React from "react";
import styles from "./page.module.scss";

export default function ContactForm() {
    return (
        <main className={styles.main}>
            <h4>Contact us</h4>
            <form
                className={styles.form}
                name="contact"
                action="/success"
                method="POST"
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.wrapper}>
                    <label htmlFor="yourname">Your Name:</label>
                    <input type="text" name="name" id="yourname" />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="youremail">Your Email:</label>
                    <input type="email" name="email" id="youremail" />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="yourmessage">Message:</label>
                    <textarea name="message" id="yourmessage"></textarea>
                </div>
                <div className={styles.wrapper}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>
    );
}
