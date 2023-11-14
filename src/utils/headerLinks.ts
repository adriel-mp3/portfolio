export type HeaderLinksType = {
  id: string;
  href: string;
  label: string;
};

export const headerLinks = [
  {
    id: "sobre",
    href: "#about",
    label: "Sobre",
  },
  {
    id: "projects",
    href: "#projects",
    label: "Projetos",
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contato",
  },
] as HeaderLinksType[];
