export type ProjectsInfoType = {
  name: string;
  description: string;
  tags: string[];
  repository: string;
  deploy: string;
};

export const projectsInfo = [
  {
    name: "Revive Mart ",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    tags: ["Styled Components", "React", "TypeScript", "Figma", "UI/UX"],
    repository: "https://github.com/adriel-mp3/revive-mart",
    deploy: "https://revive-mart.vercel.app",
  },
  {
    name: "Events",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    tags: ["Tailwind", "React", "TypeScript", "JavaScript"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "",
  },
  {
    name: "Events",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    tags: ["Tailwind", "React", "TypeScript", "JavaScript", "JavaScript"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "",
  },
  {
    name: "Events",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    tags: ["Tailwind", "React", "TypeScript", "JavaScript"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "",
  },
] as ProjectsInfoType[];
