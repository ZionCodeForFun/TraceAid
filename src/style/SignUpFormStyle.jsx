import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--NeutralGrey4-Text);
  padding: 40px 20px;

  .wrapper {
    width: 480px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Neutral_Offwhite);
    border-radius: 24px;
    border: 0.5px solid var(--Neutral_Grey1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    gap: 20px;
  }

  .img_holder {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      height: 26px;
      object-fit: contain;
    }
  }

  .content_holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .title {
      text-align: center;
      margin-bottom: 10px;

      .sign {
        color: var(--NeutralGrey4-Text);
        font-weight: 700;
        font-size: 28px;
      }

      .text {
        font-size: 14px;
        color: var(--NeutralGrey4-Text);
      }
    }

    .input {
      height: 42px;
      border-radius: 10px;
      font-size: 14px;
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

    .google_holder {
      gap: 20px;
      .google_btn {
        background-color: white;
        border: 2px solid var(--Primary700);
        color: var(--NeutralGrey4-Text);
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
        width: 400px;
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
    .custom-checkbox {
      color: #333;
      font-weight: 500;
      .terms_holder{

        display: flex;
        gap: 4px;
        p{
          cursor: pointer;

          color: #617437;
           font-weight: 700;
           &:hover{
            text-decoration: underline;
           }
        }
      }
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
      font-size: 14px;
      margin-top: 20px;
      display: flex;
      gap: 8px;
      p {
        font-size: 14px;
      }
      span {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      width: 95%;
      padding: 25px;
      border-radius: 20px;
    }

    .content_holder .title .sign {
      font-size: 22px;
    }

    .content_holder .title .text {
      font-size: 13px;
    }

    .input,
    .signup_btn,
    .google_btn {
      height: 38px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 480px) {
  padding: 20px 10px;

  .wrapper {
    width: 100%;
    padding: 22px 18px;
    border-radius: 18px;
    box-shadow: none;
    gap: 16px;
  }

  .img_holder img {
    height: 22px;
  }

  .content_holder {
    gap: 12px;
  }

  .title .sign {
    font-size: 20px;
    font-weight: 700;
  }

  .title .text {
    font-size: 12px;
    color: #6b6b6b;
  }

  .input {
    height: 46px !important;
    font-size: 13px !important;
  }

  .signup_btn {
    height: 46px;
    font-size: 14px;
    border-radius: 10px;
    width: 100%;
  }

  .google_holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 14px;
  }

  .google_btn {
    width: 100% !important;
    height: 44px;
    font-size: 13px;
  }

  .line-text {
    width: 100% !important;
    max-width: 260px;
    font-size: 11px;
    gap: 6px;
    justify-content: center;
  }

  .already {
    font-size: 12px;
    margin-top: 12px;
    justify-content: center;
  }

  .already p,
  .already span {
    font-size: 12px;
  }
}
`;
