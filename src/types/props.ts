import { ISettings } from "./settings";

export interface IForm {
  settings: ISettings[];
  setSettings: React.Dispatch<React.SetStateAction<ISettings[]>>;
}

export interface IDraw {
  settings: ISettings[];
}
