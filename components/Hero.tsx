"use client";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };

  return (
    <section ref={sectionRef} className="relative h-[80vh]" id="hero">
      <div className="relative z-10 h-full text-[--foreground-rgb] font-[Poppins] px-6 md:px-16 pb-12 flex items-end">
        <div className="flex-col items-end">
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
              Create
            </motion.h1>

            <motion.div
              variants={fadeInUpVariants}
              className="flex items-center space-x-4 mt-2"
            >
              <span className="block w-12 h-[4px] bg-blue-300"></span>
              <span className="text-5xl md:text-6xl font-semibold">
                the unexpected
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-400 text-base md:text-lg max-w-xl mt-4 "
            >
              we provide the best editing, web design and many more services
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div
              className="end hidden md:block absolute md:static "
              onMouseMove={handleMouseMove}
            >
              <a
                href="/contact"
                className="btn contact_btn_new_hero font-semibold text-white border-white border text-sm py-3 px-6 rounded-full cursor-pointer scale-110 "
              >
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* 
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ArrowDown size={24} className="text-gray-400" />
      </motion.div> 
      
      useless ui element */}
    </section>
  );
}
