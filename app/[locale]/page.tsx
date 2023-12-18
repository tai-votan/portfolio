import { Navigation } from "@/components/navigation";
import { Avatar, Features } from "@/features";

export async function generateMetadata() {
    const siteURL = "https://portfolio-tai-votan.vercel.app";

    return {
        title: "Tai Vo Tan - Front-end Engineer | Portfolio",
        description: "My digital world, where I share thinking about life and work.",
        metadataBase: new URL(siteURL),
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "en",
                "vi-VN": "vi",
            },
        },
        openGraph: {
            images: "/avatar_square.jpeg",
        },
    };
}

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://portfolio-tai-votan.vercel.app/#website",
                url: "https://portfolio-tai-votan.vercel.app/",
                name: "Tai Vo Tan - Front-end Engineer | Portfolio",
                inLanguage: "en-US",
                description: "My digital world, where I share thinking about life and work.",
                potentialAction: [
                    {
                        "@type": "SearchAction",
                        target: "https://portfolio-tai-votan.vercel.app/?s={search_term_string}",
                        "query-input": "required name=search_term_string",
                    },
                ],
            },
            {
                "@type": "ImageObject",
                "@id": "https://portfolio-tai-votan.vercel.app/#primaryimage",
                inLanguage: "en-US",
                url: "https://portfolio-tai-votan.vercel.app/wp-content/uploads/2020/06/2x.png",
                width: 2400,
                height: 1260,
            },
            {
                "@type": "WebPage",
                "@id": "https://portfolio-tai-votan.vercel.app/#webpage",
                url: "https://portfolio-tai-votan.vercel.app/",
                name: "Tai Vo Tan - Front-end Engineer.",
                isPartOf: { "@id": "https://portfolio-tai-votan.vercel.app/#website" },
                inLanguage: "en-US",
                primaryImageOfPage: { "@id": "https://portfolio-tai-votan.vercel.app/#primaryimage" },
                datePublished: "2020-12-18T14:44:37+00:00",
                dateModified: "2023-12-18T15:57:11+00:00",
                description: "My digital world, where I share thinking about life and work.",
                potentialAction: [{ "@type": "ReadAction", target: ["https://portfolio-tai-votan.vercel.app/"] }],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <main className="flex flex-col lg:flex-row items-start relative">
                <Avatar />
                <Features />
            </main>
            <Navigation />
        </>
    );
}
