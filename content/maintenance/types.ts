export const maintenanceManualSource = "HYOSUNG Service Manual";

export type MaintenanceTopicId =
  | "engine-oil"
  | "brakes"
  | "tyres"
  | "steering"
  | "lubrication"
  | "valve-clearance"
  | "spark-plug";

export type ManualReference = {
  sourceDocument: string;
  printedPage: string;
  pdfPage: number | string;
};

export type MaintenanceInterval = {
  label: string;
  source: ManualReference;
};

export type MaintenanceInstruction = {
  title: string;
  description: string;
  procedure: string[];
  technicalSpecifications: string[];
  maintenanceInterval: string;
  safetyPrecautions: string[];
  source: ManualReference;
};

export type MaintenanceDemo = {
  componentId: string;
  cameraPreset: "left-engine" | "front-wheel" | "rear-wheel" | "cockpit" | "top-engine";
  stepLabels: string[];
};

export type MaintenanceTopic = {
  id: MaintenanceTopicId;
  title: string;
  route: string;
  indexLabel: string;
  overview: MaintenanceInstruction;
  whyImportant: string;
  interval: MaintenanceInterval;
  requiredTools: string[];
  requiredMaterials: string[];
  instructions: MaintenanceInstruction[];
  relatedTopicIds: MaintenanceTopicId[];
  demo: MaintenanceDemo;
};

export type MaintenanceScheduleEntry = {
  topicId: MaintenanceTopicId;
  task: string;
  interval: string;
  requiredAction: string;
  source: ManualReference;
};
