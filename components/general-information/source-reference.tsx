type SourceReferenceProps = {
  sourceDocument: string;
  manualPage: string;
};

export function SourceReference({ sourceDocument, manualPage }: SourceReferenceProps) {
  return (
    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.11em] text-white/38">
      {sourceDocument} <span className="mx-1 text-white/20">/</span> Original manual p. {manualPage}
    </p>
  );
}
