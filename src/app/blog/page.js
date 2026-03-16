import Link from "next/link";
import "./blog-listing.css";
import { getAllPosts } from "../../lib/blog";

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

/* ─────────────────────────────────────────
   POST CARD
───────────────────────────────────────── */

function PostCard({ slug, title, excerpt, category }) {
  return (
    <Link href={`/blog/${slug}`} className="post-card">
      <div className="post-card__image">
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
    <main className="page">
      <div className="listing-header">
        <div className="listing-header__inner">
          <p className="section-eyebrow">From the Team</p>
          <h1 className="listing-header__title">Insights & Resources</h1>
          <p className="listing-header__subtitle">
            Expert perspectives on IT infrastructure, network design, and
            enterprise technology.
          </p>
        </div>
      </div>

      <div className="listing-body">
        <div className="listing-filters">
          <button className="listing-filter listing-filter--active">All</button>
          <button className="listing-filter">Network Infrastructure</button>
          <button className="listing-filter">Security</button>
          <button className="listing-filter">Cloud</button>
        </div>
        <div className="listing-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
