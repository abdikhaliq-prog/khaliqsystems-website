import type { ReactNode } from "react";

// Shared laptop shell for the homepage illustrations. The screen is a size
// container, so everything inside is sized in em off a cqw base and scales
// with the laptop.
export function LaptopFrame({
  tab,
  label,
  children,
}: {
  tab: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full">
      <div aria-hidden="true">
        <div className="rounded-t-[0.9rem] bg-[#10292A] p-[1.6%] shadow-[0_30px_60px_-30px_rgba(16,41,42,0.35)]">
          <div className="@container aspect-[16/10] overflow-hidden rounded-t-[0.5rem] bg-[#FBFBF9]">
            <div className="flex h-full flex-col text-[max(3.1cqw,10px)] text-[#10292A]">
              <div className="flex h-[9%] shrink-0 items-center gap-[0.4em] border-b border-[#E7E9E6] bg-[#F2F3F1] px-[0.8em]">
                {["#E8B4A8", "#E9D3A0", "#B7D3B0"].map((c) => (
                  <span key={c} className="size-[0.5em] rounded-full" style={{ background: c }} />
                ))}
                <span className="ml-[0.6em] truncate rounded-full bg-white px-[0.8em] py-[0.15em] text-[0.7em] text-[#5B6B6A]">
                  {tab}
                </span>
              </div>
              <div className="relative flex min-h-0 flex-1">{children}</div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-[0.6rem] w-[106%] -translate-x-[3%] rounded-b-xl bg-[#284345] shadow-[0_10px_20px_-12px_rgba(16,41,42,0.4)]" />
      </div>
      <p className="mt-3 text-center text-[0.75rem] leading-relaxed text-muted-foreground/70">
        {label}
      </p>
    </div>
  );
}
