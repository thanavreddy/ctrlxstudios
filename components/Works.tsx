"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { portfolioProjects } from "@/constants";
import NewWorkCard from "./NewWorkCard";

const Works = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative min-h-screen py-12 md:py-20"
      id="works"
      ref={sectionRef}
    >
      <div className="relative z-10 h-full text-white font-[Poppins] px-6 md:mt-[-35] mt-28 md:px-16 py-16 ">
        <div className="max-w-7xl mx-auto md:left-36 md:pl-5 ">
          {/* Header Section */}
          <div className="mb-12 md:mb-20">
            <div className=" md:left-36 mb-4 md:mb-7">
              <p className="text-blue-300 text-xl md:text-2xl">Works</p>
              <span className="h-[2.5px] w-[42px] bg-blue-300 block"></span>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="mt-6 md:mt-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-[Poppins] font-semibold leading-tight">
                Agility and Experience
              </h1>
              <div className="flex flex-wrap items-center mt-2 md:mt-4 gap-2 md:gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-[Poppins] font-semibold">
                  to Create
                </h2>
                <span className="w-8 md:w-12 h-1.5 bg-white block"></span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-[Poppins] font-semibold">
                  the Unexpected
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mb-12 md:mb-20"
          >
            <h3 className="text-xl md:text-3xl font-semibold text-white mb-8 md:mb-12 text-center font-[Poppins]">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-9 gap-x-6">
              {/* <WorkCard project={portfolioProjects[0]} index={0} /> */}
              {/* <WorkCard project={portfolioProjects[1]} index={1} /> */}
              <NewWorkCard {...portfolioProjects[0]} />
              <NewWorkCard {...portfolioProjects[1]} />
              <NewWorkCard {...portfolioProjects[2]}/>

              <NewWorkCard {...portfolioProjects[3]}/>
            </div>
          </motion.div>

          {/* Service Domains Section
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mb-12 md:mb-20"
          >
            <h3 className="text-xl md:text-3xl font-semibold text-white mb-8 md:mb-12 text-center font-[Poppins]">
              Our Service Domains
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="p-4 md:p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center"
                    width={80}
                    height={80}
                    alt="UI/UX Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2 font-[Poppins]">
                  UI/UX Design
                </h4>
                <Link
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-xs md:text-sm"
                >
                  View Works →
                </Link>
              </div>

              <div className="p-4 md:p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center"
                    width={80}
                    height={80}
                    alt="Video Editing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2 font-[Poppins]">
                  Video Editing
                </h4>
                <Link
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-xs md:text-sm"
                >
                  View Works →
                </Link>
              </div>

              <div className="p-4 md:p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop&crop=center"
                    width={80}
                    height={80}
                    alt="Graphic Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2 font-[Poppins]">
                  Graphic Design
                </h4>
                <Link
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-xs md:text-sm"
                >
                  View Works →
                </Link>
              </div>

              <div className="p-4 md:p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center"
                    width={80}
                    height={80}
                    alt="Web Development"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm md:text-lg font-semibold text-white mb-2 font-[Poppins]">
                  Web Development
                </h4>
                <Link
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-xs md:text-sm"
                >
                  View Works →
                </Link>
              </div>
            </div>
          </motion.div> */}

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-[Poppins]">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our
              expertise in design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-400 hover:bg-transparent text-black hover:text-white rounded-lg font-medium transition-all duration-300 "
              >
                Get Free Quote
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-3  hover:border-blue-400  rounded-lg font-medium transition-all duration-300 hover:bg-blue-400 text-white hover:text-black "
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Works;
