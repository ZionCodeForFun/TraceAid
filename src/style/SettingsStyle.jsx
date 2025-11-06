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

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 16px;
      height: auto;
      margin-bottom: 12px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 20px;
      height: 120px;
    }

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

      @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
        gap: 12px;
        margin-top: 12px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        margin-left: 24px;
        gap: 16px;
      }

      .number {
        font-size: 16px;
        color: var(--NeutralGrey4-Text);

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 15px;
        }
      }
      .name {
        font-size: 16px;
        color: var(--NeutralGrey4-Text);

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 15px;
        }
      }
      .bank {
        font-size: 14px;
        color: var(--NeutralGrey4-Text);

        @media (max-width: 768px) {
          font-size: 13px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 14px;
        }
      }
    }

    .actions {
      display: flex;
      gap: 30px;
      padding-left: 20px;

      @media (max-width: 768px) {
        padding-left: 0;
        gap: 16px;
        margin-top: 12px;
        width: 100%;
        justify-content: flex-end;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        gap: 24px;
        padding-left: 16px;
      }

      .icon {
        font-size: 24px;
        color: var(--NeutralBlack);
        cursor: pointer;

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 22px;
        }
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

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding-top: 24px;
      gap: 24px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding-top: 32px;
      gap: 32px;
    }

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

      @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 16px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        max-width: 280px;
        padding: 18px;
      }

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

        @media (max-width: 768px) {
          width: 100%;
          height: auto;
          gap: 12px;
          margin-bottom: 20px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          height: auto;
          gap: 16px;
          margin-bottom: 24px;
        }

        .profile_holder {
          height: 100px;
          width: 100px;
          border-radius: 500px;
          background-color: #d9d9d9;

          @media (max-width: 768px) {
            height: 80px;
            width: 80px;
          }

          @media (min-width: 600px) and (max-width: 900px) {
            height: 90px;
            width: 90px;
          }

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

          @media (max-width: 768px) {
            font-size: 20px;
            right: 35%;
          }

          @media (min-width: 600px) and (max-width: 900px) {
            font-size: 22px;
          }
        }

        .name_holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          @media (max-width: 768px) {
            gap: 6px;
          }

          .name {
            font-size: 18px;
            font-weight: 700;
            color: var(--NeutralBlack);

            @media (max-width: 768px) {
              font-size: 16px;
            }

            @media (min-width: 600px) and (max-width: 900px) {
              font-size: 17px;
            }
          }

          .role {
            font-size: 16px;
            font-weight: 400;
            color: var(--Neutral_Grey1);

            @media (max-width: 768px) {
              font-size: 14px;
            }

            @media (min-width: 600px) and (max-width: 900px) {
              font-size: 15px;
            }
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

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 16px;
        gap: 24px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        width: calc(100% - 300px);
        padding: 18px;
        gap: 28px;
      }

      .title p {
        color: var(--NeutralGrey4-Text);
        font-size: 24px;
        font-weight: 500;

        @media (max-width: 768px) {
          font-size: 20px;
          text-align: center;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 22px;
        }
      }

      .input_holder {
        width: 628px;
        height: 351px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: 19px;

        @media (max-width: 768px) {
          width: 100%;
          height: auto;
          gap: 16px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          width: 100%;
          gap: 18px;
        }
        .name_holder {
          display: flex;
          flex-direction: column;
          height: 71px;
          position: relative;
          gap: 5px;

          @media (max-width: 768px) {
            height: auto;
            gap: 4px;
          }

          label {
            font-size: 14px;
            font-weight: 400;
            color: var(--NeutralGrey4-Text);

            @media (max-width: 768px) {
              font-size: 13px;
            }
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

            @media (max-width: 768px) {
              height: 42px;
              font-size: 14px;
              padding: 8px 32px;
            }

            @media (min-width: 600px) and (max-width: 900px) {
              height: 44px;
              font-size: 15px;
            }
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
        @media (max-width: 768px) {
          .wrapper {
            flex-direction: column;
            align-items: center;
            padding-top: 24px;

            .left {
              max-width: 100%;
              width: 100%;
              height: auto;
              padding: 12px;
            }

            .right {
              width: 100%;
              height: auto;
              padding: 12px;
              gap: 20px;
            }

            .account_card {
              flex-direction: column;
              align-items: flex-start;
              padding: 12px;
              height: auto;

              .account_info {
                margin-left: 0;
                width: 100%;
              }

              .actions {
                padding-left: 0;
                gap: 12px;
                margin-top: 12px;
              }
            }
          }

          .title p {
            text-align: center;
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
