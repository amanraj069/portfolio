import ExperienceList from "@/components/experience/ExperienceList";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "enest",
      image: ["/exp/Enest.png"],
      title: "SDE Intern at Enest",
      duration: "Feb 2025 - Dec 2025",
      description: [
        "Built 45+ RESTful APIs and 10+ full-stack features using Next.js, Express.js, and MongoDB, serving 5,000+ monthly active users.",
        "Reduced page load time by 40% through SSR optimization and implemented JWT auth with role-based access control for 5 user types.",
        "Managed a team of 3 interns, overseeing feature development from design mockups to production-ready code.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "metastar",
      image: ["/exp/Metastar.png"],
      title: "SDE Intern at MetaStar Media",
      duration: "July 2025 - Sep 2025",
      description: [
        "Architected and deployed a scalable backend system using Next.js, Express.js, and MySQL, handling 1,000+ daily API requests.",
        "Developed 12 SSR pages and 50+ reusable React components, reducing frontend development time by 30% for subsequent features.",
        "Built secure REST APIs with input validation and rate limiting; contributed to Vue.js internal tools used by 15+ team members.",
      ],
      link: "https://metastarmedia.io/",
    },
    {
      id: "smallgroup",
      image: ["/exp/Smallgroup.png"],
      title: "Automation Intern at SmallGroup",
      duration: "July 2025 - Sep 2025",
      description: [
        "Created 25+ n8n automation workflows for LinkedIn lead generation, achieving 60% improvement in outreach efficiency.",
        "Integrated GPT-4 and Gemini APIs with Notion, Slack, and Pinecone, building RAG-based chatbots with 85% query accuracy.",
        "Built an AI-backed Telegram bot using GPT-4 for automated responses, handling 200+ daily queries.",
      ],
      link: "https://www.smallgrp.com/",
    },
    {
      id: "gdg",
      image: ["/exp/GDG.JPG"],
      title: "Head of Technology at Google Developers Group IIIT Sricity",
      duration: "Aug 2025 - Present",
      description: [
        "Led technical strategy for GDG IIIT Sricity, overseeing 5+ community projects with 50+ active contributors.",
        "Mentored 30+ developers in React, Node.js, Git, and system design through workshops and code reviews.",
        "Deployed event infrastructure on AWS and Firebase, supporting 500+ attendees across 10+ technical events.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "epoch",
      image: ["/exp/Epoch_D1.JPG"],
      title: "Deep Learning Core at Epoch",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Organized and conducted a 3-day hands-on DL bootcamp for 100+ students covering ANNs, CNNs, and diving deep into Deep Learning.",
        "Built ML projects including a Resume Screener NLP tool (Python, NLTK, Streamlit) and Crop Yield Predictor (Python, Scikit-learn, Flask).",
        "Mentored 60+ juniors in ML/DL concepts, resulting in 10+ successful hackathon project submissions.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-deeplearning-activity-7290383409833558016-Oa7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
    {
      id: "iota",
      image: ["/exp/IOTA.JPG"],
      title: "AI/ML Core at IOTA",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Led development of 4 AI/ML projects from ideation to deployment, including an AgriAI assistant with 90% prediction accuracy.",
        "Represented IOTA in 6 inter-college hackathons, winning 2 competitions and securing 3 top-5 finishes.",
        "Guided 15+ team members in Python, scikit-learn, and TensorFlow, contributing to 10+ successful project deliveries.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-iota-activity-7231114538929037314-Kdkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
  ];
  return (
    <main className="min-h-screen bg-white dark:bg-[#1e1e1e] text-black dark:text-white flex flex-col items-center px-4 pt-24 transition-colors duration-300">
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 mt-6 max-w-2xl transition-colors">
        A brief overview of my professional and academic experience
      </p>
      <ExperienceList experiences={experiences} />
    </main>
  );
}
