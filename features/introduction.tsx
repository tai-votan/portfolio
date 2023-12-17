import { useTranslations } from "next-intl";

import { Section } from "@/components/section";

export function Introduction() {
    const t = useTranslations("home");

    return (
        <>
            <div className="lg:h-screen flex items-center mb-24 md:mb-0" id="home">
                <Section name={t("introduction.name")} title={t("introduction.title")}>
                    <p className="text-xl md:text-3xl text-neutral-500">{t("introduction.description")}</p>
                </Section>
            </div>
        </>
    );
}
