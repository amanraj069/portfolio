"use client";
import React, { useState } from "react";
import Image from "next/image";

const ExperienceCard = ({ exp }) => {
  // Support both array and string for backward compatibility
  const images = Array.isArray(exp.image) ? exp.image : [exp.image];
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel every 3 seconds
  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const cardContent = (
    <div className="w-full block bg-white/90 dark:bg-[#121212]/90 border border-gray-100 dark:border-neutral-700 shadow-md hover:shadow-lg transition-all p-6 group cursor-pointer">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-[40%] flex-shrink-0 flex justify-center items-center relative">
          {/* Carousel */}
          <Image
            src={images[current]}
            alt={exp.title}
            width={600}
            height={400}
            className="w-full object-cover border border-gray-200 dark:border-neutral-600 shadow-sm mb-4 md:mb-0"
            priority
          />
          {images.length > 1 && (
            // Dots only, no arrows
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 ${
                    idx === current ? "bg-neutral-800 dark:bg-neutral-200" : "bg-neutral-300 dark:bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 w-full md:w-[60%]">
          <h2 className="text-xl font-normal mb-1 text-black dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
            {exp.title}
          </h2>
          {exp.duration && (
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 transition-colors">{exp.duration}</div>
          )}
          {Array.isArray(exp.description) ? (
            <ul className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed list-disc pl-5 transition-colors">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed transition-colors">
              {exp.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
  return exp.link ? (
    <a
      href={exp.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ExperienceCard;
