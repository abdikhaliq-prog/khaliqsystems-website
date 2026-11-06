import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GoogleReviews, type GReview } from "@/components/demo/GoogleReviews";
import salonHero from "@/assets/sites/site-salon-1.webp";
import salon2 from "@/assets/sites/site-salon-2.webp";
import g1 from "@/assets/sites/site-salon-g1.webp";
import g2 from "@/assets/sites/site-salon-g2.webp";
import g3 from "@/assets/sites/site-salon-g3.webp";
import g4 from "@/assets/sites/site-salon-g4.webp";
import g6 from "@/assets/sites/site-salon-g6.webp";
import g7 from "@/assets/sites/site-salon-g7.webp";

// Sales demo for a prospective client (Kah Studio Brooklin). Hidden page: not in the
// menu, not indexed. Rating and reviews are the studio's real Google data; photos are
// illustrative and get replaced by the studio's own.

const TITLE = "Kah Studio Brooklin — prévia de site";
const WA =
  "https://wa.me/5511913038463?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";
const WA_PRICES =
  "https://wa.me/5511913038463?text=Ol%C3%A1!%20Queria%20saber%20os%20valores%20dos%20servi%C3%A7os.";
const WA_GLOW =
  "https://wa.me/5511913038463?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Glow%20da%20Noue.";
const GOOGLE =
  "https://www.google.com/maps/search/?api=1&query=Kah+Studio+Brooklin+Av.+Morumbi+8087";
const MAP =
  "https://www.google.com/maps?q=Kah+Studio+Brooklin,+Av.+Morumbi,+8087,+S%C3%A3o+Paulo&output=embed";

export const Route = createFileRoute("/demo/kah-studio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Prévia de site preparada pela Khaliq Systems." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Gloock&family=Figtree:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: KahStudioDemo,
});

const REVIEWS: GReview[] = [
  {
    name: "Ludimila Carolina",
    meta: "Local Guide · 22 avaliações · 28 fotos",
    when: "há 5 meses",
    text: "Comecei a ir ao Kah Studio procurando aqui no Google e lendo as avaliações e não estavam errados! Por isso, estou voltando para deixar a minha também. Os profissionais são muito competentes e super cordiais. O ambiente sempre muito… mais",
  },
  {
    name: "Vanessa Faria",
    meta: "3 avaliações · 1 foto",
    when: "há 5 meses",
    text: "Amooo o Studio Kah… aforo fazer unhas e cabelo e levar meu dog… programinha de 6a feira ❤️",
  },
  {
    name: "Renata Lutz",
    meta: "Local Guide · 22 avaliações · 76 fotos",
    when: "há 6 meses",
    text: "Ótima experiência! O ambiente é bonito e acolhedor, todos os profissionais são muito competentes e queridos. A qualidade dos serviços é sempre muito boa e o preço é justo!",
  },
];

const SERVICES = [
  {
    t: "Manicure e pedicure",
    d: "Cutilagem, esmaltação e acabamento caprichado.",
    c: "linear-gradient(160deg,#C2477D,#7C1F47)",
  },
  {
    t: "Esmaltação em gel",
    d: "Esmaltação em gel com brilho duradouro.",
    c: "linear-gradient(160deg,#F1C9D3,#C27C91)",
  },
  {
    t: "Glow da Noue",
    d: "Cobertura suave dos fios brancos, preservando a cor natural da raiz.",
    c: "linear-gradient(160deg,#E9D7B8,#B99A6E)",
  },
  {
    t: "Cabelo",
    d: "Cuidados e transformações para valorizar a sua beleza natural.",
    c: "linear-gradient(160deg,#D8C6E0,#8E739B)",
  },
];

const NAILS = [
  { cls: "n1", img: g1, label: "Unhas" },
  { cls: "n2", img: g4, label: "Cabelo" },
  { cls: "n3", img: salon2, label: "O studio" },
  { cls: "n4", img: g6, label: "Detalhes" },
  { cls: "n5", img: g3, label: "Ambiente" },
];

