"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   Particle network canvas — hero background
   Animated nodes connected by lines when close.
   Mouse proximity repels nodes.
───────────────────────────────────────── */

export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const BLUE = "37,99,235";
    const COUNT = Math.floor((W * H) / 14000);
    const MAX_DIST = 140;
    const MOUSE_DIST = 100;
    const SPEED = 0.35;

    const mouse = { x: -999, y: -999 };

    /* Build particles */
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.5 + 1,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);

      /* Update + draw dots */
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        /* Mouse repulsion */
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST) {
          const force = ((MOUSE_DIST - d) / MOUSE_DIST) * 0.6;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
          /* speed cap */
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > SPEED * 4) {
            p.vx = (p.vx / speed) * SPEED * 4;
            p.vy = (p.vy / speed) * SPEED * 4;
          }
        } else {
          /* Drift back to base speed */
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > SPEED) {
            p.vx *= 0.98;
            p.vy *= 0.98;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${BLUE},0.55)`;
        ctx.fill();
      }

      /* Draw connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${BLUE},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    }

    let raf;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }
    loop();

    /* Mouse tracking */
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    /* Resize */
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
