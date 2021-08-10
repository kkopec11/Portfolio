import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './styles';
import { SocialIcons } from '../../styles/components/globalComponents';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:508-400-121">508-400-121</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:krzysztof.praca19@gmail.com">krzysztof.praca19@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>“Code is like humor. When you have to explain it, it’s bad.” – Cory House</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/kkopec11">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/kkopec19/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/k_kopec_/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.facebook.com/krzysiek.kopec.58">
                        <AiFillFacebook size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
