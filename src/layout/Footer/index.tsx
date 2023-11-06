import { PrimaryButton } from "@/components/Button/PrimmaryButton/style";
import { SocialButtons } from "@/components/Button/SocialButtons";

import type { socialNetworksType } from "@/utils/socialNetworks";

import circle from "@/assets/circle-dec.svg";

import * as S from "./style";

type FooterTypeProps = {
  socialNetworks: socialNetworksType[];
};

const Footer = ({ socialNetworks }: FooterTypeProps) => {
  return (
    <S.Background>
      <S.Container>
        <S.Contact>
          <p>Entre em contato comigo e marcamos uma conversa.</p>
          <PrimaryButton $variant="dark">Enviar e-mail</PrimaryButton>
          <span>Feito com ❤️ por Adriel Santos</span>
        </S.Contact>
        <S.Social>
          <img src={circle} />
          <SocialButtons socialNetworks={socialNetworks} variant="dark" />
        </S.Social>
      </S.Container>
    </S.Background>
  );
};

export default Footer;
