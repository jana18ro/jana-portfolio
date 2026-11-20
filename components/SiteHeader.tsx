import Link from "next/link";
import { person } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        <span className="script">J</span>
        <span>{person.shortName}</span>
      </Link>
      <nav aria-label="Site">
        <Link href="/#work">Work</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/about/">About</Link>
        <Link href="/#contact">Contact</Link>
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${person.links.resume}`}>Resume</a>
      </nav>
    </header>
  );
}
