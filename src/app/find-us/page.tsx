import React from "react";
import s from "./page.module.scss";

const Contact = () => {
    return (
        <>
            <main className={s.main}>
                <div className={s.mapContainer}>
                    <iframe
                        className={s.iframe}
                        title="google maps"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d589.8188510512573!2d-2.3821667302816842!3d53.748978998275554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDQ0JzU2LjMiTiAywrAyMic1My41Ilc!5e0!3m2!1sen!2suk!4v1722442991011!5m2!1sen!2suk&z=5"
                        style={{ border: 0 }}
                        aria-hidden="false"
                    ></iframe>
                    <div className={s.txtContainer}>
                        <p>Unit 1 Fairfield Street</p>
                        <p>Accrington</p>
                        <p>Lancashire</p>
                        <p>BB5 0LD</p>
                    </div>
                </div>
            </main>
            <hr className={s.hr} />
        </>
    );
};

export default Contact;
