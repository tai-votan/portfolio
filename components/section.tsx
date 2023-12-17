import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    name: string;
    title: string;
    id?: string;
    classNames?: string;
};

export const Section = (props: Props) => {
    const { children, name, title, id, classNames } = props;
    return (
        <div className={cn("flex flex-col md:w-3/4 px-5 mx-auto", classNames)} id={id}>
            <div className="font-medium text-lg md:text-xl text-special mb-14">{name}</div>
            <div className="text-black dark:text-neutral-300 text-2xl md:text-5xl relative pb-4 mb-8 after:absolute after:h-0.5 after:left-0 after:w-36 after:bottom-0 after:bg-neutral-400">
                {title}
            </div>
            {children}
        </div>
    );
};
