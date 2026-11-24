// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iverson Loquere | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-3xl gap-6 px-8 py-4 font-medium">
            <Link href="/" className="text-slate-700 hover:text-slate-950 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-950 hover:underline">
              About
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-slate-950 hover:underline">
              Projects
            </Link>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}