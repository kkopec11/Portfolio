import React from "react";
import {
  DiReact,
  DiGit,
  DiMongodb,
  DiMsqlServer,
  DiNodejsSmall,
  DiDatabase,
} from "react-icons/di";
import { RiListSettingsLine } from "react-icons/ri";
import { FaDesktop, FaCode } from "react-icons/fa";
import {
  SiDotNet,
  SiOracle,
  SiMaterialUi,
  SiStyledComponents,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TechnologiesSection,
  TextUnderTitle,
  Title,
  ItemIcon,
} from "./styles";

const Technologies = () => (
  <TechnologiesSection id="tech">
    <br />
    <Title>Technologies</Title>
    <TextUnderTitle>I have worked with...</TextUnderTitle>
    <List>
      <ListItem>
        <FaDesktop size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            <ItemIcon>
              <p>React</p>
              <DiReact size="3rem" />
            </ItemIcon>
          </ListParagraph>
          <ListParagraph>
            <ItemIcon>
              <p>Redux</p>
              <SiRedux size="2.8rem" style={{ paddingLeft: 4 }} />
            </ItemIcon>
          </ListParagraph>
          <ListParagraph>
            <ItemIcon>
              <p>Material UI</p>
              <SiMaterialUi size="2.5rem" style={{ paddingLeft: 3 }} />
            </ItemIcon>
          </ListParagraph>
          <ListParagraph>
            <ItemIcon>
              <p>Styled-Components</p>
              <SiStyledComponents size="3.5rem" style={{ paddingLeft: 3 }} />
            </ItemIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiListSettingsLine size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            <ItemIcon>
              <p>Node</p>
              <DiNodejsSmall size="3rem" style={{ paddingLeft: 2 }} />
            </ItemIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data-Base</ListTitle>
          <ListParagraph>
            <ItemIcon>
              <p>Oracle</p>
              <SiOracle size="3rem" style={{ paddingLeft: 3 }} />
            </ItemIcon>
          </ListParagraph>
          <ListParagraph>
            <ItemIcon>
              <p>MongoDB</p>
              <DiMongodb size="3rem" />
            </ItemIcon>
          </ListParagraph>
          <ListParagraph>
            <ItemIcon>
              <p>PostgreSQL </p>
              <SiPostgresql size="3rem" style={{ paddingLeft: 5 }} />
            </ItemIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCode size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            <ItemIcon>
              <p>Git</p>
              <DiGit size="3rem" />
            </ItemIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </TechnologiesSection>
);

export default Technologies;
