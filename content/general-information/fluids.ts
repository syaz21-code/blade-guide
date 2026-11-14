import type { FluidRecommendation } from "@/content/general-information/types";
import { manualSource } from "@/content/general-information/types";

export const fuelRecommendations: FluidRecommendation[] = [
  {
    title: "Fuel grade",
    description: "Manufacturer recommendation for gasoline used in this reference profile.",
    specification: "85-95 octane (Research Method) or higher. Unleaded gasoline is recommended.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "manufacturer-recommendation",
  },
];

export const engineOilRecommendations: FluidRecommendation[] = [
  {
    title: "Classification",
    description: "Minimum engine-oil classification stated in the manual.",
    specification: "API classification SG or higher.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "manufacturer-recommendation",
  },
  {
    title: "Viscosity",
    description: "Listed oil viscosity grades.",
    specification: "SAE 10W/30 or SAE 10W/40.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "manufacturer-recommendation",
  },
  {
    title: "Oil quality",
    description: "The manual's product-quality guidance.",
    specification: "Use a premium-quality four-stroke motor oil to support service life.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "general-information",
  },
];

export const brakeFluidRecommendations: FluidRecommendation[] = [
  {
    title: "Specification and classification",
    description: "Manufacturer brake-fluid specification.",
    specification: "DOT 3 or DOT 4.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "manufacturer-recommendation",
  },
  {
    title: "Fluid compatibility",
    description: "The brake system uses glycol-based brake fluid.",
    specification: "Do not use or mix silicone-based or petroleum-based fluids when refilling the system.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "handling-precaution",
  },
  {
    title: "Container condition",
    description: "Brake fluid degrades when reused or improperly stored.",
    specification: "Do not use fluid from old, used, or unsealed containers. Do not reuse fluid left over from previous service and stored for a long period.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "handling-precaution",
  },
];

export const frontForkOilRecommendations: FluidRecommendation[] = [
  {
    title: "Specified front fork oil",
    description: "The named front fork oil in the General Information recommendation.",
    specification: "TELLUS.",
    sourceDocument: manualSource,
    manualPage: "1-4",
    kind: "manufacturer-recommendation",
  },
];
