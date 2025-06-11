"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "UI/UX Design",
      displayTitle: { main: "UI", separator: "/", sub: "UX Design" },
      description: "We craft digital experiences that resonates with users. Our strategic approach to UI/UX Design ensures seamless user interaction and satisfaction. From intuitive interface to engaging experiences, we prioritize design that not only looks great but works brilliantly."
    },
    {
      title: "Video Editing",
      displayTitle: { main: "Video", separator: "", sub: "Editing" },
      description: "Transform your raw footage into compelling visual stories. Our video editing services combine technical expertise with creative vision to produce engaging content that captures attention and delivers your message effectively across all platforms."
    },
    {
      title: "Graphic Design",
      displayTitle: { main: "Graphic", separator: "", sub: "Design" },
      description: "Create stunning visual communications that make lasting impressions. From logos to marketing materials, our graphic design services help establish your brand identity and communicate your message with impact and professionalism."
    },
    {
      title: "Brand Identity",
      displayTitle: { main: "Brand", separator: "", sub: "Identity" },
      description: "Build a cohesive and memorable brand presence that sets you apart. Our brand identity services encompass logo design, color schemes, typography, and brand guidelines to create a consistent and powerful brand experience."
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

  return (
    <section ref={sectionRef} className="relative h-[1300px]">
      <div className=" relative z-10 h-full text-white font-[Poppins] px-6 md:px-16 py-16 mt-[-63]">
        <div className=" absolute left-36 mt-26 ">
          <div className="mb-7">
            <p className="text-white text-2xl">Services</p>
            <span className="h-[2.5px] w-[42px] bg-white block"></span>
          </div>

          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl text-white font-[Poppins] font-semibold w-auto mt-15"
          >
            <motion.h1 variants={fadeInUpVariants}>
              We Provide the best
              <br /> service, without Revision
              <br />
              Restrictions out of the
              <br />
              box.
            </motion.h1>
          </motion.div>

          <div className="w-96 h-80 relative mt-7 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item cursor-pointer transition-all hover:text-blue-300 duration-300 ${
                  selectedService === index ? "text-blue-300" : ""
                }`}
                onClick={() => setSelectedService(index)}
              >
                {service.title}
              </div>
            ))}
          </div>

          <div className="w-96 left-[835px] top-[700px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-56 h-12 justify-start"
              >
                <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
                  {services[selectedService].displayTitle.main}
                </span>
                {services[selectedService].displayTitle.separator && (
                  <span className="text-white text-2xl font-semibold font-['Poppins'] leading-loose">
                    {services[selectedService].displayTitle.separator}
                  </span>
                )}
                <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
                  {services[selectedService].displayTitle.sub}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${selectedService}`}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-96 h-60 justify-start right-6 md:right-16 text-white text-xl font-medium font-['Poppins'] leading-relaxed"
              >
                {services[selectedService].description}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;