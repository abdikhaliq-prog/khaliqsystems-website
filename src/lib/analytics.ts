// Google Analytics 4, loaded for every visitor (LGPD: legitimate interest, disclosed by a notice).
// Paste the Measurement ID from analytics.google.com (Admin → Data streams) here.
// While it is empty, nothing loads and no notice is shown.
export const GA_ID = "G-KTWQ972HLT";

const NOTICE_KEY = "khaliq-analytics-notice";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function noticeSeen(): boolean {
  try {
    return window.localStorage.getItem(NOTICE_KEY) === "seen";
  } catch {
    return false;
  }
}

export function markNoticeSeen() {
  try {
    window.localStorage.setItem(NOTICE_KEY, "seen");
  } catch {
    /* private mode: the notice may show again next visit */
  }
}

let loaded = false;
export function loadAnalytics() {
  if (loaded || !GA_ID || typeof window === "undefined") return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

/** Records an event; does nothing until GA is set up and loaded. */
export function track(event: string, params: Record<string, string> = {}) {
  if (loaded && window.gtag) window.gtag("event", event, params);
}
