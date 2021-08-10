import React from 'react';

import { HistorySection, Title, TextUnderTitle, Container, Item, Img, Year, TitleItem, TextItem } from './styles';
import { TimeLineData } from '../../constants/constants';

const History = () => (
    <HistorySection id="about">
        <Title>About me</Title>
        <TextUnderTitle>
            My programing stared...
        </TextUnderTitle>
        <Container>
            {TimeLineData.map(({ id, image, year, title, text }) => (
                <Item key={id} >
                    <Img src={image} />
                    <Year>{year}</Year>
                    <TitleItem>{title}</TitleItem>
                    <TextItem>{text}</TextItem>
                </Item>
            ))}
        </Container>
    </HistorySection>
);
export default History;
