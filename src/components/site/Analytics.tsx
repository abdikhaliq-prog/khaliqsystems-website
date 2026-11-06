import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { GA_ID, loadAnalytics, markNoticeSeen, noticeSeen, track } from "@/lib/analytics";

/** Loads Google Analytics for every visitor, tracks WhatsApp and email taps,
 *  and shows a one-time notice that the site uses analytics (no choice needed). */
export function Analytics() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    loadAnalytics();
    setShow(!noticeSeen());

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      const where = window.location.pathname;
      if (href.includes("wa.me"))
        track("whatsapp_click", { page: where, label: a!.textContent?.trim() ?? "" });
      else if (href.startsWith("mailto:")) track("email_click", { page: where });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!show) return null;
  // Demo pages have their own booking bar at the bottom on phones.
  const lift = typeof window !== "undefined" && window.location.pathname.startsWith("/demo/");
  return (
    <div
      role="status"
      className={`fixed ${lift ? "bottom-24 right-3 sm:bottom-3" : "bottom-3 right-24"} left-3 z-[60] flex items-center gap-3 rounded-xl border border-hairline bg-background/95 px-3.5 py-2 shadow-[0_10px_30px_-14px_rgba(16,41,42,0.35)] backdrop-blur sm:right-auto sm:max-w-sm`}
    >
      <p className="text-xs leading-snug text-muted-foreground">{t.consent.body}</p>
      <button
        type="button"
        onClick={() => {
          markNoticeSeen();
          setShow(false);
        }}
        className="shrink-0 rounded-full border border-hairline px-3 py-1 text-xs font-medium text-foreground hover:bg-surface"
      >
        {t.consent.ok}
      </button>
    </div>
  );
}
