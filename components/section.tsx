import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    name: string;
    title: string;
};

export const Section = (props: Props) => {
    const { children, name, title } = props;
    return (
        <div className="flex flex-col w-3/4 mx-auto">
            <div className="font-medium text-xl text-special mb-14">{name}</div>
            <div className="text-black dark:text-neutral-300 text-5xl relative pb-4 mb-8 after:absolute after:h-0.5 after:left-0 after:w-36 after:bottom-0 after:bg-neutral-400">
                {title}
            </div>
            {children}
        </div>
    );
};
