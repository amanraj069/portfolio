"use client";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div className="flex flex-col gap-4 sm:gap-8 w-full mb-12">
      {displayedExperiences.map((exp, index) => (
        <ExperienceCard key={exp.id} exp={exp} index={index} />
      ))}
      {!showAll && experiences.length > 3 && (
        <div className="flex justify-center mt-4">
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
};

export default ExperienceList;
