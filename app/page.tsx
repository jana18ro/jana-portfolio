import Link from "next/link";
import RandomWalk from "@/components/RandomWalk";
import CopyEmail from "@/components/CopyEmail";
import ProjectVisual from "@/components/ProjectVisual";
import { Frame, PageMarks, ScriptHeading, Star } from "@/components/Ornaments";
import {
  person,
  projects,
  experience,
  leadership,
  honors,
  toolkit,
  type Entry,
} from "@/content/site";

function LedgerRow({ entry }: { entry: Entry }) {
  return (
    <article className="entry">
      <div className="entry-meta">
        <p className="entry-dates num">{entry.dates}</p>
        <p className="entry-context">{entry.context}</p>
      </div>
      <div className="entry-body">
        <h3>{entry.title}</h3>
        <p className="entry-summary">{entry.summary}</p>
        {entry.points.length > 0 && (
          <ul className="entry-points">
            {entry.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ entry, index }: { entry: Entry; index: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const hasPicture = Boolean(entry.images?.length || entry.visual);
  return (
    <article className={hasPicture ? "project" : "project text-only"}>
      {hasPicture && (
        <Frame>
          {entry.images?.length ? (
            <div className="project-shots">
              {entry.images.map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={img.src} src={`${base}/${img.src}`} alt={img.alt} loading="lazy" />
              ))}
            </div>
          ) : entry.visual ? (
            <ProjectVisual kind={entry.visual} />
          ) : null}
        </Frame>
      )}
      <div className="project-text">
        <p className="project-no num">{String(index + 1).padStart(2, "0")}</p>
        <h3>{entry.title}</h3>
        <p className="project-meta">
          {entry.context} · <span className="num">{entry.dates}</span>
        </p>
        <p className="project-summary">{entry.summary}</p>
        <ul className="entry-points">
          {entry.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="project-foot">
          {entry.stack && <p className="stack">{entry.stack.join(" · ")}</p>}
          {entry.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Page 01: cover ---------- */}
      <section className="page cover" aria-labelledby="name">
        <PageMarks topLeft="Rice University" topRight="Class of 2029" page={1} />
        <Star size={46} className="s1" />
        <Star size={30} className="s2" />
        <Star size={58} className="s3" />
        <Star size={24} className="s4" />

        <div className="cover-stage">
          <ul className="cover-roles" aria-label="Focus areas">
            {person.roles.map((r, i) => (
              <li key={r} className={`role r${i + 1}`}>
                {r}
              </li>
            ))}
          </ul>

          {/* The name is drawn twice: solid on the left half, outlined on the right. */}
          <h1 id="name" className="cover-name">
            <span className="cover-name-solid">{person.name.first}</span>
            <span className="cover-name-line" aria-hidden="true">
              {person.name.first}
            </span>
          </h1>
          <p className="cover-surname">{person.name.last}</p>
        </div>

        <div className="cover-chart">
          <RandomWalk />
        </div>
      </section>

      {/* ---------- Page 02: intro ---------- */}
      <section className="page intro" aria-label="Introduction">
        <PageMarks topLeft="Introduction" page={2} />
        <div className="intro-grid">
          <p className="intro-lede">{person.lede}</p>
          <dl className="facts">
            {person.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Link href="/about/" className="pill">
          More about me →
        </Link>
      </section>

      {/* ---------- Page 03: work ---------- */}
      <section id="work" className="page" aria-labelledby="work-title">
        <PageMarks topLeft="Selected Work" page={3} />
        <ScriptHeading id="work-title" script="Selected" serif="Work" />
        <div className="projects">
          {projects.map((e, i) => (
            <ProjectCard key={e.title} entry={e} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- Page 04: experience ---------- */}
      <section id="experience" className="page alt" aria-labelledby="experience-title">
        <PageMarks topLeft="Experience" page={4} />
        <ScriptHeading id="experience-title" script="Work" serif="Experience" />
        {experience.map((e) => (
          <LedgerRow key={e.title} entry={e} />
        ))}
        <h3 className="sub-heading">Leadership</h3>
        {leadership.map((e) => (
          <LedgerRow key={e.title} entry={e} />
        ))}
      </section>

      {/* ---------- Page 05: honors + toolkit ---------- */}
      <section className="page" aria-label="Honors and toolkit">
        <PageMarks topLeft="Toolkit" page={5} />
        <div className="split">
          <div>
            <ScriptHeading script="Honors" serif="& Certifications" />
            <ul className="plain-list">
              {honors.map((h) => (
                <li key={h}>
                  <Star size={12} className="inline-star" /> {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ScriptHeading script="The" serif="Toolkit" />
            <dl className="toolkit">
              {toolkit.map((t) => (
                <div key={t.label}>
                  <dt>{t.label}</dt>
                  <dd>{t.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Page 06: contact ---------- */}
      <section id="contact" className="page contact alt" aria-labelledby="contact-title">
        <PageMarks topLeft="Contact" page={6} />
        <Star size={40} className="s5" />
        <ScriptHeading id="contact-title" script="Let's" serif="Talk" />
        <p>
          I&apos;m applying to summer 2027 programs and summer 2028 internships in quantitative
          trading, research and trading-systems engineering. I&apos;m always glad to talk with
          people at trading firms.
        </p>
        <div className="email-row">
          <a id="contact-email" className="email" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <CopyEmail email={person.email} />
        </div>
        <ul className="contact-links">
          <li>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={person.links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${person.links.resume}`}>
              Resume (PDF)
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
