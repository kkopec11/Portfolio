import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  Title,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ProjectsSection,
  ProjectsTitle,
  StackTitle,
  BottomDiv,
  MainDiv,
} from "./styles";
import { projects } from "../../constants/constants";

const Projects = () => (
  <ProjectsSection id="projects">
    {/* <SectionDivider /> */}
    <ProjectsTitle>My Projects</ProjectsTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <MainDiv>
              <TitleContent>
                <Title>{title}</Title>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
            </MainDiv>
            <BottomDiv>
              <TitleContent>
                <StackTitle>Stack</StackTitle>
              </TitleContent>
              <TagList>
                {tags.map((tag, id) => (
                  <Tag key={id}>{tag}</Tag>
                ))}
              </TagList>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Live Demo</ExternalLinks>
              </UtilityList>
            </BottomDiv>
          </BlogCard>
        ),
      )}
    </GridContainer>
  </ProjectsSection>
);

export default Projects;
