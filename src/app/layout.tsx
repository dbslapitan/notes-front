import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/header";

export const metadata: Metadata = {
  title: "Notes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="flex flex-col h-full bg-neutral-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
