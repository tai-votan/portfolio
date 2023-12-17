import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Button, Input, Textarea } from "@/components/ui";

export function Contact() {
    const t = useTranslations("home");
    return (
        <Section name="CONTACT" title="Get In Touch" id="contact" classNames="pt-24 pb-48">
            <div className="flex flex-col gap-20">
                <p className="text-xl md:text-3xl text-neutral-500">
                    If you have any suggestion, project or even you want to say “hello”, please fill out the form below
                    and I will reply you shortly.
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
    );
}
