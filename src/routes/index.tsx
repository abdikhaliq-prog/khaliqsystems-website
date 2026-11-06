import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { HeroDevices } from "@/components/site/HeroDevices";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ContactDetails, SectionHead } from "@/components/site/Bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Khaliq Systems | AI Automation, Websites & Digital Systems";
const DESCRIPTION =
  "Khaliq Systems is a São Paulo, Brazil technology company building AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khaliqsystems.com/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaliqsystems.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sofia — AI Operations Agent",
          provider: {
            "@type": "Organization",
            name: "Khaliq Automations",
            url: "https://khaliqsystems.com/automations",
            parentOrganization: {
              "@type": "Organization",
              name: "Khaliq Systems",
              url: "https://khaliqsystems.com",
            },
          },
          description:
            "Sofia is the flagship AI operations agent by Khaliq Systems. It handles customer conversations, answers approved business questions, supports booking by link and follow-up, and escalates to a person when human judgment is required.",
          serviceType: "AI Operations Agent & Business Automation",
          areaServed: "Brazil",
          featureList: [
            "Customer conversations",
            "Business knowledge",
            "Booking link",
            "Follow-up",
            "Human handoff",
            "Conversation context",
          ],
          isRelatedTo: {
            "@type": "Organization",
            name: "Khaliq Systems",
            url: "https://khaliqsystems.com",
          },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [t, lang]);

  const h = t.home;

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <FloatingWhatsApp />

      <main>
        {/* HERO */}
        <section className="glow-ambient px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40 lg:pt-[5.5rem]">
          <div className="mx-auto grid max-w-6xl gap-y-14 sm:gap-y-16 lg:gap-y-7">
            <div className="min-w-0">
              <Reveal>
                <p className="eyebrow">{h.hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display mt-6 text-[2.5rem] leading-[1.04] sm:text-6xl lg:mt-4 lg:text-[3.4rem]">
                  <span className="text-gradient-fade">{h.hero.title[0]}</span>
                  <br />
                  <span className="text-gradient-fade">{h.hero.title[1]}</span>
                </h1>
              </Reveal>
              <div className="lg:mt-6 lg:flex lg:items-end lg:justify-between lg:gap-10">
                <Reveal delay={150}>
                  <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] lg:mt-0 lg:max-w-[40rem]">
                    {h.hero.body}
                  </p>
                </Reveal>
                <Reveal delay={220}>
                  <div className="mt-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
                    <Link
                      to="/"
                      hash="systems"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-16px_rgba(255,255,255,0.4)] sm:w-auto"
                    >
                      {h.hero.primary}
                      <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href="#contato"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline px-6 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface sm:w-auto"
                    >
                      {h.hero.secondary}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={180} className="min-w-0">
              <HeroDevices />
            </Reveal>

            <Reveal delay={300} className="min-w-0">
              <div className="overflow-hidden border-t border-hairline pt-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                <div className="marquee-track flex w-max">
                  {[0, 1].map((copy) => (
                    <ul
                      key={copy}
                      aria-hidden={copy === 1}
                      className="flex shrink-0 items-center gap-10 pr-10"
                    >
                      {h.hero.pillars.map((b) => (
                        <li
                          key={`${copy}-${b}`}
                          className="flex items-center gap-2.5 whitespace-nowrap text-sm text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0 text-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THE OPERATIONAL GAP */}
        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">{h.problem.eyebrow}</p>
              <h2 className="display mt-5 text-4xl leading-[1.08] sm:text-5xl">
                <span className="text-gradient-fade">{h.problem.title[0]}</span>
                <br />
                <span className="text-muted-foreground">{h.problem.title[1]}</span>
              </h2>
              <div className="mt-7 max-w-2xl space-y-4">
                {h.problem.body.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {h.problem.items.map(([name, desc], i) => (
                <Reveal as="li" key={name} delay={(i % 2) * 80}>
                  <div className="panel h-full p-7">
                    <h3 className="text-base font-medium tracking-tight">{name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* INDUSTRIES */}
        <IndustriesSection />

        {/* FLAGSHIP — SOFIA */}
        <section id="systems" className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="panel overflow-hidden p-8 sm:p-12">
                <p className="eyebrow text-accent">{h.sofia.eyebrow}</p>
                <h2 className="display mt-5 text-5xl sm:text-6xl">{h.sofia.name}</h2>
                <p className="mt-6 max-w-3xl text-xl leading-snug text-foreground sm:text-2xl">
                  {h.sofia.title}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {h.sofia.body}
                </p>

                <ul className="mt-10 grid gap-5 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-3">
                  {h.sofia.caps.map(([name, desc], i) => (
                    <Reveal as="li" key={name} delay={(i % 3) * 70}>
                      <div className="h-full">
                        <div className="flex items-center gap-2.5">
                          <Check className="size-4 shrink-0 text-accent" />
                          <h3 className="text-sm font-medium tracking-tight">{name}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/automations"
                    hash="sofia"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                  >
                    {h.sofia.ctaPrimary}
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/automations"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline px-6 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface sm:w-auto"
                  >
                    {h.sofia.ctaSecondary}
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* HEALTHCARE */}
            <Reveal delay={80}>
              <div className="mt-6 rounded-3xl border border-hairline p-8 sm:p-10">
                <p className="eyebrow text-accent">{h.sofia.health.eyebrow}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {h.sofia.health.body}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {h.sofia.health.items.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t.sofia.cfmNote}
                </p>
                <p className="mt-8 border-t border-hairline pt-6 text-xs leading-relaxed text-muted-foreground/70">
                  {h.sofia.health.note}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={h.how.eyebrow} title={h.how.title} body={h.how.body} />

            <ol className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline lg:grid-cols-5">
              {h.how.steps.map(([name, desc], i) => (
                <Reveal as="li" key={name} delay={i * 70} className="bg-background">
                  <div className="flex h-full flex-col p-7">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-5 text-sm font-medium leading-snug tracking-tight">{name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SUPPORTING SYSTEMS */}
        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow={h.support.eyebrow}
              title={h.support.title}
              body={h.support.body}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {h.support.cards.map((c, i) => (
                <Reveal key={c.name} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-3xl border border-hairline p-7">
                    <h3 className="font-display text-xl tracking-tight">{c.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                    <ul className="mt-5 grid gap-2 border-t border-hairline pt-5 sm:grid-cols-2">
                      {c.areas.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <Link
                        to={c.to}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {c.cta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST STATEMENT */}
        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-4xl text-center">
              <h2 className="display text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5.5rem]">
                <span className="text-gradient-fade">{t.trust.title[0]}</span>
                <br />
                <span className="text-muted-foreground">{t.trust.title[1]}</span>
              </h2>
              <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.trust.body}
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {h.principles.items.map(([name, desc], i) => (
                <Reveal as="li" key={name} delay={(i % 3) * 80}>
                  <div className="panel h-full p-6">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-5 text-base font-medium tracking-tight">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={100}>
              <div className="mt-12 max-w-3xl border-t border-hairline pt-10">
                <h3 className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                  {h.principles.closingTitle}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {h.principles.closingBody}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <SectionHead eyebrow={h.faq.eyebrow} title={h.faq.title} />

            <Accordion type="single" collapsible className="mt-10 border-t border-hairline">
              {h.faq.items.map(([q, a], i) => (
                <Reveal key={q} delay={(i % 3) * 60}>
                  <AccordionItem value={`faq-${i}`} className="border-hairline">
                    <AccordionTrigger className="w-full py-6 text-left text-base font-medium leading-snug tracking-tight hover:no-underline [&>svg]:text-primary">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ABOUT */}
        <section id="sobre" className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="eyebrow">{h.about.eyebrow}</p>
              <h2 className="display mt-6 text-[2.2rem] leading-[1.08] sm:text-5xl">
                <span className="text-gradient-fade">{h.about.title}</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 max-w-2xl space-y-5 border-t border-hairline pt-10">
                {h.about.body.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                {h.about.cta}
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contato" className="glow-ambient px-5 py-14 sm:px-8 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{h.final.eyebrow}</p>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              <span className="text-gradient-fade">{h.final.title[0]}</span>
              <br />
              <span className="text-muted-foreground">{h.final.title[1]}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {h.final.body}
            </p>
            <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/automations"
                hash="sofia"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-5 text-base font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                {h.final.primary}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-hairline px-8 py-5 text-base font-medium text-foreground transition-colors duration-300 hover:bg-surface sm:w-auto"
              >
                <WhatsAppIcon className="size-5" />
                {h.final.secondary}
              </a>
            </div>
            <ContactDetails />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
