import scrollDown from "/scroll-down-circle.svg";

import type { socialNetworksType } from "@/utils/socialNetworks";
import type { SkillsType } from "@/utils/skills";

import { SocialButtons } from "../Button/SocialButtons";
import { Tag } from "../Tag/style";

import * as S from "./style";

interface HeroProps {
  socialNetworks: socialNetworksType[];
  skills: SkillsType;
}

const Hero = ({ socialNetworks, skills }: HeroProps) => {
  return (
    <>
      <S.Container id="about">
        <S.Resume>
          <h1>Front-end</h1>
          <span>Developer</span>
          <S.Paragraph>
            Tenho afinidade em lidar com desafios e solucionar problemas,
            independentemente da linguagem, biblioteca ou framework. Estou
            constantemente disposto a expandir meu conhecimento, abraçando novas
            oportunidades.
          </S.Paragraph>
          <SocialButtons socialNetworks={socialNetworks} />
        </S.Resume>
        <S.SideInfo>
          <S.TitleSecondary>Experiência</S.TitleSecondary>
          <S.Paragraph>
            Minha ultima experiência foi como{' '}
            <strong>Desenvolvedor Front-end</strong> na Union Developers, onde
            estava imerso em um ambiente de aprendizado contínuo. Adquirindo
            experiência em
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
      <S.ImgScroll src={scrollDown} alt="" width={116} height={116} />
    </>
  );
};

export default Hero;
