import Link from "next/link";
import { notFound } from "next/navigation";
import "./blog-post.css";
import { getAllSlugs, getPostBySlug } from "../../../lib/blog";

/* ─────────────────────────────────────────
   STATIC GENERATION
   Tells Next.js which slugs exist at build
   time so it can pre-render each post page.
   ─────────────────────────────────────────
   When you move to Sanity, replace with:
     export async function generateStaticParams() {
       return client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
     }
───────────────────────────────────────── */

export async function generateStaticParams() {
  return getAllSlugs();
}

/* ─────────────────────────────────────────
   ICONS
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

function ArrowLeftIcon() {
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
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function CalendarIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon() {
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <LogoIcon size={40} />
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

        <Link href="/#contact" className="btn btn--primary">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   COVER HERO
───────────────────────────────────────── */

function CoverHero({ title, author, date, readTime, category }) {
  return (
    <div className="cover-hero">
      {/* Image layer */}
      <div className="cover-hero__image" />
      <div className="cover-hero__overlay" />

      {/* Content */}
      <div className="cover-hero__content">
        <Link href="/blog" className="cover-hero__back">
          <ArrowLeftIcon />
          Back to Blog
        </Link>

        <span className="cover-hero__category">{category}</span>

        <h1 className="cover-hero__title">{title}</h1>

        <div className="cover-hero__meta">
          <span className="cover-hero__meta-item">
            <UserIcon />
            {author}
          </span>
          <span className="cover-hero__meta-divider" />
          <span className="cover-hero__meta-item">
            <CalendarIcon />
            {date}
          </span>
          <span className="cover-hero__meta-divider" />
          <span className="cover-hero__meta-item">
            <ClockIcon />
            {readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CONTENT BLOCK RENDERERS
───────────────────────────────────────── */

function BlockImage({ data }) {
  return (
    <figure className="block-image">
      <div className="block-image__frame">
        <div className="block-image__placeholder" aria-label={data.alt}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
      {data.caption && (
        <figcaption className="block-image__caption">{data.caption}</figcaption>
      )}
    </figure>
  );
}

function BlockHeading({ data }) {
  return <h2 className="block-heading">{data.text}</h2>;
}

function BlockSubheading({ data }) {
  return <h3 className="block-subheading">{data.text}</h3>;
}

function BlockPara({ data }) {
  return <p className="block-para">{data.text}</p>;
}

function BlockBlocks({ data }) {
  const colClass =
    data.layout === "2-col"
      ? "blocks-grid blocks-grid--2"
      : "blocks-grid blocks-grid--3";

  return (
    <div className={colClass}>
      {data.items.map((item, idx) => (
        <div key={idx} className="blocks-card">
          <h4 className="blocks-card__subheading">{item.subheading}</h4>
          <p className="blocks-card__para">{item.para}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   CONTENT RENDERER
───────────────────────────────────────── */

const RENDERERS = {
  image: BlockImage,
  heading: BlockHeading,
  subheading: BlockSubheading,
  para: BlockPara,
  blocks: BlockBlocks,
};

function ContentRenderer({ content }) {
  return (
    <div className="content-body">
      {content.map((block, idx) => {
        const Component = RENDERERS[block.type];
        if (!Component) {
          console.warn(`Unknown block type: "${block.type}" at index ${idx}`);
          return null;
        }
        return <Component key={idx} data={block.data} />;
      })}
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // If slug doesn't exist, render Next.js 404 page
  if (!post) notFound();

  const { title, author, date, readTime, category, content } = post;

  return (
    <div className="page">
      <Navbar />

      <main>
        <CoverHero
          title={title}
          author={author}
          date={date}
          readTime={readTime}
          category={category}
        />

        <div className="post-body">
          <article className="post-article">
            <ContentRenderer content={content} />
          </article>
        </div>
      </main>
    </div>
  );
}
