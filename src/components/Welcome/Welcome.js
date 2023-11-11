import React from "react";

import {
  WelcomeSection,
  WelcomeText,
  WelcomeTitle,
  LeftSection,
} from "./styles";

const Welcome = (props) => (
  <WelcomeSection>
    <LeftSection>
      <WelcomeTitle>
        Welcome To <br />
        Krzysztof Kopeć's Portfolio
      </WelcomeTitle>
      <WelcomeText>
        As an experienced front-end developer and a computer science graduate
        with a specialization in databases, I aspire to become a full-stack web
        developer in the future. <br />I am enthusiastic about all areas of
        programming, with a fascination for the front-end, especially React.
        <br />
        This is complemented by an analytical approach, as evidenced by my
        success as a data analyst and SAS programmer. <br />I also have
        experience participating in international projects using Scrum and Agile
        methodologies.
      </WelcomeText>
    </LeftSection>
  </WelcomeSection>
);

export default Welcome;
