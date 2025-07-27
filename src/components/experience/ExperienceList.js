import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experiences }) => (
  <div className="flex flex-col gap-8 w-full max-w-4xl mb-12">
    {experiences.map((exp) => (
      <ExperienceCard key={exp.id} exp={exp} />
    ))}
  </div>
);

export default ExperienceList;
