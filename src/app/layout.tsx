import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Adarsh Gupta",
  description: "A Typical Indian Software Developer who loves to code and write blogs.",
  icons:["/favicon.ico"]
  // add og
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      {/* set logo */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={poppins.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>

        </body>
    </html>
  );
}
