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
    // Add suppressHydrationWarning to the <html> tag
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Wrap the entire application with ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-primary text-primary-foreground p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Paper Factory
              </Link>
              <div className="flex items-center gap-4 text-sm">
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
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}