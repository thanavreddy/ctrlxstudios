'use client';

import { useRef } from 'react';

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="pt-24 px-6 md:px-12 bg-transparent text-blue-300" 
    >
      <div className="max-w-7xl mx-auto bg-transparent">
        <div className="text-center mb-16 text-blue-300 ">
          <h2 className="section-title font-semibold ">
            Because every change<br />begins with an action
          </h2>
          <button className="contact-contact-section">
            <a href="#contact" className='hover:scale-105' >
              Contact us
            </a>
            </button>
        </div>
      </div>
    </section>
  );
}