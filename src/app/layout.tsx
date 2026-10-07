import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
 title: "Adarsh Gupta — Engineer & Curious Human",
 description: "Thoughtful interfaces, dependable systems, and creative experiments. A few things built by Adarsh Gupta.",
 icons: ["/favicon.ico"],
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>{children}</ThemeProvider><Analytics/></body></html>;
}
