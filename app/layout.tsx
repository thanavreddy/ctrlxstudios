import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins} from "next/font/google";
import "../styles/globals.css";
// import '../styles/utilities.css'
import '@fontsource/poppins'
import Element3D from "@/components/3D";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
const geistSans = Geist({

  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// export const metadata: Metadata = {
//   title: "CtrlX Studios",
//   description: "CtrlX Studios - Create the unexpected",
//   icons : "/logo.svg"
// };

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
  <SEOJsonLD />
      {/* <Navbar/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export const metadata = {
  title: { default: "CtrlX Studios", template: "%s | CtrlX Studios" },
  description: "CtrlX Studios — Creative agency for UI/UX, Video, Graphic & Web Development.",
  icons : "/logo.svg",
  openGraph: {
    title: "CtrlX Studios",
    description: "Creative agency — design & development",
    url: "https://ctrlxstudios.vercel.app",
    siteName: "CtrlX Studios",
    images: [{ url: "https://ctrlxstudios.vercel.app/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CtrlX Studios",
    description: "Creative agency — design & development",
    images: ["https://yourdomain.com/og-image.jpg"],
    creator: "@ctrlx_studios",
  },
};