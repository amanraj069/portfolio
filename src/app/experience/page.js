import ExperienceList from "@/components/experience/ExperienceList";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "agrivision4u",
      image: "/home/cover_me.JPG",
      title: "SDE Intern at Agrivision4u",
      description:
        "Worked on building scalable web solutions and automation tools for the agri-tech sector, focusing on modern web technologies and backend integration.",
      link: "/experience/agrivision4u",
    },
    {
      id: "metastar",
      image: "/home/cover_me.JPG",
      title: "Intern at MetaStar Media",
      description:
        "Contributed to digital media automation, content pipelines, and AI-driven analytics for a fast-growing media startup.",
      link: "/experience/metastar",
    },
    {
      id: "smallgroup",
      image: "/home/cover_me.JPG",
      title: "Automation Intern at SmallGroup",
      description:
        "Developed automation scripts and tools to streamline business processes and improve operational efficiency.",
      link: "/experience/smallgroup",
    },
    {
      id: "iiits",
      image: "/home/cover_me.JPG",
      title: "Student at IIIT Sricity",
      description:
        "Pursuing B.Tech in Computer Science. CG: 9.3. Involved in various projects and technical clubs, focusing on full-stack development and AI/ML.",
      link: "/experience/iiits",
    },
  ];
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-4 pt-24">
      <p className="text-lg text-gray-800 mb-8 mt-6 max-w-2xl">
        A brief overview of my professional and academic experience (Click to
        know more)
      </p>
      <ExperienceList experiences={experiences} />
    </main>
  );
}
