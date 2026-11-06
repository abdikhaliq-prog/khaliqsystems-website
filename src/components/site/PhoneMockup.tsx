import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  parallax = true,
  scrollDriven = false,
  onVisibleChange,
  chat: chatOverride,
}: {
  parallax?: boolean;
  scrollDriven?: boolean;
  onVisibleChange?: (visible: number) => void;
  /** Another conversation (simulated industry demos). Defaults to Sofia's real transcript. */
  chat?: {
    header: string;
    status: string;
    typing: string;
    demoLabel: string;
    messages: readonly { from: string; time: string; text: string }[];
  };
}) {
  const { t, lang } = useI18n();
  const chat = chatOverride ?? t.chat;
  const messages = chat.messages;
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(true);
  const [offset, setOffset] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, typing, lang]);

  useEffect(() => {
    onVisibleChange?.(visible);
  }, [visible, onVisibleChange]);


  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!reduceMotion) return;
    setVisible(messages.length);
    setTyping(false);
  }, [reduceMotion, messages.length]);

  useEffect(() => {
    setVisible(reduceMotion ? messages.length : 0);
    setTyping(!reduceMotion);
  }, [lang, reduceMotion, messages.length]);

  // Subtle parallax on the whole device.
  useEffect(() => {
    if (!parallax || reduceMotion) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(Math.max(-28, Math.min(28, (-center / window.innerHeight) * 42)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [parallax, reduceMotion]);

  // Conversation advances with scroll progress through the section.
  useEffect(() => {
    if (!scrollDriven || reduceMotion) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = 1 - (rect.top + rect.height * 0.15) / window.innerHeight;
        const step = Math.round(progress * (messages.length + 1));
        setVisible(Math.max(0, Math.min(messages.length, step)));
        setTyping(true);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scrollDriven, messages.length, reduceMotion]);

  // Timed playback for the hero device.
  useEffect(() => {
    if (scrollDriven || reduceMotion) return;
    if (visible >= messages.length) {
      const reset = setTimeout(() => {
        setVisible(0);
        setTyping(true);
      }, 6000);
      return () => clearTimeout(reset);
    }
    const isThem = messages[visible].from === "them";
    const delay = isThem ? 1800 : 2200;
    const show = setTimeout(() => {
      setVisible((v) => v + 1);
      setTyping(true);
    }, delay);
    return () => clearTimeout(show);
  }, [visible, messages, scrollDriven, reduceMotion]);

  const showTyping = typing && visible < messages.length && messages[visible].from === "us";

  const renderText = (text: string) =>
    text.split(/(https?:\/\/\S+)/g).map((part, i) =>
      /^https?:\/\//.test(part) ? (
        <span key={i} className="break-all font-medium text-[#027EB5] underline underline-offset-2">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );


  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[320px]">
      <div
        style={parallax ? { transform: `translate3d(0, ${offset}px, 0)` } : undefined}
        className="rounded-[2.75rem] bg-[#10292A] p-2.5 shadow-[0_30px_60px_-30px_rgba(16,41,42,0.35)] transition-transform duration-100 ease-linear"
      >
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#EFEAE2]">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#10292A]" />

          <div className="flex items-center gap-3 bg-[#F0F2F5] px-4 pb-3 pt-11">
            <span className="flex size-9 items-center justify-center rounded-full bg-[#E5E7EB] font-display text-sm text-[#10292A]">
              {chat.header.charAt(0)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.8rem] font-medium text-[#111B21]">{chat.header}</p>
              <p className={cn("text-[0.68rem]", showTyping ? "text-[#1D5C57]" : "text-[#667781]")}>
                {showTyping ? chat.typing : chat.status}
              </p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex h-[400px] flex-col justify-end gap-2 overflow-y-auto scroll-smooth bg-[#EFEAE2] px-3.5 pb-5 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {messages.slice(0, visible).map((m, i) => (
              <div
                key={`${lang}-${i}`}
                className={cn(
                  "msg-in max-w-[86%] shrink-0 whitespace-pre-line break-words rounded-lg px-2.5 pb-1.5 pt-2 text-[0.8rem] leading-relaxed text-[#111B21] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]",
                  m.from === "us"
                    ? "self-start rounded-tl-sm bg-[#FFFFFF]"
                    : "self-end rounded-tr-sm bg-[#D9FDD3]",
                )}
              >
                <span>{renderText(m.text)}</span>
                <span className="ml-2 inline-flex translate-y-0.5 items-center gap-0.5 whitespace-nowrap text-[0.65rem] text-[#667781]">
                  {m.time}
                  {m.from === "them" && <span className="text-[#53BDEB]">✓✓</span>}
                </span>
              </div>
            ))}

            {showTyping && (
              <div className="self-start rounded-lg rounded-tl-sm bg-[#FFFFFF] px-4 py-3 shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
                <span className="flex items-center gap-1">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{ animationDelay: `${d * 160}ms` }}
                      className="typing-dot size-1.5 rounded-full bg-[#8696A0]"
                    />
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-[0.75rem] leading-relaxed text-muted-foreground/70">
        {chat.demoLabel}
      </p>
    </div>
  );
}
