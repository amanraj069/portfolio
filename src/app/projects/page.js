import ProjectList from "@/components/projects/ProjectList";

export default function ProjectsPage() {
  const projects = [
    {
      id: "zerogravity",
      image: ["/projects/ZeroGravity.png"],
      title: "ZeroGravity (Under Development)",
      techstack: [
        "Next.js",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
        "Gemini",
        "Socket.io",
      ],
      description: [
        "A productivity platform with goal tracking, task management, and community features.",
        "Visual tracking with countdowns, streaks, celebrations, reminders, and motivation points.",
        "Full privacy control per goal plus a connected community for shared inspiration.",
      ],
      link: "https://github.com/amanraj069/next-zerogravity",
      deployedLink: "https://next-zerogravity-omega.vercel.app/",
    },
    {
      id: "enest",
      image: ["/exp/Enest.png"],
      title: "Enest (Internship)",
      techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
      description: [
        "A modern, animated portfolio to showcase projects and experience.",
        "Features smooth transitions, dark mode, and mobile-first design.",
        "Deployed on AWS for fast global delivery.",
      ],
      link: "https://github.com/E-Nest-2024/front-end",
      deployedLink: "https://www.enest.info/",
    },
    {
      id: "enestadmin",
      image: ["/projects/EnestAdmin.png"],
      title: "Enest Admin (Internship)",
      techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
      description: [
        "A modern, animated admin dashboard for managing content and users.",
        "Features role-based access, real-time analytics, and a responsive design.",
        "Deployed on AWS for fast global delivery.",
      ],
      link: "https://github.com/E-Nest-2024/next-admin",
      deployedLink: "https://admin.enest.info/",
    },
    {
      id: "enestGrain",
      image: ["/projects/EnestAdmin.png"],
      title: "GRAIN (Internship)",
      techstack: ["Next.js", "Express.js", "AWS", "MongoDB", "TailwindCSS"],
      description: [
        "A modern, animated admin dashboard for managing content and users.",
        "Features role-based access, real-time analytics, and a responsive design.",
        "Deployed on AWS for fast global delivery.",
      ],
      link: "https://github.com/E-Nest-2024/next-Grain",
    },
    {
      id: "milestone",
      image: ["/projects/Milestone.png"],
      title: "Milestone",
      techstack: ["Express.js", "MongoDB", "EJS", "JWT"],
      description: [
        "A next-gen freelancing platform enabling milestone-based payments and smart job matching.",
        "Includes verified skill rankings, real-time chat, and admin-led dispute resolution.",
        "Dynamic dashboards for employers and freelancers built on a secure, scalable stack.",
      ],
      link: "https://github.com/amanraj069/MileStone",
    },
    {
      id: "agriai",
      image: ["/projects/AgriAI.png"],
      title: "Agri AI",
      techstack: [
        "Python",
        "TensorFlow",
        "Streamlit",
        "RAG",
        "Gemini",
        "MobileNet",
      ],
      description: [
        "An AI-powered agricultural assistant offering weather insights, soil analysis, crop recommendations, and disease prediction.",
        "Includes a smart chatbot, geofenced planning, and downloadable insights.",
        "Built with Streamlit and deployed on Hugging Face for easy access.",
      ],
      link: "https://github.com/Shreyaan16/TeamAlpha?tab=readme-ov-file",
      deployedLink: "https://teamalpha-agriai.streamlit.app/",
    },
  ];
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col items-center px-6 pt-24 pb-8">
      <p className="text-lg text-zinc-600 mb-8 max-w-2xl text-center mt-4">
        A selection of my work in web development, AI/ML, and more.
      </p>
      <ProjectList projects={projects} />
    </main>
  );
}
