import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--NeutralGrey4-Text);

  .wrapper {
    width: 35%;

    padding: 2.5rem 0;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--Neutral_Offwhite);
    border-radius: 40px;
    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
      margin-bottom: 20px;
    }

    .title {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      height: max-content;
      margin-bottom: 20px;
      gap: 5px;

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
    .otp_inputs {
      display: flex;
      justify-content: center;

      margin: 1rem 0;

      input {
        width: 3rem;
        height: 3.5rem;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: var(--NeutralGrey4-Text);
          outline: none;
        }
      }
    }

    .verify_btn {
      padding: 0.1rem 0;
      border: none;
      width: 67%;
      background-color: var(--NeutralBlack);
      color: var(--PrimaryBase);
      &:hover {
        background-color: var(--PrimaryBase);
        color: var(--NeutralBlack);
      }
    }

    .goBack {
      margin-top: 1rem;
      color: #292828;
      cursor: pointer;
      font-size: 0.95rem;
      span {
        font-weight: bold;
        color: #297e2a;
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      width: 80%;
      padding: 2rem 1.5rem;
    }

    .otp_inputs input {
      width: 2.5rem;
      height: 3rem;
      font-size: 1.2rem;
    }
  }
`;
