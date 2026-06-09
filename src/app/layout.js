import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "../contexts/ThemeContext";
import StarryBackground from "../components/StarryBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aman Raj | Portfolio",
  description:
    "Aman Raj's personal portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <StarryBackground />
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-300/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <ThemeProvider>
          <div className="relative z-0">
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
