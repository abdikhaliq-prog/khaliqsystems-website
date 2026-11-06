import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, Plane, ShoppingBag, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHead, WhatsAppButton } from "./Bits";

// Industries we build for. Only the healthcare card is a product (Sofia);
// the others are custom work, labelled as such, per the Chair's instruction
// not to imply ready-to-deploy products.
const ICONS: Record<string, LucideIcon> = {
  health: Stethoscope,
  realEstate: Building2,
  travel: Plane,
  ecommerce: ShoppingBag,
};

export function IndustriesSection() {
  const { t } = useI18n();
  const ind = t.home.industries;

  return (
    <section id="setores" className="scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={ind.eyebrow} title={ind.title} body={ind.body} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ind.cards.map((c, i) => {
            const Icon = ICONS[c.key] ?? Check;
            const isProduct = c.key === "health";
            return (
              <Reveal as="li" key={c.key} delay={(i % 4) * 70}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-7",
                    isProduct ? "border-accent/40 bg-surface" : "border-hairline",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl border border-hairline bg-background">
                      <Icon className="size-5 text-accent" />
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[0.7rem] font-medium",
                        isProduct
                          ? "bg-primary text-primary-foreground"
                          : "border border-hairline text-muted-foreground",
                      )}
                    >
                      {isProduct ? ind.product : ind.custom}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl tracking-tight">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                  <ul className="mt-5 grid gap-2 border-t border-hairline pt-5">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {isProduct && "cta" in c && c.cta && (
                    <div className="mt-auto pt-6">
                      <Link
                        to="/"
                        hash="systems"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {c.cta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={80}>
          <div className="mt-6 rounded-3xl border border-hairline p-7 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg tracking-tight">{ind.moreTitle}</h3>
              <span className="rounded-full border border-hairline px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground">
                {ind.custom}
              </span>
            </div>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {ind.more.map(([name, use]) => (
                <li key={name} className="text-sm leading-snug">
                  <span className="font-medium text-foreground">{name}</span>
                  <span className="block text-muted-foreground">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton label={ind.cta} />
          <Link
            to="/"
            hash="faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            {ind.faqLink}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
