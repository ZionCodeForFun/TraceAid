import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  padding: 20px;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 10px;
  }

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
    border: 0.5px solid var(--Neutral_Grey1);

    @media (max-width: 768px) {
      max-width: 90%;
      padding: 25px;
      border-radius: 30px;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 20px;
      border-radius: 20px;
    }

    @media (min-width: 1200px) {
      width: 700px;
      padding: 40px;
    }

    img {
      width: 100px;
      height: 30px;
      object-fit: contain;

      @media (max-width: 480px) {
        width: 80px;
        height: 25px;
      }
    }

    .content_holder {
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
 
        .sign {
          color: var(--NeutralGrey4-Text);
          font-weight: 700;

          font-size: 40px;
          height: 48px;

          @media (max-width: 768px) {
            font-size: 22px;
          }

          @media (max-width: 480px) {
            font-size: 20px;
          }

          @media (min-width: 1200px) {
            font-size: 26px;
          }
        }

        .text {
          font-size: 16px;
          color: var(--NeutralGrey4-Text);
          font-weight: 400;
          height: 19px;

          @media (max-width: 768px) {
            font-size: 11px;
          }

          @media (max-width: 480px) {
            font-size: 10px;
          }
        }
      }

      .input_holder {
        display: flex;
        flex-direction: column;

        .text {
          color: var(--NeutralBlack);
          font-size: 12px;

          @media (max-width: 480px) {
            font-size: 10px;
          }
        }
         .input {
        height: 48px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 400;
        color: var(--Neutral_Grey1);
      }
      }

      .btn {
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
          font-size: 14px;
        }

        @media (max-width: 480px) {
          font-size: 13px;
          height: 36px;
        }
      }
    }

    .span {
      cursor: pointer;
      color: #3a4621;
      font-size: 16px;
      font-weight: 400;
      border-bottom: 1px solid #3a4621;
    }
  }
`;
