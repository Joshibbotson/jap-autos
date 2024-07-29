"use client";

import React, { use, useEffect, useState } from "react";
import s from "./Nav.module.scss";
import Link from "next/link";
import useWindowSize from "@/app/hooks/useWindowsSize";

const Nav = () => {
    const size = useWindowSize();
    const [isMobile, setIsMobile] = useState(true);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (size.width > 768) {
            setIsMobile(false);
            setIsActive(true);
        } else {
            setIsMobile(true);
            setIsActive(false);
        }
    }, [size.width]);

    function handleClick() {
        setIsActive(!isActive);
    }

    function closeMenu() {
        setIsActive(false);
    }

    function mobileNav() {
        return (
            <>
                <nav className={s.nav}>
                    <h1>JAPAUTOS </h1>
                    <div
                        className={`${s.hamburgerBtn} ${
                            isActive ? s.activeHamburger : ""
                        }`}
                        onClick={handleClick}
                    >
                        <div className={s.line1}></div>
                        <div className={s.line2}></div>
                        <div className={s.line3}></div>
                        <div className={s.diagonalLine1}></div>
                        <div className={s.diagonalLine2}></div>
                    </div>
                </nav>

                <div
                    className={`${s.dropDownMenu} ${
                        isActive ? s.activeDropDownMenu : ""
                    }`}
                >
                    <Link onClick={handleClick} className={s.link} href="/">
                        Home
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={s.link}
                        href="/Vehicles"
                    >
                        Vehicles
                    </Link>{" "}
                    <Link
                        onClick={handleClick}
                        className={s.link}
                        href="/part-exchange"
                    >
                        Part Exchange
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={s.link}
                        href="/warranty"
                    >
                        Warranty
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={s.link}
                        href="/about-us"
                    >
                        About Us
                    </Link>
                    <Link
                        onClick={handleClick}
                        className={s.link}
                        href="/contact"
                    >
                        Contact Us
                    </Link>
                </div>
            </>
        );
    }

    function desktopNav() {
        return (
            <>
                <nav className={s.nav}>
                    <h1>JAPAUTOS </h1>

                    <div className={s.desktopNavLinks}>
                        <Link onClick={handleClick} className={s.link} href="/">
                            Home
                        </Link>
                        <Link
                            onClick={handleClick}
                            className={s.link}
                            href="https://www.autotrader.co.uk/retailer/stock?sort=price-asc&page=1&dealer=10038592&onesearchad=Used&onesearchad=Nearly%20New&onesearchad=New&advertising-location=at_cars&advertising-location=at_profile_cars"
                        >
                            Vehicles
                        </Link>{" "}
                        <Link
                            onClick={handleClick}
                            className={s.link}
                            href="/part-exchange"
                        >
                            Part Exchange
                        </Link>
                        <Link
                            onClick={handleClick}
                            className={s.link}
                            href="/warranty"
                        >
                            Warranty
                        </Link>
                        <Link
                            onClick={handleClick}
                            className={s.link}
                            href="/about-us"
                        >
                            About Us
                        </Link>
                        <Link
                            onClick={handleClick}
                            className={s.link}
                            href="/contact"
                        >
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </>
        );
    }
    return <>{isMobile ? mobileNav() : desktopNav()}</>;
};

export default Nav;
