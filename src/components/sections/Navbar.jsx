import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MenuRounded } from '@mui/icons-material';
import logo from '../images/logoclub.svg';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    color: red;
`;

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

const NavLogo = styled.img`
    width: 80%;
    padding: 0 6px;
    position: relative;
    align-items: start;
    flex-direction: column;
    flex: row;
    color: inherit;
    height: 55px;
    border-radius: 10px;
    margin-top: 12px;
    @media only screen and (max-width: 760px) {
        height: 45px;
        display: none;
    }
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    font-size: 25px;
    cursor: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    @media screen and (max-width: 940px) {
        font-size: 20px;
    }
    @media screen and (max-width: 1230px) {
        font-size: 22px;
    }
    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
    &:hover {
        // color:${({ theme }) => theme.primary};
        color: red;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    width: 80%;
    height: 100%;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const MobileIcon = styled.div`
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    display: none;
    @media screen and (max-width: 760px) {
        display: block;
    }
`;

const MobileMenu = styled.ul`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    padding: 0 6px;
    list-style: none;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    display: none;
    @media screen and (max-width: 760px) {
        display: inherit;
    }
    position: absolute;
    top: 80px;
    right: 0;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef(null);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            iconRef.current && !iconRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo src={logo} alt='clubLogo' />
                <MobileIcon ref={iconRef} onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{ color: 'inherit', fontSize: '25px' }} />
                </MobileIcon>

                <NavItems>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Events">Events</NavLink>
                    <NavLink href="#Memories">Memories</NavLink>
                    <NavLink href="#Team">Team</NavLink>
                    <NavLink href="#Contact">Contact</NavLink>
                </NavItems>

                {isOpen && (
                    <MobileMenu ref={menuRef} isOpen={isOpen}>
                        <NavLink href="#About" onClick={handleLinkClick}>About</NavLink>
                        <NavLink href="#Events" onClick={handleLinkClick}>Events</NavLink>
                        <NavLink href="#Memories" onClick={handleLinkClick}>Memories</NavLink>
                        <NavLink href="#Team" onClick={handleLinkClick}>Team</NavLink>
                        <NavLink href="#Contact" onClick={handleLinkClick}>Contact</NavLink>
                    </MobileMenu>
                )}

                <ButtonContainer></ButtonContainer>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
