export type SourceBoundEntry = {
  title: string;
  description: string;
  specification: string;
  sourceDocument: string;
  manualPage: string;
};

export type SpecificationGroup = {
  id: string;
  title: string;
  description: string;
  entries: SourceBoundEntry[];
};

export type SafetyLevel = "warning" | "caution" | "note";

export type SafetyEntry = SourceBoundEntry & {
  level: SafetyLevel;
  category: "general" | "components" | "electrical" | "environment";
};

export type FluidRecommendation = SourceBoundEntry & {
  kind: "manufacturer-recommendation" | "handling-precaution" | "general-information";
};

export const manualSource = "HYOSUNG Service Manual";
