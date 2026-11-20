import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Frame, PageMarks, ScriptHeading, Star } from "@/components/Ornaments";
import { about, person } from "@/content/site";

export const metadata: Metadata = { title: "About" };

// Checked at build time: drop a photo at public/headshot.jpg and rebuild.
const hasHeadshot = fs.existsSync(path.join(process.cwd(), "public", "headshot.jpg"));
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function About() {
  return (
    <section className="page about" aria-labelledby="about-title">
      <PageMarks topLeft="About" page={7} />
      <Star size={44} className="s1" />
      <Star size={26} className="s4" />

      <div className="about-grid">
        <Frame className="portrait">
          {hasHeadshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${base}/headshot.jpg`} alt={`Portrait of ${person.shortName}`} />
          ) : (
            <div className="monogram" aria-hidden="true">
              J
            </div>
          )}
        </Frame>

        <div className="about-text">
          <ScriptHeading id="about-title" script={person.name.first} serif={about.headline} />
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <dl className="toolkit now">
            {about.now.map((n) => (
              <div key={n.label}>
                <dt>{n.label}</dt>
                <dd>{n.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
