import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingActionButton from "@/components/custom/support/FloatingActionButton";
import { ThemeProvider } from "@/provider/ThemeProvider";
import ClientSessionProvider from "@/provider/ClientSessionProvider";
import ReduxProvider from "@/provider/ReduxProvider";
import GetAuth from "@/function/GetAuth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Photocess",
  description: "A photo processing app",
  icons: {
    icon: "./miniLogo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientSessionProvider>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <FloatingActionButton />
            <GetAuth />
          </ReduxProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
