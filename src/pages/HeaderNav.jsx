import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../global/authSlice";
import { AiOutlineGift } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import axios from "axios";

const HeaderNav = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  // console.log("this is user", user);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [fetchedUser, setFetchedUser] = useState(null);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  console.log("this is user", user);
  // console.log(import.meta.env.VITE_BaseUrl);

  useEffect(() => {
    if (!user?.user?._id) return;
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `${
            user?.user?.role === "donor"
              ? import.meta.env.VITE_BaseUrl
              : import.meta.env.VITE_BaseUrl2
          }/user/${user?.user?._id}`
        );
        // console.log("Getting", response.data.data);
        setFetchedUser(response?.data?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUserData();
  }, [user?.user?._id]);


  const getInitials = (name) => {
    if (!name || typeof name !== "string") return "";

    const parts = name.trim().split(" ").filter(Boolean);

    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

    const first = parts[0].charAt(0).toUpperCase();
    const last = parts[parts.length - 1].charAt(0).toUpperCase();
    return `${first}${last}`;
  };
  const fullName =
    fetchedUser?.firstName && fetchedUser?.lastName
      ? `${fetchedUser.firstName} ${fetchedUser.lastName}`
      : "";

  const logoutUser = () => {
    dispatch(logout());
    setOpenDropdown(false);
  };

  useEffect(() => {
    if (!user?.token && !user?.user) {
      nav("/");
    }
  }, [user?.token, user?.user]);

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

      {!user.user ? (
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
          <div className="initials">
            {getInitials(fullName || fetchedUser?.organizationName)}
          </div>

          <div className="info">
            <h4>{fullName || fetchedUser?.organizationName}</h4>
            <p>{fetchedUser?.email}</p>
          </div>

          <RiArrowDropDownLine
            className={`arrow ${openDropdown ? "rotate" : ""}`}
          />
          {openDropdown && (
            <DropdownMenu>
              {user.user.role === "donor" && (
                <li onClick={() => nav("/my_donations")}>
                  <AiOutlineGift className="icon" />
                  My Donations
                </li>
              )}

              {user.user.role === "fundraiser" && (
                <li onClick={() => nav("/organization")}>
                  <AiOutlineGift className="icon" />
                  Fundraiser Dashboard
                </li>
              )}
              <li onClick={() => nav("/saved_campaigns")}>
                <CiBookmark className="icon" />
                Saved Campaigns
              </li>
              <li onClick={() => nav("/explore")}>
                <CiSettings className="icon" />
                My Account Settings
              </li>
              <li onClick={logoutUser} className="logout">
                <MdOutlineLogout className="icon" />
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
