"use client";
import ProjectList from "./ProjectList";

const projects = [
  {
    id: "zerogravity",
    image: ["/projects/Zerogravity_l.png"],
    darkImage: ["/projects/ZeroGravity_d.png"],
    title: "ZeroGravity",
    techstack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "n8n",
    ],
    description: [
      "Built full-stack productivity platform with AI Study Planner (Gemini), gamified task monitoring, streak tracking, and real-time Socket.io quiz portal, optimised for high density data handling.",
      "Engineered JWT/Google OAuth authentication with RBAC and optimized MongoDB indexing with Redis caching, reducing query response times by 84% and enabling real-time WebSockets.",
    ],
    link: "https://github.com/amanraj069/next-zerogravity",
    deployedLink: "https://zerogravity.aman-raj.me/",
  },
  {
    id: "milestone",
    image: ["/projects/Milestone_l.png"],
    darkImage: ["/projects/Milestone_d.png"],
    title: "Milestone",
    techstack: ["React.js", "Node.js", "Redis", "MongoDB", "Jest", "Docker"],
    description: [
      "Orchestrated a full-stack freelance marketplace with milestone-based payments, job posting, candidate screening, real-time chat, and post-engagement feedback, deployed via Nginx and GitHub Actions CI/CD.",
      "Boosted API performance by 78% with Redis caching, containerized using Docker multi-stage builds, with JWT auth, role-based access control, and admin dashboard for conflict resolution.",
    ],
    link: "https://github.com/amanraj069/MileStone",
    deployedLink: "https://milestone-app.aman-raj.me/",
  },
  {
    id: "enest",
    image: ["/projects/Enest.png"],
    title: "Enest (Intern)",
    techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
    description: [
      "Developed a specialized EdTech platform delivering interactive learning tailored for agricultural students.",
      "Architected the frontend with Next.js and optimized backend RESTful APIs using Express.js and AWS.",
    ],
    link: "https://github.com/E-Nest-2024/front-end",
    deployedLink: "https://www.enestskill.com/",
  },
  {
    id: "enestadmin",
    image: ["/projects/EnestAdmin.png"],
    title: "Enest Admin (Intern)",
    techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
    description: [
      "Built a centralized CMS and analytics dashboard enabling complete administrative control over the Enest platform.",
      "Engineered strict RBAC (Role-Based Access Control) and session management for single-device security.",
    ],
    link: "https://github.com/E-Nest-2024/next-admin",
    deployedLink: "https://admin.enest.info/",
  },
  {
    id: "enestGrain",
    image: ["/projects/Grain.png"],
    title: "GRAIN (Intern)",
    techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
    description: [
      "Developed a digital publication platform for reading, saving, and previewing agriculture-focused magazines.",
      "Leveraged Next.js Server-Side Rendering (SSR) for SEO optimization and rapid content delivery via AWS.",
    ],
    link: "https://github.com/E-Nest-2024/next-Grain",
    deployedLink:"https://www.grainmagazine.in/"
  },
  {
    id: "agriai",
    image: ["/projects/AgriAI.png"],
    title: "Agri AI",
    techstack: [
      "TensorFlow",
      "Streamlit",
      "RAG",
      "Gemini",
      "MobileNet",
    ],
    description: [
      "Built an AI agricultural assistant providing RAG-powered crop recommendations, soil analysis, and disease prediction.",
      "Integrated MobileNet for computer vision, Gemini LLM for conversational insights, and deployed via Streamlit.",
    ],
    link: "https://github.com/Shreyaan16/TeamAlpha?tab=readme-ov-file",
    deployedLink: "https://teamalpha-agriai.streamlit.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col items-center px-4 md:px-12 py-10 md:py-16">
      <div className="w-full max-w-5xl mb-6 lg:mb-8">
        <h2 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
          Projects
        </h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-4xl">
          A selection of my work in development, AI/ML, and more.
        </p>
      </div>
      <div className="w-full max-w-5xl">
         <ProjectList projects={projects} />
      </div>
    </section>
  );
}
