import React from "react";

/**
 * ProjectList component displays a list of projects with their details.
 * @param {Object[]} projects - Array of project objects.
 */
export default function ProjectList({ projects }) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white/90 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow p-0 flex flex-row gap-0 min-h-[180px]"
        >
          {/* Image section: 40% width, 100% height */}
          <div className="w-2/5 flex items-stretch p-4">
            {project.image && project.image[0] && (
              <img
                src={project.image[0]}
                alt={project.title}
                className="w-full h-full object-cover rounded-sm border border-zinc-200"
                style={{ minHeight: "180px", maxHeight: "100%" }}
              />
            )}
          </div>
          {/* Content section: 60% width */}
          <div className="w-3/5 flex flex-col justify-between p-6">
            <div>
              <h2 className="text-xl font-semibold mb-1 text-zinc-900">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-1">
                {project.techstack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-zinc-100 text-xs rounded text-zinc-700 border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-4 text-zinc-700 text-sm mt-2">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              )}
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  className="text-blue-600 text-sm hover:underline"
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
