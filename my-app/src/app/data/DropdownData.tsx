export type DropdownItem = {
  name: string;
  url: string;
};

export type DropdownSection = {
  title: string;
  url: string; // 👈 add this
  items: DropdownItem[];
};

export const dropdownData: DropdownSection[] = [
  {
    title: "Coffee",
    url: "/coffee",
    items: [
      {
        name: "How To Drink Coffee",
        url: "/coffee/howtodrinkcoffee",
      },
    ],
  },
  {
    title: "Motorcycles",
    url: "/motorcycles",
    items: [
      {
        name: "Why I Ride",
        url: "/motorcycles/whyiride",
      },
    ],
  },
];
