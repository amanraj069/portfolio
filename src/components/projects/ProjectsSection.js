"use client";
import ProjectList from "./ProjectList";

const projects = [
  {
    id: "zerogravity",
    image: ["/projects/Zerogravity_l.png"],
    darkImage: ["/projects/ZeroGravity_d.png"],
    title: "ZeroGravity",
    techstack: ["Next.js", "Express.js", "MongoDB", "n8n"],
    description: [
      "Built full-stack productivity platform with AI Study Planner (Gemini), gamified task monitoring, streak tracking, and real-time Socket.io quiz portal, optimised for high density data handling.",
      "Engineered JWT/Google OAuth authentication with RBAC and optimized MongoDB indexing with Redis caching, reducing query response times by 84% and enabling real-time WebSockets.",
    ],
    link: "https://github.com/amanraj069/next-zerogravity",
    deployedLink: "https://zerogravity.aman-raj.me/",
  },
  {
    id: "vaari",
    image: ["/projects/Vaari_l.png"],
    darkImage: ["/projects/Vaari_d.png"],
    title: "Vaari",
    techstack: [
      "Next.js",
      "Express.js",
      "Python",
      "OR-Tools",
      "AWS",
      "Bedrock",
    ],
    description: [
      "Built a Super Seeder scheduling platform in 4 days for the WeMakeDevs x AWS hackathon, giving every farmer a promised sowing date on WhatsApp in 3 languages so no field is burned while waiting.",
      "Planned 10-day machine routes with OR-Tools CP-SAT using promises as hard constraints, cutting burned acres by 66% and keeping 92% of promises across 50 simulated seasons, deployed on AWS with DynamoDB, SQS and Bedrock.",
    ],
    link: "https://github.com/amanraj069/Vaari",
    deployedLink: "https://main.d2n4tg60h10ven.amplifyapp.com/",
  },
  {
    id: "keystone",
    image: ["/projects/KeyStone_l.png"],
    darkImage: ["/projects/KeyStone_d.png"],
    title: "KeyStone",
    techstack: ["Next.js", "NestJS", "FalkorDB", "BullMQ", "MCP", "Docker"],
    description: [
      "Built a company brain that turns Slack threads, PRs, docs and tickets into a FalkorDB knowledge graph of 44 people and 144 systems, flagging the 46 core systems that depend on a single person or on nobody.",
      "Exposed Cypher-backed graph tools to an LLM agent over MCP, simulating departures on scratch graphs with bus factor and betweenness, scoring 72% vs 24% for vector-only RAG on a 78-question benchmark.",
    ],
    link: "https://github.com/amanraj069/KeyStone",
    deployedLink: "https://keystone.aman-raj.me/",
  },
  {
    id: "intake",
    image: ["/projects/Intake_l.png"],
    darkImage: ["/projects/Intake_d.png"],
    title: "Intake",
    techstack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Gemini",
    ],
    description: [
      "Built a full-stack nutrition tracker with 4 ways to log meals (photo, chat, manual, PDF diary) using Gemini AI, and a chat assistant capped at 5 tool calls per turn that proposes meals and goal changes.",
      "Queued PDF diary imports on BullMQ with 3 attempts and a 7-day dead-letter queue, and moved rate limiting and token revocation to Redis, cutting outage response times from 1.1s to 5ms.",
    ],
    link: "https://github.com/amanraj069/intake",
    deployedLink: "https://intake.aman-raj.me/",
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
    deployedLink: "https://www.grainmagazine.in/",
  },
  // {
  //   id: "agriai",
  //   image: ["/projects/AgriAI.png"],
  //   title: "Agri AI",
  //   techstack: [
  //     "TensorFlow",
  //     "Streamlit",
  //     "RAG",
  //     "Gemini",
  //     "MobileNet",
  //   ],
  //   description: [
  //     "Built an AI agricultural assistant providing RAG-powered crop recommendations, soil analysis, and disease prediction.",
  //     "Integrated MobileNet for computer vision, Gemini LLM for conversational insights, and deployed via Streamlit.",
  //   ],
  //   link: "https://github.com/Shreyaan16/TeamAlpha?tab=readme-ov-file",
  //   deployedLink: "https://teamalpha-agriai.streamlit.app/",
  // },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 w-full flex flex-col items-center px-4 md:px-12 py-8 md:py-12"
    >
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
