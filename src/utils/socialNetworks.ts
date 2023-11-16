import githubIconLight from "/github.svg";
import linkedinIconLight from "/linkedin.svg";
import inboxIconLight from "/inbox.svg";
import linkedinIconDark from "/linkedin-dark.svg";
import githubIconDark from "/github-dark.svg";
import inboxIconDark from "/inbox-dark.svg";

type socialIconsType = {
  dark: string;
  light: string;
};

export type socialNetworksType = {
  name: string;
  link?: string;
  icon: socialIconsType;
  alt: string;
  address?: string;
};

export const socialNetworks = [
  {
    name: "github",
    link: "https://github.com/adriel-mp3",
    icon: {
      dark: githubIconDark,
      light: githubIconLight,
    },
    alt: "Github Icon",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/adriel-santos-dev/",
    icon: {
      dark: linkedinIconDark,
      light: linkedinIconLight,
    },
    alt: "Linkedin Icon",
  },
  {
    name: "email",
    address: "contatoadrielsantos@hotmail.com",
    icon: {
      dark: inboxIconDark,
      light: inboxIconLight,
    },
    alt: "Email Icon",
  },
] as socialNetworksType[];
