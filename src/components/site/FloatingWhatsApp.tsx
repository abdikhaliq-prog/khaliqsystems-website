import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.whatsapp}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-2.5 rounded-full bg-whatsapp px-4 text-sm font-medium text-whatsapp-foreground shadow-[0_10px_40px_-12px_oklch(0.66_0.16_152/0.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  );
}
