"use client";

import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial size
    resizeCanvas();
    
    // Debounce resize to prevent jank
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resizeCanvas, 200);
    };
    
    window.addEventListener("resize", handleResize);

    // Create stars
    const numStars = 200; // Reduced density for subtlety
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * (window.innerWidth || 1000),
      y: Math.random() * (window.innerHeight || 1000),
      radius: Math.random() * 1.0 + 0.2, // Much smaller stars
      vx: Math.random() * 0.1 - 0.05,
      vy: Math.random() * 0.1 - 0.05,
      opacity: Math.random() * 0.5,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    const draw = () => {
      // Clear canvas with a transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.6 || star.opacity < 0.05) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, star.opacity))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-1000"
    />
  );
}
