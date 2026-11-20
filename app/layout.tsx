import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/pinyon-script/400.css";
import "@fontsource-variable/cormorant-garamond/index.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: { default: person.shortName, template: `%s · ${person.shortName}` },
  description:
    "Rice University student in Computer Science and Mathematical Economic Analysis, working toward quantitative trading and research.",
};

export const viewport: Viewport = {
  themeColor: "#5a1814",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <footer className="site-footer">
          <p>
            © 2026 {person.shortName}. Built with Next.js and TypeScript; charts drawn in SVG.
          </p>
          <p className="script footer-sign">Jana</p>
        </footer>
      </body>
    </html>
  );
}
