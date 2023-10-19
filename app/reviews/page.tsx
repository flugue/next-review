import Link from "next/link";

export default function ReviewsPage() {
    return (
      <>
        <h1>Reviews</h1>
        <ul>
          <li key={1}><Link href='reviews/hollow-knight'>Hollow Knight</Link></li>
          <li key={1}><Link href='reviews/stardew-valley'>Stardew Valley</Link></li>
        </ul>
      </>
    );
  }
  