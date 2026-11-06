import { useEffect, useState, type ReactNode } from "react";
import { Building2, CalendarDays, Check, Plane, ShoppingBag, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { PhoneMockup } from "./PhoneMockup";
import { LaptopFrame } from "./LaptopFrame";
import { AgendaScreen } from "./AgendaScreen";
import { FlowScreen, TableScreen, flowLength } from "./DemoScreens";

// Homepage hero: booking page (patient) · Sofia on WhatsApp · clinic schedule.
// The booking page loops on its own, non-stop, so visitors get the idea in seconds:
// 0 page opens · 1 days available · 2 Friday picked · 3 slot taken (every other loop)
// · 4 time picked · 5 confirmed.
// Step 3 mirrors the booking page refusing a time someone else just booked; it is the
// booking page speaking, not Sofia.
// The clinic schedule shows the new booking only at step 5, after the patient confirmed.
// The phone chat plays independently, in its real order.
type Step = 0 | 1 | 2 | 3 | 4 | 5;

// How long each step stays on screen (ms). One loop is about 10-12 s.
const STEP_MS: Record<Step, number> = { 0: 900, 1: 1400, 2: 1600, 3: 2400, 4: 1600, 5: 4500 };
const FRIDAY = 4;
const EIGHT = 0;
const NINE = 1;

function BookingScreen({ step, taken }: { step: Step; taken: boolean }) {
  const { t } = useI18n();
  const b = t.chat.booking;

  return (
    <>
      <div className="w-[46%] border-r border-[#E7E9E6] p-[1em]">
        <p className="text-[0.72em] text-[#5B6B6A]">{b.clinic}</p>
        <p className="mt-[0.3em] text-[1em] font-semibold leading-tight">{b.event}</p>
      </div>

      <div className="relative flex-1 p-[1em]">
        {step < 5 ? (
          <>
            <p className="flex items-center gap-[0.35em] text-[0.72em] font-semibold">
              <CalendarDays className="size-[1.1em] text-[#1D5C57]" />
              {b.pickDay}
            </p>
            <div className="mt-[0.5em] grid grid-cols-3 gap-[0.35em]">
              {b.days.map((d, i) => (
                <span
                  key={d}
                  className={cn(
                    "rounded-[0.4em] border py-[0.3em] text-center text-[0.68em] font-medium transition-colors duration-500",
                    step >= 2 && i === FRIDAY
                      ? "border-[#1D5C57] bg-[#1D5C57] text-white"
                      : step >= 1
                        ? "border-[#1D5C57]/40 bg-[#E8F1EE] text-[#1D5C57]"
                        : "border-[#E7E9E6] text-[#9AA5A4]",
                  )}
                >
                  {d}
                </span>
              ))}
            </div>

            <div
              className={cn(
                "mt-[0.7em] transition-opacity duration-500",
                step >= 2 ? "opacity-100" : "opacity-0",
              )}
            >
              <p className="text-[0.62em] text-[#5B6B6A]">{b.pickTime}</p>
              <div className="mt-[0.35em] grid grid-cols-2 gap-[0.35em]">
                {b.times.map((tm, i) => (
                  <span
                    key={tm}
                    className={cn(
                      "rounded-[0.4em] border py-[0.28em] text-center text-[0.68em] font-medium transition-colors duration-500",
                      step >= 4 && i === NINE
                        ? "border-[#1D5C57] bg-[#1D5C57] text-white"
                        : taken && step === 3 && i === EIGHT
                          ? "border-[#A2483A] bg-[#FBEAE7] text-[#A2483A]"
                          : taken && step >= 4 && i === EIGHT
                            ? "border-[#E7E9E6] bg-[#F2F3F1] text-[#9AA5A4] line-through"
                            : "border-[#1D5C57]/40 text-[#1D5C57]",
                    )}
                  >
                    {tm}
                  </span>
                ))}
              </div>
              {taken && step === 3 && (
                <p className="msg-in mt-[0.45em] rounded-[0.4em] bg-[#FBEAE7] px-[0.6em] py-[0.35em] text-[0.58em] font-medium leading-snug text-[#A2483A]">
                  {b.taken}
                </p>
              )}
              <span
                className={cn(
                  "mt-[0.5em] block rounded-[0.4em] py-[0.3em] text-center text-[0.68em] font-semibold transition-colors duration-500",
                  step >= 4 ? "bg-[#10292A] text-white" : "bg-[#E7E9E6] text-[#9AA5A4]",
                )}
              >
                {b.confirm}
              </span>
            </div>
          </>
        ) : (
          <div className="msg-in flex h-full flex-col items-center justify-center text-center">
            <span className="flex size-[2.2em] items-center justify-center rounded-full bg-[#1D5C57] text-white">
              <Check className="size-[1.2em]" />
            </span>
            <p className="mt-[0.6em] text-[0.82em] font-semibold leading-tight">{b.done}</p>
            <p className="mt-[0.3em] text-[0.68em] text-[#5B6B6A]">
              {b.doneWhen} · {b.patient}
            </p>
            <p className="mt-[0.15em] text-[0.62em] text-[#5B6B6A]">{b.clinic}</p>
          </div>
        )}
      </div>
    </>
  );
}

type Industry = "health" | "realEstate" | "travel" | "ecommerce";
const INDUSTRIES: Industry[] = ["health", "realEstate", "travel", "ecommerce"];
const ICONS: Record<Industry, LucideIcon> = {
  health: Stethoscope,
  realEstate: Building2,
  travel: Plane,
  ecommerce: ShoppingBag,
};

// Simulated demos: the transaction screen fills in, completes, then the record
// appears on the dashboard. Step durations (ms): pause, one per field, action, done.
function simDuration(step: number, fields: number) {
  if (step === 0) return 800;
  if (step <= fields) return 750;
  if (step === fields + 1) return 1300;
  return 4500;
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduce;
}

function HealthDemo() {
  const { t } = useI18n();
  const [step, setStep] = useState<Step>(0);
  // Every other loop the first time tried is already taken.
  const [taken, setTaken] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setStep(5);
      return;
    }
    const id = setTimeout(() => {
      if (step === 2) setStep(taken ? 3 : 4);
      else if (step === 5) {
        setTaken((v) => !v);
        setStep(0);
      } else setStep((step + 1) as Step);
    }, STEP_MS[step]);
    return () => clearTimeout(id);
  }, [step, taken, reduceMotion]);

  return (
    <Row
      left={
        <LaptopFrame tab={t.chat.booking.url} label={t.chat.booking.label}>
          <BookingScreen step={step} taken={taken} />
        </LaptopFrame>
      }
      phone={<PhoneMockup parallax={false} />}
      right={
        <LaptopFrame tab={t.chat.agenda.tab} label={t.chat.agenda.label}>
          <AgendaScreen newBooking={step === 5} />
        </LaptopFrame>
      }
    />
  );
}

