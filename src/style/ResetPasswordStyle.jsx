import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  padding: 20px;

  .wrapper {
    background-color: var(--Neutral_Offwhite);
    max-width: 35%;
    min-height: 350px;
    padding: 30px;
    gap: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
    }

    .content_holder,
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

      .input_holder {
        display: flex;
        flex-direction: column;

        .text {
          color: var(--NeutralBlack);
          font-size: 12px;
        }
      }

      .btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }
    }

    span {
      cursor: pointer;
    }
  }


  @media (max-width: 768px) {
    height: auto;
    padding: 30px 15px;

    .wrapper {
      width: 90%;
      padding: 25px;
      border-radius: 30px;

      .title h2 {
        font-size: 22px;
      }

      .title p {
        font-size: 11px;
      }

      .btn {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 10px;

    .wrapper {
      width: 100%;
      padding: 20px;
      border-radius: 20px;

      img {
        width: 80px;
        height: 25px;
      }

      .title h2 {
        font-size: 20px;
      }

      .title p {
        font-size: 10px;
      }

      .input_holder .text {
        font-size: 10px;
      }

      .btn {
        font-size: 13px;
        height: 36px;
      }
    }
  }

  @media (min-width: 1200px) {
    .wrapper {
      width: 700px;
      padding: 40px;

      .title h2 {
        font-size: 26px;
      }
    }
  }
`;
