import "./page.css";
import Image from "next/image";

/* ─────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────── */

function LogoIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 25.5c-4.5 0-8.49-2.1-11.07-5.37C9.43 25.87 14.5 24 20 24s10.57 1.87 11.07 4.13C28.49 31.4 24.5 33.5 20 33.5z"
        fill="#177DAD"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
      <path
        d="M1 3.5L3.5 6L8 1"
        stroke="#177DAD"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01M2 8.82C7.69 3.73 16.31 3.73 22 8.82M5 12.86c3.89-3.81 10.11-3.81 14 0M8.5 16.43c1.94-1.91 5.06-1.91 7 0" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function HeartbeatIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function LargeServerIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#177DAD"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */

const NAV_LINKS = [
  "Home",
  "Solutions",
  "Industries",
  "Services",
  "Why Rajguru",
  "Capabilities",
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <LogoIcon size={40} />
          <div className="navbar__logo-text">
            <p className="navbar__logo-name">RAJGURU</p>
            <p className="navbar__logo-tagline">
              Ubiquiti Networking Solutions
            </p>
          </div>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map((item) => (
            <a key={item} href="#" className="navbar__link">
              {item}
            </a>
          ))}
        </div>

        <a href="#" className="btn btn--primary">
          Contact Us
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */

