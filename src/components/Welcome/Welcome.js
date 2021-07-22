import React from 'react';

import { WelcomeSection, WelcomeText, WelcomeTitle, LeftSection } from './styles';

const Welcome = (props) => (
    <WelcomeSection >
        <LeftSection>
            <WelcomeTitle>
                Welcome To <br />
                Christopher's Kopeć Portfolio
            </WelcomeTitle>
            <WelcomeText>
                As a graduating IT enginer with data-base specialization I'm targeing myself to become a full-stack web developer in a future. <br />
                I'm a programming enthusiast in each field but for now I'm in a love with/fascinate about Front-end and especially with a React library. <br />
                Despite that I have an analitycs way of thinking and for a proof for that I can commend myself with an expiernce as a Data Science Analyst & SAS Developer.
            </WelcomeText>
        </LeftSection>
    </WelcomeSection>
);

export default Welcome;