import type { SafetyEntry } from "@/content/general-information/types";

import { SourceReference } from "@/components/general-information/source-reference";
import { Icon } from "@/components/ui/icon";

type SafetyCalloutProps = {
  entry: SafetyEntry;
};

const appearance = {
  warning: { label: "Warning", className: "border-[#ef604d]/35 bg-[#ef604d]/[0.09] text-[#ff9383]" },
  caution: { label: "Caution", className: "border-[#e7a740]/35 bg-[#e7a740]/[0.09] text-[#f6c873]" },
  note: { label: "Note", className: "border-[#70a5d9]/35 bg-[#70a5d9]/[0.09] text-[#a8cdf4]" },
} as const;

export function SafetyCallout({ entry }: SafetyCalloutProps) {
  const signal = appearance[entry.level];

  return (
    <article className={`rounded-2xl border p-5 sm:p-6 ${signal.className}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current/25 bg-black/10">
          <Icon className="h-4 w-4" name={entry.level === "note" ? "info" : "alert"} />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em]">{signal.label}</p>
          <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-white">{entry.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/56">{entry.description}</p>
          <p className="mt-4 text-sm leading-6 text-white/85">{entry.specification}</p>
          <SourceReference manualPage={entry.manualPage} sourceDocument={entry.sourceDocument} />
        </div>
      </div>
    </article>
  );
}
