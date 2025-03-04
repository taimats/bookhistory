import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/commonlayout/navigation";
import { Header } from "@/components/commonlayout/header";
import { ThemeProvider } from "@/components/commonlayout/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LoginMordalProvider } from "@/components/auth/login-mordal-provider";
import { SessionProvider } from "next-auth/react"
import { LogoutMordalProvider } from "@/components/auth/logout-mordal-provider";

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
        <SessionProvider>
        <Header />
        {children}
        <Toaster />
        <LoginMordalProvider />
        <LogoutMordalProvider />
        <Navigation />
        </SessionProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
