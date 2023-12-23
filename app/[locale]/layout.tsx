import { locales } from "@/i18n";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import StoreProvider from "@/lib/StoreProvider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const manrope = Manrope({ subsets: ["latin"] });

type Layout = {
    children: React.ReactNode;
    params: {
        locale: (typeof locales)[number];
    };
};

export default function RootLayout({ children, params: { locale } }: Layout) {
    if (!locales.includes(locale)) notFound();
    const messages = useMessages();
    return (
        <html lang={locale}>
            <body
                className={cn(
                    "[&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar-thumb]:hidden",
                    manrope.className,
                )}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <StoreProvider>{children}</StoreProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
