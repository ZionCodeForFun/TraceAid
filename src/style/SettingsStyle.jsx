import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;

  .title p {
    font-weight: 600;
    font-size: 18px;
    color: #1a1a1a;
  }

  .account_card {
    display: flex;
    align-items: center;

    border: 1px solid var(--NeutralBlack);
    border-radius: 10px;
    padding: 0 30px;
    height: 136px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: #fff;

    .radio_col {
      input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
        accent-color: var(--NeutralBlack);
      }
    }

    .account_info {
      margin-left: 30px;
      flex: 1;
      gap: 20px;
      display: flex;
      font-weight: 400;

      flex-direction: column;

      .number {
        font-size: 16px;
        color: var(--NeutralGrey4-Text);
      }
      .name {
        font-size: 16px;

        color: var(--NeutralGrey4-Text);
      }
      .bank {
        font-size: 14px;
        color: var(--NeutralGrey4-Text);
      }
    }

    .actions {
      display: flex;
      gap: 30px;
      padding-left: 20px;

      .icon {
        font-size: 24px;
        color: var(--NeutralBlack);
        cursor: pointer;
      }
    }
  }

  .wrapper {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-wrap: nowrap;
    height: 100%;

    padding-top: 45px;

    .left {
      max-width: 313px;

      height: 730px;
      border-radius: 10px;
      padding: 21px 0;
      background-color: var(--Neutral_Offwhite);
      border: 0.5px solid var(--Neutral_Grey1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .top_profile {
        display: flex;
        flex-direction: column;
        width: 179px;
        height: 166px;
        gap: 15px;
        justify-content: center;
        margin-bottom: 25px;
        position: relative;
        align-items: center;

        .profile_holder {
          height: 100px;
          width: 100px;
          border-radius: 500px;
          background-color: #d9d9d9;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .edit_icon {
          position: absolute;
          top: 50%;
          right: 30%;
          background-color: #e7f6cb;
          font-size: 24px;
          border-radius: 50px;
          cursor: pointer;
        }
        .name_holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          .name {
            font-size: 18px;
            font-weight: 700;
            color: var(--NeutralBlack);
          }
          .role {
            font-size: 16px;
            font-weight: 400;
            color: var(--Neutral_Grey1);
          }
        }
      }
      .infor_holder {
        display: flex;
        flex-direction: column;
        width: 275px;
        height: 352px;
        gap: 20px;
        align-items: center;

        .infor {
          width: 255px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 10px;
          i {
            color: var(--NeutralGrey4-Text);
            font-size: 20px;
          }
          p {
            color: var(--NeutralGrey4-Text);
            font-size: 16px;
            font-weight: 400;
            width: 80%;
            cursor: pointer;
          }
        }
        .infor.active p {
          color: var(--NeutralGrey4-Text);
          font-weight: 600;
          font-size: 16px;
        }
        .infor.active {
          background-color: #e7f6cb;
        }
      }
    }

    .right {
      width: 669px;
      height: 473px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 43px;
      border-radius: 10px;
      border: 1px solid var(--Neutral_Grey1);
      background-color: var(--Neutral_Offwhite);

      .title p {
        color: var(--NeutralGrey4-Text);
        font-size: 24px;
        font-weight: 500;
      }
      .input_holder {
        width: 628px;
        height: 351px;
        display: flex;
        flex-direction: column;
        justify-content: end;

        gap: 19px;
        .name_holder {
          display: flex;
          flex-direction: column;
          height: 71px;
          position: relative;
          gap: 5px;
          label {
            font-size: 14px;
            font-weight: 400;
            color: var(--NeutralGrey4-Text);
          }
          input {
            width: 100%;
            padding: 10px 35px;
            border-radius: 12px;
            border: 1px solid var(--Neutral_Grey1);
            outline: none;
            color: #8d8d8d;
            height: 48px;
            font-size: 16px;
          }
          i {
            position: absolute;
            top: 52%;
            left: 2%;
            color: #8d8d8d;
            font-size: 20px;
          }
          .choose_file {
            position: absolute;
            top: 50%;
            right: 4%;
            color: var(--PrimaryBase);
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
      .btn_holder {
        display: flex;
        height: 43px;
        justify-content: space-between;
        margin-top: 30px;
        .btn_left {
          height: 100%;
          width: 306px;
          border: 2px solid #617437;
          color: var(--NeutralGrey4-Text);
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          background-color: white;
          &:hover {
            background-color: #ecf8d4;
          }
        }
        .btn_right {
          height: 100%;
          width: 306px;
          border-radius: 8px;
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-size: 16px;
          font-weight: 600;
          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 12px;
    height: auto;
    overflow-x: hidden;

    .wrapper {
      flex-direction: column;
      width: 100%;
      gap: 24px;
      padding-top: 20px;
      align-items: center;
      margin-left: 10px;
    }

    .left {
      width: 100%;
      max-width: 360px;
      height: auto;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      background-color: var(--Neutral_Offwhite);
      align-items: center;
      gap: 20px;
    }

    .right {
      width: 100%;
      max-width: 360px;
      height: auto;
      padding: 20px 16px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      background-color: var(--Neutral_Offwhite);
      gap: 24px;

      .title p {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: #111827;
      }

      .input_holder {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .name_holder {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;

          label {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            line-height: 1.5;
          }

          input {
            width: 100%;
            height: 48px;
            padding: 0 14px 0 42px;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            font-size: 15px;
            color: #111827;
            background-color: #fff;
            box-sizing: border-box;
            line-height: normal;
            display: block;

            &::placeholder {
              color: #9ca3af;
              font-size: 14px;
            }

            &:focus {
              border-color: var(--PrimaryBase);
              outline: none;
              box-shadow: 0 0 0 2px rgba(132, 2, 227, 0.15);
            }
          }

          i {
            position: absolute;
            top: 50%;
            left: 14px;
            transform: translateY(-50%);
            font-size: 18px;
            color: #6b7280;
            pointer-events: none;
            line-height: 1;
          }

          .choose_file {
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
            color: var(--PrimaryBase);
            font-weight: 500;
            cursor: pointer;
            line-height: 1;
          }
        }
      }

      .btn_holder {
        flex-direction: column;
        gap: 12px;
        width: 100%;
        margin-top: 16px;

        .btn_left,
        .btn_right {
          width: 100%;
          height: 48px;
          font-size: 15px;
          border-radius: 8px;
        }

        .btn_left {
          border: 1px solid #617437;
        }
      }
    }

    .account_card {
      flex-direction: row;
      align-items: center;
      width: 100%;
      max-width: 360px;
      padding: 14px;
      height: auto;
      border-radius: 10px;
      gap: 12px;
      border: 1px solid var(--NeutralBlack);

      .radio_col input {
        width: 18px;
        height: 18px;
      }

      .account_info {
        margin-left: 10px;
        gap: 4px;
        flex: 1;

        .number,
        .name {
          font-size: 14px;
        }

        .bank {
          font-size: 12px;
        }
      }

      .actions {
        gap: 12px;
        .icon {
          font-size: 20px;
        }
      }
    }

    * {
      max-width: 100%;
      box-sizing: border-box;
      overflow: visible !important;
    }
  }
`;

//this style is for security component
export const Aside_holder = styled.div`
  width: 669px;
  height: 573px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  border-radius: 10px;
  border: 1px solid var(--Neutral_Grey1);
  background-color: var(--Neutral_Offwhite);
  .title p {
    color: var(--NeutralGrey4-Text);
    font-size: 24px;
    font-weight: 500;
  }
  .input_holder {
    width: 628px;
    height: 551px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 19px;
    .name_holder {
      display: flex;
      flex-direction: column;
      height: 71px;
      position: relative;
      gap: 5px;
      label {
        font-size: 14px;
        font-weight: 400;
        color: var(--NeutralGrey4-Text);
      }
      input {
        width: 100%;
        padding: 10px 35px;
        border-radius: 12px;
        border: 1px solid var(--Neutral_Grey1);
        outline: none;
        color: #8d8d8d;
        height: 48px;
        font-size: 16px;
      }
      .eye_icon {
        position: absolute;
        top: 52%;
        right: 4%;
        color: #8d8d8d;
        font-size: 20px;
      }
    }
  }
  .btn_holder {
    display: flex;
    height: 43px;
    justify-content: space-between;
    margin-top: 30px;
    .btn_left {
      height: 100%;
      width: 306px;
      border: 2px solid #617437;
      color: var(--NeutralGrey4-Text);
      border-radius: 8px;
      background-color: white;
      font-size: 16px;
      font-weight: 600;
      &:hover {
        background-color: #ecf8d4;
      }
    }
    .btn_right {
      height: 100%;
      width: 306px;
      border-radius: 8px;
      background-color: var(--NeutralBlack);
      color: var(--PrimaryBase);
      font-size: 16px;
      font-weight: 600;
      &:hover {
        background-color: var(--PrimaryBase);
        color: var(--NeutralBlack);
      }
    }
  }

`;
//this style is for payoutdetails component
export const Aside_holder2 = styled.div`
  width: 669px;
  height: 673px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 10px;
  border: 1px solid var(--Neutral_Grey1);
  background-color: var(--Neutral_Offwhite);
  .title p {
    color: var(--NeutralGrey4-Text);
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .add_account {
    font-size: 16px;
    font-weight: 500;
  }
  .input_holder {
    width: 628px;
    height: 411px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 19px;

    .name_holder {
      display: flex;
      flex-direction: column;
      height: 71px;
      position: relative;
      gap: 5px;
      label {
        font-size: 14px;
        font-weight: 400;
        color: var(--NeutralGrey4-Text);
      }
      input {
        width: 100%;
        padding: 10px 15px;
        border-radius: 12px;
        border: 1px solid var(--Neutral_Grey1);
        outline: none;
        color: #8d8d8d;
        height: 48px;
        font-size: 16px;
      }
    }
  }
  .btn_holder {
    display: flex;
    height: 43px;
    justify-content: space-between;
    margin-top: 30px;
    .btn_left {
      height: 100%;
      width: 306px;
      border: 2px solid #617437;
      color: var(--NeutralGrey4-Text);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      background-color: white;
      &:hover {
        background-color: #ecf8d4;
      }
    }
    .btn_right {
      height: 100%;
      width: 306px;
      border-radius: 8px;
      background-color: var(--NeutralBlack);
      color: var(--PrimaryBase);
      font-size: 16px;
      font-weight: 600;
      &:hover {
        background-color: var(--PrimaryBase);
        color: var(--NeutralBlack);
      }
    }
  }
`;
