import markUrl from "@/assets/khaliq-mark.png";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={markUrl}
      alt="Khaliq Systems"
      width={40}
      height={40}
      loading="eager"
      decoding="async"
      className={cn("size-8 object-contain", className)}
    />
  );
}

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className={cn("font-display text-[0.95rem] font-medium tracking-tight", textClassName)}>
        Khaliq Systems
      </span>
    </span>
  );
}
