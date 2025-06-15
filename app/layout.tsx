import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins} from "next/font/google";
import "../styles/globals.css";
// import '../styles/utilities.css'
import '@fontsource/poppins'
import Element3D from "@/components/3D";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const geistSans = Geist({

  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "CtrlX Studios",
  description: "CtrlX Studios - Create the unexpected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
            
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto font-[Poppins] `}
      >
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
    <Element3D />
  </div>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
