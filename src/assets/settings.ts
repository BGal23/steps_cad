const settingsArray = [
  {
    id: 1,
    name: "Wysokość",
    select: false,
    type: "number",
    value: 2300,
    isActive: true,
  },
  {
    id: 2,
    name: "Szerokość",
    select: false,
    type: "number",
    value: 1000,
    isActive: true,
  },

  {
    id: 3,
    name: "Układ",
    select: true,
    options: [
      { id: 1, value: "p", name: "Proste" },
      { id: 2, value: "l", name: "Układ L" },
      { id: 3, value: "u", name: "Układ U" },
    ],
    value: "p",
    isActive: true,
  },
  {
    id: 4,
    name: "Grubość Wangi",
    select: false,
    type: "number",
    value: 40,
    isActive: true,
  },
  {
    id: 5,
    name: "Grubość Stopnia",
    select: false,
    type: "number",
    value: 40,
    isActive: true,
  },
  {
    id: 6,
    name: "Podstopnice",
    select: true,
    options: [
      { id: 1, value: "t", name: "Tak" },
      { id: 2, value: "f", name: "Nie" },
    ],
    value: "t",
    isActive: true,
  },
];

export default settingsArray;
