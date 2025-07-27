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
    <div className="w-full block bg-white/90 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-6 group cursor-pointer">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-[40%] flex-shrink-0 flex justify-center items-center relative">
          {/* Carousel */}
          <Image
            src={images[current]}
            alt={exp.title}
            width={600}
            height={400}
            className="w-full object-cover rounded-md border border-gray-200 shadow-sm mb-4 md:mb-0"
            priority
          />
          {images.length > 1 && (
            // Dots only, no arrows
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full ${
                    idx === current ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 w-full md:w-[60%]">
          <h2 className="text-xl font-normal mb-1 group-hover:text-gray-700 transition-colors">
            {exp.title}
          </h2>
          {exp.duration && (
            <div className="text-xs text-gray-500 mb-2">{exp.duration}</div>
          )}
          {Array.isArray(exp.description) ? (
            <ul className="text-gray-700 text-sm leading-relaxed list-disc pl-5">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 text-sm leading-relaxed">
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
