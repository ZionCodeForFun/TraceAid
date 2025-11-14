import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
  .wrapper {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .content_holder {
      height: 350px;
      width: 525px;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 54px;
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--NeutralGrey4-Text);
        height: 55px;
        gap: 12px;
        .bigtext {
          font-size: 18px;
          font-weight: 700;
        }
        .smalltext {
          font-size: 16px;
          font-weight: 400;
        }
      }
      .input_holder {
        display: flex;
        flex-direction: column;
        height: 142px;
        width: 100%;
        position: relative;
        gap: 19px;

        label {
          font-size: 14px;
          font-weight: 400;
        }
        .input {
          margin-top: 10px;
          height: 48px;
          font-weight: 400;
          font-size: 16px;
          width: 100%;
          background-color: white;
          border-radius: 8px;
          border: 1px solid var(--Neutral_Grey1);
          padding: 10px 14px;
          outline: none;
          caret-color: transparent;
        }

        .drop1 {
          position: absolute;
          top: 26%;
          font-size: 24px;
          right: 2%;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
      }
      .drop2 {
        position: absolute;
        top: 92%;
        font-size: 24px;
        right: 2%;
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      .rotate {
        transform: rotate(180deg);
      }
      .btn {
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-weight: 600;
        font-size: 16px;
        height: 43px;
        width: 100%;
        border-radius: 8px;
        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }
    }
    .dropdown_menu1 {
      height: max-content;
      width: 525px;
      background-color: white;
      position: absolute;
      top: 60%;
      z-index: 99;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      border-radius: 8px;
      border: 1px solid var(--Neutral_Grey1);

      p {
        padding: 12px 10px;
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        &:hover {
          background-color: var(--Neutral_Offwhite);
        }
      }
    }
    .dropdown_menu2 {
      height: 150px;
      background-color: white;
      width: 525px;
      position: absolute;
      top: 130%;
      z-index: 87;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;

      border-radius: 8px;
      border: 1px solid var(--Neutral_Grey1);

      p {
        padding: 12px 10px;
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        &:hover {
          background-color: var(--Neutral_Offwhite);
        }
      }
    }

    .goback {
      height: 100px;
      width: 100%;

      .icon {
        display: flex;
        gap: 16px;
        width: 100%;
        height: 100%;
        align-items: center;
        .i {
          font-size: 20px;
          cursor: pointer;
        }
        p {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
    .holder {
      height: 90vh;
      width: 100%;
      top: 20%;
      left: 0%;
      z-index: 9999;
      position: fixed;
      background-color: rgb(192, 192, 192, 0.3);
      .reciept_holder {
        display: flex;
        width: 512px;
        height: 318px;
        flex-direction: column;
        background-color: white;
        align-items: center;
        padding: 20px;
        top: 12%;
        left: 30%;
        z-index: 9999;
        position: absolute;
        border-radius: 8px;
        .content-holder {
          width: 462px;
          height: 164px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
          i {
            height: 64px;
            width: 64px;
            background-color: black;
            font-size: 32px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00a63e;
            background-color: #dcfce7;
          }
          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }
          .small {
            font-size: 14px;
            font-weight: 400;
          }
        }
        .close_btn {
          height: 36px;
          width: 133px;
          border: 1px solid var(--Neutral_Grey1);
          color: #0a0a0a;
          font-size: 14px;
          margin-top: 20px;
          background-color: white;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 480px) {
  padding-bottom: 40px;

  .wrapper {
    width: 100%;
    padding: 0 16px;
    align-items: stretch;

    .goback {
      height: auto;
      margin: 20px 0 10px 0;

      .icon {
        gap: 10px;
        align-items: center;

        .i {
          font-size: 18px;
        }

        p {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }
      }
    }

    .content_holder {
      width: 100%;
      max-width: 100%;
      height: auto;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      gap: 30px;
      box-shadow: 0 0 0 rgba(0,0,0,0); 

      .header {
        gap: 8px;
        height: auto;
        .bigtext {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
        }

        .smalltext {
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
          text-align: center;
        }
      }

      .input_holder {
        width: 100%;
        height: auto;
        gap: 14px;

        label {
          font-size: 13px;
          font-weight: 500;
          color: #374151;
        }

        .input {
          height: 42px;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          background-color: #f9fafb;
        }

        .drop1 {
          font-size: 20px;
          right: 10px;
        }
      }

      .drop2 {
        font-size: 20px;
        right: 10px;
        top: 88%;
      }

      .btn {
        height: 42px;
        font-size: 15px;
        font-weight: 600;
        border-radius: 8px;
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
      }
    }

    .dropdown_menu1,
    .dropdown_menu2 {
      width: 100%;
      left: 0;
      border-radius: 10px;
      padding: 6px 0;
      gap: 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);

      p {
        font-size: 14px;
        padding: 10px 16px;
        color: #374151;
        transition: background 0.2s ease;

        &:hover {
          background-color: #f3f4f6;
        }
      }
    }

    .holder {
      .reciept_holder {
        width: 90%;
        height: auto;
        left: 5%;
        top: 25%;
        padding: 24px;

        .content-holder {
          width: 100%;
          gap: 14px;

          i {
            width: 56px;
            height: 56px;
            font-size: 26px;
          }

          .bigtext {
            font-size: 16px;
            font-weight: 700;
          }

          .small {
            font-size: 13px;
            color: #4b5563;
          }
        }

        .close_btn {
          width: 100%;
          height: 38px;
          margin-top: 12px;
          font-size: 14px;
          border-radius: 8px;
          background-color: #f9fafb;
          border: 1px solid #d1d5db;
        }
      }
    }
  }
}

`;
