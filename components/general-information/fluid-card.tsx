import type { FluidRecommendation } from "@/content/general-information/types";

import { SourceReference } from "@/components/general-information/source-reference";

type FluidCardProps = {
  entry: FluidRecommendation;
};

const labels = {
  "manufacturer-recommendation": "Manufacturer recommendation",
  "handling-precaution": "Handling precaution",
  "general-information": "General information",
} as const;

export function FluidCard({ entry }: FluidCardProps) {
  const recommendation = entry.kind === "manufacturer-recommendation";

  return (
    <article className={`rounded-2xl border p-5 sm:p-6 ${recommendation ? "border-white/16 bg-white/[0.06]" : "border-white/10 bg-white/[0.025]"}`}>
      <p className={`text-[10px] font-bold uppercase tracking-[0.14em] ${recommendation ? "text-[#ff8c7a]" : "text-white/42"}`}>{labels[entry.kind]}</p>
      <h3 className="mt-4 text-lg font-semibold tracking-[-0.035em] text-white">{entry.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/52">{entry.description}</p>
      <p className="mt-5 text-sm font-medium leading-6 text-white/90">{entry.specification}</p>
      <SourceReference manualPage={entry.manualPage} sourceDocument={entry.sourceDocument} />
    </article>
  );
}
