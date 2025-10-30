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
    width: 90%;
    max-width: 1100px;
    height: 100%;
    gap: 60px;
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
