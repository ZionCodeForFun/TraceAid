import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccountType } from "../../global/accountTypeSlice";

const RoleModal = ({ onClose }) => {
  const [activeRole, setActiveRole] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setActiveRole(type);
    dispatch(setAccountType(type));
    navigate("/signup");
  };

  return (
    <Container onClick={onClose}>
      <article className="wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="logo_holder">
          <img src={logo} alt="logo" />
        </div>

        <div className="intro">
          <p className="big_text">Start your TraceAid journey today!</p>
          <p className="small_text">Select your role to continue</p>
        </div>

        <section className="select_wrapper">
          <section className="select_holder">
           
            <div
              className={`select1 ${
                activeRole === "individual" ? "active" : ""
              }`}
              onClick={() => handleSelect("individual")}
            >
              <p className="individual">Individual</p>
              <p className="text">Select this if you’re a person looking to volunteer, donate.</p>
            </div>

           
            <div
              className={`select2 ${
                activeRole === "organization" ? "active" : ""
              }`}
              onClick={() => handleSelect("organization")}
            >
              <p className="organization">Organization</p>
              <p className="text">
               Select this if you’re an NGO looking to create campaigns and raise funds
              </p>
            </div>
          </section>

          <footer className="already">
            <p>Already have an account?</p>
             <span  onClick={()=>navigate("/login")}>Log In</span>
          </footer>
        </section>
      </article>
    </Container>
  );
};

export default RoleModal;

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;

  .wrapper {
    width: 35%;
    height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .logo_holder {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 71px;

      img {
        object-fit: contain;
        height: 29px;
      }
    }

    .intro {
      display: flex;
      width: 100%;
      height: 120px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      .big_text {
        font-size: 40px;
        font-weight: 700;
        color: var(--NeutralGrey4-Text);
        text-align: center;
      }
      .small_text {
        font-weight: 500;
        font-size: 24px;
        color: var(--Primary700);
      }
    }

    .select_holder {
      display: flex;
      flex-direction: column;
      height: 264px;
      width: 100%;
      gap: 20px;

      .select1,
      .select2 {
        height: 122px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 12px;
        justify-content: center;
        padding-left: 15px;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
        }
      }

      .select1 {
        background-color: #f7f6f6;
        color: var(--NeutralGrey4-Text);

      }
      .select2 {
        background-color: #f7f6f6;
        color: var(--NeutralGrey4-Text);
      }

      .active {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
      }

      .individual,
      .organization {
        font-size: 24px;
        font-weight: 700;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
        width: 390px;
      }
    }

    .select_wrapper {
      .already {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin-top: 34px;
        height: 19px;
        gap: 6px;

        p {
          font-size: 16px;
          font-weight: 400;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          color: var(--Primary700);
          cursor: pointer;
        }
      }
    }
  }
`;
