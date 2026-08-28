import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import StarsCanvas from "@/components/background-3d";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritesh Yadav | Full-Stack Developer",
  description: "Portfolio of Ritesh Shrichandra Yadav, a Frontend-focused Full-Stack Developer specializing in Angular, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        {/* Dark Mesh Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#09090b]">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,#18181b_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#18181b_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        </div>
        
        <StarsCanvas />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
