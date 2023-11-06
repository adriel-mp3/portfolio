import type { socialNetworksType } from "@/utils/socialNetworks";

import * as S from "./style";

type SocialButtonsVariants = "dark" | "light";

type SocialButtonsType = {
  socialNetworks: socialNetworksType[];
  variant?: SocialButtonsVariants;
};

export const SocialButtons = ({
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
