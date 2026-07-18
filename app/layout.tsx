import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshu Sharma | Frontend Developer & WordPress Developer",
  description:
    "Portfolio of Anshu Sharma, Frontend Developer specializing in React.js, Next.js, Tailwind CSS and WordPress Development.",
  keywords: [
    "Anshu Sharma",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Portfolio",
    "Freelancer",
  ],
  authors: [{ name: "Anshu Sharma" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>
          {children}
          <ScrollToTop />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}