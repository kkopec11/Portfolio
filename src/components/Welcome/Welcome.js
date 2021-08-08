import React from 'react';

import { WelcomeSection, WelcomeText, WelcomeTitle, LeftSection } from './styles';

const Welcome = (props) => (
    <WelcomeSection >
        <LeftSection>
            <WelcomeTitle>
                Welcome To <br />
                Krzysztof Kopeć's Portfolio
            </WelcomeTitle>
            <WelcomeText>
                As a graduating IT enginer with data-base specialization I am aiming to become a full-stack web developer in the future. <br />
                I am enthusiastic about all fields of programming, with a fascination for front-end and especially React.<br />
                This is complimented by an analytical approach as evidenced by my success as a Data Science Analyst and SAS Developer.
            </WelcomeText>
        </LeftSection>
    </WelcomeSection>
);

export default Welcome;