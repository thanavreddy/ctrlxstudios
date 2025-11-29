'use client'
import { useRef } from "react";
import {AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export function Footer() {
  
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
    <footer className="py-12 px-6 md:px-12 border-t border-gray-800 bg-transparent relative " >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6 space-y-2">
              <p className="text-xl">ctrlxstudioss@gmail.com</p>
              <p className="text-xl italiano">+91 9652804722</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6 text-blue-300">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#services" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#works" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                  Works
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                  FAQs
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6 text-blue-300">Contact Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ctrlxstudioss" className="relative overflow-hidden flex items-center text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                <span className="mr-2">Instagram</span>
                <span>ctrlxstudioss</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/ctrlx_studios" className="relative overflow-hidden flex items-center text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
                <span className="mr-2">X</span>
                <span>ctrlx_studios</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">CtrlXStudios@2025. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="https://thanav-portfolio.vercel.app" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
              Founder
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* <a href="#" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
              Twelve
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="relative overflow-hidden text-gray-400 hover:text-blue-300 transition-all duration-300 cursor-pointer group">
              Thirteen
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}