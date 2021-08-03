import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 32px 48px 0 ;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3.6rem;
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

export const ProjectsTitle = styled.h2`
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


export const Img = styled.img`
  width:300px;
  height:150px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width:248px;
}
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(3, minmax(300px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 4rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 15px;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 300px;
  margin: auto;
  height: max-content;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 15px;
`;


export const Title = styled.h2`
  font-weight: 500;
  letter-spacing: 2px;
  padding: .5rem 0;
 
`;

export const StackTitle = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
 
`;

export const Hr = styled.hr`
  width: 130px;
  height: 4.5px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(121.57deg, #ffffff ,#5396e4  , #0909c2);
  border-radius: 10px;

`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #ffffff;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #ffffff;
font-size: 1.5rem;
`

