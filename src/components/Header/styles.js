import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  margin-left: 4px;
`;

export const PortfolioTitle = styled.a`
  display: flex;
  color: white;
  align-items: center;
  align-content: center;
`;

export const DivTitle = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const DivLinks = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
  }
`;

export const DivCVpdf = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 2;
    padding-right: 22px;
  }
`;
export const HiddenText = styled.a`
color:white;
visibility: hidden;
`
export const PdfIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.3s ease;
  border-radius: 20px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    ${HiddenText}{
      visibility: visible;
    }
  }
`;

export const PdfLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const DivIcons = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
