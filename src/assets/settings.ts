import { ISettings } from "../types/other";

const settingsArray: ISettings[] = [
  {
    id: 1,
    name: "Wysokość",
    key: "height",
    select: false,
    type: "number",
    value: 2300,
    isActive: true,
  },
  {
    id: 2,
    name: "Szerokość",
    key: "width",
    select: false,
    type: "number",
    value: 1000,
    isActive: true,
  },
  {
    id: 3,
    name: "Układ",
    key: "layout",
    select: true,
    options: [
      { id: 1, value: "I", name: "Proste" },
      { id: 2, value: "L", name: "Układ L" },
      { id: 3, value: "U", name: "Układ U" },
    ],
    value: "p",
    isActive: true,
  },
  {
    id: 4,
    name: "Grubość Wangi",
    key: "stringerThickness",
    select: false,
    type: "number",
    value: 40,
    isActive: true,
  },
  {
    id: 5,
    name: "Grubość Stopnia",
    key: "stepThickness",
    select: false,
    type: "number",
    value: 40,
    isActive: true,
  },
  {
    id: 6,
    name: "Podstopnice",
    key: "risers",
    select: true,
    options: [
      { id: 1, value: true, name: "Tak" },
      { id: 2, value: false, name: "Nie" },
    ],
    value: true,
    isActive: true,
  },
  {
    id: 7,
    name: "Grubość Podstopnicy",
    key: "riserThickness",
    select: false,
    type: "number",
    value: 20,
    isActive: true,
  },
];

export default settingsArray;
