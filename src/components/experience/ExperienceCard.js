"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp, index = 0 }) => {
  const images = Array.isArray(exp.image) ? exp.image : [exp.image];
  const [current, setCurrent] = useState(0);

  const isEven = index % 2 === 0;

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cardContent = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex flex-col bg-white dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden group hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-0`}>
        
        {/* Image side */}
        <div className={`w-full md:w-1/2 relative bg-gray-50 dark:bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center p-3 md:p-8 border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-gray-200 dark:border-white/10`} >
          <Image
            src={images[current]}
            alt={exp.title}
            width={800}
            height={450}
            className="w-full h-auto object-contain rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:scale-[1.03]"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${
                    idx === current ? "bg-black dark:bg-white" : "bg-black/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <div className="text-[10px] md:text-sm font-mono text-gray-400 dark:text-gray-500 mb-1.5 md:mb-3">{exp.duration}</div>
          
          <h2 className="text-lg md:text-3xl font-semibold md:font-medium mb-3 md:mb-6 text-black dark:text-white transition-colors">
            {exp.title}
          </h2>

          <div className="flex-1">
            {Array.isArray(exp.description) ? (
              <ul className="text-gray-600 dark:text-gray-400 text-[11px] md:text-base leading-relaxed space-y-2 md:space-y-4">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-400 text-[11px] md:text-base leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
  
  return exp.link ? (
    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ExperienceCard;
