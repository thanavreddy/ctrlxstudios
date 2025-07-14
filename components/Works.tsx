"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Works = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      client: "Fashion Retailer",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Complete redesign and development of an e-commerce platform with improved UX and 40% conversion increase.",
      technologies: ["React", "Node.js", "Stripe"],
      results: "40% increase in conversions"
    },
    {
      id: 2,
      title: "SaaS Dashboard Design",
      category: "UI/UX Design",
      client: "Tech Startup",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Modern dashboard design for analytics platform with focus on data visualization and user experience.",
      technologies: ["Figma", "Prototyping", "User Research"],
      results: "25% improvement in user engagement"
    },
    {
      id: 3,
      title: "Brand Identity & Website",
      category: "Branding",
      client: "Local Restaurant",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      description: "Complete brand identity design including logo, guidelines, and responsive website development.",
      technologies: ["Adobe Creative Suite", "WordPress"],
      results: "300% increase in online orders"
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      category: "Mobile Design",
      client: "Fitness App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: "Complete mobile app UI/UX design for fitness tracking application with social features.",
      technologies: ["Sketch", "Principle", "InVision"],
      results: "4.8★ App Store rating"
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionRef = useRef<HTMLDivElement>(null);
     
  return (
    <section className="relative min-h-screen py-20" id="works" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-7">
            <p className="text-white text-2xl">Works</p>
            <span className="h-[2.5px] w-[42px] bg-white block"></span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mt-8"
          >
            <h1 className="text-4xl md:text-6xl text-white font-[Poppins] font-semibold leading-tight">
              Agility and Experience
            </h1>
            <div className="flex flex-wrap items-center mt-4 gap-4">
              <h1 className="text-4xl md:text-6xl font-[Poppins] font-semibold">to Create</h1>
              <span className="w-12 h-1.5 bg-white block"></span>
              <h1 className="text-4xl md:text-6xl font-[Poppins] font-semibold">the Unexpected</h1>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center font-[Poppins]">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {project.client}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 font-[Poppins]">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-sm font-medium">
                      {project.results}
                    </span>
                    <Link
                      href="#"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Domains Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center font-[Poppins]">
            Our Service Domains
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center" 
                  width={80} 
                  height={80} 
                  alt="UI/UX Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-[Poppins]">UI/UX Design</h4>
              <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-sm">
                View UI/UX Works →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center" 
                  width={80} 
                  height={80} 
                  alt="Video Editing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-[Poppins]">Video Editing</h4>
              <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-sm">
                View Video Works →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop&crop=center" 
                  width={80} 
                  height={80} 
                  alt="Graphic Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-[Poppins]">Graphic Design</h4>
              <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-sm">
                View Design Works →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center" 
                  width={80} 
                  height={80} 
                  alt="Web Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-[Poppins]">Web Development</h4>
              <Link href='#' className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-medium text-sm">
                View Dev Works →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-[Poppins]">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise in design and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center px-8 py-3 border border-gray-600 hover:border-blue-400 text-white rounded-lg font-medium transition-all duration-300 hover:bg-white/5"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
