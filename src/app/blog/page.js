import Link from "next/link";
import "./blog-listing.css";
import { getAllPosts } from "../../lib/blog";

/* ─────────────────────────────────────────
   SHARED ICONS
───────────────────────────────────────── */

function LogoIcon({ size = 40 }) {
  return <img src="/logo.png" alt="Logo" width={size} height={size} />;
}

function ArrowRightIcon() {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Services", href: "/#services" },
  { label: "Why Rajguru", href: "/#why" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Blog", href: "/blog" },
];

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
      <main>
        {/* Header */}
        <div className="listing-header">
          <div className="listing-header__inner">
            <p className="section-eyebrow">Our Blog</p>
            <h1 className="listing-header__title">Insights & Guides</h1>
            <p className="listing-header__subtitle">
              Technical deep-dives, deployment walkthroughs, and networking best
              practices from the Rajguru team.
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
