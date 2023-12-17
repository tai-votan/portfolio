"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import { About, Avatar, Contact, Services } from "@/features";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export default function Home() {
    const isScroll = useStore((state) => state.isScroll);
    const setScroll = useStore((state) => state.setScroll);
    const t = useTranslations("home");

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
                <div className={cn("lg:w-4/6 transition-all duration-500 ease-in-out", { "lg:!w-3/5": !isScroll })}>
                    <div className="lg:h-screen flex items-center mb-24 md:mb-0" id="home">
                        <Section name={t("introduction.name")} title={t("introduction.title")}>
                            <p className="text-xl md:text-3xl text-neutral-500">{t("introduction.description")}</p>
                        </Section>
                    </div>
                    <About />
                    <Services />
                    <Contact />
                </div>
            </main>
            <Navigation />
        </>
    );
}
