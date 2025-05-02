import { IData, ISettings, TView } from "./other";

export interface IForm {
  settings: ISettings[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings[]>>;
}

export interface IDraw {
  settings: ISettings[];
  view: TView;
  setView: (view: TView) => void;
}

export interface IAllDraw {
  data: IData;
}
