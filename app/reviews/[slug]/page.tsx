import Heading from "@/components/Heading";
import { getReview, getSlugs } from '@/lib/ReviewService';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface ReviewPageProps {
  params: { slug: string };
}

export default async function ReviewDetailPage({params:{slug}}:ReviewPageProps) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p>{review.date.toDateString()}</p>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
