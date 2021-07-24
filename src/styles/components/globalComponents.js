import styled from 'styled-components';

export const SectionDivider = styled.div`
  width: 256px;
  /* width: 64px; */
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #e8f711 0%, #945DD6 100%);

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`