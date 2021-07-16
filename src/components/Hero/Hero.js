import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        Christopher's Kopeć Portfolio
      </SectionTitle>
      <SectionText>
        DESCRIPTION
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;