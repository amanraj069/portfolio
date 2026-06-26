import Image from "next/image";
import * as motion from "framer-motion/client";
import ExperienceList from "@/components/experience/ExperienceList";
import coverImage from "../../../public/home/cover_me.JPG";

import enestImage from "../../../public/projects/Enest.png";
import metastarImage from "../../../public/exp/Metastar.png";
import gdgImage from "../../../public/exp/GDG.JPG";
import smallgroupImage from "../../../public/exp/Smallgroup.png";
import epochImage from "../../../public/exp/Epoch_D1.JPG";
import iotaImage from "../../../public/exp/IOTA.JPG";

export default function Hero() {
  const experiences = [
    {
      id: "enest",
      image: [enestImage],
      title: "SDE Intern at Enest",
      duration: "Feb 2025 - Dec 2025",
      description: [
        "Collaborated with product stakeholders to define requirements, developing full-stack agri-tech applications on Next.js, Node.js, MongoDB, and AWS, improving availability and reliability serving 15,000+ users in production.",
        "Applied algorithmic optimizations to refactor backend APIs, reducing response time by 27% and server load by 12%; implemented CloudWatch monitoring to improve production observability and incident response.",
      ],
      link: "https://www.enestskill.com/",
    },
    {
      id: "smallgroup",
      image: [smallgroupImage],
      title: "Automation Intern at SmallGroup",
      duration: "July 2025 - Sep 2025",
      description: [
        "Coordinated with operations and growth teams to gather requirements and architected 10+ n8n automation pipelines, scraping 100+ leads daily synced to Google Sheets, reducing manual data entry by 80%.",
        "Ramped up on OpenAI embeddings and GPT-4 to engineer an agentic RAG pipeline with semantic retrieval, context re-ranking, and chunk indexing, autonomously resolving 80% of initial inquiries.",
      ],
      link: "https://www.smallgrp.com/",
    },
    {
      id: "gdg",
      image: [gdgImage],
      title: "Head of Technology at Google Developers Group IIIT Sricity",
      duration: "Aug 2025 - Present",
      description: [
        "Directed technical strategy and system architecture for 5+ large-scale community OSS projects involving 50+ active contributors.",
        "Architected scalable event infrastructure on AWS and Firebase, reliably handling spikes of 500+ concurrent attendees.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_googledevelopergroup-techleadership-innovation-ugcPost-7366142880517672961-yrkh/",
    },
        {
      id: "metastar",
      image: [metastarImage],
      title: "SDE Intern at MetaStar Media",
      duration: "July 2025 - Sep 2025",
      description: [
        "Engineered a high-performance backend with Node.js and MySQL, implementing strict rate-limiting and processing 1,000+ daily requests.",
        "Built an expansive UI library of 50+ reusable React components, accelerating cross-team frontend development pipelines by 30%.",
      ],
      link: "https://metastarmedia.io/",
    },
    {
      id: "epoch",
      image: [epochImage],
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
      image: [iotaImage],
      title: "AI/ML Core at IOTA",
      duration: "Aug 2024 - Aug 2025",
      description: [
        "Led the end-to-end development of 4 production-grade AI/ML projects, including an AgriAI assistant boasting 90% prediction accuracy.",
        "Championed multiple technical hackathons using TensorFlow and scikit-learn, securing 2 wins and training 15+ team members.",
      ],
      link: "https://www.linkedin.com/posts/amanraj-iiits_ai-machinelearning-iota-activity-7231114538929037314-Kdkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETcs_sBSZtMjHBO4WgRwTvLuSH5YGlbfGE",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-32 md:pt-36 pb-10 md:pb-16 px-4 md:px-12 flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Top Header Section */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-12 md:mb-16">
          <motion.div variants={itemVariants} className="flex-1">
            <div className="flex items-end justify-between gap-4 sm:gap-6 mb-3 md:mb-6">
              <h1 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black dark:text-white leading-none">
                Hi, I&apos;m Aman.
              </h1>
              <a href="https://drive.google.com/file/d/1o9ORCqaFYRduxVxBJa5NNjQvqwUteJwQ/view" target="_blank" rel="noopener noreferrer" className="pb-1 md:pb-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="hidden sm:inline font-medium text-sm">Resume</span>
              </a>
            </div>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
              Exploring the fun behind software engineering and computers. 
              Computer Science student at IIIT Sricity with expertise in
              full-stack development, GenAI, and modern web technologies.
            </p>
            <div className="mt-8 flex items-center justify-between w-full flex-wrap gap-y-6">
              <div className="flex gap-4 sm:gap-6 items-center flex-wrap">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">CGPA</span>
                  <span className="text-sm font-medium">9.27</span>
                </div>
                <div className="w-[1px] h-8 bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Passout</span>
                  <span className="text-sm font-medium">2027</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 sm:gap-5 items-center">
                <a href="http://www.linkedin.com/in/amanraj-iiits" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com/amanraj069" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://medium.com/@amanraj3567" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.345c.007-.264-.074-.523-.23-.73L.18 3.345V3h6.061l4.684 10.243L15.06 3h5.833v.345l-1.522 1.457a.437.437 0 0 0-.166.418v13.477a.437.437 0 0 0 .166.418l1.486 1.457v.345h-8.262v-.345l1.54-1.497c.151-.151.151-.195.151-.418V7.59l-4.29 10.89h-.581L3.12 7.59v7.728c-.042.307.062.616.282.83l2.006 2.436v.345H.12v-.345l2.006-2.436c.217-.214.317-.523.282-.83V6.345z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
            className="shrink-0 relative group self-center md:self-auto w-[85vw] max-w-[22rem] sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-white/5 dark:from-[#222]/50 dark:to-[#111]/50 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-[2.5rem] transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-300 ease-out z-0"></div>
            <Image
              src={coverImage}
              alt="Aman Raj profile"
              width={500}
              height={500}
              className="relative z-10 w-full aspect-square sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] object-cover rounded-[2.5rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 ease-out"
              priority
              quality={70}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 288px, 352px"
            />
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div id="experience" variants={itemVariants} className="mt-8 md:mt-16 w-full">
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-black dark:text-white">
              Experience
            </h2>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light max-w-4xl">
              A summary of my professional journey, internships, and core leadership roles.
            </p>
          </div>
          <div className="w-full">
            <ExperienceList experiences={experiences} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
