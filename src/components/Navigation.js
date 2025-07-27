import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-2xl font-normal text-black">Aman Raj</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-black hover:text-gray-600 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
            >
              home
            </Link>
            <Link
              href="/experience"
              className="text-black hover:text-gray-600 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
            >
              experience
            </Link>
            <Link
              href="/skills"
              className="text-black hover:text-gray-600 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
            >
              skills
            </Link>
            <Link
              href="/projects"
              className="text-black hover:text-gray-600 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
            >
              projects
            </Link>
            <Link
              href="/more"
              className="text-black hover:text-gray-600 transition-colors text-sm font-normal underline decoration-1 underline-offset-4"
            >
              more
            </Link>
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            <button className="text-black">
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
