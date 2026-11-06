import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function FlagBR() {
  return (
    <svg viewBox="0 0 20 14" className="h-[11px] w-[16px] shrink-0 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#009C3B" />
      <path d="M10 1.6 18.2 7 10 12.4 1.8 7Z" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.3" fill="#002776" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg viewBox="0 0 20 14" className="h-[11px] w-[16px] shrink-0 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#FFFFFF" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1.08" fill="#B22234" />
      ))}
      <rect width="9" height="7.5" fill="#3C3B6E" />
    </svg>
  );
}

export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const option = (l: Lang, label: string, name: string, Flag: typeof FlagBR) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={name}
      title={name}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide transition-colors",
        lang === l ? "bg-surface-strong text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      <Flag />
      {label}
    </button>
  );
  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-hairline p-0.5",
        compact && "self-start",
      )}
    >
      {option("pt", "PT", "Português", FlagBR)}
      <span aria-hidden className="text-[10px] text-muted-foreground/50">
        |
      </span>
      {option("en", "EN", "English", FlagUS)}
    </div>
  );
}
