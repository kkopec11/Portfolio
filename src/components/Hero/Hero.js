import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        Krzysztof Kopeć Portfolio
      </SectionTitle>
      <SectionText>
        {/* /TODO */}
        DESCRIPTION
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;