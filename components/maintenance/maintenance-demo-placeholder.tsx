import type { MaintenanceDemo } from "@/content/maintenance/types";

type MaintenanceDemoPlaceholderProps = {
  demo: MaintenanceDemo;
};

export function MaintenanceDemoPlaceholder({ demo }: MaintenanceDemoPlaceholderProps) {
  return (
    <section aria-labelledby="future-demo-title" className="border-t border-white/10 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Future 3D demonstration</p>
          <h2 id="future-demo-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Ready for the verified asset.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">This model-free surface accepts an identified component, a camera preset, and a step sequence. It does not simulate mechanical work or show a fictional motorcycle.</p>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0e] p-5 sm:min-h-[340px] sm:p-6">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="relative flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            <span>GLB integration pending</span>
            <span>Camera: {demo.cameraPreset}</span>
          </div>
          <div className="relative mt-20 rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--accent)]">Component: {demo.componentId}</p>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {demo.stepLabels.map((step, index) => (
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm text-white/65" key={step}>
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/15 text-[10px] text-white/45">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
