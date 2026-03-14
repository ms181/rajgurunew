import Link from "next/link";
import "./blog-listing.css";
import { getAllPosts } from "../../lib/blog";

/* ─────────────────────────────────────────
   SHARED ICONS
───────────────────────────────────────── */

function LogoIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 25.5c-4.5 0-8.49-2.1-11.07-5.37C9.43 25.87 14.5 24 20 24s10.57 1.87 11.07 4.13C28.49 31.4 24.5 33.5 20 33.5z"
        fill="#177DAD"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "Solutions",    href: "/#solutions" },
  { label: "Industries",   href: "/#industries" },
  { label: "Services",     href: "/#services" },
  { label: "Why Rajguru",  href: "/#why" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Blog",         href: "/blog" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <LogoIcon size={40} />
          <div className="navbar__logo-text">
            <p className="navbar__logo-name">RAJGURU</p>
            <p className="navbar__logo-tagline">Ubiquiti Networking Solutions</p>
          </div>
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="btn btn--primary">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   POST CARD
───────────────────────────────────────── */

function PostCard({ slug, title, excerpt, coverImage, category }) {
  return (
    <Link href={`/blog/${slug}`} className="post-card">
      <div className="post-card__image">
        {/* Swap for <Image> from next/image when real assets are ready */}
        <div className="post-card__image-placeholder" aria-hidden="true" />
        <span className="post-card__category">{category}</span>
      </div>
      <div className="post-card__body">
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__excerpt">{excerpt}</p>
        <span className="post-card__cta">
          Read article <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <Navbar />

      <main>
        {/* Header */}
        <div className="listing-header">
          <div className="listing-header__inner">
            <p className="section-eyebrow">Our Blog</p>
            <h1 className="listing-header__title">Insights & Guides</h1>
            <p className="listing-header__subtitle">
              Technical deep-dives, deployment walkthroughs, and networking best practices
              from the Rajguru team.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="listing-body">
          <div className="listing-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
