import Link from "next/link";

import { MaintenanceDemoPlaceholder } from "@/components/maintenance/maintenance-demo-placeholder";
import { ManualReference } from "@/components/maintenance/manual-reference";
import { MaintenancePageShell } from "@/components/maintenance/maintenance-page-shell";
import { maintenanceTopicById } from "@/content/maintenance/topics";
import type { MaintenanceTopicId } from "@/content/maintenance/types";

type MaintenanceTopicPageProps = {
  topicId: MaintenanceTopicId;
};

export function MaintenanceTopicPage({ topicId }: MaintenanceTopicPageProps) {
  const topic = maintenanceTopicById[topicId];
  const relatedTopics = topic.relatedTopicIds.map((relatedTopicId) => maintenanceTopicById[relatedTopicId]);

  return (
    <MaintenancePageShell activeTopicId={topic.id} eyebrow={`Maintenance / ${topic.indexLabel}`} intro={topic.overview.description} title={topic.title}>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <section aria-labelledby="overview-title" className="grid gap-8 border-b border-white/10 py-12 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Maintenance overview</p>
            <h2 id="overview-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">The source-linked essentials.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">{topic.whyImportant}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ff8c7a]">Maintenance interval</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{topic.interval.label}</p>
            <ManualReference reference={topic.interval.source} />
          </div>
        </section>

        <section aria-labelledby="tools-title" className="border-b border-white/10 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Preparation</p>
              <h2 id="tools-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Tools and materials.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">Required tools</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75">{topic.requiredTools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">Materials</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75">{topic.requiredMaterials.map((material) => <li key={material}>{material}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="specifications-title" className="border-b border-white/10 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Technical data</p>
              <h2 id="specifications-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Specifications at a glance.</h2>
            </div>
            <div className="grid gap-3">
              {topic.overview.technicalSpecifications.map((specification) => (
                <p className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-base font-medium text-white/88" key={specification}>{specification}</p>
              ))}
              <ManualReference reference={topic.overview.source} />
            </div>
          </div>
        </section>

        <section aria-labelledby="procedure-title" className="py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Service procedure</p>
          <h2 id="procedure-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Follow the original sequence.</h2>
          <div className="mt-8 grid gap-4">
            {topic.instructions.map((instruction, instructionIndex) => (
              <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7" key={instruction.title}>
                <div className="grid gap-6 lg:grid-cols-[0.46fr_1fr] lg:gap-10">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-white/35">STEP {String(instructionIndex + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-white">{instruction.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{instruction.description}</p>
                    <ManualReference reference={instruction.source} />
                  </div>
                  <div>
                    <ol className="space-y-3">
                      {instruction.procedure.map((step, stepIndex) => (
                        <li className="flex gap-3 text-sm leading-6 text-white/78" key={step}>
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-white/15 text-[10px] text-white/45">{stepIndex + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-black/15 p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#ff8c7a]">Technical specifications</p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">{instruction.technicalSpecifications.map((specification) => <li key={specification}>{specification}</li>)}</ul>
                      </div>
                      <div className="rounded-xl border border-[#ef604d]/25 bg-[#ef604d]/[0.07] p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#ff9383]">Safety precautions</p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">{instruction.safetyPrecautions.map((precaution) => <li key={precaution}>{precaution}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MaintenanceDemoPlaceholder demo={topic.demo} />

        <section aria-labelledby="related-title" className="border-t border-white/10 py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Related maintenance</p>
          <h2 id="related-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Continue through the system.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {relatedTopics.map((relatedTopic) => (
              <Link className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]" href={relatedTopic.route} key={relatedTopic.id}>
                <p className="text-xs font-semibold tracking-[0.14em] text-white/35">MAINTENANCE / {relatedTopic.indexLabel}</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">{relatedTopic.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/48">{relatedTopic.interval.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MaintenancePageShell>
  );
}
