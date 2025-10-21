import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: var(--NeutralGrey4-Text);
  .wrapper {
    width: 35%;
    height: 90%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--Neutral_Offwhite);
    border-radius: 40px;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
      margin-bottom: 20px;
    }
    .content_holder2 {
      display: flex;
      flex-direction: column;
      width: 100%;

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
          font-size: 24px;
        }
        p {
          font-size: 12px;
          color: var(--NeutralGrey4-Text);
        }
      }

      .google_btn {
        background-color: white;
        border: 1px solid var(--NeutralGrey4-Text);
        color: var(--NeutralGrey4-Text);
        font-weight: bold;
        &:hover {
          background-color: var(--Primary200);
        }
      }

      .line-text {
        display: flex;
        align-items: center;
        text-align: center;
        color: #555;
        margin: 15px 0;
      }

      .line-text::before,
      .line-text::after {
        content: "";
        flex: 1;
        margin: 0 5px 0 5px;
        border-bottom: 1px solid #aaa;
      }

      .login_btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-weight: bold;
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
`;
