import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-[#0a0a0a]">
      <div className="mb-4 md:mb-0 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Aman Raj. All rights reserved.
      </div>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
        <a href="#home" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
        <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
        <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
      </nav>
    </footer>
  );
}
