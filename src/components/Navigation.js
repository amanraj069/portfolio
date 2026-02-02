"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/skills", label: "skills" },
    { href: "/projects", label: "projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-[#121212]/90 backdrop-blur-sm z-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-2xl font-normal text-black dark:text-white transition-colors">Aman Raj</div>

          {/* Desktop Navigation Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-black dark:text-white focus:outline-none transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col space-y-4 bg-white dark:bg-[#121212] p-4 transition-colors">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-base font-normal underline decoration-1 underline-offset-4"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
