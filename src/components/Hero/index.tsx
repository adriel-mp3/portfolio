import React from "react";
import * as S from "./style";
import skills from "@/utils/skills";
import scrollDown from "@/assets/scroll-down-circle.svg";
import { Tag } from "../Tag/style";
import SocialButtons from "../Button/SocialButtons";
import socialNetworks from "@/utils/socialNetworks";

const Hero = () => {
  return (
    <>
      <S.Container>
        <S.Resume>
          <h1>Front-end</h1>
          <span>Developer</span>
          <div>
            <S.Paragraph>
              Minha paixão reside na resolução de problemas, sem importar a
              linguagem, biblioteca ou framework. Estou continuamente disposto a
              expandir meu conhecimento, abraçando novos desafios.
            </S.Paragraph>
            <SocialButtons socialNetworks={socialNetworks} />
          </div>
        </S.Resume>
        <S.SideInfo>
          <S.TitleSecondary>Experiência</S.TitleSecondary>
          <S.Paragraph>
            Neste exato momento, atuo como Desenvolvedor Front-end na
            <strong> Union Developers</strong>, onde estou imerso em um ambiente
            de aprendizado contínuo. Adquirindo experiência em
            <strong> metodologias ágeis</strong>, padrões de projeto, fluxo de
            trabalho no GitHub e <strong>trabalho em equipe</strong>.
          </S.Paragraph>
          <S.TitleSecondary>Conhecimento</S.TitleSecondary>
          <S.Skills>
            {skills.map((skill) => (
              <Tag as="li">{skill}</Tag>
            ))}
          </S.Skills>
        </S.SideInfo>
      </S.Container>
      <S.ImgScroll src={scrollDown} alt="" />
    </>
  );
};

export default Hero;
