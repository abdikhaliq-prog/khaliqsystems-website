import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal } from "@/components/site/Reveal";
import { ContactDetails, SectionHead, WhatsAppButton } from "@/components/site/Bits";

const TITLE = "Khaliq Automations — Khaliq Systems | AI Automation, Websites & Digital Systems";
const DESCRIPTION =
  "Khaliq Systems is a São Paulo, Brazil technology company building AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.";

export const Route = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khaliqsystems.com/automations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaliqsystems.com/automations" }],
  }),
  component: Page,
});

function Page() {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title =
      lang === "pt"
        ? "Khaliq Automations — Khaliq Systems | Automação com IA, Sites e Sistemas Digitais"
        : TITLE;
  }, [lang]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <FloatingWhatsApp />

      <main>
        {/* HERO */}
        <section className="glow-ambient px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <Reveal>
                <Link
                  to="/"
                  className="eyebrow inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  {t.automationsPage.parentLink}
                  <ArrowUpRight className="size-3" />
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display mt-6 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
                  <span className="text-gradient-fade">{t.automationsPage.title[0]}</span>
                  <br />
                  <span className="text-gradient-fade">{t.automationsPage.title[1]}</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                  {t.automationsPage.body}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton label={t.cta.whatsapp} />
                  <a
                    href="#sofia"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline px-6 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-surface sm:w-auto"
                  >
                    {t.cta.sofia}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-14 overflow-hidden border-t border-hairline pt-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                  <div className="marquee-track flex w-max">
                    {[0, 1].map((copy) => (
                      <ul
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center gap-10 pr-10"
                      >
                        {t.hero.badges.map((b) => (
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

            <Reveal delay={180}>
              <PhoneMockup />
            </Reveal>
          </div>
        </section>

        {/* TRUST */}
        <section className="px-5 py-40 sm:px-8 sm:py-56">
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

            <div className="mt-28 grid gap-4 md:grid-cols-3 sm:mt-36">
              {t.trust.cards.map((c, i) => (
                <Reveal key={c.t} delay={i * 90}>
                  <article className="panel h-full p-7">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-6 text-lg font-medium tracking-tight">{c.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOFIA */}
        <section id="sofia" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">{t.sofia.eyebrow}</p>
              <h2 className="display mt-5 text-4xl sm:text-5xl">{t.sofia.title}</h2>
              <p className="mt-4 text-lg text-accent">{t.sofia.subtitle}</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {t.sofia.body}
              </p>
              <p className="eyebrow mt-9">{t.sofia.caption}</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                {t.sofia.tryReal}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {t.sofia.cfmNote}
              </p>
              <div className="mt-8">
                <WhatsAppButton label={t.cta.whatsapp} />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:order-first">
              <PhoneMockup parallax={false} />
            </Reveal>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow={t.compare.eyebrow}
              title={t.compare.title}
              body={t.compare.body}
            />

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-hairline p-8">
                  <h3 className="text-lg font-medium tracking-tight text-muted-foreground">
                    {t.compare.left.title}
                  </h3>
                  <ul className="mt-7 space-y-4">
                    {t.compare.left.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <Minus className="mt-0.5 size-4 shrink-0 opacity-50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={110}>
                <div className="panel h-full p-8">
                  <h3 className="text-lg font-medium tracking-tight">{t.compare.right.title}</h3>
                  <ul className="mt-7 space-y-4">
                    {t.compare.right.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solucoes" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={t.build.eyebrow} title={t.build.title} />
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {t.build.cards.map((c, i) => (
                <Reveal key={c.t} delay={i * 80}>
                  <article className="panel h-full p-8">
                    <h3 className="text-xl font-medium tracking-tight">{c.t}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {c.d}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="setores" className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={t.industries.eyebrow} title={t.industries.title} />
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} />
            <ol className="mt-14 border-t border-hairline">
              {t.how.steps.map(([name, desc], i) => (
                <Reveal as="li" key={name} delay={i * 60}>
                  <div className="grid gap-2 border-b border-hairline py-7 transition-colors duration-500 hover:bg-surface sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline sm:gap-6">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="font-display text-2xl tracking-tight">{name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* MISSED OPPORTUNITY */}
        <section className="hairline-t px-5 py-32 sm:px-8 sm:py-48">
          <Reveal className="mx-auto max-w-4xl">
            <h2 className="display text-[2.4rem] leading-[1.05] sm:text-6xl">
              <span className="text-gradient-fade">{t.missed.title}</span>
            </h2>
            <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.missed.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FINAL CTA */}
        <section id="contato" className="glow-ambient px-5 py-28 sm:px-8 sm:py-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="display text-4xl sm:text-6xl">{t.final.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.final.body}
            </p>
            <div className="mt-11 flex justify-center">
              <WhatsAppButton label={t.cta.whatsapp} large />
            </div>
            <ContactDetails />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
