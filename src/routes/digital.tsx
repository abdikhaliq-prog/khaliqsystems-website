import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Reveal } from "@/components/site/Reveal";
import { ContactDetails, SectionHead, WhatsAppButton } from "@/components/site/Bits";
import { LiveSiteMockup } from "@/components/site/LiveSiteMockup";

const TITLE = "Khaliq Digital — Khaliq Systems | AI Automation, Websites & Digital Systems";
const DESCRIPTION =
  "Khaliq Systems is a São Paulo, Brazil technology company building AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.";

export const Route = createFileRoute("/digital")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://khaliqsystems.com/digital" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://khaliqsystems.com/digital" }],
  }),
  component: Page,
});

function DigitalExamplesFigure({ alt, caption }: { alt: string; caption: string }) {
  const figureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    figure.style.opacity = "0";
    figure.style.transform = "translateY(24px)";
    figure.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        figure.style.opacity = "1";
        figure.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(figure);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <figure ref={figureRef} className="opacity-100">
      <LiveSiteMockup alt={alt} />
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Page() {
  const { t, lang } = useI18n();

  useEffect(() => {
    document.title =
      lang === "pt"
        ? "Khaliq Digital — Khaliq Systems | Automação com IA, Sites e Sistemas Digitais"
        : TITLE;
  }, [lang]);

  const d = t.digitalPage;

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <FloatingWhatsApp />

      <main>
        <section className="glow-ambient px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:pt-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <Reveal>
                <Link
                  to="/"
                  className="eyebrow inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  {d.eyebrow}
                  <ArrowUpRight className="size-3" />
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display mt-6 text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-[3.6rem]">
                  <span className="text-gradient-fade">{d.title[0]}</span>
                  <br />
                  <span className="text-gradient-fade">{d.title[1]}</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {d.body}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10">
                  <WhatsAppButton label={d.cta} />
                </div>
              </Reveal>
            </div>
            <div className="mt-12 lg:mt-14">
              <DigitalExamplesFigure alt={d.exampleAlt} caption={d.exampleCaption} />
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-3xl">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {d.intro}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow={d.availableNow} title={d.capsTitle} />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {d.caps.map(([name, desc], i) => (
                <Reveal key={name} delay={(i % 4) * 70}>
                  <article className="panel h-full p-6">
                    <Check className="size-4 text-accent" />
                    <h3 className="mt-5 text-base font-medium tracking-tight">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="glow-ambient px-5 py-28 sm:px-8 sm:py-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="display text-4xl sm:text-6xl">{d.title[0]}</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {d.body}
            </p>
            <div className="mt-11 flex justify-center">
              <WhatsAppButton label={d.cta} large />
            </div>
            <ContactDetails />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
