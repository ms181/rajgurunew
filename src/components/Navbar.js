"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";

function LogoIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 25.5c-4.5 0-8.49-2.1-11.07-5.37C9.43 25.87 14.5 24 20 24s10.57 1.87 11.07 4.13C28.49 31.4 24.5 33.5 20 33.5z"
        fill="#2563EB"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Services", href: "/#services" },
  { label: "Why Rajguru", href: "/#why" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // Set initial state
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <LogoIcon />
          <div className="navbar__logo-text">
            <p className="navbar__logo-name">RAJGURU</p>
            <p className="navbar__logo-tagline">
              Ubiquiti Networking Solutions
            </p>
          </div>
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="navbar__cta">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
