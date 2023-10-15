import React from "react";
import * as S from "./style";

import Tag from "../Tag";
import projectsInfo from "@/utils/projectsInfo";
import socialNetworks from "@/utils/socialNetworks";
import { PrimaryButton } from "../Button/PrimmaryButton/style";
import { UnderlineButton } from "../Button/UnderlineButton/style";

const Projects = () => {
  const { github } = socialNetworks;
  return (
    <S.Container>
      <S.LabelSection>
        <h2>Projetos</h2>
        <p>Veja no que eu ando trabalhando</p>
      </S.LabelSection>
      <S.Projects>
        {projectsInfo.map((project) => (
          <S.Project>
            <img src={project.img} />
            <h3>{project.name}</h3>
            <ul>
              {project.tags.map((tag) => (
                <Tag name={tag} as="li" />
              ))}
            </ul>
            <p>{project.description}</p>
            <S.Buttons>
              <PrimaryButton
                as="a"
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Projeto
              </PrimaryButton>
              <UnderlineButton
                as="a"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório
              </UnderlineButton>
            </S.Buttons>
          </S.Project>
        ))}
      </S.Projects>
      <S.ButtonWrapper>
        <UnderlineButton
          as="a"
          href={github.link}
          target="_blank"
          rel="noopener noreferrer"
          $size="large"
        >
          Mais projetos
        </UnderlineButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Projects;
