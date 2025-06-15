"use client";
import Element3D from "@/components/3D";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { div } from "three/src/nodes/TSL.js";

const ContactPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState(""); // Controlled state

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    
    // <div className="overflow-hidden">
    <section ref={sectionRef} className="flex pt-50 items-center justify-center w-full text-white font-[Poppins] z-10 bg-transparent" >
      <div className="flex flex-col items-start justify-between w-full h-full px-6 md:px-16 py-1 mx-25">
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
          className="max-w-5xl"
        >
          <motion.h1
            variants={fadeInUpVariants}
            className="text-5xl md:text-6xl font-semibold leading-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p variants={fadeInUpVariants} className="mt-8 text-[20px]">
            Ask us anything... we are here (well anything that concerns us ;)
          </motion.p>
        </motion.div>

        <form className="flex flex-col max-w-5xl items-center justify-between mt-16">
          <div className="flex flex-col w-fit items-start justify-between">
            <label className="text-2xl" htmlFor="firstname">
              First Name
            </label>
            <input
  placeholder="Enter your name"
  id="firstname"
  className="border-2 text-white px-5 py-3 w-full rounded-xl"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>
          </div>
        </form>
      </div>
    </section>
    // </div>
  );
};

export default ContactPage;
