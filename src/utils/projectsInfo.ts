export type ProjectsInfoType = {
  name: string;
  description: string;
  tags: string[];
  repository: string;
  deploy: string;
};

export const projectsInfo = [
  {
    name: "Revive Mart",
    description:
      "Uma plataforma de e-commerce focada em produtos recondicionados. Nela, você pode ter acesso a todos os produtos, divididos por categorias.",
    tags: ["Styled Components", "React", "TypeScript", "API REST", "Figma"],
    repository: "https://github.com/adriel-mp3/revive-mart",
    deploy: "https://revive-mart.vercel.app",
  },
  {
    name: "Events",
    description:
      "Você pode ter acesso às palestras e eventos em todos os dispositivos, além de poder comprar ingressos. O site está disponível para todas as plataformas.",
    tags: ["Tailwind", "React", "JavaScript", "React Router"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "",
  },
  {
    name: "In-Order",
    description:
      "Gerenciador de tarefas simples onde você pode organizar e otimizar facilmente sua rotina. Pode adicionar ou remover tarefas, definir prioridades e entre outras funcionalidades.",
    tags: ["Tailwind", "React", "TypeScript", "JavaScript"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "https://adriel-mp3.github.io/in-order/",
  },
  {
    name: "Meu Portfólio",
    description:
      "O objetivo deste é apresentar as principais informações da minha carreira como desenvolvedor, de forma simples e didática. Está disponível para todos os dispositivos.",
    tags: ["Styled Components", "React", "TypeScript", "Figma"],
    repository: "https://github.com/adriel-mp3/portfolio",
    deploy: "",
  },
] as ProjectsInfoType[];
