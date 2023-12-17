import { useRouter } from "@/navigation";
import { GlobeIcon } from "@radix-ui/react-icons";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";

export function LangToggle() {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-0">
                    <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle lang</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/", { locale: "en" })}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/", { locale: "vi" })}>
                    Vietnamese
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