function SimDemo({ industry }: { industry: Exclude<Industry, "health"> }) {
  const { t } = useI18n();
  const d = t.demos[industry];
  const total = flowLength(d.flow);
  const [step, setStep] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setStep(total - 1);
      return;
    }
    const id = setTimeout(
      () => setStep((s) => (s + 1) % total),
      simDuration(step, d.flow.fields.length),
    );
    return () => clearTimeout(id);
  }, [step, total, reduceMotion, d.flow.fields.length]);

  return (
    <Row
      left={
        <LaptopFrame tab={d.flow.tab} label={d.flow.label}>
          <FlowScreen flow={d.flow} step={step} />
        </LaptopFrame>
      }
      phone={<PhoneMockup parallax={false} chat={d.chat} />}
      right={
        <LaptopFrame tab={d.table.tab} label={d.table.label}>
          <TableScreen table={d.table} showNew={step === total - 1} />
        </LaptopFrame>
      }
    />
  );
}

function Row({ left, phone, right }: { left: ReactNode; phone: ReactNode; right: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col items-center gap-10 lg:max-w-none lg:flex-row lg:items-center lg:gap-0">
      {/* Transaction screen */}
      <div className="w-full lg:w-[39%]">{left}</div>
      {/* Conversation: first on mobile, in front between the laptops on desktop */}
      <div className="relative z-10 order-first w-full max-w-[320px] lg:order-none lg:-mx-[0.6%] lg:w-[24%]">
        {phone}
      </div>
      {/* Business dashboard */}
      <div className="w-full lg:w-[39%]">{right}</div>
    </div>
  );
}

export function HeroDevices() {
  const { t, lang } = useI18n();
  const [industry, setIndustry] = useState<Industry>("health");

  return (
    <div id="demos" className="scroll-mt-24">
      <div className="mb-8 flex flex-col items-center gap-3 lg:mb-6 lg:gap-2">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
          <p className="text-sm text-muted-foreground">{t.demos.pick}</p>
          <div
            role="group"
            aria-label={t.demos.pick}
            className="flex flex-wrap justify-center gap-2"
          >
            {INDUSTRIES.map((key) => {
              const Icon = ICONS[key];
              const active = key === industry;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setIndustry(key);
                    track("demo_industry", { industry: key });
                  }}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-300",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-hairline text-muted-foreground hover:bg-surface hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  {t.demos.tabs[key]}
                </button>
              );
            })}
          </div>
        </div>
        <p
          className={cn(
            "max-w-2xl text-center text-xs leading-relaxed",
            industry === "health" ? "text-muted-foreground/70" : "font-medium text-[#8A5A12]",
          )}
        >
          {industry === "health" ? t.demos.realNotice : t.demos.simNotice}
        </p>
      </div>

      {/* Remount on industry or language change so every screen restarts together */}
      {industry === "health" ? (
        <HealthDemo key={`health-${lang}`} />
      ) : (
        <SimDemo key={`${industry}-${lang}`} industry={industry} />
      )}
    </div>
  );
}
