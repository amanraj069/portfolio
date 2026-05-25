import ProjectList from "@/components/projects/ProjectList";

export default function ProjectsPage() {
  const projects = [
    {
      id: "zerogravity",
      image: ["/projects/Zerogravity_l.png"],
      darkImage: ["/projects/ZeroGravity_d.png"],
      title: "ZeroGravity",
      techstack: [
        "Next.js",
        "MongoDB",
        "Express.js",
        "Gemini",
        "Socket.io",
      ],
      description: [
        "Engineered a real-time gamified productivity ecosystem with multi-user goal tracking and social features.",
        "Integrated Socket.io for live updates, Gemini API for AI insights, and MongoDB for scalable data storage.",
      ],
      link: "https://github.com/amanraj069/next-zerogravity",
      deployedLink: "https://zerogravity.aman-raj.me/",
    },
    {
      id: "milestone",
      image: ["/projects/Milestone_l.png"],
      darkImage: ["/projects/Milestone_d.png"],
      title: "Milestone",
      techstack: ["React.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
      description: [
        "Built a full-stack freelancing platform featuring milestone-based escrow payments and smart talent matching.",
        "Implemented real-time messaging via Socket.io, secure JWT authentication, and optimized MongoDB querying.",
      ],
      link: "https://github.com/amanraj069/MileStone",
      deployedLink: "https://milestone-aman-raj.vercel.app/",
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
  return (
    <main className="min-h-screen flex flex-col items-center px-4 md:px-12 pt-28 md:pt-32 pb-24">
      <div className="w-full max-w-4xl mb-10 md:mb-12">
        <h1 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
          A selection of my work in development, AI/ML, and more.
        </p>
      </div>
      <ProjectList projects={projects} />
    </main>
  );
}
