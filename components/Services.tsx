"use client"
import React from "react";
import { motion } from "framer-motion";


const Services = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className=" bg-black items-center justify-center flex-col h-screen w-full">
      <div className="absolute left-36 mt-26">
        <div className="mb-7">
          <p className="text-white text-2xl">Services</p>
          <span className="h-[2.5px] w-[42px] bg-white block"></span>
        </div>

        <motion.div variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
        initial="hidden"
            animate="visible"
        className="text-6xl text-white font-[Poppins] font-semibold w-auto mt-15">
       <motion.h1  variants={fadeInUpVariants}>   We Provide the best
          <br /> service, without Revision
          <br />
          Restrictions out of the
          <br />
          box.
          </motion.h1>
        </motion.div>
        <div className="w-96 h-80 relative mt-7 gap-8">
          <div className="service-item"> UI/UX Design </div>
          <div className="service-item"> Video Editing </div>
          <div className="service-item"> Graphic Design</div>
          <div className="service-item"> Brand Identity</div>

        </div>
          <div className="w-96 left-[835px] top-[700px] absolute inline-flex flex-col justify-start items-start gap-2.5">
            <div className="w-56 h-12 justify-start">
          <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
            UI
          </span>
          <span className="text-white text-2xl font-semibold font-['Poppins'] leading-loose">
            /
          </span>
          <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
            Ux Design
          </span>
        </div>
        <div className="w-96 h-60 justify-start text-white text-xl font-medium font-['Poppins'] leading-relaxed">
          We craft digital experiences that resonates with users. Our strategic
          approach to UI/UX Design ensures seamless user interaction and
          satisfaction. From intuitive interface to engaging experiences, we
          prioritize design that not only looks great but works brilliantly.
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Services;

// import React from "react";

// const Services = () => {
//   return (
//     <div className="w-[100%] h-[1255px] relative bg-black overflow-hidden">
//       <div className="left-[154px] top-[64px] absolute inline-flex flex-col justify-start items-start gap-2.5">
//         <div className="w-10 h-0  outline-2 outline-offset-[-1px] outline-white" />
//         <div className="text-center justify-start text-white text-xl font-semibold font-['Poppins']">
//           Services
//         </div>
//         <div className="w-[902px] justify-start text-white text-7xl font-semibold font-['Poppins'] leading-[77px]">
//           We Provide the best service,without Revision Restrictions out of the
//           box.
//         </div>
//       </div>
//       <div className="w-96 left-[154px] top-[510px] absolute inline-flex flex-col justify-start items-start gap-2.5">
//         <div className="w-80 h-10 justify-start">
//           <span className="text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
//             UI
//           </span>
//           <span className="text-white text-4xl font-medium font-['Poppins'] leading-10">
//             /
//           </span>
//           <span className="text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
//             Ux Design
//           </span>
//         </div>
//         <div className="w-52 h-0  outline-1 outline-offset-[-0.50px] outline-white" />
//         <div className="w-96 h-10 justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
//           Graphic Design
//         </div>
//         <div className="w-52 h-0  outline-1 outline-offset-[-0.50px] outline-white" />
//         <div className="w-96 h-10 justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
//           Brand Identity
//         </div>
//         <div className="w-52 h-0  outline-1 outline-offset-[-0.50px] outline-white" />
//         <div className="w-80 h-10 justify-start text-white text-5xl font-medium font-['Poppins'] leading-[55px]">
//           Video Editing
//         </div>
//         <div className="w-52 h-0  outline-1 outline-offset-[-0.50px] outline-white" />
//       </div>
//       <div className="w-96 left-[835px] top-[905px] absolute inline-flex flex-col justify-start items-start gap-2.5">
//         <div className="w-96 h-60 justify-start text-white text-xl font-medium font-['Poppins'] leading-relaxed">
//           We craft digital experiences that resonates with users. Our strategic
//           approach to UI/UX Design ensures seamless user interaction and
//           satisfaction. From intuitive interface to engaging experiences, we
//           prioritize design that not only looks great but works brilliantly.
//         </div>
//         <div className="w-56 h-12 justify-start">
//           <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
//             UI
//           </span>
//           <span className="text-white text-2xl font-semibold font-['Poppins'] leading-loose">
//             /
//           </span>
//           <span className="text-white text-3xl font-semibold font-['Poppins'] leading-9">
//             Ux Design
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
