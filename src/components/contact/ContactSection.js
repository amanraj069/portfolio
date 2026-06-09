"use client";
import React from "react";
import * as motion from "framer-motion/client";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center px-4 md:px-12 pb-20 md:pb-32 pt-10 md:pt-16 bg-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-3xl w-full text-center flex flex-col items-center p-10 md:p-16"
      >
        <h2 className="text-3xl md:text-6xl font-medium tracking-tight mb-6 text-black dark:text-white">
          Let&apos;s Connect
        </h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-light mb-12">
          I&apos;m currently available for hire! Always open to discussing new projects, creative ideas, or full-time opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
          <a
            href="mailto:amanraj3567@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-2.5 sm:px-8 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Email Me
          </a>
          <a
            href="http://www.linkedin.com/in/amanraj-iiits"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
