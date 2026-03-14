import fs from "fs";
import path from "path";

function getPosts() {
  const filePath = path.join(process.cwd(), "src", "data", "blogs.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllPosts() {
  return getPosts().map(
    ({
      slug,
      title,
      excerpt,
      coverImage,
      author,
      date,
      readTime,
      category,
    }) => ({
      slug,
      title,
      excerpt,
      coverImage,
      author,
      date,
      readTime,
      category,
    }),
  );
}

export function getAllSlugs() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug) ?? null;
}
