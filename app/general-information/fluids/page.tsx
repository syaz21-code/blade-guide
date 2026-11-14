import { FluidCard } from "@/components/general-information/fluid-card";
import { ModulePageShell } from "@/components/general-information/module-page-shell";
import {
  brakeFluidRecommendations,
  engineOilRecommendations,
  frontForkOilRecommendations,
  fuelRecommendations,
} from "@/content/general-information/fluids";
import type { FluidRecommendation } from "@/content/general-information/types";

type FluidSection = {
  id: string;
  title: string;
  description: string;
  entries: FluidRecommendation[];
};

const fluidSections: FluidSection[] = [
  { id: "fuel", title: "Fuel", description: "Fuel guidance stated in the General Information chapter.", entries: fuelRecommendations },
  { id: "engine-oil", title: "Engine oil", description: "The manual's listed quality and viscosity guidance.", entries: engineOilRecommendations },
  { id: "brake-fluid", title: "Brake fluid", description: "Required classification and handling restrictions for the brake system.", entries: brakeFluidRecommendations },
  { id: "front-fork-oil", title: "Front fork oil", description: "Named front-fork oil in the supplied manual.", entries: frontForkOilRecommendations },
];

export default function FluidsPage() {
  return (
    <ModulePageShell
      currentPage="fluids"
      eyebrow="General information / 03"
      intro="Manufacturer recommendations are separated from handling precautions and general explanatory information, so a manual requirement is easy to distinguish at a glance."
      title="Fuel & oil recommendations"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <section aria-label="Fluid recommendation key" className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ff8c7a]">How to read this page</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">Manufacturer recommendations are highlighted. Handling precautions preserve the manual's storage, compatibility, and contamination guidance.</p>
          </div>
          <p className="mt-4 shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-white/35 sm:mt-0">Source chapter 1 / p. 1-4</p>
        </section>

        <div className="mt-14 space-y-16 sm:mt-20">
          {fluidSections.map((section) => (
            <section aria-labelledby={`${section.id}-title`} className="border-t border-white/10 pt-8 sm:pt-10" key={section.id}>
              <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Fluid reference</p>
                  <h2 id={`${section.id}-title`} className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{section.title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">{section.description}</p>
                </div>
                <div className="grid gap-3">
                  {section.entries.map((entry) => (
                    <FluidCard entry={entry} key={entry.title} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </ModulePageShell>
  );
}
