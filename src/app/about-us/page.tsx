import React from "react";
import s from "./page.module.scss";
const About = () => {
    return (
        <>
            <main className={s.main}>
                <div className={s.infoWrapper}>
                    <h1>Welcome to Japautos</h1>

                    <div className={s.textWrapper}>
                        <p>
                            If you&apos;re looking for great savings on quality
                            used cars in the Accrington area, then you&apos;ve
                            reached the right place. We are proud to offer you
                            first-class customer service and very competitive
                            pricing, so please browse our stock list.
                        </p>

                        <p>
                            We stock a range of used cars to suit all budgets
                            and lifestyles, ensuring we have the right car for
                            you. At Japautos, we aim to make purchasing your
                            next quality used car as easy as possible.
                        </p>

                        <p>
                            If you&apos;re looking for a second-hand car, don’t
                            delay&mdash;call us today to book a test drive. To
                            cater to everyone, we make sure to update our
                            stocklist regularly. Therefore, it&apos;s always
                            worth giving us a call, even if you don&apos;t see
                            what you&apos;re looking for on our website.
                        </p>

                        <p>
                            Furthermore, we offer excellent advice and
                            experience on vehicles and vehicle maintenance. Our
                            friendly staff will go the extra mile to ensure you
                            receive the advice you need. This is why many of our
                            customers keep coming back to us.
                        </p>
                    </div>
                </div>
            </main>
            <hr className={s.hr} />
        </>
    );
};

export default About;
