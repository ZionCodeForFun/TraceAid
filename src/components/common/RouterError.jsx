import React from "react";
import styled from "styled-components";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const RouterError = () => {
  const nav = useNavigate();

  return (
    <NotFound>
      <div className="NotFoundContainer">
        <article className="holder">
          <div className="top">
            <BsExclamationCircle size={60} color="#E7000B" />
          </div>
          <h3
            style={{
              fontSize: "50px",
              fontWeight: 400,
              lineHeight: "60px",
              color: "##1E2939",
            }}
          >
            404
          </h3>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "##1E2939",
            }}
          >
            Page Not Found
          </p>
          <p
            style={{
              FontWeight: 400,
              lineHeight: "24px",
              fontSize: "16px",
              color: "##4A5565",
            }}
          >
            Sorry, we couldn't find the page you're looking for. It might <br />
            have been moved or deleted.
          </p>
        </article>

        <section className="button-holder">
          <button className="GoBack-btn" onClick={() => nav(-1)}>
            <IoMdArrowRoundBack size={14} color="##0A0A0A" />
            Go Back
          </button>
          <button className="HomePage-btn2" onClick={() => nav("/")}>
            <CiHome size={17} color="##030213" />
            Back To HomePage
          </button>
        </section>
      </div>
    </NotFound>
  );
};

export default RouterError;

const NotFound = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .NotFoundContainer {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

    .holder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
      margin: 0.3rem;
      .top {
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffe2e2;
        border-radius: 50px;
        padding: 20px;
      }
    }
    .button-holder {
      height: max-content;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .GoBack-btn {
        padding: 8px;
        cursor: pointer;
        border: 1px solid #bcb9b9;
        color: black;
        background-color: transparent;
        margin-top: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        &:hover {
          transition: 0.3s;
          background-color: #000;
          color: white;
        }
      }
      .HomePage-btn2 {
        padding: 8px;
        cursor: pointer;
        margin-top: 10px;
        border: none;
        color: #ffffff;
        background-color: #000000;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;
