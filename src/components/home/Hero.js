import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Hero() {
  const recentWork = [
    {
      date: "25 May 2026",
      title: "Launched zeroGravity v1.0.0",
      description: "Released zeroGravity v1.0.0, a complete gamified productivity ecosystem with interactive real-time multiplayer quizzes, an active reward shop, and deep goal tracking.",
      link: "https://zerogravity.aman-raj.me/",
    },
    {
      date: "20 Dec 2025",
      title: "Launched zeroGravity Beta",
      description: "Introduced core features and improvements based on user feedback from the waitlist phase.",
      link: "https://zerogravity.aman-raj.me/",
    },
    {
      date: "26 Aug 2025",
      title: "Joined Google Developers Group as Head of Technology",
      description: "Connecting with like-minded individuals, contributing to the community, and guiding students.",
      link: "https://www.linkedin.com/posts/amanraj-iiits_googledevelopergroup-techleadership-innovation-activity-7366142881331412992-Azp6",
    },
    {
      date: "24 Jul 2025",
      title: "Opened zeroGravity to public for waitlisting",
      description: "Opened the platform to the public for waitlisting, gathering user feedback, and building a community.",
      link: "https://zerogravity.aman-raj.me/",
    },
    {
      date: "14 Jul 2025",
      title: "Started as an Intern at MetaStar Media",
      description: "Developing the platform using Next.js, Express.js, and MySQL to enhance system architecture skills.",
      link: "https://metastarmedia.io/",
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-24 px-4 md:px-12 flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full"
      >
        {/* Top Header Section */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12 mb-20">
          <motion.div variants={itemVariants} className="flex-1">
            <h1 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-3 md:mb-6 text-black dark:text-white">
              Hi, I'm Aman.
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-light">
              Exploring the fun behind software engineering and computers. 
              Computer Science student at IIIT Sricity with expertise in
              full-stack development, AI/ML, and modern web technologies.
            </p>
            <div className="mt-8 flex gap-6 items-center">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">CGPA</span>
                <span className="text-sm font-medium">9.15</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200 dark:bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Passout</span>
                <span className="text-sm font-medium">2027</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a href="http://www.linkedin.com/in/amanraj-iiits" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://github.com/amanraj069" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://medium.com/@amanraj3567" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 6.345c.007-.264-.074-.523-.23-.73L.18 3.345V3h6.061l4.684 10.243L15.06 3h5.833v.345l-1.522 1.457a.437.437 0 0 0-.166.418v13.477a.437.437 0 0 0 .166.418l1.486 1.457v.345h-8.262v-.345l1.54-1.497c.151-.151.151-.195.151-.418V7.59l-4.29 10.89h-.581L3.12 7.59v7.728c-.042.307.062.616.282.83l2.006 2.436v.345H.12v-.345l2.006-2.436c.217-.214.317-.523.282-.83V6.345z" /></svg>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 dark:from-[#222] dark:to-[#111] rounded-[2rem] transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500 ease-out z-0"></div>
            <Image
              src="/home/cover_me.JPG"
              alt="Aman Raj profile"
              width={240}
              height={240}
              className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-[2rem] shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 ease-out"
              priority
            />
          </motion.div>
        </div>

        {/* Recent Work Section */}
        <motion.div variants={itemVariants} className="mt-16 md:mt-24">
          <h2 className="text-lg md:text-2xl font-medium tracking-tight mb-5 md:mb-8 text-black dark:text-white">
            Recent Work
          </h2>
          <div className="flex flex-col">
            {recentWork.map((work, idx) => (
              <a
                key={idx}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-6 border-b border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors duration-300 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
              >
                <div className="text-sm text-gray-400 dark:text-gray-500 md:w-32 shrink-0 font-mono">
                  {work.date}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-lg font-medium text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                    {work.title}
                    <svg className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h3>
                  <p className="mt-1 md:mt-2 text-gray-600 dark:text-gray-400 text-[11px] md:text-sm leading-relaxed max-w-2xl">
                    {work.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
