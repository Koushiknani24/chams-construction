import type { Metadata } from "next";
import { pageOpenGraph } from "../seo";

const DESC =
  "Talk to CHAMS Construction. Project enquiries, quote requests, manpower bookings and after-hours rectification — a senior site lead replies within one business day. +65 8117 4399.";

export const metadata: Metadata = {
  title: "Contact CHAMS Construction Singapore — Get a Site Quote",
  description: DESC,
  alternates: { canonical: "/contact-us" },
  openGraph: pageOpenGraph({ url: "/contact-us", title: "Contact CHAMS Construction", description: DESC }),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
