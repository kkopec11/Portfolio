import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillFilePdf } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';

import { Container, DivTitle, DivLinks, DivCVpdf, PdfIcon, DivIcons, NavLink, Span, PortfolioTitle, HiddenText } from './styles';
import { SocialIcons } from '../../styles/components/globalComponents';

const Header = () => (
    <Container>
        <DivTitle>
            <Link href="/">
                <PortfolioTitle>
                    <BsPersonSquare size="2.8rem" /> <Span>Portfolio</Span>
                </PortfolioTitle>
            </Link>
        </DivTitle>
        <DivLinks>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </DivLinks>
        <DivCVpdf>
            <PdfIcon  >
                <AiFillFilePdf download size="4rem" />
                <HiddenText href="../../public/Krzysztof.Kopeć.CV.pdf" download>Download my CV</HiddenText>
            </PdfIcon>
        </DivCVpdf>
        <DivIcons>
            <SocialIcons href="https://github.com/kkopec11">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instragram.com">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.facebook.com/krzysiek.kopec.58">
                <AiFillFacebook size="3rem" />
            </SocialIcons>
        </DivIcons>
    </Container >
);

export default Header;
