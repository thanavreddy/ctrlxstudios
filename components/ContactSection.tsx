"use client";

export function ContactSection() {
  return (
    <section
      className="relative bg-tranparent pt-12 md:pt-24 px-2 sm:px-4 md:px-12 mt-12 "
      id="contact"
    >
      <div className="max-w-full md:max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16 flex flex-col justify-between items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-[Poppins] text-center mb-4 md:mb-2 px-2">
            Because every change <br />
            begins with an action
          </h1>
          <div>
            <div
              className="btn-anime relative overflow-hidden inline-block rounded-full border border-white text-white font-semibold text-sm md:text-base py-2 md:py-3 px-4 md:px-6 cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-black mt-6 md:mt-18 scale-105 md:scale-110"
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
