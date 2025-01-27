import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/mainpage/navigation";
import { Header } from "@/components/mainpage/header";

export const metadata: Metadata = {
  title: "Book History",
  description: "Recording your already-read books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="min-h-screen"></div>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
