import { Cross1Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

export const Navigation = () => {
    const openNav = useStore((state) => state.openNav);
    const isOpen = useStore((state) => state.isOpen);
    const isScroll = useStore((state) => state.isScroll);

    const navs = ["home", "about", "services", "contact"];

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = e.target;
        if (el instanceof HTMLAnchorElement) {
            const id = el.getAttribute("href")?.split("#")[1] as string;
            const target = document.getElementById(id);
            window.scrollTo({ top: target?.offsetTop, behavior: "smooth" });
            openNav();
        }
    };

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 z-40 opacity-90 dark:bg-neutral-900 bg-neutral-200 transition-all duration-1000 ",
                    { "-translate-x-full": !isOpen },
                )}
            />
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-full lg:w-2/5 bg-white dark:bg-neutral-900 transition-all duration-1000 flex flex-col p-24",
                    { "translate-x-full": !isOpen, "lg:w-1/3": isScroll },
                )}
            >
                <Button
                    variant="outline"
                    size="icon"
                    onClick={openNav}
                    className="border-0 absolute z-50 top-6 right-6"
                >
                    <Cross1Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle Nav</span>
                </Button>
                <h3 className="text-lg font-bold mb-7">MENU</h3>
                <nav>
                    <ul className="flex flex-col gap-2.5">
                        {navs.map((nav, index) => (
                            <li
                                key={nav}
                                className={cn("transition-all duration-500", { "translate-x-12 opacity-0": !isOpen })}
                                style={{ transitionDelay: `${index * 200 + 700}ms` }}
                            >
                                <Link
                                    href={`#${nav}`}
                                    className="capitalize text-3xl text-black hover:text-special transition-all duration-300"
                                    onClick={onClick}
                                >
                                    {nav}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
