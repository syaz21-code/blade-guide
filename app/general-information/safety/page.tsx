import { ModulePageShell } from "@/components/general-information/module-page-shell";
import { SafetyCallout } from "@/components/general-information/safety-callout";
import { safetySections, safetySignalDefinitions } from "@/content/general-information/safety";

export default function SafetyPage() {
  return (
    <ModulePageShell
      currentPage="safety"
      eyebrow="General information / 02"
      intro="Read the original service-manual precautions before starting any work. The alerts below retain the manual's distinction between personal injury, vehicle damage, and helpful service information."
      title="Safety precautions"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <section aria-labelledby="signal-title">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Read the signals</p>
            <h2 id="signal-title" className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Different signals, different stakes.</h2>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {safetySignalDefinitions.map((entry) => (
              <SafetyCallout entry={entry} key={entry.title} />
            ))}
          </div>
        </section>

        <div className="mt-16 space-y-16 sm:mt-20">
          {safetySections.map((section) => (
            <section aria-labelledby={`${section.id}-title`} className="border-t border-white/10 pt-8 sm:pt-10" key={section.id}>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff725c]">Service safety</p>
                  <h2 id={`${section.id}-title`} className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">{section.title}</h2>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/35">{section.entries.length} source-linked notes</p>
              </div>
              <div className="mt-7 grid gap-3 lg:grid-cols-2">
                {section.entries.map((entry) => (
                  <SafetyCallout entry={entry} key={entry.title} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </ModulePageShell>
  );
}
