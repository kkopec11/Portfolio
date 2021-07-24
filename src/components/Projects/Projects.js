import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, Title, Hr, Tag, TagList, TitleContent, UtilityList, Img, ProjectsSection, ProjectsTitle, StackTitle } from './styles';
import { projects } from '../../constants/constants';
import { SectionDivider } from '../../styles/components/globalComponents';

const Projects = () => (
  <ProjectsSection id="projects">
    {/* <SectionDivider /> */}
    <ProjectsTitle>My Projects</ProjectsTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <Title>{title}</Title>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent><StackTitle>Stack</StackTitle></TitleContent>
            <TagList>
              {tags.map((tag, id) => (
                <Tag key={id}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </ProjectsSection>
);

export default Projects;