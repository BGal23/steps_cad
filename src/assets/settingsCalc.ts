import { ISettings } from "../types/other";

const settingsCompletionArray: ISettings[] = [
  {
    id: 13,
    name: "Ilość Stopni",
    key: "stepsNumber",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
  {
    id: 14,
    name: "Wysokość Stopnia",
    key: "stepHeight",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
  {
    id: 15,
    name: "Długość schodów",
    key: "stairLength",
    select: false,
    type: "number",
    value: 0,
    isActive: true,
  },
];

export default settingsCompletionArray;
