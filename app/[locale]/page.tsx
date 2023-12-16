"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { LangToggle } from "@/components/lang-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { Section } from "@/components/section";
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function Home() {
    const [isScroll, setScroll] = useState(false);
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

    const data = [
        { label: "NAME", content: "Bruce Wilson" },
        { label: "BIRTHDAY", content: "4th April 1990" },
        { label: "AGE", content: "31 years" },
        { label: "ADDRESS", content: "San Francisco" },
        { label: "PHONE", content: "(+38) 469 2344 2364" },
        { label: "EMAIL", content: "trendycoder.com@gmail.com" },
    ];

    return (
        <main className="flex flex-col lg:flex-row items-start relative">
            <div
                className={cn(
                    "lg:order-2 lg:w-2/6 lg:sticky lg:top-0 lg:border-l border-black/20 dark:border-white/20 transition-all duration-500 ease-in-out h-screen py-24 text-center flex items-center w-full",
                    { "lg:!w-2/5": !isScroll },
                )}
            >
                <div className="absolute z-50 top-10 right-12 flex gap-2">
                    <LangToggle />
                    <ModeToggle />
                </div>
                <div className="relative flex flex-col gap-4 pb-5 after:border after:border-black/20 after:dark:border-white/20 after:absolute after:rounded-sm after:-inset-x-5 after:-inset-y-10 before:border before:border-black/20 before:dark:border-white/20 before:absolute before:rounded-sm before:-inset-x-10 before:-inset-y-6 w-2/3 mx-auto">
                    <div className="aspect-square relative flex-1">
                        <Image src={"/avatar_square.jpeg"} fill alt={"avatar"} className="rounded-sm" priority />
                    </div>
                    <div className="flex flex-col gap-2 text-black dark:text-neutral-300">
                        <div className="text-xl font-medium">I&apos;m a</div>
                        <h1 className="text-3xl font-semibold">@tai.votan</h1>
                    </div>
                </div>
            </div>
            <div
                className={cn("lg:w-4/6 transition-all duration-500 ease-in-out", {
                    "lg:!w-3/5": !isScroll,
                })}
            >
                <div className="lg:h-screen flex items-center">
                    <Section name={t("introduction.name")} title={t("introduction.title")}>
                        <p className="text-3xl text-neutral-500">{t("introduction.description")}</p>
                    </Section>
                </div>
                <div className="flex flex-col gap-24">
                    <Section name={t("about.name")} title={t("about.title")}>
                        <div className="flex flex-col gap-20">
                            <p className="text-3xl text-neutral-500">{t("about.description")}</p>
                            <div className="flex flex-col gap-2.5">
                                {data.map((item) => (
                                    <div className="grid grid-cols-4" key={item.label}>
                                        <div className="col-span-1 text-lg font-medium text-black dark:text-foreground">
                                            {item.label}
                                        </div>
                                        <div className="col-span-3 text-lg text-black dark:text-neutral-300">
                                            {item.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Tabs defaultValue="experience">
                                <TabsList>
                                    <TabsTrigger value="experience">Experience</TabsTrigger>
                                    <TabsTrigger value="education">Education</TabsTrigger>
                                    <TabsTrigger value="tech-stack" showSeparator={false}>
                                        Tech stacks
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="experience">
                                    <div className="flex flex-col gap-5">
                                        <div className="border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 rounded-sm flex flex-col gap-2.5 py-10 px-11">
                                            <div className="flex gap-5 items-center">
                                                <span className="uppercase text-lg dark:text-neutral-300">
                                                    Frenify LLC
                                                </span>
                                                <span>(2018 — Today)</span>
                                            </div>
                                            <h3 className="text-3xl mb-4 text-black dark:text-neutral-300">
                                                Brand Consultant
                                            </h3>
                                            <p className="text-lg text-neutral-500">
                                                I build brands through cultural insights &amp; strategic vision. Custom
                                                crafted business solutions.
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="education">Change your password here.</TabsContent>
                                <TabsContent value="tech-stack">Change your tech here.</TabsContent>
                            </Tabs>
                        </div>
                    </Section>
                    <Section name="SERVICES" title="What I Do">
                        <div className="flex flex-col gap-20">
                            <p className="text-3xl text-neutral-500">
                                I help ambitious businesses like yours generate more profits by building awareness,
                                driving web traffic, connecting with customers and growing overall sales.
                            </p>
                            <div className="flex flex-col gap-5">
                                <div className="border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 rounded-sm flex">
                                    <div className="flex-1 py-10 px-11">
                                        <h3 className="text-3xl mb-4 text-black dark:text-neutral-300">
                                            Brand Consultant
                                        </h3>
                                        <p className="text-lg text-neutral-500">
                                            I build brands through cultural insights &amp; strategic vision. Custom
                                            crafted business solutions.
                                        </p>
                                    </div>
                                    <div className="p-2.5 w-1/3 flex flex-col items-center justify-center border-l">
                                        <p>Starts from</p>
                                        <h3 className="text-2xl text-special font-medium">$599</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section name="CONTACT" title="Get In Touch">
                        <div className="mb-40 flex flex-col gap-20">
                            <p className="text-3xl text-neutral-500">
                                If you have any suggestion, project or even you want to say “hello”, please fill out the
                                form below and I will reply you shortly.
                            </p>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <Input placeholder="Name" className="border-black/20 dark:border-white/20" />
                                </div>
                                <div>
                                    <Input placeholder="Email" className="border-black/20 dark:border-white/20" />
                                </div>
                                <div className="col-span-2">
                                    <Input placeholder="Phone" className="border-black/20 dark:border-white/20" />
                                </div>
                                <div className="col-span-2">
                                    <Textarea placeholder="Message" className="border-black/20 dark:border-white/20" />
                                </div>
                                <div className="col-span-2">
                                    <Button variant="outline" className="border-black/20 dark:border-white/20 w-full">
                                        Send message
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </main>
    );
}
