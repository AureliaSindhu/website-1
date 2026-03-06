import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const brandSans = Roboto({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const brandMono = Roboto_Mono({
  variable: "--font-brand-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Googlde Developer Group -- UC Irvine",
  description: "The Google Developer Group (GDG) at UC Irvine is a community of developers and tech enthusiasts passionate about Google technologies. We host events, workshops, and meetups to empower students and professionals to learn, connect, and grow their skills with the latest tools and trends in technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${brandMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
