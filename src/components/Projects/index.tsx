import { Tag } from "@/components/Tag/style";

import type { ProjectsInfoType } from "@/utils/projectsInfo";

import { PrimaryButton } from "../Button/PrimmaryButton/style";
import { UnderlineButton } from "../Button/UnderlineButton/style";

import * as S from "./style";

type ProjectsProps = {
  projectsInfo: ProjectsInfoType[];
};

const Projects = ({ projectsInfo }: ProjectsProps) => {
  return (
    <S.Container id="projects">
      <S.LabelSection>
        <h2>Projetos</h2>
        <p>Veja no que eu ando trabalhando</p>
      </S.LabelSection>
      <S.Projects>
        {projectsInfo.map((project) => (
          <S.Project key={project.name}>
            <h3>{project.name}</h3>
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
            <ul>
              {project.tags.map((tag) => (
                <Tag as="li" key={`${project.name}-${tag}`}>
                  {tag}
                </Tag>
              ))}
            </ul>
          </S.Project>
        ))}
      </S.Projects>
      <S.ButtonWrapper>
        <UnderlineButton
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          $size="large"
          href="https://github.com/adriel-mp3"
        >
          Mais projetos
        </UnderlineButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Projects;
