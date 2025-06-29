"use client";
import Element3D from "@/components/3D";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { div } from "three/src/nodes/TSL.js";

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

  return (
    // <div className="overflow-hidden">
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

          <motion.p variants={fadeInUpVariants} className="mt-4 md:mt-8 text-lg md:text-[20px]">
            Ask us anything... we are here (well anything that concerns us ;)
          </motion.p>
        </motion.div>

        {/* <form className="flex flex-col max-w-5xl items-center justify-between mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-7">
              <p className="text-white text-2xl">Personal Information</p>
              <span className="h-[2.5px] w-[42px] bg-white block"></span>
            </div>
            <label className="text-2xl" htmlFor="firstname">
              First Name
            </label>
            <input
              placeholder="Enter your name"
              id="firstname"
              className="border-2 text-white px-5  py-3 mt-4  rounded-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label className="text-2xl" htmlFor="firstname">
              First Name
            </label>
            <input
              placeholder="Enter your name"
              id="firstname"
              className="border-2 text-white px-5  py-3 mt-4  rounded-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </form> */}
        <ContactForm/>
      </div>
    </section>
    // </div>
  );
};

export default ContactPage;
