import s from "./page.module.scss";
import Image from "next/image";
import handlerProtect from "../../../public/handerImage1.1721739647.jpg";
export default function Warranty() {
    return (
        <>
            <main className={s.main}>
                <div className={s.imgWrapper}>
                    <Image
                        className={s.logoImg}
                        src={handlerProtect}
                        alt="car"
                        priority
                    />
                </div>
                <div className={s.info}>
                    <h1>Get covered with a paid for Warranty</h1>
                    <p>
                        We offer warranties with Handler protect ranging from 6
                        months to 18 months.
                    </p>
                </div>
            </main>
            <hr className={s.hr} />
        </>
    );
}
