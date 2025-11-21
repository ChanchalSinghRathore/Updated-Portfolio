import React, { useEffect, useRef } from "react";
import "./CursorEffect.css";

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Spawn particles on move
      for (let i = 0; i < 3; i++) {
        particles.current.push(createParticle(e.clientX, e.clientY));
      }
    };

    const handleMouseOver = (e) => {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest("a") ||
          e.target.closest("button") ||
          e.target.classList.contains("clickable")
        ) {
          isHovering.current = true;
        } else {
          isHovering.current = false;
        }
      };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const createParticle = (x, y) => {
      const size = Math.random() * 3 + 2;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;
      const color = `hsl(${Math.random() * 20}, 100%, 50%)`; // Cyan/Blue range
      return {
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        life: 1,
        decay: Math.random() * 0.02 + 0.01,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0    , canvas.width, canvas.height);
      
      // Enable additive blending for "glow" effect
      ctx.globalCompositeOperation = "lighter";

      particles.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= particle.decay;

        if (particle.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });
      
      // Draw main cursor
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, isHovering.current ? 8 : 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffffff";
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" />;
};

export default CursorEffect;
