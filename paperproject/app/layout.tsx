import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { DarkModeToggle } from "@/components/darkMode";
import Link from "next/link";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paper Factory",
  description: "A factory specializing in paper production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="fixed top-0 left-0 w-full bg-primary text-primary-foreground p-4 z-50">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Paper Factory
              </Link>
              {/* Hamburger toggle (checkbox + label) */}
              <input type="checkbox" id="nav-toggle" className="hidden peer" />
              <label
                htmlFor="nav-toggle"
                className="md:hidden flex items-center px-3 py-2 text-primary-foreground cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              {/* Navigation links */}
              <div
                className="hidden peer-checked:flex md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0 items-center gap-4 text-sm transition-all"
              >
                <Link href="/#process" className="hover:underline">
                  Our Process
                </Link>
                <Link href="/#products" className="hover:underline">
                  Products
                </Link>
                <Link href="/#sustainability" className="hover:underline">
                  Sustainability
                </Link>
                <Link href="/#innovation" className="hover:underline">
                  Innovation
                </Link>
                <Link href="/aboutUs" className="hover:underline">
                  About the Creator
                </Link>
                <DarkModeToggle />
              </div>
            </nav>
          </header>
          <main className="container mx-auto p-4 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}