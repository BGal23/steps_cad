import { IData, ISettings, TView } from "./other";

export interface IForm {
  settings: ISettings[];
  restSettings: ISettings[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings[]>>;
}

export interface IInputForm {
  element: ISettings;
  settings: ISettings[];
  handleChange: (id: number, newValue: number | string) => void;
}

export interface IInputFormConst {
  element: ISettings;
}

export interface IDraw {
  data: IData;
  view: TView;
  setView: (view: TView) => void;
}

export interface IAllDraw {
  data: IData;
}
