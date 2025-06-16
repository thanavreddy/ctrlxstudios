// 'use client';

// import { useRef } from 'react';

// export function ContactSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="pt-24 px-6 md:px-12 text-blue-300"
//     >
//       <div className="max-w-7xl mx-auto ">
//         <div className="text-center mb-16 text-blue-300 ">
//           <h2 className="section-title font-semibold ">
//             Because every change<br />begins with an action
//           </h2>
//           <button className="contact-contact-section">
//             <a href="#contact" className='hover:scale-105' >
//               Contact us
//             </a>
//             </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export function ContactSection() {
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };
  return (
    <section className="relative bg-tranparent pt-24 px-6 md:px-12 mt-24" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col justify-between items-center">
          <h1 className="md:text-6xl text-5xl font-semibold font-[Poppins] text-center mb-2">
            Because every change <br />
            begins with an action
          </h1>
          <div>
            
          <div
  className="btn-anime relative overflow-hidden inline-block rounded-full border border-white text-white font-semibold text-sm py-3 px-6 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-black mt-18 scale-110"
  onMouseMove={(e) => {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  }}
>
  <a href="/contact" className="relative z-10">
    <span>Contact Us</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
