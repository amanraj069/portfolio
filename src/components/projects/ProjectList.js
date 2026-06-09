"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function ProjectList({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {displayedProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
          className="w-full flex flex-col bg-white dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden group hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          {/* Entire card clickable link */}
          <a
            href={project.deployedLink || project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View ${project.title}`}
          />

          {/* Image section */}
          <div className="w-full relative bg-gray-50 dark:bg-white/5 backdrop-blur-md border-b border-gray-200 dark:border-white/10 overflow-hidden">
            <div className="block relative">
              {project.image && project.image[0] && (
                <Image
                  src={project.image[0]}
                  alt={project.title}
                  width={800}
                  height={450}
                  className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02] ${project.darkImage ? 'dark:hidden' : ''}`}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {project.darkImage && project.darkImage[0] && (
                <Image
                  src={project.darkImage[0]}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02] hidden dark:block"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Content section */}
          <div className="p-4 md:p-6 flex flex-col flex-1">
            {/* Header section with Title and Links */}
            <div className="flex flex-row justify-between items-start mb-4 gap-4">
              <h2 className="text-lg md:text-2xl font-semibold md:font-medium text-black dark:text-white transition-colors">
                {project.title}
              </h2>
              
              <div className="flex flex-row gap-4 relative z-20 shrink-0 mt-1">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                )}
                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                )}
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-20">
              {project.techstack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 md:px-3 md:py-1 bg-gray-100 dark:bg-white/5 text-[10px] md:text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="text-gray-600 dark:text-gray-400 text-[11px] md:text-sm leading-relaxed space-y-2 md:space-y-4 mb-2">
              {project.description.map((desc, idx) => desc && (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      </div>
      {!showAll && projects.length > 4 && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 sm:px-8 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
