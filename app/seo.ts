// Shared SEO helpers.
//
// Next.js does NOT deep-merge `openGraph` between a layout and a page — if a
// page sets `openGraph`, it fully REPLACES the parent's, silently dropping the
// inherited og:image, og:type, og:description etc. That left most pages with
// only og:url + og:title. Use `pageOpenGraph()` so every page emits a complete
// Open Graph set (title, description, image, url, type, locale, siteName).

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "CHAMS Construction Pte. Ltd. — Singapore",
};

export function pageOpenGraph(opts: {
  url: string;
  title?: string;
  description?: string;
}) {
  return {
    type: "website" as const,
    locale: "en_SG",
    siteName: "CHAMS Construction",
    url: opts.url,
    ...(opts.title ? { title: opts.title } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    images: [OG_IMAGE],
  };
}
