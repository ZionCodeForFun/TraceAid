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
  background-color: white;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 550px;
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
          object-fit: cover;
          border-radius: 50%;
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

  @media (min-width: 600px) and (max-width: 900px) {
    height: 70px;

    .wrapper {
      gap: 200px;

      .right {
        padding-left: 25px;

        .welcome {
          font-size: 20px;
        }

        .small {
          font-size: 13px;
        }
      }

      .left {
        padding-right: 25px;

        .profile_holder {
          width: 45px;
          height: 45px;
        }

        .name_holder {
          .name {
            font-size: 13px;
          }
          .email {
            font-size: 11px;
          }
        }
      }
    }
  }

  /* ========= MOBILE (480px–600px) ========= */
  @media (min-width: 480px) and (max-width: 600px) {
    height: 70px;

    .wrapper {
      gap: 100px;

      .right {
        padding-left: 20px;

        .welcome {
          font-size: 18px;
        }

        .small {
          font-size: 12px;
        }
      }

      .left {
        padding-right: 20px;
        gap: 8px;

        .profile_holder {
          width: 40px;
          height: 40px;
        }

        .name_holder {
          .name {
            font-size: 12px;
          }
          .email {
            font-size: 10px;
          }
        }
      }
    }
  }

  /* ========= EXTRA SMALL (300px–480px) ========= */
  /* @media (min-width: 300px) and (max-width: 480px) {
    height: auto;
    padding: 10px 0;

    .wrapper {
      gap: 10px;
      text-align: center;
      justify-content: center;
      align-items: center;

      .right {
        display: "";

        .welcome {
          font-size: 16px;
          font-weight: 600;
        }

        .small {
          font-size: 11px;
          line-height: 1.4;
        }
      }

      .left {
        flex-direction: column;
        padding: 0;
        gap: 5px;

        .profile_holder {
          width: 40px;
          height: 40px;
        }

        .name_holder {
          align-items: center;

          .name {
            font-size: 13px;
            font-weight: 500;
          }

          .email {
            font-size: 11px;
            color: #666;
          }
        }
      }
    }
  } */

  /* ========= MOBILE + EXTRA SMALL (up to 600px) ========= */
  @media (max-width: 600px) {
    height: 60px;
    padding: 0 15px;

    .wrapper {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0;

      /* Left and right alignment */
      .right {
        padding: 0;
        .welcome {
          font-size: 18px;
          font-weight: 600;
        }

        /* Hide subtitle on mobile */
        .small {
          display: none;
        }
      }

      .left {
        padding: 0;
        gap: 0;

        .profile_holder {
          width: 40px;
          height: 40px;
        }

        /* Hide name and email on mobile */
        .name_holder {
          display: none;
        }
      }
    }
  }

  /* ========= EXTRA SMALL (min-width: 300px to max-width: 480px) ========= */
  @media (min-width: 300px) and (max-width: 480px) {
    height: 75px;
    padding: 0 10px;

    .wrapper {
      justify-content: space-between;
      align-items: center;
      gap: 0;

      .right {
        .welcome {
          font-size: 16px;
          font-weight: 600;
          padding-left: 75px;
        }
        .small {
          display: none;
        }
      }

      .left {
        .profile_holder {
          width: 30px;
          height: 30px;
          padding-right: 45px;
        }

        .name_holder {
          display: none;
        }
      }
    }
  }

  /* ========= MEDIUM DESKTOP (900px–1200px) ========= */
  @media (min-width: 900px) and (max-width: 1200px) {
    .wrapper {
      gap: 300px;

      .right {
        padding-left: 40px;
        .welcome {
          font-size: 22px;
        }
        .small {
          font-size: 13.5px;
        }
      }

      .left {
        padding-right: 40px;
        .profile_holder {
          width: 45px;
          height: 45px;
        }
      }
    }
  }
`;
