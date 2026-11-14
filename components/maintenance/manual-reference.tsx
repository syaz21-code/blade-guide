import type { ManualReference } from "@/content/maintenance/types";

type ManualReferenceProps = {
  reference: ManualReference;
};

export function ManualReference({ reference }: ManualReferenceProps) {
  return (
    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.11em] text-white/38">
      {reference.sourceDocument} <span className="mx-1 text-white/20">/</span> Printed p. {reference.printedPage} <span className="mx-1 text-white/20">/</span> PDF p. {reference.pdfPage}
    </p>
  );
}
