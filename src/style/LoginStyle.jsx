import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: var(--NeutralGrey4-Text);
  background-color: transparent;

  .wrapper .ant-form-item-label {
    padding: 0 !important;
    margin-bottom: 2px;
  }

  .wrapper {
    width: 480px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--Neutral_Offwhite);
    border-radius: 28px;
    border: 0.5px solid var(--Neutral_Grey1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    height: auto;

    .img_holder {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        height: 26px;
        width: auto;
      }
    }

    img {
      width: 90px;
      height: 28px;
      object-fit: contain;
      margin-bottom: 15px;
    }

    .content_holder {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      gap: 16px;

      .input {
        height: 42px;
        border-radius: 10px;
        font-size: 14px;
      }

      .forgotpassword a:hover {
        font-weight: bold;
      }

      .title {
        gap: 6px;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        margin-bottom: 15px;

        .log {
          font-size: 28px;
          font-weight: 700;
          color: var(--NeutralGrey4-Text);
        }

        .text {
          font-size: 14px;
          color: var(--NeutralGrey4-Text);
          font-weight: 400;
        }
      }

      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 24px;
        margin-top: 10px;

        .google_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #ffffff;
          color: #333333;
          border: 1.5px solid #c1e86e;
          font-weight: 600;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          width: 300px;
          max-width: 400px;

          svg {
            font-size: 1.2rem;
          }

          &:hover {
            background-color: #f3f8e4;
            border-color: #a5d35d;
          }

          @media (min-width: 480px) and (max-width: 768px) {
            font-size: 0.85rem;
            padding: 0.55rem 1rem;
            gap: 6px;
            svg {
              font-size: 1rem;
            }
          }

          @media (min-width: 600px) and (max-width: 900px) {
            font-size: 0.9rem;
            padding: 0.6rem 1.1rem;
            gap: 7px;
            svg {
              font-size: 1.1rem;
            }
          }
        }

        .line-text {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #555;
          margin: 5px 0;
          gap: 7px;
          font-weight: 400;
          font-size: 14px;
          width: 100%;
          max-width: 400px;

          &::before,
          &::after {
            content: "";
            flex: 1;
            margin: 0 5px;
            border-bottom: 1px solid #aaa;
          }
        }
      }

      .login_btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-weight: 600;
        font-size: 15px;
        height: 42px;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }

      .custom-checkbox {
        color: #333;
        font-weight: 500;
        font-size: 14px;

        a {
          color: var(--NeutralBlack);
        }

        .ant-checkbox-inner {
          border-color: var(--NeutralGrey4-Text);
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
        margin-top: 20px;
        gap: 6px;

        p {
          font-size: 14px;
          font-weight: 400;
        }
        span {
          font-size: 14px;
          font-weight: 500;
          color: var(--Primary700);
        }
      }
    }

    @media (max-width: 900px) {
      max-width: 600px;
      padding: 35px;

      .title .log {
        font-size: 24px;
      }
    }

    @media (max-width: 768px) {
      width: 85%;
      padding: 25px;
      border-radius: 20px;

      .title .log {
        font-size: 22px;
      }

      .footer .google_btn {
        font-size: 13px;
      }

      .footer .line-text {
        font-size: 12px;
      }

      .login_btn {
        font-size: 13px;
      }
    }

    @media (max-width: 480px) {
      width: 95%;
      padding: 15px;
      border-radius: 18px;

      .title .log {
        font-size: 18px;
      }

      .title .text {
        font-size: 11px;
      }

      .footer .google_btn {
        font-size: 12px;
        padding: 8px 10px;
        width: 100%;
      }

      .footer .line-text {
        font-size: 11px;
        margin: 10px 0;
      }

      .login_btn {
        font-size: 12px;
        padding: 8px 10px;
      }

      .custom-checkbox {
        font-size: 12px;
      }
    }
  }
`;
