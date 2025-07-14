import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface WorkCardsProps {
  id: number;
  title: string;
  category: string;
  client: string;
  image: string;
  description: string;
  technologies: string[];
  results: string;
}

interface WorkCardComponentProps {
  project: WorkCardsProps;
  index: number;
}

const WorkCard = ({ project, index }: WorkCardComponentProps) => {
  return (
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
            href={`/case-study/${project.id}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
          >
            View Project →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkCard