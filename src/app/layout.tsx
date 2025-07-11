import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from "next";
import { Cinzel_Decorative, Libre_Franklin } from "next/font/google";
import "./globals.css";
import NavBar from './components/navbar';
import Footer from './components/footer';
import BootstrapClient from '@/lib/BootstrapClient';


const cinzel_decorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const libre_franklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar/>
      <body className={`${cinzel_decorative.variable} ${libre_franklin.variable}`}>
        <BootstrapClient />
        {/* Main content */}
        {children}
      </body>
      <Footer />
    </html>
  );
}
