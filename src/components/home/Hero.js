import Image from "next/image";
export default function Hero() {
  // Array of recent work/projects
  const recentWork = [
    {
      date: "27 Jul 2025",
      title: "Week 2: Indian startups behind the scenes",
      description:
        "Copycat Culture vs. Original Innovation: The Flipkart-Amazon Paradox. Diving deep into why India's most successful startups are brilliant adaptations, not breakthrough innovations",
      link: "https://medium.com/@amanraj3567/copycat-culture-vs-original-innovation-the-flipkart-amazon-paradox-075222f4234c",
    },
    {
      date: "24 Jul 2025",
      title: "Opened zeroGravity to public for waitlisting",
      description:
        "The launch of zeroGravity marks a significant milestone in my journey, opening the platform to the public for waitlisting. This step is crucial for gathering user feedback and building a community around the project.",
      link: "https://next-zerogravity-omega.vercel.app/",
    },
    {
      date: "14 Jul 2025",
      title: "Started as an Intern at MetaStar Media",
      description:
        "The launch of zeroGravity marks a significant milestone in my journey, opening the platform to the public for waitlisting. This step is crucial for gathering user feedback and building a community around the project.",
      link: "https://metastarmedia.io/",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-2 sm:px-4 pt-24 sm:pt-32 bg-white">
      <div className="max-w-4xl w-full mx-auto rounded-xl shadow-md bg-white/90 backdrop-blur-sm border border-gray-100 p-4 sm:p-8 md:p-12 mb-8 sm:mb-12">
        {/* Greeting, description, and image side by side */}
        <div className="mb-6 lg:mb-2 sm:mb-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-5 text-black">
              Hi!
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl">
              Exploring the Fun behind software engineering and Computers!
              Computer Science student at IIIT Sricity with expertise in
              full-stack development, AI/ML, and modern web technologies.
            </p>
            <div className="h-2 sm:h-3" />
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl">
              Currently working as an SDE Intern at Agrivision4u, MetaStar
              Media, and automation intern at SmallGroup.
            </p>
            <div className="h-2 sm:h-3" />
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-3xl">
              CG: 9.3 | Passout Year: 2027.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-2 md:mt-0">
            <Image
              src="/home/cover_me.JPG"
              alt="Aman Raj profile"
              width={240}
              height={240}
              className="w-40 h-40 md:w-full md:h-auto aspect-square object-cover rounded-lg border border-gray-200 shadow-sm"
              priority
            />
          </div>
        </div>

        {/* Social links (matching the icons in the design) */}
        <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap justify-center md:justify-start">
          <a
            href="http://www.linkedin.com/in/amanraj-iiits"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/amanraj069"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@amanraj3567"
            className="text-black hover:text-gray-600 transition-colors"
            aria-label="Medium"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 6.345c.007-.264-.074-.523-.23-.73L.18 3.345V3h6.061l4.684 10.243L15.06 3h5.833v.345l-1.522 1.457a.437.437 0 0 0-.166.418v13.477a.437.437 0 0 0 .166.418l1.486 1.457v.345h-8.262v-.345l1.54-1.497c.151-.151.151-.195.151-.418V7.59l-4.29 10.89h-.581L3.12 7.59v7.728c-.042.307.062.616.282.83l2.006 2.436v.345H.12v-.345l2.006-2.436c.217-.214.317-.523.282-.83V6.345z" />
            </svg>
          </a>
        </div>

        {/* Recent Work/Projects section */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal mb-5 sm:mb-7 text-black">
            Recent Work
          </h2>
          <div className="space-y-5 sm:space-y-7">
            {recentWork.map((work, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5"
              >
                <div className="text-xs text-gray-500 mb-1">{work.date}</div>
                <h3 className="text-base sm:text-lg font-normal mb-1 sm:mb-2 text-black">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors underline decoration-1 underline-offset-4"
                  >
                    {work.title}
                  </a>
                </h3>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
