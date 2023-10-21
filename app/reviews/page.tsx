import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
    return (
      <>
        <Heading>Reviews</Heading>
        <ul>
          <li key={1}><Link href='reviews/hollow-knight'>Hollow Knight</Link></li>
          <li key={1}><Link href='reviews/stardew-valley'>Stardew Valley</Link></li>
        </ul>
      </>
    );
  }
  