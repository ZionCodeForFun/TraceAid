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
    width: 480px; /* reduced from 665px */
    padding: 40px; /* reduced from 70px */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--Neutral_Offwhite);
    border-radius: 28px; /* smoother corners */
    border: 0.5px solid var(--Neutral_Grey1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    height: auto; /* removed fixed 850px */

    .img_holder {
      width: 100%;
      height: 60px; /* reduced from 75px */
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        height: 26px; /* smaller logo */
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
          font-size: 28px; /* reduced from 40px */
          font-weight: 700;
          color: var(--NeutralGrey4-Text);

          @media (max-width: 768px) {
            font-size: 22px;
          }
          @media (max-width: 480px) {
            font-size: 18px;
          }
        }

        .text {
          font-size: 14px; 
          color: var(--NeutralGrey4-Text);
          font-weight: 400;

          @media (max-width: 480px) {
            font-size: 11px;
          }
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
          background-color: white;
          border: 2px solid var(--Primary700);
          color: var(--NeutralGrey4-Text);
          font-size: 14px; /* reduced */
          font-weight: 600;
          padding: 10px 20px;
          height: 42px;
          width: 400px;
     
          border-radius: 10px;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--Primary200);
          }

          @media (max-width: 768px) {
            font-size: 13px;
          }

          @media (max-width: 480px) {
            font-size: 12px;
            padding: 8px 10px;
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

          @media (max-width: 480px) {
            font-size: 11px;
            margin: 10px 0;
          }

          &::before,
          &::after {
            content: "";
            flex: 1;
            margin: 0 5px;
            border-bottom: 1px solid #aaa;
          }
        }

        .already {
          display: flex;
          align-items: center;
          justify-content: center;
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

        @media (max-width: 768px) {
          font-size: 13px;
        }

        @media (max-width: 480px) {
          font-size: 12px;
          padding: 8px 10px;
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

        @media (max-width: 480px) {
          font-size: 12px;
        }
      }
    }

    
    @media (max-width: 768px) {
      width: 85%;
      padding: 25px;
      border-radius: 20px;
    }

    @media (max-width: 480px) {
      width: 95%;
      padding: 15px;
      border-radius: 18px;
    }

    @media screen and (min-width: 600px) and (max-width: 900px) {
      max-width: 600px;
      padding: 35px;
      .title .log {
        font-size: 24px;
      }
    }
  }
`;
