import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import styled from 'styled-components';
import FooterImg from "../assets/logo2.png"; 
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const nav = useNavigate();
    
    const NavLink = ({ to, children }) => (
        <li onClick={() => nav(to)}>{children}</li>
    );

    return (
        <FooterContainer>
            <FooterContent>
                <CommunitySection>
                    <Logo>
                        <img src={FooterImg} alt="TraceAid Logo" />
                        <span>TraceAid</span>
                    </Logo>

                    <CommunityText>
                        <CommunityHeading>Join Our Community</CommunityHeading>
                        <p>
                            Get exclusive updates from the TraceAid community, explore the social impact landscape across Africa and beyond.
                        </p>
                    </CommunityText>

                    <SocialIcons>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><RiTwitterXLine /></a>
                    </SocialIcons>
                </CommunitySection>

                <FooterColumn>
                    <ColumnTitle>Product</ColumnTitle>
                    <ul>
                        <li>For Individuals</li>
                        <li>For Organisations</li>
                        <li>Pricing</li>
                        <li>Explore Campaigns</li>
                    </ul>
                </FooterColumn>

                <FooterColumn>
                    <ColumnTitle>Company</ColumnTitle>
                    <ul>
                        <NavLink to="/about">About</NavLink>
                        <li>Blog</li>
                        <NavLink to="/termsandcon">Terms & Conditions</NavLink>
                        <NavLink to="/contact_us">Contact Us</NavLink>
                    </ul>
                </FooterColumn>

            </FooterContent>
            
            <FooterCopyright>
                © 2025 TraceAid | All Rights Reserved
            </FooterCopyright>
        </FooterContainer>
    );
};

export default Footer;

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #000000;
    color: #ffffff;
    padding: 3rem 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        padding: 4rem 10%;
    }
`;

export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem; 
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        > * {
            flex-basis: 100%;
        }
    }

    @media (min-width: 1025px) {
        > div:first-child { 
            flex-basis: 40%;
        }
        > div:nth-child(2),
        > div:nth-child(3) {
            flex-basis: 25%;
        }
        justify-content: flex-start;
        gap: 8%;
    }
`;

export const CommunitySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: unset; 
    
    @media (max-width: 768px) {
        align-items: flex-start;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    
    img {
        width: 20px; 
        height: 20px;
        object-fit: contain;
        margin-right: 0.5rem;
    }
    
    span {
        font-size: 1.2rem;
        font-weight: 600;
        color: #ffffff;
    }
`;

export const CommunityText = styled.div`
    margin-bottom: 1.5rem;

    p {
        color: #aaaaaa;
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        max-width: 450px; 
    }
`;

export const CommunityHeading = styled.h3`
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
        color: #000000;
        background: #ffffff;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: background-color 0.3s ease;
        
        &:hover {
            background-color: #dddddd;
        }
    }
`;

export const FooterColumn = styled.div`
    min-width: 150px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin-top: 0;

        li {
            font-size: 0.95rem;
            font-weight: 400;
            margin-bottom: 0.8rem;
            color: #aaaaaa;
            cursor: pointer;
            transition: color 0.3s ease;

            &:hover {
                color: #ffffff;
            }
        }
    }
`;

export const ColumnTitle = styled.h4`
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
`;

export const FooterCopyright = styled.div`
    width: 100%;
    text-align: left;
    margin-top: 5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #3b3b3b;
    font-size: 0.9rem;
    color: #aaaaaa;
    letter-spacing: 0.3px;

    @media (max-width: 768px) {
        margin-top: 3rem;
    }
`;