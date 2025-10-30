import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--NeutralGrey4-Text);

  .wrapper {
    width: 665px;
    padding: 70px;

    display: flex;
    height: 1100px;
    flex-direction: column;
    background-color: var(--Neutral_Offwhite);
    border-radius: 40px;
    align-items: center;
    border: 0.5px solid var(--Neutral_Grey1);
    .img_holder {
      width: 100%;
      height: 71px;
      display: flex;
      justify-content: center;
      margin-bottom: 25px;

      img {
        object-fit: cover;
        height: 29px;
      }
    }

    .content_holder {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      justify-content: center;
      height: 100%;
      .input {
        height: 48px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 400;
        color: var(--Neutral_Grey1);
      }

      .title {
        display: flex;
        flex-direction: column;
        width: 525px;
        height: 75px;
        gap: 8px;
        text-align: center;

        margin-bottom: 20px;

        .sign {
          color: var(--NeutralGrey4-Text);
          font-weight: 700;

          font-size: 40px;
          height: 48px;
        }
        .text {
          font-size: 16px;
          color: var(--NeutralGrey4-Text);
          font-weight: 400;
          height: 19px;
        }
      }
   
      .google_holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 150px;
        gap: 34px;
        width: 100%;

        .google_btn {
          background-color: white;
          border: 2px solid var(--Primary700);          color: var(--NeutralGrey4-Text);
          font-size: 16px;
          font-weight: 600;

          padding: 12px 30px;
          height: 44px;
          &:hover {
            background-color: var(--Primary200);
          }
        }

        .line-text {
          display: flex;
          align-items: center;
          text-align: center;
          color: #555;
          margin: 5px 0;
          gap: 7px;
          font-weight: 400;
          font-size: 16px;
          width: 525px;
        }

        .line-text::before,
        .line-text::after {
          content: "";
          flex: 1;

          border-bottom: 1px solid #c0c0c0;
          background-color: #333;
        }
        p {
          font-weight: 400;
          font-size: 16px;
        }
      }

      .signup_btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-weight: 600;
        font-size: 16px;
        height: 43px;
        border-radius: 8px;
        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }

      .custom-checkbox {
        color: #333;
        font-weight: 500;

        a {
          color: var(--NeutralBlack);
        }

        .ant-checkbox-inner {
          border-color: #c0c0c0;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: var(--NeutralBlack);
          border-color: var(--NeutralGrey4-Text);
        }
      }
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
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 30px 15px;

    .wrapper {
      width: 95%;
      padding: 25px;
      border-radius: 30px;
      height: max-content;
      .content_holder {
        min-width: 290px;

        .title h2 {
          font-size: 22px;
        }
        .title p {
          font-size: 13px;
        }
      }
      .already {
        width: 100%;
        justify-content: center;
      }
      .google_btn {
        font-size: 14px;
        flex-wrap: nowrap;
      }

      .signup_btn {
        font-size: 14px;
        height: 38px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      max-width: 700px;
      padding: 40px;

      .title h2 {
        font-size: 26px;
      }
    }
  }
`;
