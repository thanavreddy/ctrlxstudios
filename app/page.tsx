import Element3D from "@/components/3D";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { Contact } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <Works/>
      <Pricing/>
      <ContactSection/>
    </div>
 
  );
}