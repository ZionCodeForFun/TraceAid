import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--NeutralGrey4-Text);

  .wrapper {
    background-color: var(--Neutral_Offwhite);
    max-width: 35%;
    padding: 8px 30px;
    display: flex;
    height: max-content;
    flex-direction: column;
    border-radius: 40px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

 
    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
    }

    .content_holder {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 0.3rem;
      min-width: 420px;
      height: 100%;

      .title {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        height: max-content;
        margin-bottom: 20px;

        h2 {
          color: var(--NeutralGrey4-Text);
          font-weight: 700;
          font-style: bold;
          font-size: 30px;
        }
        p {
          font-size: 12px;
          color: var(--NeutralGrey4-Text);
        }
      }
      .input{
        &:hover{
          
        }
      }
      .google_btn {
        background-color: white;
        border: 1px solid var(--NeutralGrey4-Text);
        color: var(--NeutralGrey4-Text);
        font-weight: bold;
        height: 25px;
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
      }

      .line-text::before,
      .line-text::after {
        content: "";
        flex: 1;
        margin: 0 5px 0 5px;
        border-bottom: 1px solid #aaa;
      }

      .radio_holder {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .ant-radio-inner {
          border-radius: 50%;
          border: 2px solid var(--NeutralGrey4-Text);
          width: 18px;
          height: 18px;
          background-color: white;
        }

        .ant-radio-inner::after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--NeutralGrey4-Text);
          position: absolute;
          top: 105%;
          left: 108%;
          transform: translate(-50%, -50%) scale(0);
          transition: all 0.2s ease-in-out;
        }

        .ant-radio-checked .ant-radio-inner::after {
          transform: translate(-50%, -50%) scale(1);
        }

        .ant-radio-checked .ant-radio-inner {
          background-color: white;
          border-color: var(--NeutralGrey4-Text);
        }

        .radio {
          background-color: white;
          width: 100%;
          border-radius: 7px;
          padding: 3px 10px;
          height: 25px;
          display: flex;
          align-items: center;
          border: 1px solid #c2c1c1;
        }
      }

      .signup_btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-weight: bold;
        padding: 0;
        height: 25px;
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
          border-color: var(--NeutralGrey4-Text);
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: var(--NeutralBlack);
          border-color: var(--NeutralGrey4-Text);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 30px 15px;

    .wrapper {
      width: 90%;
      padding: 25px;
      border-radius: 30px;
      height: max-content;
      .content_holder {
        min-width: 270px;

        .title h2 {
          font-size: 22px;
        }
        .title p {
          font-size: 13px;
        }
      }

      .google_btn {
        font-size: 14px;
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
