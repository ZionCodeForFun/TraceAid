import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const nav =useNavigate()
  return (
    <NavBar>
      <LeftSection>
        <LogoContainer onClick={()=>nav('/')}>
          <img    src={logoImg} alt="TraceAid Logo" />
          <div className="divider"></div>
        </LogoContainer>

        <NavLinks>

          <li onClick={()=>nav('/explore')} >Explore Campaigns</li>
          <li  onClick={()=>nav('/how_it_works')}>How it Works</li>
          <li  onClick={()=>nav('/explore')}>Start a Campaign</li>
        </NavLinks>
      </LeftSection>

      <ButtonGroup>
        <button className="login" onClick={()=>nav('/login')}>Login</button>
        <button className="create" onClick={()=>nav('/role_modal')}>Create an Account</button>
      </ButtonGroup>
    </NavBar>
  );
};

export default HeaderNav;

export const NavBar = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 35px;
    object-fit: contain;
  }

  span {
    font-size: 1.3rem;
    font-weight: 700;
    color: #000000;
  }

  .divider {
    width: 1.5px;
    height: 45px;
    background-color: #a8a8a8;
    margin-left: 0.8rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.2rem; /* space between each link */

  li {
    font-size: 0.9rem;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #3b7a57;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  .login {
    border: 2px solid #617437;
    background: #ffffff;
    color: #333333;
    font-weight: bold;
    padding: 0.6rem 1.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #d5e3b9ff;
      color: #333333;
    }
  }

  .create {
    background-color: #1a1a1a;
    border: none;
    color: #c1e86e;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #c1e86e;
      color: #1a1a1a;
    }
  }
`;
