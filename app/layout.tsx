import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link prefetch={false} href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
        </body>
    </html>
  );
}
