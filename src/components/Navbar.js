import Link from "next/link";
import "./Navbar.css";

function LogoIcon({ size = 32 }) {
  return <img src="/logo.png" alt="Logo" width={size} height={size} />;
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
  return (
    <nav className="navbar">
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
