import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
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

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  console.log("userData", userData);

  useEffect(() => {
    if (!auth?.user?._id) return;

    if (
      userData?.firstName &&
      userData?.lastName &&
      (userData?.profilePicture || userData?.profilePicture === null)
    ) {
      return;
    }

    const storedToken = auth.token;
    if (!storedToken) return;

    const getUserData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BaseUrl}/user/${auth.user._id}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
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

  const initials = fullName
    ? getInitials(fullName)
    : getInitials(userData?.email);

  const logoutUser = () => {
    dispatch(logout());
    setOpenDropdown(false);
    nav("/login");
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

      {!userData ? (
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

export const NavBar = styled.nav`
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
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); */
  cursor: pointer;

  &.scrolled {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  }
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
      color: #617437;
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

  .profile-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }

  .initials {
    width: 42px;
    height: 42px;
    background-color: #354f25;
    color: #ffffff;
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
      color: #3b7a57;
      transition: color 0.3s ease;
    }

    &:hover .icon {
      color: #000;
    }
  }

  .logout .icon {
    color: #b30000;
  }

  .logout:hover .icon {
    color: #7a0000;
  }
`;
