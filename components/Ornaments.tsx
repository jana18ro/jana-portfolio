// Decorative pieces borrowed from the editorial portfolio look:
// hand-placed stars, ornate frames and slide-style corner labels.

export function Star({
  size = 40,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={`star ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={style}
    >
      <path d="M50 4 61.8 38.2 98 38.6 69 60.3 79.6 95 50 74.2 20.4 95 31 60.3 2 38.6 38.2 38.2Z" />
    </svg>
  );
}

/** A picture-frame border with corner ornaments, wrapped around any content. */
export function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`frame ${className}`}>
      <span className="frame-corner tl" aria-hidden="true" />
      <span className="frame-corner tr" aria-hidden="true" />
      <span className="frame-corner bl" aria-hidden="true" />
      <span className="frame-corner br" aria-hidden="true" />
      <div className="frame-inner">{children}</div>
    </div>
  );
}

/** The four small labels in the corners of each "page", like a printed portfolio. */
export function PageMarks({
  topLeft,
  topRight = "2026",
  page,
}: {
  topLeft: string;
  topRight?: string;
  page: number;
}) {
  return (
    <>
      <span className="mark mark-tl" aria-hidden="true">
        {topLeft}
      </span>
      <span className="mark mark-tr" aria-hidden="true">
        {topRight}
      </span>
      <span className="mark mark-bl" aria-hidden="true">
        Portfolio
      </span>
      <span className="mark mark-br" aria-hidden="true">
        Page {String(page).padStart(2, "0")}
      </span>
    </>
  );
}

/** A heading in two voices: a script word and a serif word, e.g. "Selected" + "Work". */
export function ScriptHeading({
  id,
  script,
  serif,
}: {
  id?: string;
  script: string;
  serif: string;
}) {
  return (
    <h2 id={id} className="script-heading">
      <span className="script">{script}</span> <span className="serif">{serif}</span>
    </h2>
  );
}
