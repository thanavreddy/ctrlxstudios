"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section ref={sectionRef} className="relative h-[1300px] ">

      <div className=" relative z-10 h-full text-white font-[Poppins] px-6 md:px-16 py-16 mt-[-63]">
        <div className="absolute left-36 mt-26">
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
              We craft digital experiences that resonates with users. Our
              strategic approach to UI/UX Design ensures seamless user
              interaction and satisfaction. From intuitive interface to engaging
              experiences, we prioritize design that not only looks great but
              works brilliantly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { useRef } from "react";

// const Services = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const fadeInUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section ref={sectionRef} className="relative min-h-[100vh] bg-transparent">
//       <div className="relative z-10 h-full text-white font-[Poppins] px-6 md:px-16 py-16">
//         {/* Services Header */}
//         <div className="mb-12">
//           <div className="mb-7">
//             <p className="text-white text-xl md:text-2xl">Services</p>
//             <span className="h-[2.5px] w-[42px] bg-white block mt-2"></span>
//           </div>

//           <motion.div
//             variants={{
//               visible: {
//                 transition: {
//                   staggerChildren: 0.2,
//                 },
//               },
//             }}
//             initial="hidden"
//             animate="visible"
//             className="max-w-4xl"
//           >
//             <motion.h1 
//               variants={fadeInUpVariants}
//               className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight"
//             >
//               We Provide the best
//               <br className="hidden md:block" />
//               <span className="md:hidden"> </span>
//               service, without Revision
//               <br className="hidden md:block" />
//               <span className="md:hidden"> </span>
//               Restrictions out of the
//               <br className="hidden md:block" />
//               <span className="md:hidden"> </span>
//               box.
//             </motion.h1>
//           </motion.div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
//           {/* Services List */}
//           <motion.div 
//             variants={fadeInUpVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-6"
//           >
//             <div className="service-item border-b border-white/20 pb-4">
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
//                 <span className="text-3xl md:text-4xl lg:text-5xl">UI</span>
//                 <span className="text-2xl md:text-3xl lg:text-4xl">/</span>
//                 <span className="text-3xl md:text-4xl lg:text-5xl">UX Design</span>
//               </h3>
//             </div>
            
//             <div className="service-item border-b border-white/20 pb-4">
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Video Editing</h3>
//             </div>
            
//             <div className="service-item border-b border-white/20 pb-4">
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Graphic Design</h3>
//             </div>
            
//             <div className="service-item border-b border-white/20 pb-4">
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Brand Identity</h3>
//             </div>
//           </motion.div>

//           {/* Service Description */}
//           <motion.div 
//             variants={fadeInUpVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:mt-24"
//           >
//             <div className="space-y-6">
//               <div className="mb-6">
//                 <h3 className="text-2xl md:text-3xl font-semibold text-white">
//                   <span>UI</span>
//                   <span className="text-xl md:text-2xl">/</span>
//                   <span>UX Design</span>
//                 </h3>
//               </div>
              
//               <div className="max-w-md">
//                 <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
//                   We craft digital experiences that resonates with users. Our
//                   strategic approach to UI/UX Design ensures seamless user
//                   interaction and satisfaction. From intuitive interface to engaging
//                   experiences, we prioritize design that not only looks great but
//                   works brilliantly.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;