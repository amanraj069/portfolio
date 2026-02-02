import ExperienceList from "@/components/experience/ExperienceList";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "enest",
      image: ["/exp/Enest.png"],
      title: "SDE Intern at Enest",
      duration: "Feb 2025 - Dec 2025",
      description: [
        "Developed full-stack features for a large-scale agri-tech platform using Next.js, Express.js, and MongoDB.",
        "Implemented backend logic with JWT auth, role-based access, and AWS + Cloudinary integrations.",
        "Led a team of interns, managed Git workflows, and gained hands-on leadership and mentoring experience.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "metastar",
      image: ["/exp/Metastar.png"],
      title: "SDE Intern at MetaStar Media",
      duration: "July 2025 - Sep 2025",
      description: [
        "Designed system architecture and developed backend with Next.js, Express.js, and MySQL",
        "Built SSR pages, reusable frontend components, and secure REST APIs for core features",
        "Gained cross-framework experience by contributing to internal tools using Vue.js.",
      ],
      link: "https://metastarmedia.io/",
    },
    {
      id: "smallgroup",
      image: ["/exp/Smallgroup.png"],
      title: "Automation Intern at SmallGroup",
      duration: "July 2025 - Sep 2025",
      description: [
        "Built low-code automation workflows using n8n for LinkedIn lead generation, RAG-based chatbots, and social media content automation.",
        "Integrated GPT-4/Gemini with tools like Notion, Slack, and Pinecone for context-aware AI responses",
        "Explored voice agent automation using Vapi and deepened understanding of LLM-powered solutions",
      ],
      link: "https://www.smallgrp.com/",
    },
    {
      id: "gdg",
      image: ["/exp/GDG.JPG"],
      title: "Head of Technology at Google Developers Group IIIT Sricity",
      duration: "Aug 2025 - Present",
      description: [
        "Led the technical direction of GDG IIIT Sricity, overseeing architecture and execution of community-driven projects.",
        "Mentored developers in full-stack development, Git workflows, and scalable system design.",
        "Enabled deployments and event infrastructure using cloud technologies such as AWS and Firebase.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "epoch",
      image: ["/exp/Epoch_D1.JPG"],
      title: "Deep Learning Core at Epoch",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Led technical initiatives to enhance ML/DL learning among students.",
        "Conducted a 3-day hands-on bootcamp for 100+ 2nd and 3rd-year students on DL",
        "Mentored juniors in ML/DL concepts, project development, and research prep.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-deeplearning-activity-7290383409833558016-Oa7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
    {
      id: "iota",
      image: ["/exp/IOTA.JPG"],
      title: "AI/ML Core at IOTA",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Led the development of real-world AI/ML projects from ideation to deployment",
        "Represented IOTA in inter-college hackathons, competitions, and research challenges.",
        "Guided team members in preparing for external events.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-iota-activity-7231114538929037314-Kdkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
  ];
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white flex flex-col items-center px-4 pt-24 transition-colors duration-300">
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 mt-6 max-w-2xl transition-colors">
        A brief overview of my professional and academic experience
      </p>
      <ExperienceList experiences={experiences} />
    </main>
  );
}
