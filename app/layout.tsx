import "./globals.css";

import { Metadata } from "next";

import { BLOG_TITLE } from "@/components/constants";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
        <Header />
        <main className="min-h-[63vh] sm:min-h-[67vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: BLOG_TITLE,
};
