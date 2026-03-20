import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clicksutra",
  description: "Professional Full-Stack Developer specializing in Next.js, React, and Scalable Software Architecture. From Blockchain protocols to Custom CRM solutions, explore high-performance digital products crafted with precision. Let's build your next visionary project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
