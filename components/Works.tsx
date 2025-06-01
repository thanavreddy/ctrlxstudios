"use client";
import React from "react";
import { useRef } from "react";
const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-[100vh] border-2 border-blue-500 ">
      <div className="w-full h-full flex justify-center items-center">

        <h1 className="text-5xl font-[Poppins] font-semibold">Show all works done here</h1>
      </div>
    </section>
  );
};

export default Works;
