import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/commonlayout/navigation";
import { Header } from "@/components/commonlayout/header";

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
        {children}
        <Navigation />
      </body>
    </html>
  );
}
