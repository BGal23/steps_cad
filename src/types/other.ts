export interface ISettings {
  id: number;
  name: string;
  key: string;
  select: boolean;
  type?: string;
  options?: IOptions[];
  value: number | string | boolean;
  isActive: boolean;
}

export interface IOptions {
  id: number;
  name: string;
  value: "I" | "L" | "U" | boolean;
}

export interface IView {
  id: number;
  name: string;
  value: TView;
  type: "radio";
}

export interface IData {
  height: number;
  layout: string;
  riserThickness: number;
  risers: boolean;
  stepThickness: number;
  stringerThickness: number;
  width: number;
}

export type TView = "front" | "side" | "top";
