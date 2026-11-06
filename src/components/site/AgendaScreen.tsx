import { useEffect, useState } from "react";
import { BellRing, Link2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// The clinic's view: its booking system's schedule. Fictional patients, one
// event type matching the clinic's real booking page ("Consulta Dental").
type Status = "past" | "cancelled" | "booked";
type Group = "yesterday" | "today" | "tomorrow";
type Appt = { group: Group; time: string; name: string; status: Status };

const APPOINTMENTS: Appt[] = [
  { group: "yesterday", time: "09:00", name: "Ana Ribeiro", status: "past" },
  { group: "yesterday", time: "15:30", name: "Marcos Lima", status: "cancelled" },
  { group: "today", time: "08:30", name: "Juliana Costa", status: "booked" },
  { group: "today", time: "11:00", name: "Carlos Mendes", status: "booked" },
  { group: "tomorrow", time: "09:30", name: "Pedro Almeida", status: "booked" },
];

const GROUPS: Group[] = ["yesterday", "today", "tomorrow"];
const UPCOMING = APPOINTMENTS.map((a, i) => ({ ...a, i })).filter((a) => a.status === "booked");
const CYCLE_MS = 3500;

const statusClass: Record<Status, string> = {
  past: "bg-[#EEF0EE] text-[#5B6B6A]",
  cancelled: "bg-[#FBEAE7] text-[#A2483A]",
  booked: "bg-[#E3F0EB] text-[#1D5C57]",
};

/** `newBooking` turns true only after the patient has confirmed on the booking page. */
export function AgendaScreen({ newBooking }: { newBooking: boolean }) {
  const { t } = useI18n();
  const a = t.chat.agenda;
  const [selected, setSelected] = useState(UPCOMING[0].i);

  useEffect(() => {
    if (newBooking) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let pos = 0;
    const id = window.setInterval(() => {
      pos = (pos + 1) % UPCOMING.length;
      setSelected(UPCOMING[pos].i);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [newBooking]);

  const sel = APPOINTMENTS[selected];
  const detail = newBooking
    ? { key: "new", name: a.newName, date: a.newDate, time: a.newTime }
    : { key: String(selected), name: sel.name, date: a.groups[sel.group], time: sel.time };

  return (
    <div className="flex min-h-0 w-full flex-col text-[1.15em]">
      {/* App bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-[#E7E9E6] px-[1em] py-[0.5em]">
        <div className="flex items-center gap-[0.5em]">
          <span className="flex size-[1.8em] items-center justify-center rounded-full bg-[#10292A] text-[0.66em] font-semibold text-white">
            KO
          </span>
          <div className="leading-tight">
            <p className="text-[0.6em] text-[#5B6B6A]">{a.clinic}</p>
            <p className="text-[0.85em] font-semibold">{a.title}</p>
          </div>
        </div>
        <span className="rounded-full bg-[#E3F0EB] px-[0.7em] py-[0.25em] text-[0.6em] font-medium text-[#1D5C57]">
          {a.todayCount}
        </span>
      </div>

      <div className="relative flex min-h-0 flex-1">
        {/* Appointment list by day */}
        <div className="min-w-0 flex-1 px-[0.8em] py-[0.5em]">
          {GROUPS.map((g) => (
            <div key={g} className="mb-[0.35em]">
              <p
                className={cn(
                  "text-[0.56em] font-semibold uppercase tracking-wide",
                  g === "today" ? "text-[#1D5C57]" : "text-[#5B6B6A]",
                )}
              >
                {a.groups[g]}
              </p>
              <ul className="mt-[0.15em] space-y-[0.15em]">
                {APPOINTMENTS.map((ap, i) =>
                  ap.group !== g ? null : (
                    <li
                      key={ap.name}
                      className={cn(
                        "flex items-center gap-[0.5em] rounded-[0.4em] border px-[0.45em] py-[0.28em] transition-colors duration-500",
                        !newBooking && i === selected
                          ? "border-[#1D5C57]/50 bg-[#F0F6F3]"
                          : "border-transparent",
                        ap.status !== "booked" && "opacity-70",
                      )}
                    >
                      <span className="w-[2.6em] shrink-0 text-[0.64em] font-semibold tabular-nums">
                        {ap.time}
                      </span>
                      <span
                        className={cn(
                          "min-w-0 flex-1 truncate text-[0.66em] font-medium",
                          ap.status === "cancelled" && "line-through",
                        )}
                      >
                        {ap.name}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-[0.6em] py-[0.12em] text-[0.52em] font-medium",
                          statusClass[ap.status],
                        )}
                      >
                        {a.status[ap.status]}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Booking details */}
        <div className="w-[42%] shrink-0 border-l border-[#E7E9E6] p-[0.8em]">
          <p className="text-[0.56em] font-semibold uppercase tracking-wide text-[#5B6B6A]">
            {a.details}
          </p>
          <div key={detail.key} className="msg-in mt-[0.4em]">
            <p className="flex items-center gap-[0.4em] text-[0.85em] font-semibold leading-tight">
              <span className="truncate">{detail.name}</span>
              {newBooking && (
                <span className="shrink-0 rounded-full bg-[#10292A] px-[0.5em] py-[0.05em] text-[0.6em] font-medium text-white">
                  {a.newBadge}
                </span>
              )}
            </p>
            <dl className="mt-[0.45em] space-y-[0.25em] text-[0.6em]">
              {(
                [
                  [a.fields.date, detail.date],
                  [a.fields.time, detail.time],
                  [a.fields.type, a.type],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-[0.5em]">
                  <dt className="text-[#5B6B6A]">{k}</dt>
                  <dd className="truncate font-medium">{v}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-[0.5em]">
                <dt className="text-[#5B6B6A]">{a.fields.status}</dt>
                <dd
                  className={cn(
                    "rounded-full px-[0.6em] py-[0.05em] font-medium",
                    statusClass.booked,
                  )}
                >
                  {a.status.booked}
                </dd>
              </div>
            </dl>
            <p className="mt-[0.55em] flex items-start gap-[0.3em] text-[0.54em] leading-snug text-[#5B6B6A]">
              <Link2 className="mt-[0.1em] size-[1.1em] shrink-0" />
              {a.source}
            </p>
          </div>
          {newBooking && (
            <div className="msg-in mt-[0.7em] flex items-center gap-[0.45em] rounded-[0.5em] bg-[#10292A] px-[0.7em] py-[0.4em] text-white shadow-[0_8px_20px_-8px_rgba(16,41,42,0.5)]">
              <BellRing className="size-[0.8em]" />
              <span className="text-[0.6em] font-medium">
                {a.newToast} · {a.newDate}, {a.newTime}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
