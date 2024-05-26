import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthProvider";
import NextTopLoader from "nextjs-toploader";
import StickyIcons from "@/components/StickyIcons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajesh Murmu | rajeshsonmurmu | Web - Developer",
  description:
    "Experienced web developer specializing in creating responsive, user-friendly websites and web applications. Expertise in HTML, CSS, JavaScript, and modern frameworks to deliver high-quality, SEO-optimized digital solutions tailored to your business needs.",

  // favicons

  // <!-- fontawesome script -->
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
  // <script src="https://kit.fontawesome.com/ef4e39c21a.js" crossorigin="anonymous"></script>
  // <title></title>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <AuthProvider>
        <body className={inter.className}>
          <NextTopLoader />
          <div className="fixed inset-0 -z-10 h-full xl:h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <Navbar />
          <main className="min-h-[710px] text-white">{children}</main>
          <Toaster />
          <StickyIcons />
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
