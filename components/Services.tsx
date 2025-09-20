"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { services } from "@/constants";
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState(0);

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
    <section
      ref={sectionRef}
      className="relative min-h-screen py-12 md:py-20 md:mb-60"
      id="services"
    >
      <div className="relative z-10 h-full text-white font-[Poppins] px-6 md:px-16 py-16 mt-[-63]">
        <div className="max-w-7xl mx-auto md:left-36 md:pl-5 flex flex-col ">
          <div className="mb-9 md:mb-10">
            <div className=" md:left-36 mb-4 md:mb-7">
              <p className="text-blue-300 text-xl md:text-2xl">Services</p>
              <span className="h-[2.5px] w-[42px] bg-blue-300 block"></span>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="mt-6 md:mt-14  text-white font-[Poppins]  text-4xl md:text-6xl font-semibold "
            >
              <motion.h1 variants={fadeInUpVariants} 
              className="">
              We Provide the best
              <br  /> service, without Revision
              <br />
              Restrictions out of the
              <br />
              box.
            </motion.h1>
              
            </motion.div>
          </div>

          <div className="w-96 h-80 relative mt-1
           gap-8 ">
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

          <div className="w-full sm:w-96 md:mt-10 mt-8 sm:top-[700px] sm:absolute inline-flex flex-col justify-start items-start self-end gap-2.5 px-2 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-56 h-12 justify-start self-start "
              >
                <span className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-9">
                  {services[selectedService].displayTitle.main}
                </span>
                {services[selectedService].displayTitle.separator && (
                  <span className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-loose">
                    {services[selectedService].displayTitle.separator}
                  </span>
                )}
                <span className="text-white text-2xl md:text-3xl font-semibold font-['Poppins'] leading-9">
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
                className="w-full h-60 self-end  right-6 md:right-16 text-white text-l md:text-xl font-medium font-['Poppins'] leading-relaxed"
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
