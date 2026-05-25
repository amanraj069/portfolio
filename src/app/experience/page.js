import ExperienceList from "@/components/experience/ExperienceList";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "enest",
      image: ["/exp/Enest.png"],
      title: "SDE Intern at Enest",
      duration: "Feb 2025 - Dec 2025",
      description: [
        "Architected and deployed 45+ RESTful APIs and full-stack features using Next.js, Express, and MongoDB, scaling to 5,000+ MAU.",
        "Slashed page load times by 40% via SSR optimizations and engineered strict role-based access control (RBAC) via JWT.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "metastar",
      image: ["/exp/Metastar.png"],
      title: "SDE Intern at MetaStar Media",
      duration: "July 2025 - Sep 2025",
      description: [
        "Engineered a high-performance backend with Node.js and MySQL, implementing strict rate-limiting and processing 1,000+ daily requests.",
        "Built an expansive UI library of 50+ reusable React components, accelerating cross-team frontend development pipelines by 30%.",
      ],
      link: "https://metastarmedia.io/",
    },
    {
      id: "gdg",
      image: ["/exp/GDG.JPG"],
      title: "Head of Technology at Google Developers Group IIIT Sricity",
      duration: "Aug 2025 - Present",
      description: [
        "Directed technical strategy and system architecture for 5+ large-scale community OSS projects involving 50+ active contributors.",
        "Architected scalable event infrastructure on AWS and Firebase, reliably handling spikes of 500+ concurrent attendees.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_googledevelopergroup-techleadership-innovation-ugcPost-7366142880517672961-yrkh/",
    },
        {
      id: "smallgroup",
      image: ["/exp/Smallgroup.png"],
      title: "Automation Intern at SmallGroup",
      duration: "July 2025 - Sep 2025",
      description: [
        "Engineered complex n8n automation pipelines and AI agents, driving a 60% increase in lead generation efficiency.",
        "Integrated GPT-4, Gemini, and Pinecone vector databases to build highly accurate RAG chatbots handling 200+ daily queries.",
      ],
      link: "https://www.smallgrp.com/",
    },
    {
      id: "epoch",
      image: ["/exp/Epoch_D1.JPG"],
      title: "Deep Learning Core at Epoch",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Developed end-to-end NLP and ML pipelines, including a Python/NLTK Resume Screener and a Scikit-learn Crop Yield Predictor.",
        "Spearheaded technical bootcamps, training 100+ developers in advanced neural networks (ANNs/CNNs) and deep learning.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-deeplearning-activity-7290383409833558016-Oa7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
    {
      id: "iota",
      image: ["/exp/IOTA.JPG"],
      title: "AI/ML Core at IOTA",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Led the end-to-end development of 4 production-grade AI/ML projects, including an AgriAI assistant boasting 90% prediction accuracy.",
        "Championed multiple technical hackathons using TensorFlow and scikit-learn, securing 2 wins and training 15+ team members.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-iota-activity-7231114538929037314-Kdkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center px-4 md:px-12 pt-28 md:pt-32 pb-24">
      <div className="w-full max-w-5xl mb-10 md:mb-12">
        <h1 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
          Experience
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
          A brief overview of my professional and academic experience.
        </p>
      </div>
      <ExperienceList experiences={experiences} />
    </main>
  );
}
