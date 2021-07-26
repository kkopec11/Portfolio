
import styled from 'styled-components'

export const HistorySection = styled.section`
  padding: 32px 48px 0;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 auto;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const Title = styled.h2`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: ${props => props.theme.colors.backgroundTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  padding: 58px 0 16px;
`

export const TextUnderTitle = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
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

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 30px;
  /* padding-left: 3.6rem;
  padding-bottom: 3.6rem; */

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    padding: 0;
  }
`
export const Item = styled.div`
  background-color: white;
  color: black;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  height: auto;
  margin: 20px;
  padding: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 100%;
  }
`;

export const Img = styled.img`
width: 150px;
`