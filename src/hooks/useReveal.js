"use client";
import { useEffect } from "react";

/* ─────────────────────────────────────────
   useReveal — attaches IntersectionObserver
   to every .reveal element on the page.
   When they enter viewport they get .visible
   which triggers the CSS fade-up animation.
───────────────────────────────────────── */

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
