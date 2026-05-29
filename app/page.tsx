import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeFaqs } from "./data";

export const metadata: Metadata = {
  title:
    "Construction Company in Singapore — Commercial & Interior Works | CHAMS",
  description:
    "CHAMS Construction is a BCA-registered, ISO 45001:2018 certified construction company in Singapore. Commercial blasting, painting, M&E, plumbing, interior fit-out, plastering, renovation and skilled manpower supply. Trusted by JTC, LTA, HDB and PUB.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const SITE_URL = "https://chamsconstruction.com";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL + "/",
  name: "Construction Company in Singapore — Commercial & Interior Works | CHAMS",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: `${SITE_URL}/og-image.png`,
  inLanguage: "en-SG",
};
import {
  AboutBlock,
  ButtonLink,
  CtaImage,
  FeaturedTags,
  HomeHero,
  PageShell,
  Principles,
  Reveal,
  ServicesPreview,
  StatBlock,
  VisionMissionValues,
  WorkGrid,
} from "./components/Site";

function GoldCta() {
  return (
    <Link
      href="/contact-us"
      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-6 py-3 text-[12px] tracking-[0.2em] uppercase text-[var(--navy)] btn-shadow transition hover:bg-[var(--paper)] sm:w-auto sm:justify-start"
    >
      Start a project
      <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HomeHero />

      {/* 01 — About */}
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <AboutBlock />
          <div className="mt-16">
            <VisionMissionValues />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">/ 02 — Services</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.04] md:text-7xl md:leading-[0.98]">
                A complete<br />
                <span className="font-display-italic text-[var(--gold-deep)]">project stack.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <ButtonLink href="/services" variant="outline">
                All services
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14">
            <ServicesPreview />
          </div>
          <div className="mt-10">
            <FeaturedTags />
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatBlock />

      {/* Principles */}
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">/ 03 — How we work</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.04] md:text-7xl md:leading-[0.98]">
                Built right,<br />
                <span className="font-display-italic text-[var(--gold-deep)]">on schedule.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-md text-lg leading-8 text-[var(--ash)]">
                Four principles every Chams project lives by — from kickoff through handover
                and aftercare.
              </p>
            </Reveal>
          </div>
          <div className="mt-16">
            <Principles />
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">/ 04 — Selected work</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.04] md:text-7xl md:leading-[0.98]">
                Project-ready,<br />
                <span className="font-display-italic text-[var(--gold-deep)]">site-tested.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <ButtonLink href="/our-work" variant="outline">
                All projects
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14">
            <WorkGrid />
          </div>
        </div>
      </section>

      {/* FAQ — long-tail SEO + FAQPage rich results */}
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">/ 05 — FAQ</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.04] md:text-7xl md:leading-[0.98]">
                Common<br />
                <span className="font-display-italic text-[var(--gold-deep)]">questions.</span>
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-[var(--ash)]">
                What clients ask before starting a commercial or interior construction
                project with CHAMS in Singapore.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="border-t border-[color:var(--line)]">
                {homeFaqs.map((f) => (
                  <div key={f.question} className="border-b border-[color:var(--line-soft)] py-6">
                    <dt className="font-display text-lg leading-snug text-[var(--navy)] md:text-xl">
                      {f.question}
                    </dt>
                    <dd className="mt-3 max-w-2xl text-base leading-7 text-[var(--ash)]">
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="overflow-hidden rounded-sm bg-[var(--ink)] px-6 py-14 text-[var(--paper)] md:p-20">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
                <div>
                  <p className="eyebrow text-white/40">/ Next project</p>
                  <h2 className="mt-5 font-display text-4xl leading-[1.02] md:text-7xl md:leading-[0.98]">
                    Have a site,<br />
                    <span className="font-display-italic text-[var(--gold-deep)]">a deadline, a need?</span>
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-7 text-white/70 md:text-lg md:leading-8">
                    Send the brief. We&apos;ll respond with scope, schedule, and the team
                    sized to deliver it.
                  </p>
                  <div className="mt-7 md:mt-8">
                    <GoldCta />
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-16">
                <CtaImage />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
