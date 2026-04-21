export type DropdownItem = {
  name: string;
  url: string;
};

export type DropdownSection = {
  title: string;
  items: DropdownItem[];
};

export const dropdownData: DropdownSection[] = [
  {
    title: "Coffee",
    items: [
      {
        name: "How To Drink Coffee",
        url: "/coffee",
      },
    ],
  },
  {
    title: "Motorcycles",
    items: [
      {
        name: "Why I Ride",
        url: "/motorcycles",
      },
    ],
  },
];
