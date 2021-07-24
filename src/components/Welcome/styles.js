import styled from 'styled-components';


export const WelcomeSection = styled.section`
  padding: 32px 48px 0;
  max-width: 1040px;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0 ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const WelcomeTitle = styled.h2`
  font-weight: 800;
  font-size: 56px;
  line-height:56px;
  width: max-content;
  max-width: 100%;
  background: ${props => props.theme.colors.backgroundTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    max-width: 100%;
  }
`

export const WelcomeText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-left: 3.6rem;

  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`