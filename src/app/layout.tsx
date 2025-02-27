import type { Metadata } from "next";
import { Inter } from "next/font/google";
import s from "./globals.module.scss";

import Nav from "@/components/nav/Nav";
import "./lib/fontawesome";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dealership",
    description: "Dealership website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={(inter.className, s.body)}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
