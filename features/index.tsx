"use client";

export { Avatar } from "./avatar";

import { About } from "./about";
import { Contact } from "./contact";
import { Introduction } from "./introduction";
import { Services } from "./services";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Features() {
    const isScroll = useStore((state) => state.isScroll);

    return (
        <div className={cn("lg:w-4/6 transition-all duration-500 ease-in-out", { "lg:w-7/12": !isScroll })}>
            <Introduction />
            <About />
            <Services />
            <Contact />
        </div>
    );
}
