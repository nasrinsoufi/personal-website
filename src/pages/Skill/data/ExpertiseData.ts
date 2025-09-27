type Expertise = {
  id: number;
  name: string;
  items: string[];
};

export const ExpertiseData: Expertise[] = [
  {
    id: 0,
    name: "languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "C#"],
  },
  {
    id: 1,
    name: "libraries",
    items: [
      "React JS",
      "Next JS",
      "Redux",
      "Zustand",
      "Context Api",
      "Material UI",
      "Styled Components",
      "Emotion",
      "Tailwind CSS",
      "Storybook",
      "Jest",
      "ASP.NETCore",
      
    ],
  },
  {
    id: 3,
    name: "general",
    items: ["Git", "Scrum", "REST API", "Figma", "Docker","Redis","RabbitMQ"],
  },
];
