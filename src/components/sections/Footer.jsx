import React from "react";
import styled from "styled-components";
import {
  Instagram,
  LinkedIn,
  WhatsApp,
  X 
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 25px;
  cursor: none;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 650px;
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 12px;
  }
 
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
    cursor: none ;
  font-size: 2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 2rem;
  cursor: none ;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 01.3rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Hackathon Club</Logo>
        <Nav >
            <NavLink href = "#About">About</NavLink>
            <NavLink href = "#Events">Events</NavLink>
            <NavLink href = "#Team">Team</NavLink>
            <NavLink href = "#Memories">Memories</NavLink>
            <NavLink href = "#Contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={"https://chat.whatsapp.com/GOyeFOmxXBy32tdIGuKKtu"} target="display">
            <WhatsApp style={{  fontSize: '25px'}}/>
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://www.linkedin.com/company/gcoeara-hackathon-club/"} target="display">
            <LinkedIn style={{  fontSize: '25px'}}/>
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://www.instagram.com/hackathon_gcoeara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="display">
            <Instagram style={{  fontSize: '25px'}}/>
          </SocialMediaIcon>
          <SocialMediaIcon href={"https://x.com/HackaThon_Club"} target="display">
            <X style={{  fontSize: '25px'}}/>
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Hackathon Club . All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
