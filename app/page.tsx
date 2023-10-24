import Link from "next/link";
import Heading from "../components/Heading";

export default function HomePage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-2">Only the best indie games, Reviewed for you.</p>

      <div
        key={2}
        className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"
      >
        <Link
          href="reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron sm:px-2 py-1 text-center">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
