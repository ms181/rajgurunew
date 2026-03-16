"use client";
import { useEffect } from "react";
import "./page.css";
import HeroCanvas from "../components/Herocanvas";
import useReveal from "../hooks/useReveal";

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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
      stroke="currentColor"
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
      stroke="currentColor"
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
      stroke="currentColor"
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}
function CpuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <line x1="9" y1="22" x2="9" y2="12" />
      <line x1="15" y1="22" x2="15" y2="12" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  );
}
function ZeroIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function ManageIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
function LogoIconSmall() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 25.5c-4.5 0-8.49-2.1-11.07-5.37C9.43 25.87 14.5 24 20 24s10.57 1.87 11.07 4.13C28.49 31.4 24.5 33.5 20 33.5z"
        fill="#2563EB"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */

const HERO_PARTNERS = [
  {
    logo: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/ubiquiti.svg"
        width="28"
        height="28"
        alt="Ubiquiti"
        style={{
          filter: "invert(1) sepia(1) saturate(2) hue-rotate(190deg)",
          opacity: 0.9,
        }}
      />
    ),
    name: "Ubiquiti",
    sub: "Network Infrastructure & Security Solutions",
  },
  {
    logo: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#1E3A8A" fillOpacity="0.6" />
        <text
          x="5"
          y="22"
          fontFamily="monospace"
          fontSize="13"
          fontWeight="800"
          fill="#60A5FA"
        >
          V
        </text>
        <text
          x="13"
          y="22"
          fontFamily="monospace"
          fontSize="11"
          fontWeight="600"
          fill="#93C5FD"
        >
          .uk
        </text>
      </svg>
    ),
    name: "Vuln.uk",
    sub: "Vulnerability Assessment & Pen Test Services",
  },
];

