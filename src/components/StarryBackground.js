"use client";

import { useEffect, useRef, memo } from "react";

const StarryBackground = memo(function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
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
    
    // Passive event listener for better scrolling performance
    window.addEventListener("resize", handleResize, { passive: true });

    // Create stars - dramatically reduced density for performance
    // Calculate based on screen area, max 75 stars
    const numStars = Math.min(75, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    const stars = Array.from({ length: numStars || 50 }).map(() => ({
      x: Math.random() * (canvas.width || 1000),
      y: Math.random() * (canvas.height || 1000),
      radius: Math.random() * 1.0 + 0.2, // Much smaller stars
      vx: Math.random() * 0.05 - 0.025, // Reduced velocity
      vy: Math.random() * 0.05 - 0.025,
      opacity: Math.random() * 0.5,
      twinkleSpeed: Math.random() * 0.005 + 0.001, // Slower twinkle frequency
    }));

    let lastDrawTime = 0;
    const targetFPS = 30; // Limit FPS to 30 to save compute
    const frameInterval = 1000 / targetFPS;
    const PI2 = Math.PI * 2;

    const draw = (timestamp) => {
      animationFrameId = requestAnimationFrame(draw);

      // Throttle frame rate for performance optimization
      const deltaTime = timestamp - lastDrawTime;
      if (deltaTime < frameInterval) return;

      lastDrawTime = timestamp - (deltaTime % frameInterval);

      // Clear canvas with a transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        else if (star.x > canvas.width) star.x = 0;
        
        if (star.y < 0) star.y = canvas.height;
        else if (star.y > canvas.height) star.y = 0;

        // Twinkle
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.6 || star.opacity < 0.05) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Fast bounds checking for opacity
        let drawOpacity = star.opacity;
        if (drawOpacity < 0) drawOpacity = 0;
        else if (drawOpacity > 1) drawOpacity = 1;

        // Draw star
        ctx.beginPath();
        // Math.floor prevents sub-pixel rendering, improving performance
        ctx.arc(Math.floor(star.x), Math.floor(star.y), star.radius, 0, PI2);
        ctx.fillStyle = `rgba(255, 255, 255, ${drawOpacity.toFixed(2)})`; // Round opacity string
        ctx.fill();
      });
    };

    animationFrameId = requestAnimationFrame(draw);

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
});

export default StarryBackground;
