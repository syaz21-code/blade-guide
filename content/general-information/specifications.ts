import type { SpecificationGroup } from "@/content/general-information/types";
import { manualSource } from "@/content/general-information/types";

export const specificationGroups: SpecificationGroup[] = [
  {
    id: "dimensions",
    title: "Dimensions and dry mass",
    description: "Comet 250 reference values from the General Information specifications table.",
    entries: [
      { title: "Overall length", description: "Vehicle length.", specification: "2,080 mm (81.9 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Overall width", description: "Vehicle width.", specification: "760 mm (29.9 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Overall height", description: "Vehicle height.", specification: "1,120 mm (44.1 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Wheelbase", description: "Distance between axle centres.", specification: "1,455 mm (57.3 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Ground clearance", description: "Minimum listed clearance.", specification: "180 mm (7.1 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Dry mass", description: "Listed dry mass.", specification: "170 kg (375 lb)", sourceDocument: manualSource, manualPage: "1-8" },
    ],
  },
  {
    id: "engine",
    title: "Engine",
    description: "Core engine identity and service-relevant configuration.",
    entries: [
      { title: "Type", description: "Engine configuration.", specification: "Four-stroke, DOHC, V-2 cylinder", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Bore", description: "Cylinder bore.", specification: "57.0 mm (2.24 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Stroke", description: "Piston stroke.", specification: "48.8 mm (1.92 in)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Piston displacement", description: "Engine displacement.", specification: "249 cm³ (15.2 in³)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Carburetor", description: "Carburetor type.", specification: "BDS26 type (double)", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Starter system", description: "Starting system.", specification: "Electric starter", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Lubrication system", description: "Lubrication configuration.", specification: "Wet sump", sourceDocument: manualSource, manualPage: "1-8" },
    ],
  },
  {
    id: "transmission",
    title: "Transmission",
    description: "Transmission layout and final-drive information listed for the Comet 250 reference.",
    entries: [
      { title: "Clutch", description: "Clutch type.", specification: "Wet multi-plate type", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Transmission", description: "Gearbox type.", specification: "5-speed constant mesh", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Gearshift pattern", description: "Shift pattern.", specification: "1-down, 4-up", sourceDocument: manualSource, manualPage: "1-8" },
      { title: "Drive chain", description: "Specified drive chain.", specification: "520HO, 112 links", sourceDocument: manualSource, manualPage: "1-8" },
    ],
  },
  {
    id: "chassis",
    title: "Chassis",
    description: "Suspension, steering, braking, and tyre reference data.",
    entries: [
      { title: "Front suspension", description: "Front suspension type.", specification: "Telescopic type", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Rear suspension", description: "Rear suspension type.", specification: "Swingarm type", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Steering angle", description: "Steering angle, right and left.", specification: "33° (right & left)", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Trail", description: "Specified steering trail.", specification: "85 mm (3.35 in)", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Front brake", description: "Front brake type.", specification: "Disc", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Rear brake", description: "Rear brake type.", specification: "Disc", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Front tyre", description: "Front tyre size.", specification: "110/70-17 54H", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Rear tyre", description: "Rear tyre size.", specification: "150/70-17 69H", sourceDocument: manualSource, manualPage: "1-9" },
    ],
  },
  {
    id: "electrical",
    title: "Electrical system",
    description: "Electrical items presented in the original specifications table.",
    entries: [
      { title: "Ignition", description: "Ignition type.", specification: "C.D.I. type", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Spark plug", description: "Standard spark plug.", specification: "CR8E", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Battery", description: "Battery rating.", specification: "12 V, 12 Ah", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Fuse", description: "Main fuse rating.", specification: "15 A", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Headlamp", description: "High and low beam wattage.", specification: "High: 60 W · Low: 55 W", sourceDocument: manualSource, manualPage: "1-9" },
    ],
  },
  {
    id: "capacities",
    title: "Capacities",
    description: "Capacities that are clearly legible in the Comet 250 specifications table.",
    entries: [
      { title: "Fuel tank", description: "Fuel tank capacity.", specification: "17.0 L", sourceDocument: manualSource, manualPage: "1-9" },
      { title: "Front fork oil", description: "One-side front fork oil quantity.", specification: "400 ± 2.5 cc", sourceDocument: manualSource, manualPage: "1-9" },
    ],
  },
];