function Hero() {
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="hero__glow" />

      <div className="hero__inner">
        <p className="section-eyebrow hero-eyebrow">
          Enterprise IT Solutions Provider
        </p>
        <h1 className="hero__heading">
          Building Future-Ready
          <br />
          <span className="hero__heading-accent">IT Infrastructure</span>
        </h1>
        <p className="hero__subtext">
          Enterprise-grade system integration, structured cabling, and network
          solutions — trusted by 1,000+ businesses across India.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--glow">
            Explore Solutions
          </a>
          <a href="#projects" className="btn btn--ghost">
            View Projects
          </a>
        </div>
        <div className="hero__partners">
          {HERO_PARTNERS.map((p) => (
            <div key={p.name} className="hero__partner-pill">
              <span className="hero__partner-logo">{p.logo}</span>
              <div>
                <p className="hero__partner-name">{p.name}</p>
                <p className="hero__partner-sub">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */

function About() {
  return (
    <section className="about">
      <div className="about__inner reveal">
        <div className="about__text">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-heading">
            End-to-End IT Infrastructure Solutions
          </h2>
          <p className="about__body">
            From network design to cloud security — we architect, deploy, and
            manage complete technology ecosystems.
          </p>
        </div>
        <a href="#services" className="btn btn--outline-blue about__cta">
          Learn More <ArrowRightIcon />
        </a>
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
    title: "Network Infrastructure",
    desc: "Wireless, structured cabling, and network design for enterprise environments.",
  },
  {
    icon: <ServerIcon />,
    title: "Data Center Solutions",
    desc: "Server rooms, rack infrastructure, cooling, and power management systems.",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Computing",
    desc: "Hybrid cloud architecture, migration strategies, and managed cloud operations.",
  },
  {
    icon: <CpuIcon />,
    title: "Virtualization",
    desc: "VMware, Hyper-V, and container deployments that maximize hardware utilization.",
  },
  {
    icon: <ShieldIcon />,
    title: "Cyber Security",
    desc: "Threat protection, zero-trust architecture, and 24/7 security monitoring.",
  },
  {
    icon: <GlobeIcon />,
    title: "Collaboration & Comms",
    desc: "Unified communications, video conferencing, and VoIP deployment at scale.",
  },
  {
    icon: <SupportIcon />,
    title: "IT Support & Mgmt",
    desc: "Helpdesk, asset management, and proactive infrastructure monitoring.",
  },
  {
    icon: <PhoneIcon />,
    title: "IoT Infrastructure",
    desc: "IoT device management, edge computing, and smart building integrations.",
  },
];

function OfferingCard({ icon, title, desc, delay }) {
  return (
    <div
      className="offering-card reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="offering-card__icon">{icon}</div>
      <h3 className="offering-card__title">{title}</h3>
      <p className="offering-card__desc">{desc}</p>
      <div className="offering-card__shine" />
    </div>
  );
}

function CoreOfferings() {
  return (
    <section className="offerings" id="services">
      <div className="offerings__inner">
        <div className="offerings__grid">
          {OFFERINGS.map((c, i) => (
            <OfferingCard key={c.title} {...c} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   UNIFYING
───────────────────────────────────────── */

const UNIFYING_FEATURES = [
  {
    title: "Seamless Data Flow",
    desc: "How the synchronisation across platforms happens, enabling coherent decisions based on real-time data.",
  },
  {
    title: "Hardware Convergence",
    desc: "Unified control protocols for project, software, but unique environments.",
  },
  {
    title: "Scalable Architecture",
    desc: "Modular integration model that adapts and grows with your infrastructure needs.",
  },
];

function Unifying() {
  return (
    <section className="unifying">
      <div className="unifying__inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Integration</p>
          <h2 className="section-heading">Unifying Your Digital Ecosystem</h2>
          <p className="section-subtext">
            Bridging the gap between disparate hardware, software, and networks
            to create a cohesive, intelligent IT environment.
          </p>
        </div>
        <div className="unifying__grid">
          {UNIFYING_FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="unifying-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="unifying-card__num">0{i + 1}</div>
              <h3 className="unifying-card__title">{f.title}</h3>
              <p className="unifying-card__desc">{f.desc}</p>
            </div>
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
    title: "Corporate",
    desc: "Secure employee access, guest Wi-Fi, VoIP, and scalable infrastructure.",
  },
  {
    icon: <BuildingIcon />,
    title: "Real Estate",
    desc: "Smart building networks, access control, and property-wide connectivity.",
  },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries__inner">
        <div className="reveal">
          <p className="section-eyebrow">Industries We Serve</p>
          <h2 className="industries__heading">
            Tailored infrastructure solutions for every sector
          </h2>
        </div>
        <div className="industries__grid">
          {INDUSTRIES.map((c, i) => (
            <div
              key={c.title}
              className="industry-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="industry-card__icon">{c.icon}</div>
              <h3 className="industry-card__title">{c.title}</h3>
              <p className="industry-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */

const PROJECTS = [
  {
    label: "Enterprise",
    title:
      "Integrated infrastructure & security surveillance for a Precious Coffee Chain",
  },
  {
    label: "Commercial",
    title:
      "End-to-end network infrastructure & surveillance for Solar-Plex Commercial Facility",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-heading">
            1,300+ Projects. Zero Compromises.
          </h2>
          <p className="section-subtext">
            Tailored solutions across industries — here are some highlights.
          </p>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="project-card__image" />
              <div className="project-card__overlay">
                <span className="project-card__label">{p.label}</span>
                <p className="project-card__title">{p.title}</p>
              </div>
              <div className="project-card__hover-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   HaaS
───────────────────────────────────────── */

const HAAS_FEATURES = [
  {
    icon: <ZeroIcon />,
    title: "Zero CapEx",
    desc: "No large upfront costs. We provide the hardware you need on a fully inclusive subscription model.",
  },
  {
    icon: <ScaleIcon />,
    title: "Flexible Scaling",
    desc: "Build up or scale down your technology environment to meet changing business demands.",
  },
  {
    icon: <ManageIcon />,
    title: "Managed & Maintained",
    desc: "All hardware is monitored, maintained, and upgraded by our team on your behalf.",
  },
];

function Haas() {
  return (
    <section className="haas">
      <div className="haas__inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Flexible Plans</p>
          <h2 className="section-heading">Hardware as a Service</h2>
          <p className="section-subtext">
            Why buy when you can rent? Subscribe to the latest hardware on
            flexible subscription plans.
          </p>
        </div>
        <div className="haas__grid">
          {HAAS_FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="haas-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="haas-card__icon">{f.icon}</div>
              <h3 className="haas-card__title">{f.title}</h3>
              <p className="haas-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn btn--outline-blue reveal">
          Learn More About HaaS <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PARTNERS TICKER
───────────────────────────────────────── */

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons";
const LOGO_FILTER = { filter: "brightness(0) invert(1)", opacity: 0.45 };

const PARTNER_LOGOS = [
  { name: "TP-Link", src: `${CDN}/tp-link.svg` },
  { name: "Cisco", src: `${CDN}/cisco.svg` },
  { name: "Dell", src: `${CDN}/dell.svg` },
  { name: "HP Enterprise", src: `${CDN}/hp.svg` },
  { name: "Fortinet", src: `${CDN}/fortinet.svg` },
  { name: "VMware", src: `${CDN}/vmware.svg` },
  { name: "Microsoft Azure", src: `${CDN}/microsoftazure.svg` },
];

function Partners() {
  return (
    <section className="partners">
      <div className="partners__label">Technology Partners We Work With</div>
      <div className="partners__track-wrap">
        <div className="partners__track">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map(
            (p, i) => (
              <span key={i} className="partners__item">
                <span className="partners__item-dot" />
                <img
                  src={p.src}
                  alt={p.name}
                  width="18"
                  height="18"
                  className="partners__item-logo"
                  style={LOGO_FILTER}
                />
                <span className="partners__item-name">{p.name}</span>
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */

function ContactForm() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left reveal">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="contact__heading">Let's Build Your Infrastructure</h2>
          <p className="contact__body">
            Tell us about your project requirements and our team will get back
            to you within 24 hours with a tailored plan.
          </p>
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <MapPinIcon />
              </span>
              <div>
                <p className="contact__info-label">Headquarters</p>
                <p className="contact__info-value">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <MailIcon />
              </span>
              <div>
                <p className="contact__info-label">Email Us</p>
                <p className="contact__info-value">contact@rajguru.com</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact__form reveal"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label className="contact__label">Name</label>
              <input
                className="contact__input"
                type="text"
                placeholder="John Smith"
              />
            </div>
            <div className="contact__field">
              <label className="contact__label">Phone</label>
              <input
                className="contact__input"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
          <div className="contact__field">
            <label className="contact__label">Email</label>
            <input
              className="contact__input"
              type="email"
              placeholder="john@company.com"
            />
          </div>
          <div className="contact__field">
            <label className="contact__label">Industry</label>
            <select className="contact__input contact__select">
              <option>Corporate</option>
              <option>Hospitality</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Retail</option>
              <option>Manufacturing</option>
            </select>
          </div>
          <div className="contact__field">
            <label className="contact__label">Project Brief</label>
            <textarea
              className="contact__input contact__textarea"
              placeholder="Tell us about your infrastructure requirements..."
            />
          </div>
          <button className="btn btn--primary contact__submit btn--glow">
            Submit Inquiry
          </button>
        </div>
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

function EngagementModel() {
  return (
    <section className="engagement">
      <div className="engagement__inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">Our Process</p>
          <h2 className="section-heading">Our Engagement Model</h2>
        </div>
        <div className="engagement__steps">
          <div className="engagement__connector" />
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="step reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="step__circle">{step.num}</div>
              <p className="step__label">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   BLOG PREVIEW
───────────────────────────────────────── */

const BLOG_POSTS = [
  {
    slug: "structured-cabling-1",
    category: "Infrastructure",
    title: "Why Structured Cabling is the Backbone of Modern Business",
    excerpt:
      "Discover how proper structured cabling infrastructure forms the foundation of every reliable IT system.",
  },
  {
    slug: "structured-cabling-2",
    category: "Infrastructure",
    title: "Why Structured Cabling is the Backbone of Modern Business",
    excerpt:
      "Discover how proper structured cabling infrastructure forms the foundation of every reliable IT system.",
  },
];

function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="blog-preview__inner">
        <div className="section-header reveal">
          <p className="section-eyebrow">From the Team</p>
          <h2 className="section-heading">Insights & Resources</h2>
          <p className="section-subtext">
            Expert perspectives on IT infrastructure, network design, and
            enterprise technology.
          </p>
        </div>
        <div className="blog-preview__tabs">
          <button className="blog-preview__tab blog-preview__tab--active">
            All
          </button>
          <button className="blog-preview__tab">Network Infrastructure</button>
        </div>
        <div className="blog-preview__grid">
          {BLOG_POSTS.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="blog-card__image" />
              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */

const FOOTER_LINKS = [
  "Overview",
  "Solutions",
  "Industries",
  "Team",
  "Blog",
  "Contact",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <LogoIconSmall />
              <div>
                <p className="footer__brand-name">RAJGURU</p>
                <p className="footer__brand-tagline">Distributors</p>
              </div>
            </div>
            <p className="footer__brand-desc">
              Enterprise IT infrastructure partner. Serving 1,000+ businesses
              across India, building resilient digital environments.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social">
                <TwitterIcon />
              </a>
              <a href="#" className="footer__social">
                <LinkedInIcon />
              </a>
              <a href="#" className="footer__social">
                <InstagramIcon />
              </a>
              <a href="#" className="footer__social">
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Quick Links</p>
            {FOOTER_LINKS.map((item) => (
              <a key={item} href="#" className="footer__link">
                {item}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Connect</p>
            <a href="#" className="footer__social footer__social--labeled">
              <TwitterIcon /> Twitter
            </a>
            <a href="#" className="footer__social footer__social--labeled">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="#" className="footer__social footer__social--labeled">
              <InstagramIcon /> Instagram
            </a>
            <a href="#" className="footer__social footer__social--labeled">
              <YoutubeIcon /> YouTube
            </a>
          </div>
        </div>
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
  useReveal();

  return (
    <div className="page">
      <Hero />
      <About />
      <CoreOfferings />
      <Unifying />
      <Industries />
      <Projects />
      <Haas />
      <Partners />
      <ContactForm />
      <EngagementModel />
      <BlogPreview />
      <Footer />
    </div>
  );
}
