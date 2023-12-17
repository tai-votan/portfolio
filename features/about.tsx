"use client";

import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

export function About() {
    const t = useTranslations("home");

    const data = [
        { label: "NAME", content: "Tai Vo Tan" },
        { label: "BIRTHDAY", content: "22th October 1994" },
        { label: "AGE", content: "31 years" },
        { label: "ADDRESS", content: "Ho Chi Minh City" },
        { label: "PHONE", content: "(+84) 906 787 884" },
        { label: "EMAIL", content: "taivo.it2210@gmail.com" },
    ];

    return (
        <>
            <Section name={t("about.name")} title={t("about.title")} id="about" classNames="py-24">
                <div className="flex flex-col gap-20">
                    <p className="text-xl md:text-3xl text-neutral-500">{t("about.description")}</p>
                    <div className="flex flex-col gap-2.5">
                        {data.map((item) => (
                            <div className="grid grid-cols-6 md:grid-cols-4 gap-2.5" key={item.label}>
                                <div className="col-span-2 md:col-span-1 text-lg font-medium text-black dark:text-foreground">
                                    {item.label}
                                </div>
                                <div className="col-span-4 md:col-span-3 text-lg text-black dark:text-neutral-300">
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
                                        <span className="uppercase text-lg dark:text-neutral-300">Frenify LLC</span>
                                        <span>(2018 — Today)</span>
                                    </div>
                                    <h3 className="text-3xl mb-4 text-black dark:text-neutral-300">Brand Consultant</h3>
                                    <p className="text-lg text-neutral-500">
                                        I build brands through cultural insights &amp; strategic vision. Custom crafted
                                        business solutions.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="education">Change your password here.</TabsContent>
                        <TabsContent value="tech-stack">Change your tech here.</TabsContent>
                    </Tabs>
                </div>
            </Section>
        </>
    );
}
