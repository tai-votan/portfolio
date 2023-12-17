import { useTranslations } from "next-intl";

import { Section } from "@/components/section";

export function Services() {
    const t = useTranslations("home");

    return (
        <Section name="SERVICES" title="What I Do" id="services" classNames="py-24">
            <div className="flex flex-col gap-20">
                <p className="text-xl md:text-3xl text-neutral-500">
                    I help ambitious businesses like yours generate more profits by building awareness, driving web
                    traffic, connecting with customers and growing overall sales.
                </p>
                <div className="flex flex-col gap-5">
                    <div className="border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 rounded-sm flex flex-col md:flex-row">
                        <div className="flex-1 py-10 px-11">
                            <h3 className="text-3xl mb-4 text-black dark:text-neutral-300">Brand Consultant</h3>
                            <p className="text-lg text-neutral-500">
                                I build brands through cultural insights &amp; strategic vision. Custom crafted business
                                solutions.
                            </p>
                        </div>
                        <div className="px-10 py-4 md:w-1/3 flex flex-col md:items-center md:justify-center border-t md:border-t-0 md:border-l">
                            <p>Starts from</p>
                            <h3 className="text-2xl text-special font-medium">$599</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
