import React from "react";
import { AsciiEffect } from "three/examples/jsm/Addons.js";
import { WebGLRenderer } from "three";
import AsciiEffectScene from "./Ascii";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh]">
      {/* ASCII effect as background */}
      <div className="absolute inset-0 z-0">
        <AsciiEffectScene />
      </div>
      
      {/* Hero content overlay */}
      <div className="relative z-10 h-full text-white font-[Poppins] px-6 md:px-16 pb-12 flex items-end">
        <div className="flex-col items-end">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Create</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span className="block w-12 h-[4px] bg-black"></span>
              <span className="text-5xl md:text-6xl font-bold">the unexpected</span>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg max-w-xl mt-4">
              we provide the best editing, web design and many more services
            </p>
          </div>
          
          {/* Button in bottom right */}
          <button className="absolute bottom-12 right-6 md:right-16 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;