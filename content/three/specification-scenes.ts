import type { SourceBoundEntry } from "@/content/general-information/types";
import { specificationGroups } from "@/content/general-information/specifications";

import type { MotorcycleComponentId } from "./motorcycle-components";

type Vector3 = [number, number, number];

export type SpecificationScene = {
  id: "overview" | "wheels" | "brakes" | "engine" | "transmission" | "chassis" | "dimensions";
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  entries: SourceBoundEntry[];
  componentIds: MotorcycleComponentId[];
  camera: {
    position: Vector3;
    target: Vector3;
    rotationY: number;
  };
  alignment: "left" | "right";
};

const specificationEntryByTitle = new Map(
  specificationGroups.flatMap((group) => group.entries.map((entry) => [entry.title, entry])),
);

function selectEntries(...titles: string[]) {
  return titles.map((title) => {
    const entry = specificationEntryByTitle.get(title);

    if (!entry) {
      throw new Error(`Missing source-bound specification entry: ${title}`);
    }

    return entry;
  });
}

export const specificationScenes: SpecificationScene[] = [
  {
    id: "overview",
    number: "01",
    eyebrow: "General information / 01",
    title: "BLADE 250",
    description: "A source-linked Comet 250 reference profile presented as the Blade 250 visual guide. Explore the major systems as the motorcycle stays in view.",
    entries: selectEntries("Type", "Piston displacement", "Transmission"),
    componentIds: ["fuel-tank", "engine", "frame"],
    camera: {
      position: [4.5, 2.55, 5.4],
      target: [0, 1.08, 0],
      rotationY: 0,
    },
    alignment: "left",
  },
  {
    id: "wheels",
    number: "02",
    eyebrow: "Chassis / wheels and tyres",
    title: "Contact patch",
    description: "Front and rear tyre reference entries from the Comet 250 chassis table. The highlighted geometry is an approximate educational visual.",
    entries: selectEntries("Front tyre", "Rear tyre"),
    componentIds: ["front-wheel", "rear-wheel"],
    camera: {
      position: [3.9, 1.32, 4.15],
      target: [1.2, 0.58, 0],
      rotationY: 0.08,
    },
    alignment: "right",
  },
  {
    id: "brakes",
    number: "03",
    eyebrow: "Chassis / braking system",
    title: "Disc control",
    description: "Both wheel positions are documented with disc brakes. Scroll to bring the front brake assembly into the primary view.",
    entries: selectEntries("Front brake", "Rear brake"),
    componentIds: ["front-brake", "rear-brake"],
    camera: {
      position: [3.25, 1.25, 3.55],
      target: [1.4, 0.6, 0.12],
      rotationY: -0.06,
    },
    alignment: "left",
  },
  {
    id: "engine",
    number: "04",
    eyebrow: "Powerplant / engine",
    title: "V-twin core",
    description: "The manual documents a four-stroke, DOHC, V-2-cylinder engine. Only values legible in the supplied table are shown here.",
    entries: selectEntries("Type", "Piston displacement", "Bore", "Stroke"),
    componentIds: ["engine", "exhaust"],
    camera: {
      position: [3.35, 1.78, 4.0],
      target: [-0.05, 1.06, 0],
      rotationY: -0.18,
    },
    alignment: "right",
  },
  {
    id: "transmission",
    number: "05",
    eyebrow: "Powertrain / transmission",
    title: "Five-speed drive",
    description: "Transmission and final-drive details from the source table, shown in the context of the engine exterior and rear-drive area.",
    entries: selectEntries("Clutch", "Transmission", "Gearshift pattern", "Drive chain"),
    componentIds: ["engine", "rear-wheel", "exhaust"],
    camera: {
      position: [-3.5, 1.55, 3.75],
      target: [-0.62, 0.88, 0],
      rotationY: 0.24,
    },
    alignment: "left",
  },
  {
    id: "chassis",
    number: "06",
    eyebrow: "Chassis / suspension and steering",
    title: "Poised to steer",
    description: "The source table identifies a telescopic front suspension, swingarm rear suspension and the steering reference values below.",
    entries: selectEntries("Front suspension", "Rear suspension", "Steering angle", "Trail"),
    componentIds: ["frame", "front-suspension", "rear-suspension", "handlebar"],
    camera: {
      position: [3.9, 2.28, 4.4],
      target: [0.68, 1.32, 0],
      rotationY: -0.12,
    },
    alignment: "right",
  },
  {
    id: "dimensions",
    number: "07",
    eyebrow: "Specifications / final overview",
    title: "The complete stance",
    description: "Return to the full profile for the source-linked dimensional reference, then continue into the service and maintenance module.",
    entries: selectEntries("Overall length", "Overall width", "Overall height", "Wheelbase", "Ground clearance", "Dry mass"),
    componentIds: ["frame", "fuel-tank", "engine", "front-wheel", "rear-wheel"],
    camera: {
      position: [-4.45, 2.45, 5.15],
      target: [0, 1.08, 0],
      rotationY: 0.1,
    },
    alignment: "left",
  },
];
