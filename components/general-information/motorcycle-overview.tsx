import type { MotorcycleHotspot } from "@/content/general-information/types";

type MotorcycleOverviewProps = {
  hotspots: MotorcycleHotspot[];
};

export function MotorcycleOverview({ hotspots }: MotorcycleOverviewProps) {
  return (
    <section aria-labelledby="overview-title" className="border-b border-white/10 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Integration boundary</p>
          <h2 id="overview-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Motorcycle overview, ready for the real model.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">This is deliberately a model-free integration surface. The hotspot data and component anchors are in place for a future verified 3D asset; no motorcycle geometry is represented here.</p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0e] sm:min-h-[380px]">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">Future 3D canvas</div>
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            {hotspots.map((hotspot) => (
              <button
                aria-disabled="true"
                className="pointer-events-none rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/70"
                data-hotspot-id={hotspot.id}
                disabled
                key={hotspot.id}
                type="button"
              >
                {hotspot.label}
              </button>
            ))}
          </div>
          {hotspots.map((hotspot) => (
            <span
              aria-hidden="true"
              className="absolute grid h-6 w-6 place-items-center rounded-full border border-[#ff725c]/80 bg-[#ff725c]/15 text-[10px] font-semibold text-[#ff9b8c] shadow-[0_0_0_5px_rgba(255,114,92,0.08)]"
              key={hotspot.id}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              +
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
