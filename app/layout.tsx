import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer, SideBar } from "@/Page-Components/common";
import "./globals.css";
import { Setup } from "@/Page-Components/utils";
import "react-toastify/ReactToastify.min.css";
import { ThemeProvider } from "@/Page-Components/ui/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VSL",
    description: "Web học (chắc v) ¯|_(ツ)_/¯",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <Setup />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="Dark"
                    enableSystem
                    themes={[
                        "Light",
                        "Dark",
                        "Spring",
                        "Summer",
                        "Fall",
                        "Winter",
                    ]}
                    disableTransitionOnChange
                >
                    <NavBar />
                    <SideBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
