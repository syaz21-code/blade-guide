export type MotorcycleComponentId =
  | "engine"
  | "front-wheel"
  | "rear-wheel"
  | "front-brake"
  | "rear-brake"
  | "handlebar"
  | "fuel-tank"
  | "exhaust"
  | "front-suspension"
  | "rear-suspension";

type Vector3 = [number, number, number];

export type MotorcycleComponent = {
  id: MotorcycleComponentId;
  label: string;
  description: string;
  manualReference: string;
  relatedHref: string;
  relatedLabel: string;
  camera: {
    position: Vector3;
    target: Vector3;
  };
  explodedOffset: Vector3;
};

export const blade250Components: MotorcycleComponent[] = [
  {
    id: "engine",
    label: "Engine exterior",
    description: "A simplified visual grouping of the V-twin engine exterior, intended to orient the reader before following the source-linked maintenance guidance.",
    manualReference: "HYOSUNG Service Manual, Comet 250 exterior and specification references: pp. 1-6 to 1-9.",
    relatedHref: "/maintenance/engine-oil",
    relatedLabel: "Open engine oil service",
    camera: { position: [3.7, 1.9, 4.3], target: [-0.1, 1.05, 0] },
    explodedOffset: [0, -0.08, 0.86],
  },
  {
    id: "front-wheel",
    label: "Front wheel",
    description: "A visual assembly of the tyre, rim and hub. Select it to isolate the front-wheel group or spread it from the chassis for orientation.",
    manualReference: "HYOSUNG Service Manual, exterior illustration and Comet 250 chassis specification reference: pp. 1-7 to 1-9.",
    relatedHref: "/maintenance/tyres",
    relatedLabel: "Open tyre service",
    camera: { position: [3.3, 1.15, 3.8], target: [1.4, 0.58, 0] },
    explodedOffset: [0.7, -0.08, 0],
  },
  {
    id: "rear-wheel",
    label: "Rear wheel",
    description: "A visual assembly of the tyre, rim and hub. Its geometry is illustrative, not a replacement for workshop measurements or fitment checks.",
    manualReference: "HYOSUNG Service Manual, exterior illustration and Comet 250 chassis specification reference: pp. 1-7 to 1-9.",
    relatedHref: "/maintenance/tyres",
    relatedLabel: "Open tyre service",
    camera: { position: [-3.5, 1.1, 3.8], target: [-1.42, 0.58, 0] },
    explodedOffset: [-0.72, -0.08, 0],
  },
  {
    id: "front-brake",
    label: "Front brake",
    description: "A simplified disc and caliper representation that identifies the front braking assembly in the visual overview.",
    manualReference: "HYOSUNG Service Manual, Comet 250 chassis specification reference: p. 1-9.",
    relatedHref: "/maintenance/brakes",
    relatedLabel: "Open brake service",
    camera: { position: [3, 1.25, 4.2], target: [1.4, 0.6, 0.12] },
    explodedOffset: [0.46, 0.05, 0.62],
  },
  {
    id: "rear-brake",
    label: "Rear brake",
    description: "A simplified disc and caliper representation that identifies the rear braking assembly in the visual overview.",
    manualReference: "HYOSUNG Service Manual, Comet 250 chassis specification reference: p. 1-9.",
    relatedHref: "/maintenance/brakes",
    relatedLabel: "Open brake service",
    camera: { position: [-3.1, 1.2, 4.1], target: [-1.4, 0.58, 0.12] },
    explodedOffset: [-0.48, 0.05, 0.62],
  },
  {
    id: "handlebar",
    label: "Handlebar and instruments",
    description: "A visual handlebar, control and instrument-cluster grouping based on the motorcycle's general exterior arrangement.",
    manualReference: "HYOSUNG Service Manual, exterior illustration references: pp. 1-6 to 1-7.",
    relatedHref: "/maintenance/steering",
    relatedLabel: "Open steering service",
    camera: { position: [2.8, 2.8, 3.6], target: [1.05, 2.02, 0] },
    explodedOffset: [0.12, 0.66, 0],
  },
  {
    id: "fuel-tank",
    label: "Fuel tank",
    description: "An approximate tank silhouette for visual identification. Fuel-grade and handling guidance remain in the source-linked recommendation page.",
    manualReference: "HYOSUNG Service Manual, exterior illustration references: pp. 1-6 to 1-7.",
    relatedHref: "/general-information/fluids",
    relatedLabel: "Open fuel guidance",
    camera: { position: [3.5, 2.35, 4.1], target: [0.15, 1.72, 0] },
    explodedOffset: [0, 0.48, 0],
  },
  {
    id: "exhaust",
    label: "Exhaust",
    description: "A simplified twin-exhaust arrangement to make the exterior routing easier to recognise from the right-hand side of the model.",
    manualReference: "HYOSUNG Service Manual, exterior illustration references: pp. 1-6 to 1-7.",
    relatedHref: "/general-information/specifications",
    relatedLabel: "View specifications",
    camera: { position: [-2.9, 1.5, 4.4], target: [-0.58, 0.85, 0.28] },
    explodedOffset: [-0.1, -0.22, 0.92],
  },
  {
    id: "front-suspension",
    label: "Front suspension",
    description: "A simplified telescopic-fork assembly for visual orientation; it is not a dimensional fork model.",
    manualReference: "HYOSUNG Service Manual, Comet 250 chassis specification reference: p. 1-9.",
    relatedHref: "/maintenance/steering",
    relatedLabel: "Open steering service",
    camera: { position: [3.2, 2.05, 3.9], target: [1.16, 1.2, 0] },
    explodedOffset: [0.52, 0.08, -0.46],
  },
  {
    id: "rear-suspension",
    label: "Rear suspension",
    description: "A simplified rear shock and swingarm area that helps distinguish the rear-suspension assembly from the frame and engine exterior.",
    manualReference: "HYOSUNG Service Manual, Comet 250 chassis specification reference: p. 1-9.",
    relatedHref: "/maintenance/steering",
    relatedLabel: "Open steering service",
    camera: { position: [-3.2, 1.9, 3.8], target: [-0.82, 1.04, 0] },
    explodedOffset: [-0.5, 0.18, -0.48],
  },
];

export const blade250ComponentById = Object.fromEntries(
  blade250Components.map((component) => [component.id, component]),
) as Record<MotorcycleComponentId, MotorcycleComponent>;
