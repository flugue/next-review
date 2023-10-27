import Link from "next/link";
import Heading from "../components/Heading";
import { getFeatured } from "@/lib/ReviewService";

export default async function HomePage() {
  const featuredReview = await getFeatured();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-4">Only the best indie games, Reviewed for you.</p>
      <Heading>Featured Review</Heading>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"
      >
        <Link href={`reviews/${featuredReview.slug}`} className="flex flex-col sm:flex-row">
              <img
                src={featuredReview.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <h2 className="font-semibold font-orbitron sm:px-2 py-1 text-center">{featuredReview.title}</h2>
            </Link>
      </div>
    </>
  );
}
