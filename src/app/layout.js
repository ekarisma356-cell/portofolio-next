
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
  default: "Rismaeka Meisaro - Portofolio",
  template: "%s | Rismaeka Meisaro",
  },
  description: "Portofolio Rismaeka Meisaro, siswa SMK calon junior Web Develover di kelas industri UBIG",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
