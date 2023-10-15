import * as S from "./style";
import socialNetworks from "@/utils/socialNetworks";
import linkedinImg from "@/assets/linkedin-dark.svg";
import githubImg from "@/assets/github-dark.svg";
import inboxImg from "@/assets/inbox-dark.svg";
import circle from "@/assets/circle-dec.svg";
import { PrimaryButton } from "@/components/Button/PrimmaryButton/style";

const Footer = () => {
  const { github, linkedin, email } = socialNetworks;

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
          <ul>
            <li>
              <a href={linkedin.link}>
                <img src={linkedinImg} alt="" />
              </a>
            </li>
            <li>
              <a href={github.link}>
                <img src={githubImg} alt="" />
              </a>
            </li>
            <li>
              <a href={email.address}>
                <img src={inboxImg} alt="" />
              </a>
            </li>
          </ul>
        </S.Social>
      </S.Container>
    </S.Background>
  );
};

export default Footer;
