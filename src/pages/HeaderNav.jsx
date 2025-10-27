import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../global/authSlice";


const getInitials = (name = "") => {
  const split = name.trim().split(" ");
  const first = split[0]?.charAt(0).toUpperCase() || "";
  const last = split[1]?.charAt(0).toUpperCase() || "";
  return `${first}${last}`;
};

const HeaderNav = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const logoutUser = () => {
    dispatch(logout());
    setOpenDropdown(false);
    nav("/");
  };
  return (
    <NavBar>
      <LeftSection>
        <LogoContainer onClick={() => nav("/")}>
          <img src={logoImg} alt="TraceAid Logo" />
          <div className="divider"></div>
        </LogoContainer>

        <NavLinks>
          <li onClick={() => nav("/explore")}>Explore Campaigns</li>
          <li onClick={() => nav("/how_it_works")}>How it Works</li>
          <li onClick={() => nav("/explore")}>Start a Campaign</li>
        </NavLinks>
      </LeftSection>

      {!user ? (
        <ButtonGroup>
          <button className="login" onClick={() => nav("/login")}>
            Login
          </button>
          <button className="create" onClick={() => nav("/role_modal")}>
            Create an Account
          </button>
        </ButtonGroup>
      ) : (
        <ProfileWrapper onClick={toggleDropdown}>
          <div className="initials">{getInitials(user?.name)}</div>

          <div className="info">
            <h4>{user?.name}</h4>
            <p>{user?.email}</p>
          </div>

          <RiArrowDropDownLine
            className={`arrow ${openDropdown ? "rotate" : ""}`}
          />
          {openDropdown && (
            <DropdownMenu>
              <li onClick={() => nav("/explore")}>My Donations</li>
              <li onClick={() => nav("/explore")}>Saved Campaigns</li>
              <li onClick={() => nav("/explore")}>My Account Settings</li>
              <li onClick={logoutUser} className="logout">
                Logout
              </li>
            </DropdownMenu>
          )}
        </ProfileWrapper>
      )}
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
  gap: 1.2rem;

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

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  position: relative;

  .initials {
    width: 42px;
    height: 42px;
    background-color: #354f25;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    h4 {
      font-size: 0.9rem;
      font-weight: 600;
      color: #1a1a1a;
    }
    p {
      font-size: 0.75rem;
      color: #555;
    }
  }

  .arrow {
    font-size: 1.4rem;
    color: #1a1a1a;
    transition: transform 0.3s ease;
  }

  .arrow.rotate {
    transform: rotate(180deg);
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  width: 180px;
  background: #fff;
  border-radius: 8px;
  padding: 0.7rem 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  list-style: none;
  z-index: 100;

  li {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    color: #1a1a1a;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: #eaf2d7;
    }
  }

  .logout {
    color: #b30000;
    font-weight: 600;

    &:hover {
      background: #ffe0e0;
    }
  }
`;
