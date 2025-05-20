export type ProjectsItemType = {
  id: number;
  title: string;
  description: string;
  // image: string;//fix it later
  isApp: boolean;
};

export const projectsData: ProjectsItemType[] = [
  {
    id: 0,
    title: "",
    description: "",
    isApp: false,
  },
  {
    id: 1,
    title: "Restaurant Website",
    description: "Platform to order online food",
    isApp: false,
  },
  {
    id: 2,
    title: "",
    description: "",
    isApp: false,
  },
  {
    id: 3,
    title: "",
    description: "",
    isApp: false,
  },
  {
    id: 4,
    title: "Survey App",
    description: "To survey users about a product",
    isApp: false,
  },
  {
    id: 5,
    title: "",
    description: "",
    isApp: false,
  },
  {
    id: 6,
    title: "",
    description: "",
    isApp: false,
  },
  {
    id: 7,
    title: "foodReservation Platform",
    description: "For reserving foods",
    isApp: false,
  },
  
];
