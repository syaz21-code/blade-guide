import type { SpecificationGroup } from "@/content/general-information/types";

import { SourceReference } from "@/components/general-information/source-reference";

type SpecificationTableProps = {
  group: SpecificationGroup;
};

export function SpecificationTable({ group }: SpecificationTableProps) {
  return (
    <section aria-labelledby={`${group.id}-title`} className="scroll-mt-28 border-t border-white/10 py-12 sm:py-16">
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Reference group</p>
          <h2 id={`${group.id}-title`} className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{group.title}</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">{group.description}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
          <div className="hidden grid-cols-[0.8fr_1.2fr] gap-6 border-b border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:grid">
            <span>Item</span>
            <span>Specification</span>
          </div>
          {group.entries.map((entry) => (
            <article className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-0 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6 sm:px-6" key={entry.title}>
              <div>
                <h3 className="text-sm font-semibold text-white">{entry.title}</h3>
                <p className="mt-1 text-xs leading-5 text-white/43">{entry.description}</p>
              </div>
              <div>
                <p className="text-base font-medium tracking-[-0.02em] text-white/88">{entry.specification}</p>
                <SourceReference manualPage={entry.manualPage} sourceDocument={entry.sourceDocument} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
