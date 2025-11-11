import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  padding-left: 27  px;

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
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        
        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }

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
        width: 400px;
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
            font-weight: 400;
            color: #4a5565;
          }

          span {
            font-size: 14px;
            font-weight: 400;
            color: #8402e3;
            width: 32px;
            height: 32px;
            padding: 8px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #dfcbff;
          }
        }

        .down {
          color: #101828;
          font-size: 32px;
          font-weight: 400;
          line-height: 32px;
        }
      }
    }

    .recent_text {
      display: flex;
      flex-wrap: wrap;
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
        border: 0.5px solid var(--sidebarBg);
        background-color: var(--sidebarBg);
        padding: 4px 12px 4px 36px;
        width: 841px;
        height: 100%;
        border-radius: 7px;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .table-container {
      width: 100%;
      border-radius: 10px;
      border: 0.5px solid #cccccc;
      position: relative;
      overflow-x: auto;
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
      height: 40px;
      text-align: start;
      letter-spacing: 0.5px;
      background-color: #f8f9fa;
      padding-left: 12px;
    }

    /* Modals / Receipts */
    .holder .reciept_holder {
      max-width: 95%;
      width: 512px;
      height: auto;
      left: 50%;
      transform: translateX(-50%);
      top: 12%;
      padding: 20px;

      .content-holder {
        width: 100%;
        max-width: 462px;
        height: auto;
        flex-direction: column;
        text-align: center;
      }

      .input {
        width: 100%;
        max-width: 313px;
      }

      .btn_holder .close_btn1,
      .btn_holder .close_btn2 {
        width: 100%;
        max-width: 133px;
      }
    }

    @media (max-width: 900px) {
      .card_holder {
        flex-wrap: wrap;
        justify-content: center;
      }

      .card_holder .card {
        width: 100%;
        max-width: 324px;
        margin-bottom: 20px;
      }

      .recent_text input {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      .btn_holder .btn {
        width: 180px;
        font-size: 16px;
      }

      .card_holder .card .down {
        font-size: 28px;
      }

      .recent_text {
        flex-direction: column;
        height: auto;
      }

      .recent_text .dropdwn {
        width: 100%;
        justify-content: space-between;
      }

      .recent_text input {
        width: 100%;
      }

      .holder .reciept_holder {
        max-width: 90%;
        padding: 15px;
      }
    }

    @media (max-width: 480px) {
      .btn_holder {
        justify-content: center;
        align-items: center;
        height: auto;
        margin-bottom: 20px;
      }

      .btn_holder .btn {
        width: 150px;
        font-size: 14px;
      }

      .card_holder {
        flex-direction: column;
        gap: 15px;
        height: auto;
      }

      .card_holder .card {
        width: 100%;
      }

      .recent_text input {
        width: 100%;
      }

      .holder .reciept_holder {
        width: 95%;
        padding: 10px;
      }

      .holder .reciept_holder .content-holder .bigtext {
        font-size: 16px;
      }

      .holder .reciept_holder .content-holder .small {
        font-size: 12px;
      }
    }
  }
`;
