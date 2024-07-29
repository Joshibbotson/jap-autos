"use client";
import s from "./page.module.scss";
import Image from "next/image";
import typeR from "../../public/typer.jpg";
import genericCar from "../../public/car1.jpg";
import mini from "../../public/mini.jpg";
import peugot from "../../public/peugot.jpg";
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowsSize";

export default function Home() {
    const size = useWindowSize();
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        if (size.width > 768) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, [size.width]);

    function desktopLayout() {
        return (
            <main className={s.main}>
                <section>
                    <div className={s.leftHero}>
                        <div className={s.leftHeroContainer}>
                            <h1 className={s.companyName}>JAPAUTOS</h1>
                            <h1>High quality second hand cars for you</h1>
                            <p>Browse our cars now</p>
                            <button>Cars</button>
                        </div>
                    </div>
                    <div className={s.gridPanel}>
                        <div className={s.gridPanelLeft}>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={mini}
                                    alt="Inside Milchig"
                                    priority
                                />
                            </div>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={genericCar}
                                    alt="Inside Milchig"
                                    priority
                                />
                            </div>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={typeR}
                                    alt="Inside Milchig"
                                    priority
                                />{" "}
                            </div>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={peugot}
                                    alt="Inside Milchig"
                                    priority
                                />
                            </div>
                        </div>
                        <div className={s.gridPanelRight}>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={typeR}
                                    alt="Inside Milchig"
                                    priority
                                />{" "}
                            </div>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={peugot}
                                    alt="Inside Milchig"
                                    priority
                                />
                            </div>
                            <div className={s.imageWrapper}>
                                <Image
                                    className={s.gridCarImg}
                                    src={typeR}
                                    alt="Inside Milchig"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    function mobileLayout() {
        return (
            <main>
                <div className={s.hero}>
                    <div className={s.leftHeroContainer}>
                        <h1 className={s.companyName}>JAPAUTOS</h1>
                        <h1>High quality second hand cars for you</h1>
                        <p>Browse our cars now</p>
                        <button>Cars</button>
                    </div>
                </div>
            </main>
        );
    }
    return desktopLayout();
}
