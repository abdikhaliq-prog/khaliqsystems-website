import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { LangSwitch } from "./LangSwitch";
import { LogoMark } from "./Logo";
import { cn } from "@/lib/utils";

type Item = { label: string; to?: string; hash?: string; href?: string };

// Testimonials and Blog are intentionally left out until real content exists.
// Automations, Digital and About stay reachable from the footer and homepage cards.
const links = (t: ReturnType<typeof useI18n>["t"]): Item[] => [
  { label: t.nav.industries, to: "/", hash: "setores" },
  { label: t.nav.features, to: "/", hash: "systems" },
  { label: t.nav.demos, to: "/", hash: "demos" },
  { label: t.nav.faq, to: "/", hash: "faq" },
  // Website examples and the website offer (Khaliq Digital).
  { label: t.nav.websites, to: "/digital" },
];

function NavItem({
  item,
  className,
  onClick,
}: {
  item: Item;
  className?: string;
  onClick?: () => void;
}) {
  if (item.href) {
    return (
      <a href={item.href} onClick={onClick} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.to!} hash={item.hash} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = links(t);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link to="/" className="group flex items-center gap-2.5">
          <LogoMark className="transition-transform duration-500 group-hover:scale-105" />
          <span className="font-display text-[0.95rem] font-medium tracking-tight">
            Khaliq Systems
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {items.map((l) => (
            <NavItem
              key={l.label}
              item={l}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-px"
          >
            <WhatsAppIcon className="size-4" />
            {t.cta.whatsapp}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full border border-hairline lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-background/95 px-5 pb-8 pt-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {items.map((l) => (
              <NavItem
                key={l.label}
                item={l}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-tight text-foreground"
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <LangSwitch compact />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground"
            >
              <WhatsAppIcon className="size-4" />
              {t.cta.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
