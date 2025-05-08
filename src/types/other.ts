export interface ISettings {
  id: number;
  name: string;
  key: string;
  select: boolean;
  type?: string;
  options?: IOptions[];
  value: number | string;
  isActive: boolean;
  dependsOn?: IDependsOn[];
}

export interface IOptions {
  id: number;
  name: string;
  value: string;
}

export interface IDependsOn {
  key: string;
  value: string;
}

export interface IView {
  id: number;
  name: string;
  value: TView;
  type: "radio";
}

export interface IData {
  start: { x: number; y: number };
  height: number;
  width: number;
  layout: "I" | "L" | "U";
  stringerThickness: number;
  stepThickness: number;
  risers: boolean;
  riserThickness: number;
  stepWidth: number;
  stepOverlapping: number;
  stepIssuance: number;
  stepLast: boolean;
  stringerType: "under" | "letIn";
  stepsNumber: number;
  stepHeight: number;
  stairLength: number;
  stepDeep: number;
  stringerStart: number;
  stringerStop: number;
}

export type TView = "front" | "side" | "top";
