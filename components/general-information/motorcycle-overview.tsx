import { Blade250Viewer } from "@/components/three/blade-250-viewer";

export function MotorcycleOverview() {
  return (
    <section aria-labelledby="overview-title" className="border-b border-white/10 py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Interactive visual reference</p>
        <h2 id="overview-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Explore the Blade 250’s major exterior assemblies.</h2>
        <p className="mt-4 text-sm leading-6 text-white/55 sm:text-base">
          This procedural model is a visual learning aid based on the supplied manual’s exterior illustrations. It is intentionally separate from the manufacturer-sourced specification tables below.
        </p>
      </div>
      <div className="mt-8">
        <Blade250Viewer />
      </div>
    </section>
  );
}
