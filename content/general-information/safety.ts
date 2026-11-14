import type { SafetyEntry } from "@/content/general-information/types";
import { manualSource } from "@/content/general-information/types";

export const safetySignalDefinitions: SafetyEntry[] = [
  {
    title: "Warning",
    description: "The manual's highest-alert signal.",
    specification: "Potential hazard that could result in death or injury.",
    sourceDocument: manualSource,
    manualPage: "1-1",
    level: "warning",
    category: "general",
  },
  {
    title: "Caution",
    description: "A vehicle-protection alert.",
    specification: "Potential hazard that could result in vehicle damage.",
    sourceDocument: manualSource,
    manualPage: "1-1",
    level: "caution",
    category: "general",
  },
  {
    title: "Note",
    description: "A service-supporting signal.",
    specification: "Special information that makes maintenance easier or instructions clearer.",
    sourceDocument: manualSource,
    manualPage: "1-1",
    level: "note",
    category: "general",
  },
];

export const safetySections: Array<{ id: SafetyEntry["category"]; title: string; entries: SafetyEntry[] }> = [
  {
    id: "general",
    title: "General servicing precautions",
    entries: [
      { title: "Use judgement beyond signals", description: "The manual's safety signals cannot address every possible situation.", specification: "Warnings and cautions do not cover all potential hazards; use basic mechanical safety precautions and seek a more experienced mechanic when unsure.", sourceDocument: manualSource, manualPage: "1-1", level: "note", category: "general" },
      { title: "Use proper service procedures", description: "Service and repair quality affects both the mechanic and vehicle reliability.", specification: "Follow correct service and repair procedures; use sound mechanical safety principles and seek experienced advice when unsure.", sourceDocument: manualSource, manualPage: "1-1", level: "warning", category: "general" },
      { title: "Work with others deliberately", description: "Shared work introduces additional safety exposure.", specification: "When two or more people work together, each person must pay attention to the others' safety.", sourceDocument: manualSource, manualPage: "1-1", level: "warning", category: "general" },
      { title: "Control exhaust and ventilation", description: "Engine exhaust and workshop materials require ventilation.", specification: "When an engine runs indoors, force exhaust outdoors. Keep the work area well ventilated when handling toxic or flammable materials and follow the material manufacturer's instructions.", sourceDocument: manualSource, manualPage: "1-1", level: "warning", category: "general" },
      { title: "Avoid heat and leaks", description: "Hot components and fluid-system leaks can create hazards.", specification: "Do not touch the engine, engine oil, or exhaust system during or shortly after operation. After work on fuel, oil, exhaust, or brake systems, check related lines and fittings for leaks.", sourceDocument: manualSource, manualPage: "1-1", level: "warning", category: "general" },
      { title: "Do not clean with gasoline", description: "The manual explicitly prohibits this use.", specification: "Never use gasoline as a cleaning solvent.", sourceDocument: manualSource, manualPage: "1-1", level: "warning", category: "general" },
    ],
  },
  {
    id: "components",
    title: "Handling and replacement of components",
    entries: [
      { title: "Replacement parts", description: "Replacement parts must retain the required standard.", specification: "When replacement is necessary, use HYOSUNG Genuine parts or their equivalent.", sourceDocument: manualSource, manualPage: "1-2", level: "caution", category: "components" },
      { title: "Parts, tools, and materials", description: "Order and cleanliness support correct reassembly.", specification: "Keep reusable parts arranged for correct order and orientation. Use special tools when instructed, keep parts clean, lubricate when specified, and use the specified lubricant, bond, or sealant.", sourceDocument: manualSource, manualPage: "1-2", level: "caution", category: "components" },
      { title: "Single-use hardware", description: "Certain sealing and locking items are not reusable.", specification: "Replace removed oil seals, gaskets, packing, O-rings, locking washers, cotter pins, circlips, and other parts when specified. Do not reuse circlips or self-locking nuts.", sourceDocument: manualSource, manualPage: "1-2", level: "caution", category: "components" },
      { title: "Fasteners and final check", description: "The manual specifies sequence and confirmation.", specification: "Tighten specified fasteners with a torque wrench, wipe grease or oil from threads, then check reassembled parts for tightness and operation.", sourceDocument: manualSource, manualPage: "1-2", level: "caution", category: "components" },
    ],
  },
  {
    id: "electrical",
    title: "Electrical servicing precautions",
    entries: [
      { title: "Battery cable order", description: "Battery terminals have a prescribed sequence.", specification: "Disconnect the negative cable before the positive cable. Reconnect the positive cable before the negative cable, then replace the positive-terminal cover.", sourceDocument: manualSource, manualPage: "1-2", level: "warning", category: "electrical" },
      { title: "Electrical work isolation", description: "Prevent unintended battery power during service.", specification: "When servicing electrical parts that do not require battery power, disconnect the battery negative cable.", sourceDocument: manualSource, manualPage: "1-2", level: "warning", category: "electrical" },
    ],
  },
  {
    id: "environment",
    title: "Environmental precautions",
    entries: [
      { title: "Used fluids, batteries, and tyres", description: "Service waste must be handled responsibly.", specification: "Do not unlawfully dispose of used motor oil, other fluids, batteries, or tyres.", sourceDocument: manualSource, manualPage: "1-2", level: "warning", category: "environment" },
      { title: "Vehicles and parts", description: "End-of-life materials require proper disposal.", specification: "Properly dispose of used vehicles and parts to protect natural resources.", sourceDocument: manualSource, manualPage: "1-2", level: "warning", category: "environment" },
    ],
  },
];
