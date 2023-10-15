import React from "react";
import * as S from "./style";

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

type SocialButtonsVariants = "dark" | "light";

type SocialButtonsType = {
  socialNetworks: socialNetworksType[];
  variant?: SocialButtonsVariants;
};

const SocialButtons = ({
  socialNetworks,
  variant = "light",
}: SocialButtonsType) => {
  return (
    <S.Wrapper>
      {socialNetworks.map((network) => (
        <li key={network.name}>
          <a href={network.link}>
            <img src={network.icon[variant]} alt={network.alt} />
          </a>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default SocialButtons;
