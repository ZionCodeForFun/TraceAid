import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const Header = () => {
  const location = useLocation();

  const token = useSelector((state) => state.auth.token);
  const userDetails = useSelector((state) => state.auth.user); 
  const userId = userDetails?._id || userDetails?.userId; 

  const [user, setUser] = useState(userDetails || null);


  const getHeaderText = (pathname) => {
    const p = (pathname || "").toLowerCase();

    if (p === "/organization" || p === "/organization/dashboard") {
      return {
        title: "Welcome Back",
        subtitle: "Quick overview of your campaigns performance",
      };
    }

    if (p.includes("/mycampaigns")) {
      return {
        title: "My Campaigns",
        subtitle: "Manage and track all your active and past campaigns",
      };
    }

    if (p.includes("/wallet")) {
      return {
        title: "Wallet",
        subtitle:
          "Review campaign earnings, transactions, and withdraw funds securely",
      };
    }

    if (p.includes("/settings")) {
      return {
        title: "Settings",
        subtitle: "Update your organization details and preferences",
      };
    }

    return {
      title: "Welcome Back",
      subtitle: "Quick overview of your campaigns performance",
    };
  };

  const { title, subtitle } = getHeaderText(location.pathname);

  const getInitials = (orgName) => {
    if (!orgName) return "";
    const parts = orgName.trim().split(" ");
    return parts.length > 1
      ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
      : parts[0][0].toUpperCase();
  };

  const orgName = user?.organizationName || "Organization";
  const initials = getInitials(orgName);

  return (
    <Container>
      <article className="wrapper">
        <div className="right">
          <p className="welcome">{title}</p>
          <p className="small">{subtitle}</p>
        </div>
        <div className="left">
          <div className="profile_holder">
            {user?.profilePicture?.imageUrl ? (
              <img
                src={`${user.profilePicture.imageUrl}?t=${Date.now()}`}
                alt="profile pic"
              />
            ) : (
              <div className="initials">{initials}</div>
            )}
          </div>
          <div className="name_holder">
            <p className="name">{orgName}</p>
            <p className="email">{user?.email}</p>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 84px;
  position: fixed;
  right: 0;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid #ccc;
  z-index: 99;

  .wrapper {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
      justify-content: center;
      padding-left: 52px;

      .welcome {
        font-size: 24px;
        font-weight: 500;
        color: var(--NeutralBlack);
      }
      .small {
        font-size: 14px;
        font-weight: 400;
        color: var(--NeutralBlack);
      }
    }

    .left {
      display: flex;
      align-items: center;
      padding-right: 52px;
      gap: 10px;

      .profile_holder {
        width: 50px;
        height: 50px;
       
     
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
           border-radius: 50px;
        }
        .initials {
          width: 50px;
          height: 50px;
          background-color: #354f25;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .name_holder {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 14px;
          font-weight: 400;
        }
        .email {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 480px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  z-index: 1000;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
      text-align: left;

      .welcome {
        font-size: 1rem;
        font-weight: 600;
        color: #1f2937;
        line-height: 1.2;
      }

      .small {
        font-size: 0.8rem;
        color: #6b7280;
        line-height: 1.3;
      }
    }

    .left {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      .profile_holder {
        width: 38px;
        height: 38px;
        flex-shrink: 0;

        img,
        .initials {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }

        .initials {
          background-color: #617437;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .name_holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.2;

        .name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1f2937;
        }

        .email {
          font-size: 0.75rem;
          color: #6b7280;
        }
      }
    }
  }
}

`;
