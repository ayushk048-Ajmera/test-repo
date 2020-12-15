export interface PersonInterface {
  id: number;
  name: {
    first_name: string;
    middle_name?: string;
    last_name: string;
  };
  phone: string;
  address: {
    street: string;
    area: string;
    district: string;
    PIN: number;
  };
}

export const Person: PersonInterface[] = [
  {
    id: 1,
    name: {
      first_name: "ayush",
      middle_name: "bhanajibhai",
      last_name: "kholiya",
    },
    phone: "9885568686",
    address: {
      street: "46 harinager",
      area: "jivarajpark",
      district: "ahmedabad",
      PIN: 380051,
    },
  },
  {
    id: 2,
    name: {
      first_name: "ramesh",
      middle_name: "Suresh",
      last_name: "5 star",
    },
    phone: "9885568686",
    address: {
      street: "somewhere in surat",
      area: "varachha",
      district: "surat",
      PIN: 380051,
    },
  },
  {
    id: 3,
    name: {
      first_name: "ayush",
      middle_name: "bhanajibhai",
      last_name: "kholiya",
    },
    phone: "9885568686",
    address: {
      street: "46 harinager",
      area: "jivarajpark",
      district: "ahmedabad",
      PIN: 380051,
    },
  },
  {
    id: 4,
    name: {
      first_name: "ramesh",
      middle_name: "Suresh",
      last_name: "5 star",
    },
    phone: "9885568686",
    address: {
      street: "somewhere in surat",
      area: "jivarajpark",
      district: "ahmedabad",
      PIN: 380051,
    },
  },
  {
    id: 5,
    name: {
      first_name: "ayush",
      middle_name: "bhanajibhai",
      last_name: "kholiya",
    },
    phone: "9885568686",
    address: {
      street: "46 harinager",
      area: "jivarajpark",
      district: "ahmedabad",
      PIN: 380051,
    },
  },
  {
    id: 6,
    name: {
      first_name: "ramesh",
      middle_name: "Suresh",
      last_name: "5 star",
    },
    phone: "9885568686",
    address: {
      street: "somewhere in surat",
      area: "nikol",
      district: "ahmedabad",
      PIN: 380051,
    },
  },
];
