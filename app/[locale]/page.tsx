import { Navigation } from "@/components/navigation";
import { Avatar, Features } from "@/features";

export async function generateMetadata() {
    const siteURL = "https://portfolio-tai-votan.vercel.app";

    return {
        title: "Tai Vo Tan | Portfolio",
        description: "Tai Vo Tan | Portfolio",
        metadataBase: new URL(siteURL),
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "/en",
                "vi-VN": "/vi",
            },
        },
        openGraph: {
            images: "/avatar_square.jpeg",
        },
    };
}

export default function Home() {
    return (
        <>
            <main className="flex flex-col lg:flex-row items-start relative">
                <Avatar />
                <Features />
            </main>
            <Navigation />
        </>
    );
}
