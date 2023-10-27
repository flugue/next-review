import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`\./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, body };
}

export async function getReviews(): Promise<Review[]> {
  const files = await readdir("./content/reviews");

  const slugs = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.slice(0, -".md".length));

  const reviews: Review[] = [];

  for (const slug of slugs) {
    const review = await getReview(slug);
    console.log("inside the foreach", review);
    reviews.push(review);
  }
  return reviews;
}
