import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 913px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: var(--NeutralGrey4-Text);
  .wrapper .ant-form-item {
  }

  .wrapper .ant-form-item-label {
    padding: 0 !important;
    margin-bottom: 2px;
  }
  .wrapper {
    width: 665px;
    padding: 70px;
    display: flex;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--Neutral_Offwhite);
    border-radius: 40px;
    border: 0.5px solid var(--Neutral_Grey1);
    .img_holder {
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: cover;
        height: 29px;
        width: fit-content;
      }
    }

    @media (max-width: 768px) {
      width: 70%;
      height: auto;
      border-radius: 25px;
    }

    @media (max-width: 480px) {
      width: 95%;
      height: auto;
      padding: 15px;
      border-radius: 20px;
    }

    @media screen and (min-width: 600px) and (max-width: 900px) {
      max-width: 700px;
      padding: 40px;
      height: max-content;

      .title .sign {
        font-size: 26px;
      }
    }

    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
      margin-bottom: 20px;

      @media (max-width: 480px) {
        width: 80px;
        height: 25px;
      }
    }

    .content_holder {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 690px;
      gap: 20px;
      .input {
        height: 48px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 400;
        color: var(--Neutral_Grey1);
      }
      .forgotpassword a:hover {
        font-weight: bold;
      }
      .title {
        gap: 8px;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        height: max-content;
        margin-bottom: 20px;
        height: 71px;
        .log {
          color: var(--NeutralGrey4-Text);
          font-weight: 700;

          font-size: 40px;
          height: 48px;

          @media (max-width: 768px) {
            font-size: 20px;
          }

          @media (max-width: 480px) {
            font-size: 18px;
          }
        }

        .text {
          font-size: 16px;
          color: var(--NeutralGrey4-Text);
          font-weight: 400;
          height: 19px;

          @media (max-width: 480px) {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          margin-bottom: 15px;
        }
      }
      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 203px;
        gap: 34px;

        .google_btn {
          background-color: white;
          border: 2px solid var(--Primary700);
          color: var(--NeutralGrey4-Text);
          font-size: 16px;
          font-weight: 600;
          padding: 12px 30px;
          height: 44px;
          width: 525px;
          &:hover {
            background-color: var(--Primary200);

            @media (max-width: 768px) {
              font-size: 13px;
            }

            @media (max-width: 480px) {
              font-size: 12px;
              padding: 8px 10px;
            }
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
      .login_btn {
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
  }
`;
