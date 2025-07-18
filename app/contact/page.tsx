"use client";
import Element3D from "@/components/3D";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { div } from "three/src/nodes/TSL.js";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const ContactPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState(""); // Controlled state
  const [lastName, setLastName] = useState("");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    // <div className="overflow-hidden">
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-14 self-stretch",
          scrolled ? "bg-transparent" : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between  mx-auto">
          <div className="my-logo">
            <Link
              href="/"
              className="text-4xl md:text-4xl  self-stretch  z-50 font-[Poppins] font-semibold"
            >
              CtrlX
            </Link>
          </div>
        </nav>
      </header>

      <section
        ref={sectionRef}
        className="flex pt-50 md:pt-50 items-center justify-center w-full text-white font-[Poppins] z-10 bg-transparent"
      >
        <div className="flex flex-col items-start justify-between w-full h-full px-6 sm:px-4 md:px-16 py-1 mx-0 md:mx-25 mb-20 md:mb-52">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="max-w-full md:max-w-5xl w-full"
          >
            <motion.h1
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
            >
              Contact Us
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              className="mt-4 md:mt-8 text-lg md:text-[20px]"
            >
              Ask us anything... we are here (well anything that concerns us ;)
            </motion.p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
