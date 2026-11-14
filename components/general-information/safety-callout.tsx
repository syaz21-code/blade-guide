import type { SafetyEntry } from "@/content/general-information/types";

import { SourceReference } from "@/components/general-information/source-reference";
import { Icon } from "@/components/ui/icon";

type SafetyCalloutProps = {
  entry: SafetyEntry;
};

const appearance = {
  warning: { label: "Warning", className: "border-[#df8179]/70 text-[#f1a29a]" },
  caution: { label: "Caution", className: "border-[#dbb46c]/70 text-[#e9c783]" },
  note: { label: "Note", className: "border-[#8fbdf2]/70 text-[#aacdf5]" },
} as const;

export function SafetyCallout({ entry }: SafetyCalloutProps) {
  const signal = appearance[entry.level];

  return (
    <article className={`border-l-2 bg-[var(--surface)] p-5 sm:p-6 ${signal.className}`}>
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
