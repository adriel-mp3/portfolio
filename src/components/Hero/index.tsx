import scrollDown from "@/assets/scroll-down-circle.svg";

import type { socialNetworksType } from "@/utils/socialNetworks";
import type { SkillsType } from "@/utils/skills";

import { SocialButtons } from "../Button/SocialButtons";
import { Tag } from "../Tag/style";

import * as S from "./style";

type HeroPropsType = {
  socialNetworks: socialNetworksType[];
  skills: SkillsType;
};

const Hero = ({ socialNetworks, skills }: HeroPropsType) => {
  return (
    <>
      <S.Container>
        <S.Resume>
          <h1>Front-end</h1>
          <span>Developer</span>
          <S.Paragraph>
            Minha paixão reside na resolução de problemas, sem importar a
            linguagem, biblioteca ou framework. Estou continuamente disposto a
            expandir meu conhecimento, abraçando novos desafios.
          </S.Paragraph>
          <SocialButtons socialNetworks={socialNetworks} />
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
              <Tag as="li" key={skill}>
                {skill}
              </Tag>
            ))}
          </S.Skills>
        </S.SideInfo>
      </S.Container>
      <S.ImgScroll src={scrollDown} alt="" />
    </>
  );
};

export default Hero;
