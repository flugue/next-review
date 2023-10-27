import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Review {
  slug: string;
  title: string;
  date: Date;
  image: string;
  body: string;
}

export async function getFeatured(): Promise<Review> {
  const reviews = await getReviews();
  return reviews.shift();
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`\./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date: new Date(date), image, body };
}

export async function getReviews(): Promise<Review[]> {
  const files = await readdir("./content/reviews");

  const slugs = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -".md".length));

  let reviews: Review[] = [];

  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews = reviews.sort((a,b)=>a.date.getTime()-b.date.getTime()).reverse();
  return reviews;
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir("./content/reviews");

  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -".md".length));
}
