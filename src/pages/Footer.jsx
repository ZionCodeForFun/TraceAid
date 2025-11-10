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
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;

    @media (max-width: 480px) {
    padding: 3rem 6%;
    align-items: flex-start;
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

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

    @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 3rem;
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
  }

  p {
    color: #ffffff;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 100%;

    p {
      width: 95%;
      font-size: 0.9rem;
      line-height: 1.45rem;
    }
  }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

    @media (max-width: 480px) {
    justify-content: flex-start;
    margin: 1rem 0 2rem;

    a {
      width: 42px;
      height: 42px;
      font-size: 1.35rem;
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
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9rem;
      font-weight: 300;
      margin-bottom: 0.6rem;
      color: #ffffff;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }

   @media (max-width: 480px) {
    width: 100%;
    min-width: 100%;
    text-align: left;

    ul li {
      font-size: 0.95rem;
      margin-bottom: 0.85rem;
    }
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #3b3b3b;
  font-size: 0.9rem;
  color: #ffffff;
  letter-spacing: 0.3px;
  margin-top: 5.5rem;

   @media (max-width: 480px) {
    margin-top: 4rem;
    padding-top: 1.4rem;
    font-size: 0.85rem;
    text-align: center;
  }
`;





