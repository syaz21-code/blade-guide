import { MotorcycleOverview } from "@/components/general-information/motorcycle-overview";
import { ModulePageShell } from "@/components/general-information/module-page-shell";
import { SpecificationTable } from "@/components/general-information/specification-table";
import { specificationGroups } from "@/content/general-information/specifications";

export default function SpecificationsPage() {
  return (
    <ModulePageShell
      currentPage="specifications"
      eyebrow="General information / 01"
      intro="A source-linked reference of the Comet 250 column in the supplied service manual, presented as the Blade 250 reference profile. Every listed value retains its original manual page."
      title="Specifications"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <MotorcycleOverview />

        <section aria-label="Specification reference" className="py-2">
          {specificationGroups.map((group) => (
            <SpecificationTable group={group} key={group.id} />
          ))}
        </section>

        <p className="pb-14 text-xs leading-5 text-white/40 sm:pb-20">The source manual notes that specifications are subject to change without notice. Values not clearly readable in the supplied Comet 250 table have not been added.</p>
      </div>
    </ModulePageShell>
  );
}
