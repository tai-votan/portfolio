import Image from "next/image";

import { LangToggle } from "@/components/lang-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { NavToggle } from "@/components/nav-toggle";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Avatar() {
    const isScroll = useStore((state) => state.isScroll);

    return (
        <div
            className={cn(
                "lg:order-2 lg:w-2/6 lg:sticky lg:top-0 lg:border-l border-black/20 dark:border-white/20 transition-all duration-500 ease-in-out h-screen py-24 text-center flex items-center w-full",
                { "lg:w-5/12": !isScroll },
            )}
        >
            <div className="fixed z-50 top-6 right-6 flex gap-2">
                <LangToggle />
                <ModeToggle />
                <NavToggle />
            </div>
            <div className="relative flex flex-col gap-4 pb-5 after:border after:border-black/20 after:dark:border-white/20 after:absolute after:rounded-sm after:-inset-x-5 after:-inset-y-10 before:border before:border-black/20 before:dark:border-white/20 before:absolute before:rounded-sm before:-inset-x-10 before:-inset-y-6 w-3/5 mx-auto">
                <div className="aspect-square relative flex-1">
                    <Image src={"/avatar_square.jpeg"} fill alt={"Tai Vo Tan"} className="rounded-sm" priority />
                </div>
                <div className="flex flex-col gap-2 text-black dark:text-neutral-300">
                    <div className="text-xl font-medium">I&apos;m a</div>
                    <h1 className="text-3xl font-semibold">@tai.votan</h1>
                </div>
            </div>
        </div>
    );
}
