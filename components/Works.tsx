"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Image from "next/image";

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative h-[100vh] " id="works" ref ={sectionRef}>
      <div className="absolute left-36 mt-22 mb-6">
        <div className="mb-7">
          <p className="text-white text-2xl">Works</p>
          <span className="h-[2.5px] w-[42px] bg-white block"></span>
        </div>
        <div className="mt-15 ">
        <h1 className="md:text-6xl text-5xl text-white font-[Poppins] font-semibold">
          Agility and Experience
          
          
        </h1>
        <div className="flex items-center mt-2 space-x-4">
            <h1 className="md:text-6xl text-5xl font-[Poppins] font-semibold">to Create</h1>
          <span className="w-12 h-1.5 bg-white border-white block" ></span>
           <h1 className="md:text-6xl text-5xl font-[Poppins] font-semibold " >the Unexpected{" "}</h1>
          </div>
        </div>
      </div>
      <div className="absolute right-2  rounded-3xl backdrop-blur-md  bottom-2 w-[75%] h-[50%] flex items-center  ">
      <div className="w-full flex items-center space-x-4 h-[90%]  ">
        <div className=" w-[22%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-between p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ">
          <h1 className="text-lg font-semibold font-[Poppins] text-white">UI/UX Design</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center" 
                width={128} 
                height={128} 
                alt="UI/UX Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Modern, user-centered design solutions</p>
          <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">View UI/UX Works →</Link>
        </div>

        <div className=" w-[22%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-between p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ">
          <h1 className="text-lg font-semibold font-[Poppins] text-white">Video Editing</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center" 
                width={128} 
                height={128} 
                alt="Video Editing" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Compelling visual storytelling</p>
          <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">View Video Works →</Link>
        </div>

        <div className=" w-[22%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-between p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ">
          <h1 className="text-lg font-semibold font-[Poppins] text-white">Graphic Design</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop&crop=center" 
                width={128} 
                height={128} 
                alt="Graphic Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Stunning visual communications</p>
          <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">View Design Works →</Link>
        </div>

        <div className=" w-[22%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-between p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ">
          <h1 className="text-lg font-semibold font-[Poppins] text-white">Web Development</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center" 
                width={128} 
                height={128} 
                alt="Web Development" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Robust, scalable web solutions</p>
          <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">View Dev Works →</Link>
        </div>

        <div className=" w-[22%]  rounded-3xl m-3 border-white border-1   min-h-full flex flex-col items-center text-center justify-between p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ">
          <h1 className="text-lg font-semibold font-[Poppins] text-white">Brand Identity</h1>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=400&fit=crop&crop=center" 
                width={128} 
                height={128} 
                alt="Brand Identity" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4">Cohesive brand experiences</p>
          <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium">View Brand Works →</Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Works;
