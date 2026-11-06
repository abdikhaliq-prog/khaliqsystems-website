import { useEffect, useRef, useState } from "react";

// Real Google reviews shown as cards laid out like Google Maps reviews
// (initial avatar, name, reviewer stats, stars, time, text, owner reply).
// The row slides to the next review every `interval` ms, pauses on hover/touch,
// and stays still for reduced-motion users.

export type GReview = {
  name: string;
  meta: string; // e.g. "Local Guide · 22 avaliações · 28 fotos"
  when: string; // e.g. "há 5 meses"
  text: string;
  reply?: { when: string; text: string };
};

const AVATAR = ["#1A73E8", "#D93025", "#188038", "#E37400", "#9334E6", "#12857B"];

function Stars() {
  return (
    <span className="gr-stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 17.3 18.2 21l-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7l-7.2.6 5.4 4.7-1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleReviews({
  reviews,
  rating,
  count,
  mapsUrl,
  interval = 2000,
}: {
  reviews: GReview[];
  rating: string;
  count: number;
  mapsUrl: string;
  interval?: number;
}) {
  const n = reviews.length;
  const loop = [...reviews, ...reviews, ...reviews];
  const [i, setI] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [step, setStep] = useState(0);
  const first = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const measure = () => {
      const el = first.current;
      if (!el) return;
      const gap = parseFloat(getComputedStyle(el.parentElement!).columnGap || "0") || 16;
      setStep(el.offsetWidth + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => {
      setAnim(true);
      setI((v) => v + 1);
    }, interval);
    return () => clearInterval(id);
  }, [reduced, paused, interval]);

  // After passing one full set, jump back invisibly so the row loops forever.
  useEffect(() => {
    if (i < n) return;
    const t = setTimeout(() => {
      setAnim(false);
      setI(i - n);
    }, 650);
    return () => clearTimeout(t);
  }, [i, n]);

  return (
    <div className="gr">
      <style>{CSS}</style>
      <div className="gr-head">
        <div className="gr-score">
          <span className="gr-num">{rating}</span>
          <div>
            <Stars />
            <span className="gr-count">{count} avaliações no Google</span>
          </div>
        </div>
        <a className="gr-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Ver todas no Google
        </a>
      </div>

      <div
        className="gr-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 2500)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <ul
          className="gr-track"
          style={{
            transform: `translateX(${-i * step}px)`,
            transition: anim ? "transform .6s cubic-bezier(.2,.8,.2,1)" : "none",
          }}
        >
          {loop.map((r, k) => (
            <li
              key={`${r.name}-${k}`}
              ref={k === 0 ? first : undefined}
              className="gr-card"
              aria-hidden={k < i || k >= i + 3}
            >
              <div className="gr-top">
                <span className="gr-av" style={{ background: AVATAR[(k % n) % AVATAR.length] }}>
                  {r.name.charAt(0)}
                </span>
                <div>
                  <strong>{r.name}</strong>
                  <span className="gr-meta">{r.meta}</span>
                </div>
              </div>
              <div className="gr-rate">
                <Stars />
                <span>{r.when}</span>
              </div>
              <p className="gr-text">{r.text}</p>
              {r.reply && (
                <div className="gr-reply">
                  <span>
                    <b>Resposta do proprietário</b> {r.reply.when}
                  </span>
                  <p>{r.reply.text}</p>
                </div>
              )}
              <span className="gr-src">Avaliação publicada no Google</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CSS = `
.gr{font-family:Roboto,Arial,system-ui,sans-serif}
.gr-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:28px}
.gr-score{display:flex;align-items:center;gap:16px}
.gr-num{font-size:64px;line-height:1;font-weight:400;color:#fff}
.gr-count{display:block;font-size:14px;opacity:.75;margin-top:4px}
.gr-link{font-size:14px;font-weight:500;border:1px solid currentColor;border-radius:999px;padding:9px 18px;text-decoration:none;opacity:.9}
.gr-stars{display:inline-flex;gap:2px}
.gr-stars svg{width:18px;height:18px;fill:#FBBC04}
.gr-viewport{overflow:hidden;margin:0 -4px;padding:4px}
.gr-track{display:flex;column-gap:16px;margin:0;padding:0;list-style:none;will-change:transform}
.gr-card{flex:0 0 calc((100% - 32px)/3);background:#fff;color:#202124;border-radius:12px;padding:20px;box-shadow:0 1px 2px #3c40434d,0 2px 6px 2px #3c404326;display:flex;flex-direction:column;min-height:270px}
.gr-top{display:flex;gap:12px;align-items:center}
.gr-av{width:40px;height:40px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:500;flex:none}
.gr-top strong{display:block;font-size:15px;font-weight:500}
.gr-meta{display:block;font-size:12px;color:#70757a}
.gr-rate{display:flex;align-items:center;gap:8px;margin:12px 0 8px;font-size:12px;color:#70757a}
.gr-rate .gr-stars svg{width:14px;height:14px}
.gr-text{font-size:14px;line-height:1.55;margin:0;color:#3c4043;flex:1}
.gr-reply{margin-top:12px;padding-left:12px;border-left:3px solid #dadce0;font-size:13px;color:#3c4043}
.gr-reply span{font-size:12px;color:#70757a}
.gr-reply b{color:#202124;font-weight:500}
.gr-reply p{margin:4px 0 0}
.gr-src{margin-top:14px;font-size:11px;color:#70757a}
@media (max-width:900px){
  .gr-card{flex-basis:86%}
  .gr-num{font-size:52px}
}
`;
