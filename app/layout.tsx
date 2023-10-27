import { ReactNode } from "react";
import './globals.css';
import NavBar from "@/components/NavBar";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
      <header>
       <NavBar/>
      </header>
      <main className="grow py-3">{children}</main>
      <footer className="border-t py-2 text-center text-xs font-exo2 text-slate-500">
        Game data and images courtesy of <a className="text-orange-800 hover:underline" href="https://rawg.io/" target="_blank">RAWG</a>
      </footer>
        </body>
    </html>
  );
}
