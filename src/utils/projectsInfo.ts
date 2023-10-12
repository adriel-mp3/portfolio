import reviveMart from "@/assets/revive-mart.jpg";
import events from "@/assets/events.jpg";

const projectsInfo = [
  {
    name: "Revive Mart",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    img: reviveMart,
    alt: "Foto do meu projeto chamado Revive Mart",
    tags: ["Styled Components", "React", "TypeScript", "Figma", "UI/UX"],
    repository: "https://github.com/adriel-mp3/revive-mart",
    deploy: "https://revive-mart.vercel.app",
  },
  {
    name: "Events",
    description:
      'No contexto de software de código aberto, por conta da sua natureza dinâmica e participativa por meio da Internet, a palavra "projeto" geralmente está ligada ao próprio software.',
    img: events,
    alt: "Foto do meu projeto chamado Events",
    tags: ["Tailwind", "React", "TypeScript", "JavaScript"],
    repository: "https://github.com/adriel-mp3/events",
    deploy: "",
  },
] as const;

export default projectsInfo;
