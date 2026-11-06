import { Link } from "@tanstack/react-router";
import { useI18n, WHATSAPP_URL } from "@/lib/i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { LangSwitch } from "./LangSwitch";
import { Logo } from "./Logo";
import { Mail, Instagram } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-t">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.footer.location}</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <Link
              to="/automations"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Khaliq Automations
            </Link>
            <Link
              to="/digital"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Khaliq Digital
            </Link>
            <Link
              to="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.about}
            </Link>
            <a
              href="#contato-direto"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.contact}
            </a>
            <Link
              to="/privacidade"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Política de Privacidade
            </Link>
          </nav>

          <div className="flex flex-col items-start gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp
            </a>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> {t.footer.email}
            </a>
            <a
              href="https://www.instagram.com/khaliqsystems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" /> Instagram
            </a>
            <LangSwitch compact />
          </div>
        </div>

        <p className="hairline-t mt-12 pt-6 text-xs text-muted-foreground">
          © {year} Khaliq Systems. {t.footer.rights}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.footer.legal}</p>
      </div>
    </footer>
  );
}
