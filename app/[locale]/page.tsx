"use client";

import { useEffect } from "react";

import { Navigation } from "@/components/navigation";
import { About, Avatar, Contact, Introduction, Services } from "@/features";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function Home() {
    const isScroll = useStore((state) => state.isScroll);
    const setScroll = useStore((state) => state.setScroll);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScroll(false);
        } else {
            setScroll(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if (window.scrollY > 100) {
            setScroll(true);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <main className="flex flex-col lg:flex-row items-start relative">
                <Avatar />
                <div className={cn("lg:w-4/6 transition-all duration-500 ease-in-out", { "lg:w-7/12": !isScroll })}>
                    <Introduction />
                    <About />
                    <Services />
                    <Contact />
                </div>
            </main>
            <Navigation />
        </>
    );
}
