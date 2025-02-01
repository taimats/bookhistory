import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/commonlayout/navigation";
import { Header } from "@/components/commonlayout/header";
import { ThemeProvider } from "@/components/commonlayout/theme-provider"

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
    <html lang="ja" suppressHydrationWarning>
      <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
        <Navigation />
      </ThemeProvider>
      </body>
    </html>
  );
}
