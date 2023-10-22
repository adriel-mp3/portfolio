import React from "react";
import * as S from "./style";
import type { socialNetworksType } from "@/utils/socialNetworks";

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
          <a
            href={network.address ? `mailto:${network.address}` : network.link}
          >
            <img src={network.icon[variant]} alt={network.alt} />
          </a>
        </li>
      ))}
    </S.Wrapper>
  );
};

export default SocialButtons;
