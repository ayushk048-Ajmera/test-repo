export interface cityInterface {
  cId: number;
  city: string;
}

export const dataCity: cityInterface[] = [
  {
    cId: 1,
    city: "ahmedabad",
  },
  {
    cId: 2,
    city: "surat",
  },
];

export interface areaInterface {
  aId: number;
  cId: number;
  area: string;
}

export const dataArea: areaInterface[] = [
  {
    aId: 1,
    cId: 1,
    area: "jivarajpark",
  },
  {
    aId: 2,
    cId: 1,
    area: "nikol",
  },
  {
    aId: 3,
    cId: 2,
    area: "varachha",
  },
];
