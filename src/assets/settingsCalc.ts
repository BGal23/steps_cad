import { ISettings } from "../types/other";

const settingsCompletionArray: ISettings[] = [
  {
    id: 100,
    name: "Ilość Stopni",
    key: "stepsNumber",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
  {
    id: 101,
    name: "Wysokość Stopnia",
    key: "stepHeight",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
  {
    id: 102,
    name: "Długość schodów",
    key: "stairLength",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
];

export default settingsCompletionArray;