function WaIcon() {
  return (
    <svg className="wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  );
}

function KahStudioDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="kah">
      <style>{CSS}</style>

      <div className="demo">
        Prévia de site preparada pela Khaliq Systems para o Kah Studio Brooklin · fotos ilustrativas
      </div>

      <header className={scrolled ? "scrolled" : ""}>
        <div className="wrap bar">
          <a className="brand" href="#inicio">
            Kah Studio <small>Brooklin</small>
          </a>
          <nav className="links" aria-label="Seções">
            <a href="#servicos">Serviços</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#fotos">Fotos</a>
            <a href="#visite">Como chegar</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Agendar
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>Seu studio de beleza no Brooklin.</h1>
              <p className="sub">
                Unhas, cabelo e cuidado num espaço acolhedor, com profissionais atenciosas e um
                preço justo. Na Av. Morumbi, pertinho de você.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
                  <WaIcon /> Agendar pelo WhatsApp
                </a>
                <a className="btn btn-ghost" href="#visite">
                  Como chegar
                </a>
              </div>
              <a className="rating" href="#avaliacoes">
                <span className="score">4,9</span>
                <span>
                  <span className="stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <small>87 avaliações no Google</small>
                </span>
              </a>
            </div>
            <div className="hero-art">
              <div className="hand" role="img" aria-label="Fotos do studio em formato de unhas">
                {NAILS.map((n) => (
                  <div key={n.cls} className={`nail ${n.cls}`}>
                    <img src={n.img} alt="" loading="eager" />
                    <span>{n.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RIBBON */}
        <div className="ribbon" aria-hidden="true">
          <div className="ribbon-track">
            {[0, 1].map((k) => (
              <span key={k}>
                Manicure ✦ Pedicure ✦ Esmaltação em gel ✦ Glow da Noue ✦ Cabelo ✦ Av. Morumbi, 8087
                ✦ 4,9 no Google ✦&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="services" id="servicos">
          <div className="wrap">
            <div className="head">
              <h2>O que fazemos</h2>
              <p>Os serviços mais procurados no studio. Valores e horários pelo WhatsApp.</p>
            </div>
            <div className="svc">
              {SERVICES.map((s) => (
                <div className="svc-item" key={s.t}>
                  <span className="swatch" style={{ background: s.c }} />
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
              {[0, 1].map((k) => (
                <div className="svc-item todo" key={`todo-${k}`}>
                  <span className="swatch" style={{ background: "var(--mist)" }} />
                  <div>
                    <h3>Outro serviço</h3>
                    <p>Espaço para incluir mais um serviço do seu cardápio.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="svc-foot">
              <span>Dúvidas sobre qual serviço escolher? A equipe ajuda pelo WhatsApp.</span>
              <a
                className="btn btn-ghost btn-sm"
                href={WA_PRICES}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir valores
              </a>
            </div>
          </div>
        </section>

        {/* GLOW DA NOUE */}
        <section>
          <div className="wrap glow">
            <div className="glow-photo">
              <img src={salonHero} alt="" />
              <span className="badge">Foto ilustrativa</span>
            </div>
            <div>
              <h2>Glow da Noue</h2>
              <p className="owner">
                Cobertura suave dos fios brancos, preservando a cor natural da raiz. Ideal para quem
                busca um resultado elegante, natural e iluminado, sem alterar a tonalidade original
                dos cabelos. Um acabamento sofisticado para valorizar sua beleza natural.
              </p>
              <p className="src">Do Kah Studio, setembro de 2026</p>
              <a
                className="btn btn-primary"
                href={WA_GLOW}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero o Glow da Noue
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews" id="avaliacoes">
          <div className="wrap">
            <h2 className="rev-h">O que as clientes dizem</h2>
            <GoogleReviews reviews={REVIEWS} rating="4,9" count={87} mapsUrl={GOOGLE} />
          </div>
        </section>

        {/* GALLERY */}
        <section id="fotos">
          <div className="wrap">
            <div className="head">
              <h2>Por dentro do studio</h2>
              <p>Aqui entram as fotos do Kah Studio: trabalhos, equipe e ambiente.</p>
            </div>
            <div className="gallery">
              <figure className="g-wide">
                <img src={g2} alt="" />
              </figure>
              <figure className="g-tall">
                <img src={g7} alt="" />
              </figure>
              <figure>
                <img src={g1} alt="" />
              </figure>
              <figure className="slot">
                <span>
                  <b>Sua foto</b>A fachada
                </span>
              </figure>
              <figure className="g-wide">
                <img src={g3} alt="" />
              </figure>
              <figure className="slot">
                <span>
                  <b>Sua foto</b>A equipe
                </span>
              </figure>
              <figure>
                <img src={g6} alt="" />
              </figure>
              <figure className="g-wide">
                <img src={g4} alt="" />
              </figure>
            </div>
            <p className="note">Fotos ilustrativas, substituídas pelas fotos do seu espaço.</p>
          </div>
        </section>

        {/* VISIT */}
        <section id="visite" className="visit">
          <div className="wrap visit-grid">
            <div>
              <h2>Venha nos visitar</h2>
              <div className="facts">
                <div className="fact">
                  <h3>Endereço</h3>
                  <p>
                    Av. Morumbi, 8087 – Santo Amaro
                    <br />
                    São Paulo – SP, 04703-004
                  </p>
                </div>
                <div className="fact">
                  <h3>Horário</h3>
                  <p>Fecha às 19h</p>
                  <p className="todo">Horário completo da semana a confirmar</p>
                </div>
                <div className="fact">
                  <h3>Telefone e WhatsApp</h3>
                  <p>
                    <a href="tel:+5511913038463">(11) 91303-8463</a>
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">Ambiente acolhedor</span>
                  <span className="tag">LGBTQ+ friendly</span>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe
                title="Mapa: Kah Studio Brooklin, Av. Morumbi 8087"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP}
              />
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="wrap">
            <h2>Seu próximo horário está a uma mensagem.</h2>
            <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Agendar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap">
          <span>Kah Studio Brooklin, Av. Morumbi, 8087, São Paulo</span>
          <span>Prévia de site por Khaliq Systems</span>
        </div>
      </footer>

      <div className="sticky">
        <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">
          <WaIcon /> Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

const CSS = `
.kah{--porcelain:#F7F5F8;--mist:#ECE5EF;--ink:#2A1A2E;--muted:#6F6474;--berry:#9E2A5B;--berry-deep:#7C1F47;--glow:#E9D7B8;--line:#DDD3E1;
  --nail:50% 50% 22px 22px / 34% 34% 22px 22px;
  background:var(--porcelain);color:var(--ink);font-family:Figtree,system-ui,sans-serif;font-size:17px;line-height:1.6;min-height:100vh}
.kah *{box-sizing:border-box}
.kah img{max-width:100%;display:block}
.kah a{color:inherit}
.kah :focus-visible{outline:3px solid var(--berry);outline-offset:3px;border-radius:6px}
.kah .wrap{max-width:1160px;margin:0 auto;padding:0 20px}
.kah h1,.kah h2,.kah h3{font-family:Gloock,Georgia,serif;font-weight:400;line-height:1.05;margin:0;letter-spacing:-.01em}
.kah .demo{background:var(--ink);color:#EADFEE;font-size:13px;text-align:center;padding:7px 16px}
.kah header{position:sticky;top:0;z-index:20;background:color-mix(in oklab,var(--porcelain) 88%,transparent);backdrop-filter:saturate(1.4) blur(12px);border-bottom:1px solid transparent;transition:border-color .3s}
.kah header.scrolled{border-color:var(--line)}
.kah .bar{display:flex;align-items:center;justify-content:space-between;height:68px;gap:20px}
.kah .brand{font-family:Gloock,serif;font-size:24px;text-decoration:none;white-space:nowrap}
.kah .brand small{font-family:Figtree,sans-serif;font-size:13px;color:var(--muted);margin-left:6px}
.kah nav.links{display:flex;gap:28px;font-size:15px}
.kah nav.links a{text-decoration:none;color:var(--muted)}
.kah nav.links a:hover{color:var(--ink)}
.kah .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;padding:14px 24px;font-weight:600;font-size:16px;text-decoration:none;border:1.5px solid transparent;transition:transform .2s,background .2s}
.kah .btn:hover{transform:translateY(-1px)}
.kah .btn-primary{background:var(--berry);color:#fff}
.kah .btn-primary:hover{background:var(--berry-deep)}
.kah .btn-ghost{border-color:var(--ink);color:var(--ink)}
.kah .btn-light{border-color:#F3ECF5;color:#F3ECF5}
.kah .btn-sm{padding:10px 18px;font-size:15px}
.kah .wa{width:18px;height:18px;flex:none}

.kah .hero{padding:48px 0 64px}
.kah .hero-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center}
.kah .hero h1{font-size:clamp(46px,6.6vw,88px)}
.kah .hero .sub{font-size:19px;color:var(--muted);max-width:30em;margin:22px 0 30px}
.kah .cta{display:flex;flex-wrap:wrap;gap:12px}
.kah .rating{display:inline-flex;align-items:center;gap:12px;margin-top:34px;text-decoration:none}
.kah .score{font-family:Gloock,serif;font-size:40px;line-height:1}
.kah .stars{color:var(--berry);letter-spacing:2px;font-size:18px}
.kah .rating small{display:block;color:var(--muted);font-size:14px}

/* nails: photos inside lacquer-shaped frames, with a gloss that sweeps across */
.kah .hand{display:flex;align-items:flex-end;justify-content:center;gap:16px;height:470px}
.kah .nail{position:relative;flex:1;max-width:112px;border-radius:var(--nail);overflow:hidden;animation:kah-rise 1s cubic-bezier(.2,.8,.2,1) both;box-shadow:0 20px 40px -24px #7C1F4780}
.kah .nail img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:kah-zoom 14s ease-in-out infinite alternate}
.kah .nail::before{content:"";position:absolute;inset:0;z-index:1;background:var(--tint);mix-blend-mode:multiply;opacity:.55}
.kah .nail::after{content:"";position:absolute;z-index:2;top:-20%;left:-60%;width:40%;height:140%;background:linear-gradient(100deg,#fff0,#ffffff8c,#fff0);transform:skewX(-12deg);animation:kah-gloss 6s ease-in-out infinite;animation-delay:var(--d)}
.kah .nail span{position:absolute;z-index:3;inset:auto 0 16px;text-align:center;font-size:12px;color:#fff;font-weight:600;text-shadow:0 1px 6px #0006}
.kah .n1{height:70%;--tint:linear-gradient(160deg,#C2477D,#7C1F47);--d:1.2s;animation-delay:.05s}
.kah .n2{height:90%;--tint:linear-gradient(160deg,#E9D7B8,#B99A6E);--d:1.5s;animation-delay:.15s}
.kah .n3{height:100%;--tint:linear-gradient(160deg,#9E2A5B,#4A1430);--d:1.8s;animation-delay:.25s}
.kah .n4{height:94%;--tint:linear-gradient(160deg,#D8C6E0,#8E739B);--d:2.1s;animation-delay:.35s}
.kah .n5{height:76%;--tint:linear-gradient(160deg,#F1C9D3,#C27C91);--d:2.4s;animation-delay:.45s}
@keyframes kah-rise{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
@keyframes kah-zoom{from{transform:scale(1.05)}to{transform:scale(1.18)}}
@keyframes kah-gloss{0%,70%{left:-60%}100%{left:130%}}

.kah .ribbon{background:var(--berry);color:#fff;overflow:hidden;white-space:nowrap;padding:14px 0;font-family:Gloock,serif;font-size:22px}
.kah .ribbon-track{display:inline-flex;animation:kah-strip 32s linear infinite}
@keyframes kah-strip{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.kah section{padding:88px 0}
.kah .head{max-width:640px;margin-bottom:44px}
.kah .head h2,.kah .visit h2{font-size:clamp(36px,4.6vw,56px)}
.kah .head p{color:var(--muted);margin:14px 0 0}

.kah .services{background:#fff;border-bottom:1px solid var(--line)}
.kah .svc{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}
.kah .svc-item{padding:28px 28px 30px 0;border-bottom:1px solid var(--line);display:flex;gap:20px}
.kah .svc-item:nth-child(odd){border-right:1px solid var(--line)}
.kah .svc-item:nth-child(even){padding-left:28px}
.kah .swatch{flex:none;width:34px;height:48px;border-radius:var(--nail)}
.kah .svc-item h3{font-size:27px}
.kah .svc-item p{margin:6px 0 0;color:var(--muted);font-size:16px}
.kah .svc-item.todo h3{color:var(--muted)}
.kah .svc-foot{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-top:30px;color:var(--muted);font-size:15px}

.kah .glow{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center}
.kah .glow-photo{position:relative;aspect-ratio:4/5;overflow:hidden;border-radius:40% 40% 24px 24px / 30% 30% 24px 24px}
.kah .glow-photo img{width:100%;height:100%;object-fit:cover;animation:kah-zoom 16s ease-in-out infinite alternate}
.kah .badge{position:absolute;left:16px;bottom:16px;background:#fffc;border-radius:999px;padding:4px 12px;font-size:13px;color:var(--muted)}
.kah .glow h2{font-size:clamp(40px,5vw,64px)}
.kah .owner{font-size:20px;line-height:1.65;margin:20px 0 10px;max-width:34em}
.kah .src{color:var(--muted);font-size:14px;margin:0 0 28px}

.kah .reviews{background:var(--ink);color:#F3ECF5}
.kah .rev-h{font-size:clamp(36px,4.6vw,56px);color:var(--glow);margin-bottom:36px}

.kah .gallery{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:200px;grid-auto-flow:dense;gap:14px}
.kah .gallery figure{margin:0;border-radius:20px;overflow:hidden;background:var(--mist)}
.kah .gallery img{width:100%;height:100%;object-fit:cover;animation:kah-kb-a 18s ease-in-out infinite alternate}
.kah .gallery figure:nth-child(even) img{animation-name:kah-kb-b;animation-duration:22s}
@keyframes kah-kb-a{from{transform:scale(1.04) translate(0,0)}to{transform:scale(1.16) translate(-3%,-2%)}}
@keyframes kah-kb-b{from{transform:scale(1.16) translate(-3%,0)}to{transform:scale(1.04) translate(2%,2%)}}
.kah .g-tall{grid-row:span 2}
.kah .g-wide{grid-column:span 2}
.kah .slot{display:flex;align-items:center;justify-content:center;text-align:center;color:var(--muted);font-size:14px;background:repeating-linear-gradient(135deg,#0000 0 14px,#ffffff50 14px 15px),linear-gradient(160deg,var(--mist),#D9CBDF)!important}
.kah .slot b{display:block;color:var(--ink);font-weight:600}
.kah .note{color:var(--muted);font-size:14px;margin-top:14px}

.kah .visit{padding-top:0}
.kah .visit-grid{display:grid;grid-template-columns:1fr 1.25fr;gap:40px;align-items:stretch}
.kah .facts{display:grid;gap:22px;margin-top:32px}
.kah .fact h3{font-family:Figtree,sans-serif;font-weight:600;font-size:15px;color:var(--muted);margin-bottom:4px}
.kah .fact p{margin:0;font-size:18px}
.kah .fact .todo{color:var(--muted);font-style:italic;font-size:15px}
.kah .map{border-radius:28px;overflow:hidden;min-height:380px;background:var(--mist);border:1px solid var(--line)}
.kah .map iframe{width:100%;height:100%;min-height:380px;border:0;display:block}
.kah .tags{display:flex;gap:8px;flex-wrap:wrap}
.kah .tag{border:1px solid var(--line);border-radius:999px;padding:4px 12px;font-size:14px;background:#fff}

.kah .closing{text-align:center;padding:96px 0;background:var(--mist)}
.kah .closing h2{font-size:clamp(40px,6vw,76px);max-width:12em;margin:0 auto 28px}
.kah footer.site{border-top:1px solid var(--line);padding:28px 0 100px;color:var(--muted);font-size:14px}
.kah footer.site .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.kah .sticky{display:none}

@media (max-width:900px){
  .kah nav.links{display:none}
  .kah header .btn-sm{display:none}
  .kah .hero{padding:28px 0 48px}
  .kah .hero-grid,.kah .glow,.kah .visit-grid{grid-template-columns:1fr;gap:36px}
  .kah .hero-art{order:-1}
  .kah .hand{height:250px;gap:10px}
  .kah .nail span{font-size:10px;bottom:12px}
  .kah .ribbon{font-size:18px;padding:11px 0}
  .kah .svc{grid-template-columns:1fr}
  .kah .svc-item,.kah .svc-item:nth-child(even){padding:24px 0;border-right:0}
  .kah .gallery{grid-template-columns:repeat(2,1fr);grid-auto-rows:150px}
  .kah section{padding:64px 0}
  .kah .visit{padding-top:0}
  .kah .sticky{display:flex;position:fixed;left:12px;right:12px;bottom:12px;z-index:30}
  .kah .sticky .btn{flex:1;box-shadow:0 12px 30px -10px #7C1F4799}
}
@media (prefers-reduced-motion:reduce){
  .kah *{animation:none!important;transition:none!important}
}
`;
