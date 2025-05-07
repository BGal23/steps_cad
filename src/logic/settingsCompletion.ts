import { IData, ISettings } from "../types/other";

const settingsCompletion = (settings: ISettings[], data: IData | null) => {
  const newSettings = settings;
  if (data) {
    newSettings[0].value = data.stepsNumber;
    newSettings[1].value = data.stepHeight;
    newSettings[2].value = data.stairLength;
  }

  return newSettings;
};
export default settingsCompletion;
