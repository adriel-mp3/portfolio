import * as S from "./style";
import circle from "@/assets/circle-dec.svg";
import { PrimaryButton } from "@/components/Button/PrimmaryButton/style";
import SocialButtons from "@/components/Button/SocialButtons";
import socialNetworks from "@/utils/socialNetworks";

const Footer = () => {
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
