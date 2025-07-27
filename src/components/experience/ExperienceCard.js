import React from "react";
import Image from "next/image";

const ExperienceCard = ({ exp }) => (
  <div className="w-full block bg-white/90 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-6 group">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-[40%] flex-shrink-0 flex justify-center items-center">
        <Image
          src={exp.image}
          alt={exp.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-md border border-gray-200 shadow-sm mb-4 md:mb-0"
          priority
        />
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

export default ExperienceCard;
