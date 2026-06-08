import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experiences }) => (
  <div className="flex flex-col gap-8 w-full mb-12">
    {experiences.map((exp, index) => (
      <ExperienceCard key={exp.id} exp={exp} index={index} />
    ))}
  </div>
);

export default ExperienceList;
