import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import prf from "../../../assets/profile.png";

const Header = () => {
  const location = useLocation();

  const getHeaderText = (pathname) => {
    const p = (pathname || "").toLowerCase();

    if (p === "" || p === "") {
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

  const { title, subtitle } = getHeaderText(location.pathname) || {};

  return (
    <Container>
      <article className="wrapper">
        <div className="right">
          <p className="welcome">{title}</p>
          <p className="small">{subtitle}</p>
        </div>
        <div className="left">
          <div className="profile_holder">
            <img src={prf} alt="profile pic" />
          </div>
          <div className="name_holder">
            <p className="name">Slum2School</p>
            <p className="email">admin@donate.com</p>
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
        border-radius: 50px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
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
`;
