import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOVOKASI",
  description:
    "Govokasi connects young talent with top companies for skill-based internships, training, and career coaching to foster professional growth. Offering curated programs and mentoring in diverse fields, Govokasi empowers career seekers with hands-on experience and industry connections. Trusted by leading Indonesian companies, Govokasi supports career transitions and skills enhancement through comprehensive, quality internships.",
};

import NavBar from "@/components/header/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased relative w-full`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
