import { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Bath,
  BedDouble,
  BedSingle,
  CalendarCheck,
  Dumbbell,
  Flower2,
  HeartPulse,
  MapPin,
  MessageCircle,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import clinic1 from "@/assets/sites/site-clinic-1.webp";
import clinic2 from "@/assets/sites/site-clinic-2.webp";
import clinic3 from "@/assets/sites/site-clinic-3.webp";
import clinicG1 from "@/assets/sites/site-clinic-g1.webp";
import clinicG2 from "@/assets/sites/site-clinic-g2.webp";
import clinicG3 from "@/assets/sites/site-clinic-g3.webp";
import clinicG4 from "@/assets/sites/site-clinic-g4.webp";
import clinicG5 from "@/assets/sites/site-clinic-g5.webp";
import clinicG8 from "@/assets/sites/site-clinic-g8.webp";
import pousada1 from "@/assets/sites/site-pousada-1.webp";
import restaurant1 from "@/assets/sites/site-restaurant-1.webp";
import gym1 from "@/assets/sites/site-gym-1.webp";
import salon1 from "@/assets/sites/site-salon-1.webp";
import salon2 from "@/assets/sites/site-salon-2.webp";
import salonG1 from "@/assets/sites/site-salon-g1.webp";
import salonG2 from "@/assets/sites/site-salon-g2.webp";
import salonG3 from "@/assets/sites/site-salon-g3.webp";
import salonG4 from "@/assets/sites/site-salon-g4.webp";
import salonG5 from "@/assets/sites/site-salon-g5.webp";
import salonG6 from "@/assets/sites/site-salon-g6.webp";
import salonG7 from "@/assets/sites/site-salon-g7.webp";
import menuPicanha from "@/assets/sites/menu-picanha.webp";
import menuStrogonoff from "@/assets/sites/menu-strogonoff.webp";
import menuParmegiana from "@/assets/sites/menu-parmegiana.webp";

// Example websites for the Digital page: one fictional business per type, shown as
// a desktop site on the laptop and the same site's mobile version on the phone.
// Photos are AI-generated for Khaliq Systems (no real businesses, logos or faces).
type Kind = "clinica" | "pousada" | "restaurante" | "academia" | "salao";
const KINDS: Kind[] = ["clinica", "pousada", "restaurante", "academia", "salao"];

type Theme = {
  bg: string;
  ink: string;
  muted: string;
  accent: string;
  accentInk: string;
  soft: string;
  card: string;
  slides: string[];
  gallery?: string[];
  serif?: boolean;
  icons?: LucideIcon[];
  thumbs?: string[];
  pin: string;
  tabIcon: LucideIcon;
};

const THEMES: Record<Kind, Theme> = {
  clinica: {
    bg: "#F4F8F5",
    ink: "#173D34",
    muted: "#5B7069",
    accent: "#2F775F",
    accentInk: "#FFFFFF",
    soft: "#DCEAE2",
    card: "#FFFFFF",
    slides: [clinic1, clinic2, clinic3],
    gallery: [clinicG2, clinicG1, clinicG3, clinicG4, clinicG8, clinicG5],
    icons: [Stethoscope, Baby, Smile],
    pin: "#2F775F",
    tabIcon: HeartPulse,
  },
  pousada: {
    bg: "#FBF7EF",
    ink: "#3C2D24",
    muted: "#7A6A5C",
    accent: "#87683E",
    accentInk: "#FFFFFF",
    soft: "#EFE3CF",
    card: "#FFFDF8",
    slides: [pousada1],
    serif: true,
    icons: [BedSingle, BedDouble, Bath],
    pin: "#87683E",
    tabIcon: BedDouble,
  },
  restaurante: {
    bg: "#FFF8F1",
    ink: "#3A2418",
    muted: "#7D6556",
    accent: "#25D366",
    accentInk: "#FFFFFF",
    soft: "#F6E2D3",
    card: "#FFFFFF",
    slides: [restaurant1],
    serif: true,
    thumbs: [menuPicanha, menuStrogonoff, menuParmegiana],
    pin: "#D94B45",
    tabIcon: UtensilsCrossed,
  },
  academia: {
    bg: "#111315",
    ink: "#F4F4F2",
    muted: "#A3A8AD",
    accent: "#D7F25A",
    accentInk: "#111315",
    soft: "#1E2226",
    card: "#1A1D21",
    slides: [gym1],
    icons: [Dumbbell, CalendarCheck, Trophy],
    pin: "#D7F25A",
    tabIcon: Dumbbell,
  },
  salao: {
    bg: "#FBF6F2",
    ink: "#3B2A26",
    muted: "#7D6A63",
    accent: "#B07A5A",
    accentInk: "#FFFFFF",
    soft: "#F1E2D8",
    card: "#FFFDFB",
    slides: [salon1, salon2],
    gallery: [salonG1, salonG2, salonG3, salonG4, salonG5, salonG6, salonG7],
    serif: true,
    icons: [Scissors, Sparkles, Flower2],
    pin: "#B07A5A",
    tabIcon: Scissors,
  },
};

type Site = {
  brand: string;
  nav: readonly string[];
  heading: string;
  sub: string;
  sectionTitle: string;
  cards: readonly (readonly string[])[];
  button: string;
  info: string;
};

const SCROLL_TIME = 12_000;
const PAUSE_TIME = 2_000;
const CYCLE_TIME = SCROLL_TIME + PAUSE_TIME;
const SLIDE_MS = 3_800;

/** Header photo: slow continuous zoom; several photos cross-fade in turn. */
function Hero({
  site,
  th,
  mobile,
  still,
}: {
  site: Site;
  th: Theme;
  mobile: boolean;
  still: boolean;
}) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (still || th.slides.length < 2) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % th.slides.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [still, th.slides.length]);

  return (
    <div className={cn("relative overflow-hidden", mobile ? "h-[19em]" : "h-[25em]")}>
      {th.slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms]",
            !still && "live-site-zoom",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
      <div
        className={cn("absolute inset-x-0 bottom-0 text-white", mobile ? "p-[1.4em]" : "p-[2.6em]")}
      >
        <p
          className={cn(
            "font-semibold leading-[1.08] drop-shadow-sm",
            th.serif ? "font-serif" : "font-display",
            mobile ? "text-[1.7em]" : "max-w-[60%] text-[2.6em]",
          )}
        >
          {site.heading}
        </p>
        <p className="mt-[0.6em] max-w-[34em] text-[0.85em] text-white/90">{site.sub}</p>
        {th.slides.length > 1 && (
          <div className="mt-[0.9em] flex gap-[0.35em]">
            {th.slides.map((src, i) => (
              <span
                key={src}
                className={cn(
                  "h-[0.3em] rounded-full transition-all duration-500",
                  i === active ? "w-[1.6em] bg-white" : "w-[0.6em] bg-white/50",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Photo strip that scrolls sideways without stopping. */
function Gallery({
  images,
  title,
  th,
  mobile,
  still,
}: {
  images: string[];
  title: string;
  th: Theme;
  mobile: boolean;
  still: boolean;
}) {
  const pad = mobile ? "px-[1.4em]" : "px-[2.6em]";
  return (
    <div className="pb-[1.8em]">
      <p
        className={cn("text-[1.1em] font-semibold", pad, th.serif ? "font-serif" : "font-display")}
      >
        {title}
      </p>
      <div className="mt-[0.9em] overflow-hidden">
        <div className={cn("flex w-max gap-[0.7em]", !still && "live-site-strip", pad)}>
          {[0, 1].map((copy) =>
            images.map((src) => (
              <img
                key={`${copy}-${src}`}
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className={cn(
                  "shrink-0 rounded-[0.7em] object-cover",
                  mobile ? "h-[7em] w-[10em]" : "h-[9em] w-[13em]",
                )}
                style={{ border: `1px solid ${th.soft}` }}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

function SiteView({
  kind,
  site,
  mobile,
  still,
  galleryTitle,
  buttonRef,
}: {
  kind: Kind;
  site: Site;
  mobile: boolean;
  still: boolean;
  galleryTitle: string;
  buttonRef?: React.Ref<HTMLSpanElement>;
}) {
  const th = THEMES[kind];
  const pad = mobile ? "px-[1.4em]" : "px-[2.6em]";
  const cta = (big: boolean, ref?: React.Ref<HTMLSpanElement>) => (
    <span
      ref={ref}
      className={cn(
        "live-site-cta inline-flex items-center justify-center gap-[0.5em] rounded-full font-semibold",
        big ? "px-[1.4em] py-[0.7em] text-[0.85em]" : "px-[1em] py-[0.45em] text-[0.7em]",
        mobile && big && "w-full",
      )}
      style={{ background: th.accent, color: th.accentInk }}
    >
      <MessageCircle className="size-[1.1em]" />
      {site.button}
    </span>
  );

  return (
    <div style={{ background: th.bg, color: th.ink }}>
      {/* Navbar */}
      <div
        className={cn("flex items-center justify-between py-[0.9em]", pad)}
        style={{ background: th.card }}
      >
        <span className={cn("text-[0.95em] font-bold tracking-tight", th.serif && "font-serif")}>
          {site.brand}
        </span>
        {mobile ? (
          <span className="text-[1.1em]" style={{ color: th.pin }}>
            ☰
          </span>
        ) : (
          <span className="flex items-center gap-[1.6em] text-[0.72em]" style={{ color: th.muted }}>
            {site.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
            {cta(false)}
          </span>
        )}
      </div>

      <Hero site={site} th={th} mobile={mobile} still={still} />

      <div className={cn("py-[1.4em]", pad)}>{cta(true)}</div>

      {/* Cards */}
      <div className={cn("pb-[1.6em]", pad)}>
        <p className={cn("text-[1.1em] font-semibold", th.serif ? "font-serif" : "font-display")}>
          {site.sectionTitle}
        </p>
        <div className={cn("mt-[0.9em] grid gap-[0.8em]", mobile ? "grid-cols-1" : "grid-cols-3")}>
          {site.cards.map(([name, detail], i) => {
            const Icon = th.icons?.[i];
            return (
              <div
                key={name}
                className={cn(
                  "flex gap-[0.8em] overflow-hidden rounded-[0.8em]",
                  th.thumbs && !mobile ? "flex-col" : "p-[0.9em]",
                  mobile ? "items-center" : "flex-col",
                )}
                style={{ background: th.card, border: `1px solid ${th.soft}` }}
              >
                {th.thumbs ? (
                  <img
                    src={th.thumbs[i]}
                    alt=""
                    decoding="async"
                    className={cn(
                      "shrink-0 object-cover",
                      mobile ? "ml-[0.9em] size-[3.6em] rounded-[0.5em]" : "h-[8em] w-full",
                    )}
                  />
                ) : Icon ? (
                  <span
                    className="flex size-[2.4em] shrink-0 items-center justify-center rounded-full"
                    style={{ background: th.soft }}
                  >
                    <Icon className="size-[1.2em]" style={{ color: th.pin }} />
                  </span>
                ) : null}
                <div
                  className={cn(
                    "min-w-0",
                    th.thumbs && !mobile && "px-[0.9em] pb-[0.9em]",
                    th.thumbs && mobile && "py-[0.9em] pr-[0.9em]",
                  )}
                >
                  <p className="text-[0.85em] font-semibold">{name}</p>
                  <p className="text-[0.72em]" style={{ color: th.muted }}>
                    {detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {th.gallery && (
        <Gallery images={th.gallery} title={galleryTitle} th={th} mobile={mobile} still={still} />
      )}

      {/* Info band: map for the restaurant, details for the others */}
      <div className={cn("py-[1.4em]", pad)} style={{ background: th.soft }}>
        {kind === "restaurante" && (
          <svg
            viewBox="0 0 220 70"
            className="mb-[0.8em] h-[5em] w-full rounded-[0.6em]"
            aria-hidden="true"
          >
            <rect width="220" height="70" fill="#EEF1ED" />
            <path
              d="M-10 20 L230 52 M30 -10 L70 80 M140 -10 L115 80 M-10 62 L230 14"
              fill="none"
              stroke="#CDD5CF"
              strokeWidth="5"
            />
            <path
              d="M130 28c0-7 5-12 12-12s12 5 12 12c0 10-12 21-12 21s-12-11-12-21Z"
              fill="#D94B45"
            />
            <circle cx="142" cy="28" r="4" fill="#FFFFFF" />
          </svg>
        )}
        <p className="flex items-center gap-[0.5em] text-[0.75em]">
          <MapPin className="size-[1.1em] shrink-0" style={{ color: th.pin }} />
          {site.info}
        </p>
      </div>

      {/* Closing call to action (pulses when the scroll reaches it) */}
      <div className={cn("py-[1.8em]", pad, !mobile && "text-center")}>{cta(true, buttonRef)}</div>
      <p
        className={cn("pb-[1.2em] text-[0.6em]", pad, !mobile && "text-center")}
        style={{ color: th.muted }}
      >
        © {site.brand}
      </p>
    </div>
  );
}

function Laptop({
  children,
  viewportRef,
}: {
  children: ReactNode;
  viewportRef: React.Ref<HTMLDivElement>;
}) {
  return (
    <div>
      <div className="rounded-t-[1.1rem] bg-[#10292A] p-[1.2%] shadow-[0_30px_60px_-30px_rgba(16,41,42,0.35)]">
        <div
          ref={viewportRef}
          className="@container aspect-[16/10] overflow-hidden rounded-t-[0.6rem] bg-[#F6F7F5]"
        >
          <div className="text-[max(1.55cqw,9px)]">{children}</div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[106%] -translate-x-[3%] rounded-b-xl bg-[#284345] shadow-[0_10px_20px_-12px_rgba(16,41,42,0.4)]" />
    </div>
  );
}

function Phone({
  children,
  viewportRef,
}: {
  children: ReactNode;
  viewportRef: React.Ref<HTMLDivElement>;
}) {
  return (
    <div className="rounded-[1.9rem] bg-[#10292A] p-2 shadow-[0_30px_60px_-30px_rgba(16,41,42,0.45)]">
      <div
        ref={viewportRef}
        className="@container aspect-[9/18.5] overflow-hidden rounded-[1.45rem] bg-[#F8FAF8]"
      >
        <div className="text-[max(5cqw,9px)]">{children}</div>
      </div>
    </div>
  );
}

export function LiveSiteMockup({ alt }: { alt: string }) {
  const { t, lang } = useI18n();
  const ex = t.digitalPage.examples;
  const [kind, setKind] = useState<Kind>("clinica");
  // Auto-advance through the types until the visitor picks one.
  const [userPicked, setUserPicked] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const laptopViewportRef = useRef<HTMLDivElement>(null);
  const laptopContentRef = useRef<HTMLDivElement>(null);
  const phoneViewportRef = useRef<HTMLDivElement>(null);
  const phoneContentRef = useRef<HTMLDivElement>(null);
  const phoneButtonRef = useRef<HTMLSpanElement>(null);
  const autoRef = useRef(!userPicked);
  autoRef.current = !userPicked;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Warm the cache for every header photo so switching types is instant.
  useEffect(() => {
    const id = window.setTimeout(() => {
      for (const k of KINDS) for (const src of THEMES[k].slides) new Image().src = src;
    }, 1500);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      laptopContentRef.current?.style.setProperty("transform", "translate3d(0, 0, 0)");
      phoneContentRef.current?.style.setProperty("transform", "translate3d(0, 0, 0)");
      phoneButtonRef.current?.classList.remove("is-pulsing");
      return;
    }
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;
    let elapsed = 0;
    let lastTime: number | null = null;
    let inView = false;
    let tabVisible = !document.hidden;

    const move = (
      viewport: HTMLDivElement | null,
      content: HTMLDivElement | null,
      progress: number,
    ) => {
      if (!viewport || !content) return;
      const distance = Math.max(0, content.scrollHeight - viewport.clientHeight);
      // Ease in and out so the scroll feels like a person reading.
      const eased = 0.5 - Math.cos(Math.PI * progress) / 2;
      content.style.transform = `translate3d(0, ${-distance * eased}px, 0)`;
    };
    const setPosition = (progress: number) => {
      move(laptopViewportRef.current, laptopContentRef.current, progress);
      move(phoneViewportRef.current, phoneContentRef.current, progress);
      phoneButtonRef.current?.classList.toggle("is-pulsing", progress === 1);
    };

    const tick = (time: number) => {
      if (!inView || !tabVisible) return;
      if (lastTime !== null) elapsed += time - lastTime;
      lastTime = time;
      if (elapsed >= CYCLE_TIME) {
        elapsed %= CYCLE_TIME;
        if (autoRef.current) setKind((k) => KINDS[(KINDS.indexOf(k) + 1) % KINDS.length]);
      }
      setPosition(Math.min(elapsed / SCROLL_TIME, 1));
      frame = window.requestAnimationFrame(tick);
    };
    const start = () => {
      if (!inView || !tabVisible || frame) return;
      lastTime = null;
      frame = window.requestAnimationFrame(tick);
    };
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = null;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = Boolean(entry?.isIntersecting);
        if (inView) start();
        else stop();
      },
      { threshold: 0.08 },
    );
    const onVisibilityChange = () => {
      tabVisible = !document.hidden;
      if (tabVisible) start();
      else stop();
    };
    setPosition(0);
    observer.observe(root);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      stop();
    };
    // Restart the scroll whenever the type or language changes.
  }, [reduceMotion, kind, lang]);

  const site = ex[kind];

  return (
    <div ref={rootRef} className="w-full">
      <style>{`
        @keyframes live-site-cta-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 7px rgba(37, 211, 102, 0.2); }
        }
        @keyframes live-site-zoom { from { transform: scale(1); } to { transform: scale(1.09); } }
        @keyframes live-site-strip { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .live-site-cta.is-pulsing { animation: live-site-cta-pulse 1.4s ease-in-out infinite; }
        .live-site-zoom { animation: live-site-zoom 14s ease-in-out infinite alternate; transform-origin: 55% 45%; }
        .live-site-strip { animation: live-site-strip 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .live-site-cta.is-pulsing, .live-site-zoom, .live-site-strip { animation: none; }
        }
      `}</style>

      {/* Business-type selector */}
      <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <p className="text-sm text-muted-foreground">{ex.pick}</p>
        <div role="group" aria-label={ex.pick} className="flex flex-wrap justify-center gap-2">
          {KINDS.map((k) => {
            const Icon = THEMES[k].tabIcon;
            const active = k === kind;
            return (
              <button
                key={k}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setUserPicked(true);
                  setKind(k);
                  track("site_example", { type: k });
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-300",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-hairline text-muted-foreground hover:bg-surface hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {ex.tabs[k]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Devices: big laptop, small phone close beside it */}
      <div role="img" aria-label={alt} className="relative mx-auto max-w-5xl lg:pr-[14%]">
        <div aria-hidden="true">
          <Laptop viewportRef={laptopViewportRef}>
            <div ref={laptopContentRef} key={`l-${kind}-${lang}`} className="will-change-transform">
              <div className="msg-in">
                <SiteView
                  kind={kind}
                  site={site}
                  mobile={false}
                  still={reduceMotion}
                  galleryTitle={ex.gallery}
                />
              </div>
            </div>
          </Laptop>
          <div className="relative z-10 mx-auto mt-8 w-[58%] max-w-[230px] lg:absolute lg:bottom-[-4%] lg:right-0 lg:mt-0 lg:w-[22%]">
            <Phone viewportRef={phoneViewportRef}>
              <div
                ref={phoneContentRef}
                key={`p-${kind}-${lang}`}
                className="will-change-transform"
              >
                <div className="msg-in">
                  <SiteView
                    kind={kind}
                    site={site}
                    mobile
                    still={reduceMotion}
                    galleryTitle={ex.gallery}
                    buttonRef={phoneButtonRef}
                  />
                </div>
              </div>
            </Phone>
          </div>
        </div>
      </div>
    </div>
  );
}
