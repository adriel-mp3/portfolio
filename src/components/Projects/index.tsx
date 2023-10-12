import React from "react";
import * as S from "./style";

import Tag from "../Tag";
import projectsInfo from "@/utils/projectsInfo";
import PrimaryButton from "../Button/PrimmaryButton";
import UnderlineButton from "../Button/UnderlineButton";

const Projects = () => {
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
                label="Projeto"
                as="a"
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              />
              <UnderlineButton
                label="Repositorio"
                as="a"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              />
            </S.Buttons>
          </S.Project>
        ))}
      </S.Projects>
      <S.ButtonWrapper>
        <UnderlineButton
          label="Mais projetos"
          as="a"
          href="https://github.com/adriel-mp3"
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Projects;
