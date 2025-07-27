import React from "react";
import Image from "next/image";

const ExperienceCard = ({ exp }) => (
  <a
    key={exp.id}
    href={exp.link}
    className="w-full block bg-white/90 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-6 group"
  >
    <div className="flex flex-col md:flex-row items-center gap-6">
      <Image
        src={exp.image}
        alt={exp.title}
        width={96}
        height={96}
        className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm mb-4 md:mb-0"
        priority
      />
      <div className="flex-1">
        <h2 className="text-xl font-normal mb-2 group-hover:text-gray-700 transition-colors">
          {exp.title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {exp.description}
        </p>
      </div>
    </div>
  </a>
);

export default ExperienceCard;
