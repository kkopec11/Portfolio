import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';

import { Container, DivTitle, DivLinks, DivIcons, NavLink, SocialIcons, Span, PortfolioTitle } from './styles';

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
                    <NavLink>About me</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <NavLink>Contact</NavLink>
                </Link>
            </li>
        </DivLinks>
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
    </Container>
);

export default Header;
