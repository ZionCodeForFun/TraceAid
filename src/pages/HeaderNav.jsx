import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "../global/authSlice";
import { AiOutlineGift } from "react-icons/ai";
import { CiBookmark, CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import axios from "axios";

const HeaderNav = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userData = auth.user;

  const [openDropdown, setOpenDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

 

  useEffect(() => {
    if (!auth?.user?._id) return;

    if (
      userData?.firstName &&
      userData?.lastName &&
      (userData?.profilePicture || userData?.profilePicture === null)
    )
      return;

    const storedToken = auth.token;
    if (!storedToken) return;

    const getUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BaseUrl}/user/${auth.user._id}`,
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );
        dispatch(setUser(res.data.data));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [auth?.user?._id, auth?.token]);

  const getInitials = (value) => {
    if (!value) return "";
    const parts = value.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();
  };

  const fullName =
    userData?.firstName && userData?.lastName
      ? `${userData.firstName} ${userData.lastName}`
      : userData?.organizationName || null;

  const initials = fullName ? getInitials(fullName) : getInitials(userData?.email);

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

        <NavLinks showMenu={showMenu}>
          <li onClick={() => nav("/campaign_data")}>Explore Campaigns</li>
          <li onClick={() => nav("/how_it_works")}>How it Works</li>
          <li onClick={() => nav("/explore")}>Start a Campaign</li>

        </NavLinks>

        <Hamburger onClick={toggleMenu}>
          <RiMenuLine />
        </Hamburger>
      </LeftSection>

      {!userData && (
        <ButtonGroupDesktop>
          <button className="login" onClick={() => nav("/login")}>
            Login
          </button>
          <button className="create" onClick={() => nav("/role_modal")}>
            Create an Account
          </button>
        </ButtonGroupDesktop>
      )}

      {userData && (
        <ProfileWrapper onClick={toggleDropdown}>
          {userData?.profilePicture?.imageUrl ? (
            <img
              src={`${userData.profilePicture.imageUrl}?t=${Date.now()}`}
              className="profile-img"
              alt="profile"
            />
          ) : (
            <div className="initials">{initials}</div>
          )}

          <div className="info">
            <h4>{fullName}</h4>
            <p>{userData?.email}</p>
          </div>

          <RiArrowDropDownLine
            className={`arrow ${openDropdown ? "rotate" : ""}`}
          />

          {openDropdown && (
            <DropdownMenu>
              {userData.role === "donor" && (
                <li onClick={() => nav("/my_donations")}>
                  <AiOutlineGift className="icon" /> My Donations
                </li>
              )}
              {userData.role === "fundraiser" && (
                <li onClick={() => nav("/organization")}>
                  <AiOutlineGift className="icon" />
                  Fundraiser Dashboard
                </li>
              )}
              <li onClick={() => nav("/saved_campaigns")}>
                <CiBookmark className="icon" /> Saved Campaigns
              </li>
              <li onClick={() => nav("/profile_settings")}>
                <CiSettings className="icon" /> My Account Settings
              </li>
              <li onClick={logoutUser} className="logout">
                <MdOutlineLogout className="icon" /> Logout
              </li>
            </DropdownMenu>
          )}
        </ProfileWrapper>
      )}
    </NavBar>
  );
};

export default HeaderNav;


const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  padding: 1rem 2%;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  transition: box-shadow 0.3s ease;

  &.scrolled {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    justify-content: center;
    height: 65px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  img {
    height: 35px;

    @media (max-width: 768px) {
      height: 40px; 
    }

    @media (min-width: 600px) and (max-width: 900px) {
      height: 32px;
    }
  }

  .divider {
    width: 1.5px;
    height: 45px;
    background-color: #a8a8a8;

    @media (max-width: 768px) {
      display: none; 
    }

    @media (min-width: 600px) and (max-width: 900px) {
      height: 40px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.2rem;

  li {
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #617437;
    }

    button {
      width: 100%;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 0;
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    width: 200px;
    gap: 1rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    li {
      font-size: 0.8rem;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ButtonGroupDesktop = styled.div`
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

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.5rem 1.2rem;
      font-size: 0.8rem;
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

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  position: relative;

  .profile-img,
  .initials {
    width: 42px;
    height: 42px;
  }

  .initials {
    font-size: 0.95rem;
  }

  .info h4 {
    font-size: 0.9rem;
  }

  .info p {
    font-size: 0.75rem;
  }

  .arrow {
    font-size: 1.4rem;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  height: 200px;
  background: #fff;
  border-radius: 8px;
  padding: 0.9rem 1.2rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  list-style: none;
  z-index: 100;
  border: 1px solid #c0c0c0;

  li {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-bottom: 1.3rem;

    .icon {
      font-size: 1.1rem;
    }
  }
`;
