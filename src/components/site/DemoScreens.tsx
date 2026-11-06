import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Screens for the simulated industry demos (real estate, travel, e-commerce).
// All data is fictional and labelled as such where these screens are used.

type Flow = {
  org: string;
  title: string;
  fields: readonly (readonly string[])[];
  action: string;
  doneTitle: string;
  doneLines: readonly string[];
};

/** Steps: 0 … fields.length reveal fields one by one, +1 action ready, +2 done. */
export function flowLength(flow: Flow) {
  return flow.fields.length + 3;
}

export function FlowScreen({ flow, step }: { flow: Flow; step: number }) {
  const n = flow.fields.length;
  const done = step >= n + 2;

  return (
    <>
      <div className="w-[40%] border-r border-[#E7E9E6] p-[1em]">
        <p className="text-[0.72em] text-[#5B6B6A]">{flow.org}</p>
        <p className="mt-[0.3em] text-[1em] font-semibold leading-tight">{flow.title}</p>
      </div>

      <div className="relative flex-1 p-[1em]">
        {!done ? (
          <>
            <dl className="space-y-[0.35em]">
              {flow.fields.map(([k, v], i) => (
                <div
                  key={k}
                  className={cn(
                    "rounded-[0.4em] border px-[0.6em] py-[0.3em] transition-all duration-500",
                    i < step
                      ? "border-[#1D5C57]/40 bg-[#F0F6F3] opacity-100"
                      : "border-[#E7E9E6] opacity-40",
                  )}
                >
                  <dt className="text-[0.52em] uppercase tracking-wide text-[#5B6B6A]">{k}</dt>
                  <dd className="truncate text-[0.68em] font-medium">{i < step ? v : "—"}</dd>
                </div>
              ))}
            </dl>
            <span
              className={cn(
                "mt-[0.5em] block rounded-[0.4em] py-[0.3em] text-center text-[0.68em] font-semibold transition-colors duration-500",
                step >= n + 1 ? "bg-[#10292A] text-white" : "bg-[#E7E9E6] text-[#9AA5A4]",
              )}
            >
              {flow.action}
            </span>
          </>
        ) : (
          <div className="msg-in flex h-full flex-col items-center justify-center text-center">
            <span className="flex size-[2.2em] items-center justify-center rounded-full bg-[#1D5C57] text-white">
              <Check className="size-[1.2em]" />
            </span>
            <p className="mt-[0.6em] text-[0.82em] font-semibold leading-tight">{flow.doneTitle}</p>
            {flow.doneLines.map((l) => (
              <p key={l} className="mt-[0.2em] text-[0.64em] text-[#5B6B6A]">
                {l}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

type Row = { cells: readonly string[]; status: string; tone: string };
type Table = {
  org: string;
  title: string;
  badge: string;
  columns: readonly string[];
  statusCol: string;
  newRow: Row;
  rows: readonly Row[];
  newBadge: string;
  toast: string;
};

const TONE: Record<string, string> = {
  new: "bg-[#10292A] text-white",
  ok: "bg-[#E3F0EB] text-[#1D5C57]",
  pending: "bg-[#FBF1DE] text-[#8A5A12]",
  done: "bg-[#EEF0EE] text-[#5B6B6A]",
  cancel: "bg-[#FBEAE7] text-[#A2483A]",
};

const GRID = "1.05fr 1.35fr 0.85fr 0.95fr 1.05fr";

/** `showNew` turns true only once the transaction on the other screen has completed. */
export function TableScreen({ table, showNew }: { table: Table; showNew: boolean }) {
  const rows = showNew ? [table.newRow, ...table.rows] : table.rows;

  return (
    <div className="flex min-h-0 w-full flex-col">
      <div className="flex shrink-0 items-center justify-between border-b border-[#E7E9E6] px-[1em] py-[0.5em]">
        <div className="leading-tight">
          <p className="text-[0.6em] text-[#5B6B6A]">{table.org}</p>
          <p className="text-[0.9em] font-semibold">{table.title}</p>
        </div>
        <span className="rounded-full bg-[#E3F0EB] px-[0.7em] py-[0.25em] text-[0.6em] font-medium text-[#1D5C57]">
          {table.badge}
        </span>
      </div>

      <div className="relative min-h-0 flex-1 px-[0.8em] py-[0.5em]">
        <div
          className="grid gap-x-[0.5em] border-b border-[#E7E9E6] pb-[0.3em] text-[0.52em] font-semibold uppercase tracking-wide text-[#5B6B6A]"
          style={{ gridTemplateColumns: GRID }}
        >
          {[...table.columns, table.statusCol].map((c) => (
            <span key={c} className="truncate">
              {c}
            </span>
          ))}
        </div>
        <ul className="mt-[0.2em] space-y-[0.1em]">
          {rows.map((r, i) => {
            const isNew = showNew && i === 0;
            return (
              <li
                key={r.cells[0]}
                className={cn(
                  "msg-in grid items-center gap-x-[0.5em] rounded-[0.4em] border px-[0.1em] py-[0.32em] text-[0.62em]",
                  isNew ? "border-[#1D5C57]/50 bg-[#F0F6F3]" : "border-transparent",
                  r.tone === "cancel" && "opacity-70",
                )}
                style={{ gridTemplateColumns: GRID }}
              >
                {r.cells.map((cell, j) => (
                  <span key={j} className={cn("truncate", j === 0 && "font-semibold")}>
                    {cell}
                  </span>
                ))}
                <span
                  className={cn(
                    "max-w-full justify-self-start truncate rounded-full px-[0.6em] py-[0.1em] text-[0.88em] font-medium",
                    TONE[isNew ? "new" : r.tone] ?? TONE.ok,
                  )}
                >
                  {r.status}
                </span>
              </li>
            );
          })}
        </ul>

        {showNew && (
          <div className="msg-in absolute bottom-[0.6em] left-[0.8em] flex max-w-[calc(100%-1.6em)] items-center gap-[0.45em] rounded-[0.5em] bg-[#10292A] px-[0.7em] py-[0.4em] text-white shadow-[0_8px_20px_-8px_rgba(16,41,42,0.5)]">
            <BellRing className="size-[0.8em]" />
            <span className="truncate text-[0.6em] font-medium">{table.toast}</span>
          </div>
        )}
      </div>
    </div>
  );
}
