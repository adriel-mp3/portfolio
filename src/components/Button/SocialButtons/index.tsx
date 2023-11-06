import type { socialNetworksType } from "@/utils/socialNetworks";

import * as S from "./style";

type SocialButtonsVariants = "dark" | "light";

interface SocialButtonsProps {
  socialNetworks: socialNetworksType[];
  variant?: SocialButtonsVariants;
}

export const SocialButtons = ({
  socialNetworks,
  variant = "light",
}: SocialButtonsProps) => {
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
