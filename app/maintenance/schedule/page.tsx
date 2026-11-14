import { MaintenancePageShell } from "@/components/maintenance/maintenance-page-shell";
import { MaintenanceScheduleTable } from "@/components/maintenance/maintenance-schedule-table";
import { maintenanceSchedule } from "@/content/maintenance/schedule";

export default function MaintenanceSchedulePage() {
  return (
    <MaintenancePageShell
      eyebrow="Maintenance / schedule"
      intro="A centralized view of the maintenance intervals supported by the supplied manual. Select a task to open its source-linked service page."
      schedule
      title="Maintenance schedule"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <section aria-labelledby="schedule-title">
          <div className="grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Periodic maintenance</p>
              <h2 id="schedule-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Intervals without guesswork.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/55">The manual advises more frequent servicing for motorcycles used under severe conditions. Time-based brake-fluid and brake-hose replacements remain visible alongside kilometre intervals.</p>
          </div>
          <div className="mt-8">
            <MaintenanceScheduleTable entries={maintenanceSchedule} />
          </div>
        </section>
      </div>
    </MaintenancePageShell>
  );
}
