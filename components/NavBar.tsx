import Link from "next/link";

export default function NavBar(){
    return (
        <nav>
        <ul className="flex gap-2 text-orange-800">
          <li><Link className="hover:underline" href="/">Home</Link></li>
          <li><Link className="hover:underline" href="/reviews">Reviews</Link></li>
          <li><Link className="hover:underline" prefetch={false} href="/about">About</Link></li>
        </ul>
      </nav>
    )
}