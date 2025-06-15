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

'use client'



export function ContactSection  () {

  return (

    <section className="relative bg-tranparent pt-24 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 flex flex-col justify-between items-center">
          <h1 className="md:text-6xl text-5xl font-semibold font-[Poppins] text-center mb-2">
            Because every change <br/>
            begins with an action
          </h1>
          <button className="rounded-full shadow-md font-semibold text-white border-2 px-6 py-3 border-white mt-9 hover:scale-105 hover:cursor-pointer">
           <a href="/contact" >
              Contact us
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}