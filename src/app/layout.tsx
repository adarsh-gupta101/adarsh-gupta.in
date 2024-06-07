import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Gupta",
  description: "A Typical Indian Software Developer who loves to code and write blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
