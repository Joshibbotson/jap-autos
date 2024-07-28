import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.infoMasterContainer}>
                <div className={s.infoContainer}>
                    <FontAwesomeIcon
                        icon="envelope"
                        className={s.fontAwesomeIcon}
                    />
                    <h1>Mail</h1>
                    <p>japautos20@gmail.com</p>
                </div>
                <div className={s.infoContainer}>
                    {" "}
                    <FontAwesomeIcon
                        icon="phone"
                        className={s.fontAwesomeIcon}
                    />
                    <h1>Phone</h1>
                    <p>+44 7537 145582</p>
                </div>
                <div className={s.infoContainer}>
                    {" "}
                    <FontAwesomeIcon
                        icon="location-pin"
                        className={s.fontAwesomeIcon}
                    />
                    <h1>Location</h1>
                    <p>Accrington</p>
                </div>
            </div>
            <hr />
            <p>© 2024 - All Rights Reserved - Jap Autos limited </p>
        </footer>
    );
};

export default Footer;
