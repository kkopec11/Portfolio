import React from 'react';

import { HistorySection, Title, TextUnderTitle, Container, Item, Img } from './styles';
import { TimeLineData } from '../../constants/constants';

const History = () => (
    <HistorySection id="about">
        <Title>About me</Title>
        <TextUnderTitle>
            My programing stared....
        </TextUnderTitle>
        <Container>
            {TimeLineData.map(({ id, image, year, title, text }) => (
                <Item key={id} >
                    <Img src={image} />
                    <h4>{year}</h4>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </Item>
            ))}
        </Container>
    </HistorySection>
);
export default History;
