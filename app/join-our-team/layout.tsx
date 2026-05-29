import type { Metadata } from "next";
import { pageOpenGraph } from "../seo";

const DESC =
  "Hiring across Singapore: tradespeople, supervisors, electricians, plumbers, painters and general workforce. Safety-first sites, on-time wages, long-term roles. Apply with CHAMS Construction.";

export const metadata: Metadata = {
  title: "Careers at CHAMS Construction — Join Our Singapore Site Teams",
  description: DESC,
  alternates: { canonical: "/join-our-team" },
  openGraph: pageOpenGraph({ url: "/join-our-team", title: "Careers — CHAMS Construction", description: DESC }),
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
