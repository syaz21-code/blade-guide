import type { MaintenanceScheduleEntry, MaintenanceTopicId, ManualReference } from "@/content/maintenance/types";
import { maintenanceManualSource } from "@/content/maintenance/types";

const reference = (printedPage: string, pdfPage: number | string): ManualReference => ({
  sourceDocument: maintenanceManualSource,
  printedPage,
  pdfPage,
});

export const maintenanceSchedule: MaintenanceScheduleEntry[] = [
  { topicId: "engine-oil", task: "Engine oil", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Replace", source: reference("2-9", 25) },
  { topicId: "engine-oil", task: "Engine oil filter", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Replace with the oil service", source: reference("2-10", 26) },
  { topicId: "brakes", task: "Brake system", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Inspect", source: reference("2-13", 29) },
  { topicId: "brakes", task: "Brake hoses", interval: "Inspect initially at 1,000 km and every 4,000 km; replace every 4 years", requiredAction: "Inspect / replace by time", source: reference("2-13", 29) },
  { topicId: "brakes", task: "Brake fluid", interval: "Inspect initially at 1,000 km and every 4,000 km; replace every 2 years", requiredAction: "Inspect / replace by time", source: reference("2-13", 29) },
  { topicId: "tyres", task: "Tyres", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Inspect", source: reference("2-18", 34) },
  { topicId: "steering", task: "Steering", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Inspect", source: reference("2-17", 33) },
  { topicId: "lubrication", task: "Major lubrication points", interval: "After wet or rainy operation; follow periodic-maintenance chart", requiredAction: "Clean and lubricate exposed points", source: reference("2-2", 18) },
  { topicId: "valve-clearance", task: "Valve clearance", interval: "Initial 1,000 km; every 4,000 km", requiredAction: "Inspect and adjust when required", source: reference("2-3", 19) },
  { topicId: "spark-plug", task: "Spark plug", interval: "Clean initially at 1,000 km and every 4,000 km; replace every 8,000 km", requiredAction: "Clean / replace", source: reference("2-5", 21) },
];

export const maintenanceRouteFor = (topicId: MaintenanceTopicId) => `/maintenance/${topicId}`;
