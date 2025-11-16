import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }

    display: flex;

    max-width: 1200px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
    .btn_holder {
      height: 16vh;
      display: flex;
      justify-content: end;
      align-items: end;
      margin-bottom: 40px;
      .btn {
        height: 46px;
        width: 248px;
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-size: 18px;
        font-weight: 700;
        border-radius: 8px;
      }
    }
    .card_holder {
      display: flex;
      width: 100%;
      height: 30vh;
      justify-content: space-between;
      gap: 34px;
      margin-bottom: 30px;

      .card {
        display: flex;
        flex-direction: column;
        width: 324px;
        background-color: var(--content_1bg);
        height: 166px;
        border: 1px solid #b1d8ff;
        border-radius: 14px;
        justify-content: space-between;
        padding: 24px 20px;

        .top {
          display: flex;
          justify-content: space-between;
          height: 64px;
          width: 100%;
          gap: 10px;

          p {
            line-height: 20px;
            height: 20px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            color: #4a5565;
          }

          span {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            color: #4a5565;
            font-family: Arial, Helvetica, sans-serif;
            color: #8402e3;
            width: 32px;
            height: 32px;
            padding: 8px;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            display: flex;
            background-color: #dfcbff;
          }
        }

        .down {
          color: #101828;
          height: 32px;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;
        }
      }
    }

    .recent_text {
      display: flex;
      height: 36px;
      justify-content: space-between;
      border: 1px solid var(--sidebarBg);
      gap: 15px;
      margin-bottom: 20px;
      .dropdwn {
        display: flex;
        align-items: center;
        gap: 15px;
        background-color: var(--sidebarBg);
        height: 100%;
        width: 180px;
        border-radius: 7px;
        justify-content: space-around;

        p {
          font-weight: 400;
          font-size: 16px;
        }
        i {
          font-weight: 500;
          font-size: 24px;
          cursor: pointer;
        }
      }

      input {
        outline: none;
        border: 0.5px;
        background-color: var(--sidebarBg);
        padding: 4px 12px 4px 36px;
        width: 841px;
        height: 100%;
        border-radius: 7px;
        font-size: 14px;
        font-weight: 400;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    .table-container {
      width: 100%;
      border-radius: 10px;
      border: 0.5px solid #cccccc;
      position: relative;
    }

    .custom-table {
      width: 100%;
      border-collapse: collapse;
      color: #1f2937;
      min-width: 600px;
      .details {
        width: 280px;
        padding-right: 15px;
      }

      .icon {
        cursor: pointer;
        color: #4d4d4d;
      }
    }

    .custom-table thead {
      background-color: #f9fafb;
    }

    .custom-table td {
      text-align: start;
      height: 56px;
      border-bottom: 1px solid #e5e7eb;
      color: #4d4d4d;
      font-size: 16px;
      padding-left: 15px;
    }

    .custom-table th {
      color: #0a0a0a;
      border-bottom: 1px solid #e5e7eb;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      font-size: 16px;
      height: 40px;
      text-align: start;
      letter-spacing: 0.5px;
      background-color: #f8f9fa;

      padding-left: 12px;
    }

    .milestone {
      padding: 6px 10px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      text-transform: capitalize;
      width: max-content;
    }
    .details_pop {
      width: 187px;
      height: max-content;
      background-color: #0a0a0a;
      position: absolute;
      top: 12%;
      right: 8%;
      border-radius: 6px;
      border: 0.5px solid #c0c0c0;
      padding: 20px;
      background-color: #ffffff;
      p {
        font-size: 16px;
        font-weight: 400;
        color: #4d4d4d;
        padding: 9px 0;
        cursor: pointer;
      }
      .close_btn {
        color: #df0f23;
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
        justify-content: center;
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
          position: relative;
          text-align: center;
          .share_icon {
            height: 450px;
            height: 74px;
            width: 64px;

            font-size: 20px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1c1c1c;
            background-color: #ecf8d4;
          }
          i {
            height: 64px;
            width: 64px;
            background-color: black;
            font-size: 32px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #df0f23;
            background-color: #ffe2e2;
          }
          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }
          .small {
            font-size: 14px;
            font-weight: 400;
          }
          .copy {
            position: absolute;
            top: 90%;
            right: 20%;
          }
          .close_bt {
            position: fixed;
            top: 36%;
            right: 36%;
            font-size: 20px;
            cursor: pointer;
          }
        }
        .input {
          height: 42px;
          border-radius: 12px;
          width: 313px;
          padding-left: 20px;
          border: 1px solid #c0c0c0;
        }
        .btn_holder {
          display: flex;
          gap: 10px;
          .close_btn1 {
            height: 36px;
            width: 133px;
            border: 1px solid var(--Neutral_Grey1);
            color: black;
            font-size: 14px;
            margin-top: 20px;
            background-color: white;
            font-weight: 400;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 8px;
            cursor: pointer;
          }
          .close_btn2 {
            height: 36px;
            width: 133px;
            border: 1px solid var(--Neutral_Grey1);
            color: white;
            font-size: 14px;
            margin-top: 20px;
            background-color: #df0f23;
            font-weight: 400;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 8px;
            cursor: pointer;
          }
          i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 42px;
            height: 42px;
            border-radius: 50px;
            background-color: #1a1a1a;
            color: white;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
  .wrapper {
    padding: 0 1rem;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;

    .btn_holder {
      height: auto;
      justify-content: center;
      align-items: center;
      margin: 1.8rem 0 1.2rem;

      .btn {
        width: 100%;
        height: 44px;
        font-size: 15px;
        border-radius: 10px;
        margin-top: 1.4rem;
      }
    }

    .card_holder {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
      gap: 1rem;
      margin-bottom: 1.5rem;

      .card {
        width: 100%;
        max-width: 380px;
        min-height: 120px;
        background-color: var(--content_1bg);
        border: 1px solid #cbd5e1;
        border-radius: 12px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          gap: 10px;

          p {
            font-size: 15px;
            font-weight: 500;
            color: #4a4a4a;
            line-height: 1.4;
            word-wrap: break-word;
            flex: 1;
          }

          span {
            font-size: 13px;
            padding: 5px 6px;
            border-radius: 8px;
            color: #6b21a8;
            background-color: #f3e8ff;
          }
        }

        .down {
          font-size: 22px;
          font-weight: 600;
          color: #101828;
          line-height: 1.2;
          word-wrap: break-word;
        }
      }
    }

    .recent_text {
      flex-direction: column;
      gap: 0.8rem;
      margin-bottom: 1rem;
      width: 100%;

      .dropdwn {
        width: 100%;
        height: 44px;
        font-size: 14px;
      }

      input {
        width: 100%;
        height: 44px;
        font-size: 14px;
        border-radius: 8px;
        padding: 0.7rem 1rem;
      }
    }

    .table-container {
      overflow-x: auto;
      border-radius: 8px;
      border: 0.5px solid #ccc;
    }

    .custom-table {
      min-width: 480px;
      font-size: 14px;

      th,
      td {
        font-size: 13px;
        padding: 10px 8px;
        line-height: 1.3;
      }

      .details {
        width: 200px;
        white-space: normal;
        word-break: break-word;
      }
    }

    .details_pop {
      position: absolute;
      bottom: -160%;
      right: 5%;
      width: 150px;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

      p {
        font-size: 13.5px;
        padding: 8px 0;
      }
    }

    .holder {
      height: 100vh;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;

      .reciept_holder {
        width: 92%;
        height: auto;
        padding: 1.5rem;
        border-radius: 10px;

        .content-holder {
          gap: 1rem;

          .bigtext {
            font-size: 16px;
          }

          .small {
            font-size: 13px;
          }

          .share_icon,
          i {
            width: 50px;
            height: 50px;
            font-size: 22px;
          }
        }

        .input {
          width: 100%;
          height: 40px;
          font-size: 14px;
        }

        .btn_holder {
          flex-direction: column;
          gap: 0.8rem;

          .close_btn1,
          .close_btn2 {
            width: 100%;
            height: 40px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
`;
