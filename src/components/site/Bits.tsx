import { Mail } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL, useI18n } from "@/lib/i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function WhatsAppButton({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        large
          ? "inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-5 text-base font-medium text-whatsapp-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-18px_color-mix(in_oklab,var(--whatsapp)_75%,transparent)] sm:w-auto"
          : "inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-16px_rgba(255,255,255,0.4)] sm:w-auto"
      }
    >
      <WhatsAppIcon className={large ? "size-5" : "size-4"} />
      {label}
    </a>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-4xl sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p>}
    </Reveal>
  );
}

/** Shown in every "Contato" section: the company WhatsApp number and email, both tappable. */
export function ContactDetails() {
  const { t } = useI18n();
  const c = t.contactDetails;
  const item =
    "inline-flex items-center gap-3 rounded-2xl border border-hairline px-5 py-3.5 text-left transition-colors duration-300 hover:bg-surface";
  return (
    <div id="contato-direto" className="mt-8 scroll-mt-28">
      <p className="text-sm text-muted-foreground">{c.lead}</p>
      <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={item}>
          <WhatsAppIcon className="size-5 shrink-0 text-whatsapp" />
          <span className="leading-tight">
            <span className="block text-xs text-muted-foreground">{c.whatsapp}</span>
            <span className="block text-base font-medium text-foreground">{WHATSAPP_DISPLAY}</span>
          </span>
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className={item}>
          <Mail className="size-5 shrink-0 text-primary" />
          <span className="leading-tight">
            <span className="block text-xs text-muted-foreground">{c.email}</span>
            <span className="block break-all text-base font-medium text-foreground">
              {CONTACT_EMAIL}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
