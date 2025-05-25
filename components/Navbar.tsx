// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// const Navbar = () => {
//   return (
//     <div className="self-stretch px-10 py-14 inline-flex justify-between items-center overflow-hidden w-full bg-white">
//       <div className="w-28 h-12 text-center justify-start text-black text-4xl font-semibold font-['Poppins']">
//         <Link href={"/"}>CtrlX</Link>
//       </div>
//       <div className="w-24 h-12 relative">
//         <Link href={"/"} >
//         <Image src="./menu.svg" alt={"menu"} width={95} height={45}/></Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Home", href: "#" },
  { title: "Services", href: "#services" },
  { title: "Works", href: "#works" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const menuVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
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
            onClick={closeMenu}
          >
            CtrlX
          </Link>
          </div>

          <button
            className="z-50 flex items-center justify-center w-24 h-12 hover:cursor-pointer"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src="./menuwhite.svg" alt={"menu"} width={35} height={35}/>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="menu-item"
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
