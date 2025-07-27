import React from "react";
import Image from "next/image";

export default function ProjectList({ projects }) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white/90 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow p-0 flex flex-col md:flex-row gap-0 min-h-[180px] md:min-h-[180px]"
        >
          {/* Image section: Full width on mobile, 40% on desktop */}
          <div className="w-full md:w-2/5 flex items-stretch p-4 md:p-4">
            {project.image && project.image[0] && (
              <Image
                src={project.image[0]}
                alt={project.title}
                className="w-full h-full object-cover rounded-sm border border-zinc-200"
                style={{
                  minHeight: "120px",
                  maxHeight: "200px",
                  height: "auto",
                }}
                width={400}
                height={180}
                unoptimized
              />
            )}
          </div>

          {/* Content section: Full width on mobile, 60% on desktop */}
          <div className="w-full md:w-3/5 flex flex-col justify-between p-6 lg:p-4 md:p-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-zinc-900">
                {project.title}
              </h2>

              {/* Tech stack with responsive sizing */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                {project.techstack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-zinc-100 text-xs rounded text-zinc-700 border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description with responsive text size */}
              <ul className="list-disc pl-4 text-zinc-700 text-xs md:text-sm space-y-1">
                {project.description.map(
                  (desc, idx) => desc && <li key={idx}>{desc}</li>
                )}
              </ul>
            </div>

            {/* Links section - both links in the same row */}
            <div className="flex flex-row gap-4 mt-4">
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 text-sm hover:underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              )}
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  className="text-blue-600 text-sm hover:underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed Link
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
