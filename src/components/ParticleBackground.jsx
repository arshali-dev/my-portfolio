import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Particle Configuration
    const particleColors = [
      "rgba(0, 255, 135, ", // Emerald Green (dominant)
      "rgba(96, 239, 255, ", // Cyan
      "rgba(167, 243, 208, ", // Soft Mint / Star
    ];

    let particles = [];

    const getParticleCount = () => {
      if (width < 640) return 40;
      if (width < 1024) return 65;
      return 95;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow, elegant drift
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() < 0.2 ? Math.random() * 1.5 + 1.8 : Math.random() * 1.2 + 0.8;
        this.colorPrefix =
          particleColors[Math.floor(Math.random() * particleColors.length)];
        this.baseAlpha = Math.random() * 0.5 + 0.35;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen boundaries with margin
        if (this.x < -10) this.x = width + 10;
        else if (this.x > width + 10) this.x = -10;

        if (this.y < -10) this.y = height + 10;
        else if (this.y > height + 10) this.y = -10;

        // Gentle star twinkle pulse
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.2;
        if (this.alpha < 0.15) this.alpha = 0.15;
        if (this.alpha > 0.9) this.alpha = 0.9;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        ctx.fill();

        // Optional star glow for slightly larger particles
        if (this.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${this.colorPrefix}${this.alpha * 0.2})`;
          ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render loop
    const connectDistance = 135;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with constellation lines
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectDistance) {
            const lineOpacity = (1 - dist / connectDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 135, ${lineOpacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect with mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const mouseDist = Math.hypot(dxMouse, dyMouse);

          if (mouseDist < mouse.radius) {
            const mouseLineOpacity = (1 - mouseDist / mouse.radius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(96, 239, 255, ${mouseLineOpacity})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{
        background: "radial-gradient(ellipse at 50% 20%, #06152b 0%, #030712 65%, #02040a 100%)",
      }}
    />
  );
}

export default ParticleBackground;
