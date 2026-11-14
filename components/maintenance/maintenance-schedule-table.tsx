import Link from "next/link";

import { ManualReference } from "@/components/maintenance/manual-reference";
import { maintenanceRouteFor } from "@/content/maintenance/schedule";
import type { MaintenanceScheduleEntry } from "@/content/maintenance/types";

type MaintenanceScheduleTableProps = {
  entries: MaintenanceScheduleEntry[];
};

export function MaintenanceScheduleTable({ entries }: MaintenanceScheduleTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="hidden grid-cols-[0.8fr_1.15fr_0.9fr_1.15fr] gap-6 border-b border-white/10 bg-white/[0.035] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40 lg:grid">
        <span>Maintenance task</span>
        <span>Interval</span>
        <span>Required action</span>
        <span>Manual reference</span>
      </div>
      {entries.map((entry) => (
        <article className="grid gap-4 border-b border-white/10 bg-white/[0.02] px-5 py-5 last:border-0 lg:grid-cols-[0.8fr_1.15fr_0.9fr_1.15fr] lg:gap-6 lg:px-6" key={`${entry.task}-${entry.interval}`}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/35 lg:hidden">Maintenance task</p>
            <Link className="mt-1 inline-flex text-sm font-semibold text-white hover:text-[#ff8c7a]" href={maintenanceRouteFor(entry.topicId)}>{entry.task}</Link>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/35 lg:hidden">Interval</p>
            <p className="mt-1 text-sm leading-6 text-white/70">{entry.interval}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/35 lg:hidden">Required action</p>
            <p className="mt-1 text-sm leading-6 text-white/70">{entry.requiredAction}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/35 lg:hidden">Manual reference</p>
            <ManualReference reference={entry.source} />
          </div>
        </article>
      ))}
    </div>
  );
}
