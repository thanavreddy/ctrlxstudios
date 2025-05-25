import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
 
  );
}
