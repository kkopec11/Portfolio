import React from 'react';
import { DiReact, DiGit, DiMongodb, DiMsqlServer, DiNodejsSmall, DiDatabase } from 'react-icons/di';
import { RiListSettingsLine } from 'react-icons/ri';
import { FaDesktop, FaCode } from 'react-icons/fa';
import { SiDotNet, SiOracle } from 'react-icons/si';

import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechnologiesSection, TextUnderTitle, Title, NameAndIconContainer } from './styles';

const Technologies = () => (
    <TechnologiesSection id="tech">
        <br />
        <Title>Technologies</Title>
        <TextUnderTitle>
            I have worked with...
        </TextUnderTitle>
        <List>
            <ListItem>
                <FaDesktop size="3rem" />
                <ListContainer>
                    <ListTitle>Front-end</ListTitle>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        React.js
                        <DiReact size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <RiListSettingsLine size="3rem" />
                <ListContainer>
                    <ListTitle>Back-end</ListTitle>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        Node.js
                        <DiNodejsSmall size="3rem" />
                    </ListParagraph>
                    <ListParagraph>

                        {/* </NameAndIconContainer> */}
                        {/* <NameAndIconContainer> */}
                        C#
                        <SiDotNet size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiDatabase size="3rem" />
                <ListContainer>
                    <ListTitle>Data-Base</ListTitle>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        Oracle
                        <SiOracle size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        MongoDB
                        <DiMongodb size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        MS SQL
                        <DiMsqlServer size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FaCode size="3rem" />
                <ListContainer>
                    <ListTitle>Other</ListTitle>
                    <ListParagraph>
                        {/* <NameAndIconContainer> */}
                        GitHub
                        <DiGit size="3rem" />
                        {/* </NameAndIconContainer> */}
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </TechnologiesSection>
);

export default Technologies;
