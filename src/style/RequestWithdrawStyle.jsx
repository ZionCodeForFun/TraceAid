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
      height: 168px;
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
        max-width: 95%;
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
    @media (max-width: 768px) {
      .content_holder {
        width: 100%;
        height: auto;
        padding: 16px;
        gap: 32px;

        .header {
          height: auto;
          gap: 8px;

          .bigtext {
            font-size: 16px;
          }
          .smalltext {
            font-size: 14px;
            text-align: center;
          }
        }

        .input_holder {
          height: auto;
          gap: 16px;

          label {
            font-size: 13px;
          }
          .input {
            height: 42px;
            font-size: 14px;
            padding: 8px 12px;
          }
        }

        .btn {
          height: 40px;
          font-size: 15px;
        }
      }

      .dropdown_menu1,
      .dropdown_menu2 {
        width: calc(100% - 32px);
        left: 16px;
        height: auto;
        max-height: 200px;
        overflow-y: auto;

        p {
          padding: 10px 8px;
          font-size: 14px;
        }
      }

      .goback {
        height: 80px;
        padding: 0 16px;

        .icon {
          gap: 12px;

          .i {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
      }

      .holder {
        .reciept_holder {
          left: 50%;
          transform: translateX(-50%);
          top: 10%;
          width: 90%;
          height: auto;
          padding: 16px;

          .content-holder {
            width: 100%;
            height: auto;
            gap: 16px;

            i {
              height: 48px;
              width: 48px;
              font-size: 24px;
            }
            .bigtext {
              font-size: 16px;
            }
            .small {
              font-size: 13px;
            }
          }

          .close_btn {
            height: 32px;
            width: 120px;
            font-size: 13px;
            margin-top: 16px;
          }
        }
      }
    }

    @media (min-width: 600px) and (max-width: 900px) {
      .content_holder {
        width: 80%;
        height: auto;
        padding: 20px;
        gap: 40px;

        .header {
          height: auto;
          gap: 10px;

          .bigtext {
            font-size: 17px;
          }
          .smalltext {
            font-size: 15px;
          }
        }

        .input_holder {
          height: auto;
          gap: 18px;

          .input {
            height: 45px;
            font-size: 15px;
          }
        }

        .btn {
          height: 42px;
        }
      }

      .dropdown_menu1,
      .dropdown_menu2 {
        width: 80%;
        left: 10%;
      }

      .holder {
        .reciept_holder {
          width: 70%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;
