import { IData, ISettings } from "../types/other";

const createData = (settings: ISettings[]) => {
  const data = settings.reduce((acc, { key, value }) => {
    if (key) {
      let parsedValue: unknown = value;

      if (value === "true") {
        parsedValue = true;
      } else if (value === "false") {
        parsedValue = false;
      }

      acc[key as keyof IData] = parsedValue as never;
    }
    return acc;
  }, {} as IData);

  return data;
};

export default createData;
