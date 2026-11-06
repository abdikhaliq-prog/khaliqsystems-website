import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { ContactDetails, WhatsAppButton } from "@/components/site/Bits";

const TITLE = "About — Khaliq Systems | AI Automation, Websites & Digital Systems";
const DESCRIPTION =
  "Khaliq Systems is a São Paulo, Brazil technology company building AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khaliqsystems.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaliqsystems.com/about" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <FloatingWhatsApp />

      <main>
        <section className="glow-ambient px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="eyebrow">{t.parent.about.eyebrow}</p>
              <h1 className="display mt-6 text-[2.4rem] leading-[1.06] sm:text-6xl">
                <span className="text-gradient-fade">{t.aboutPage.title}</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 max-w-2xl space-y-5 border-t border-hairline pt-10 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.aboutPage.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="display text-[2.2rem] leading-[1.08] sm:text-5xl">
                <span className="text-gradient-fade">{t.about.statement[0]}</span>
                <br />
                <span className="text-muted-foreground">{t.about.statement[1]}</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-12 max-w-2xl space-y-5 border-t border-hairline pt-10 text-base leading-relaxed text-muted-foreground">
                {t.about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{t.parent.principles.eyebrow}</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">{t.parent.principles.title}</h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.parent.principles.items.map(([name, desc], i) => (
                <Reveal as="li" key={name} delay={(i % 3) * 80}>
                  <div className="panel h-full p-6">
                    <h3 className="text-base font-medium tracking-tight">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to="/automations"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Khaliq Automations <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/digital"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                Khaliq Digital <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

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
