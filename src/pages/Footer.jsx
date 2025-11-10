import React from 'react';
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import styled from 'styled-components';
import  FooterImg from "../assets/logo1.png";

import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const nav = useNavigate();
  return (
   <FooterContainer>
             <FooterContent>
               <FooterLogo>
                 <img src={FooterImg} alt="TraceAid Logo" />
                 <h3>Join our Community</h3>
                 <p>Get exclusive updates from the TraceAid community,explore <br />
                 the social impact landscape across Africa and beyond.</p>
                 <SocialIcons>
                   <a href="#" aria-label="Facebook">
                     <FaFacebook />
                   </a>
                   <a href="#" aria-label="Instagram">
                     <FaInstagram />
                   </a>
                   <a href="#" aria-label="Twitter">
                     <RiTwitterXLine />
                   </a>
                 </SocialIcons>
               </FooterLogo>
               <FooterColumn>
                 <h4>Product</h4>
                 <ul>
                   <li>For Individuals</li>
                   <li>For Organizations</li>
                   <li>Pricing</li>
                   <li>Explore Campaigns</li>
                 </ul>
               </FooterColumn>
               <FooterColumn>
                 <h4>Company</h4>
                 <ul>
                   <li onClick={()=> nav("/about")}>About</li>
                   <li>Blog</li>
                   <li onClick={()=> nav("/termsandcon")}>Terms & Conditions</li>
                   <li onClick={()=> nav("/contact_us")}>Contact Us</li>
                 </ul>
               </FooterColumn>
           </FooterContent>
   
           <FooterCopyright>© 2025 TraceAid|All rights reserved.</FooterCopyright>
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
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;

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

export const FooterLogo = styled.div`
  flex: 1;
  width: 100%;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h3 {
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
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
  gap: 1rem;

  a {
    color: #000000;
    background: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50%;
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
  flex: 1;
  min-width: 180px;

  h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 1rem;
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