function HeroVisual() {
  return (
    <div className="hero__visual">
      <img
        src="/NetworkingEquipment.png"
        className="w-full h-full object-cover"
        alt="Modern Business"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="section-eyebrow">Enterprise-Grade Ubiquiti Networks</p>
          <h1 className="hero__heading">
            Designed. Deployed.
            <br />
            Managed.
          </h1>
          <p className="hero__subtext">
            Build a future-ready network powered by Ubiquiti UniFi—engineered
            for performance, security, and scalability.
          </p>
          <div className="hero__actions">
            <a href="#" className="btn btn--primary">
              Request a Consultation
            </a>
            <a href="#" className="btn btn--outline">
              <DownloadIcon />
              Download Brochure
            </a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */

const ABOUT_POINTS = [
  "End-to-end UniFi specialisation",
  "Industry-specific network architectures",
  "Centralised cloud-based management",
];

function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__image">
          <img
            src="/ModernBusiness.png"
            className="w-full h-full object-cover"
            alt="Modern Business"
          />
        </div>

        <div className="about__content">
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-heading">
            A Reliable Foundation for Modern Businesses
          </h2>
          <p className="about__body">
            Networks today are mission-critical. They must be fast, secure, and
            easy to manage at scale. Rajguru Distributors combines deep UniFi
            expertise with real-world deployment experience to design and
            implement networks that support business growth.
          </p>
          <ul className="about__list">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="about__list-item">
                <span className="about__check">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CORE OFFERINGS
───────────────────────────────────────── */

const OFFERINGS = [
  {
    icon: <WifiIcon />,
    title: "Wireless Networking (Wi-Fi 6 / 7)",
    desc: "High-density UniFi access points delivering seamless coverage, fast roaming, and consistent performance—indoors and outdoors.",
  },
  {
    icon: <ServerIcon />,
    title: "Switching & Routing",
    desc: "Enterprise-class UniFi switches and gateways providing a resilient network backbone with advanced traffic control and redundancy.",
  },
  {
    icon: <ShieldIcon />,
    title: "Network Security & Management",
    desc: "Single-pane-of-glass control with AI IDS, segmentation, firewall policies, USG/FW, and real-time monitoring via UniFi Controller.",
  },
  {
    icon: <PhoneIcon />,
    title: "Unified Communications",
    desc: "Reliable, accurate VoIP solutions that simplify business communications while reducing operational costs via UniFi Talk.",
  },
];

function OfferingCard({ icon, title, desc }) {
  return (
    <div className="offering-card">
      <div className="offering-card__icon">{icon}</div>
      <h3 className="offering-card__title">{title}</h3>
      <p className="offering-card__desc">{desc}</p>
    </div>
  );
}

function CoreOfferings() {
  return (
    <section className="offerings">
      <div className="offerings__inner">
        <div className="section-header">
          <p className="section-eyebrow">Core Offerings</p>
          <h2 className="section-heading">Ubiquiti Solutions</h2>
          <p className="section-subtext">
            Scalable networking hardware and software designed for the modern
            enterprise.
          </p>
        </div>

        <div className="offerings__grid">
          {OFFERINGS.map((card) => (
            <OfferingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   INDUSTRIES
───────────────────────────────────────── */

const INDUSTRIES = [
  {
    icon: <HomeIcon />,
    title: "Hospitality",
    desc: "Branded guest Wi-Fi, secure staff networks, and isolated payment systems.",
  },
  {
    icon: <BookIcon />,
    title: "Education",
    desc: "Campus-wide connectivity with role-based access and content filtering.",
  },
  {
    icon: <HeartbeatIcon />,
    title: "Healthcare",
    desc: "Resilient networks supporting EMR systems, medical devices, and telemedicine.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Corporate Offices",
    desc: "Secure employee access, guest Wi-Fi, VoIP, and scalable infrastructure.",
  },
  {
    icon: <CartIcon />,
    title: "Retail",
    desc: "Reliable POS connectivity, customer Wi-Fi engagement, and multi-store control.",
  },
  {
    icon: <MonitorIcon />,
    title: "Manufacturing",
    desc: "Industrial-grade networking for large facilities, IoT devices, and outdoor coverage.",
  },
];

function IndustryCard({ icon, title, desc }) {
  return (
    <div className="industry-card">
      <div className="industry-card__icon">{icon}</div>
      <h3 className="industry-card__title">{title}</h3>
      <p className="industry-card__desc">{desc}</p>
    </div>
  );
}

function Industries() {
  return (
    <section className="industries">
      <div className="industries__inner">
        <div className="section-header">
          <p className="section-eyebrow">Industries</p>
          <h2 className="section-heading">Industry-Focused Solutions</h2>
        </div>

        <div className="industries__grid">
          {INDUSTRIES.map((card) => (
            <IndustryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROFESSIONAL SERVICES
───────────────────────────────────────── */

const SERVICES = [
  {
    icon: <SearchIcon />,
    title: "Network Consulting & Design",
    desc: "Site surveys, capacity planning, and tailored UniFi architecture.",
  },
  {
    icon: <RadioIcon />,
    title: "Deployment & Configuration",
    desc: "Professional installation, optimisation, and security hardening.",
  },
  {
    icon: <ActivityIcon />,
    title: "Optimisation & Security",
    desc: "Traffic shaping, VLAN strategy, and advanced threat protection.",
  },
  {
    icon: <LayersIcon />,
    title: "Managed Services",
    desc: "Continuous monitoring, maintenance, and on-call support.",
  },
];

function ServiceItem({ icon, title, desc }) {
  return (
    <div className="service-item">
      <div className="service-item__icon">{icon}</div>
      <div className="service-item__body">
        <h3 className="service-item__title">{title}</h3>
        <p className="service-item__desc">{desc}</p>
      </div>
    </div>
  );
}

function ServicesVisual() {
  return (
    <div className="services__visual">
      <img
        src="/Services.png"
        className="w-full h-full object-cover"
        alt="Modern Business"
      />
    </div>
  );
}

function ProfessionalServices() {
  return (
    <section className="services">
      <div className="services__inner">
        <div className="services__content">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-heading">Professional Services</h2>

          <div className="services__list">
            {SERVICES.map((s) => (
              <ServiceItem key={s.title} {...s} />
            ))}
          </div>
        </div>

        <ServicesVisual />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ENGAGEMENT MODEL
───────────────────────────────────────── */

const STEPS = [
  { num: 1, label: "Requirement Analysis" },
  { num: 2, label: "Custom Architecture" },
  { num: 3, label: "Professional Deployment" },
  { num: 4, label: "Security Implementation" },
  { num: 5, label: "Knowledge Transfer" },
  { num: 6, label: "Ongoing Support" },
];

function EngagementStep({ num, label }) {
  return (
    <div className="step">
      <div className="step__circle">{num}</div>
      <p className="step__label">{label}</p>
    </div>
  );
}

function EngagementModel() {
  return (
    <section className="engagement">
      <div className="engagement__inner">
        <div className="section-header">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="section-heading">Our Engagement Model</h2>
        </div>

        <div className="engagement__steps">
          <div className="engagement__connector" />
          {STEPS.map((step) => (
            <EngagementStep key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────── */

function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <h2 className="cta__heading">
          Build a Network That Moves Your Business Forward
        </h2>
        <p className="cta__subtext">
          Partner with Rajguru Distributors to deploy Ubiquiti networking
          solutions that deliver performance, security, and scalability—without
          complexity.
        </p>
        <a href="#" className="btn btn--primary">
          Talk to Our Network Experts
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */

const FOOTER_SOLUTIONS = [
  "Wireless Networking",
  "Switching & Routing",
  "Network Security",
  "Unified Communications",
];
const FOOTER_COMPANY = ["About Us", "Capabilities", "Why Rajguru", "Contact"];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <LogoIcon size={36} />
              <div>
                <p className="footer__brand-name">RAJGURU</p>
                <p className="footer__brand-tagline">
                  Ubiquiti Networking Solutions
                </p>
              </div>
            </div>
            <p className="footer__brand-desc">
              Ubiquiti Networking Solutions Partner. Serving Enterprises Across
              India.
            </p>
          </div>

          {/* Solutions */}
          <div className="footer__col">
            <p className="footer__col-heading">Solutions</p>
            {FOOTER_SOLUTIONS.map((item) => (
              <a key={item} href="#" className="footer__link">
                {item}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="footer__col">
            <p className="footer__col-heading">Company</p>
            {FOOTER_COMPANY.map((item) => (
              <a key={item} href="#" className="footer__link">
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="footer__col">
            <p className="footer__col-heading">Contact</p>
            <p className="footer__contact-item">contact@rajguru.com</p>
            <p className="footer__contact-item">+91 123 456 7890</p>
            <p className="footer__contact-item">Mumbai, India</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Rajguru Distributors. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
            <a href="#" className="footer__link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────── */

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <About />
      <CoreOfferings />
      <Industries />
      <ProfessionalServices />
      <EngagementModel />
      <CtaBanner />
      <Footer />
    </div>
  );
}
