import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui";
import { useStore } from "@/lib/store";

export const NavToggle = () => {
    const openNav = useStore((state) => state.openNav);

    return (
        <Button variant="outline" size="icon" onClick={openNav} className="border-0">
            <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Toggle Nav</span>
        </Button>
    );
};
