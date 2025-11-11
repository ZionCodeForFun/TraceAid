import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    width: 95%;
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
        width: 50%;
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
    .select_control {
      padding: 12px 20px;
      border-radius: 12px;
      border: 1px solid #c0c0c0;
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      .icon_ {
        font-size: 24px;
        cursor: pointer;
      }
      .input {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
      }
    }
    .cartigory_drop {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 150px;
      margin-bottom: 16px;
      border: 1px solid #c0c0c0;
      border-radius: 12px;
      justify-content: center;
      p {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        cursor: pointer;
        padding: 8px;
        &:hover {
          background-color: #efeded;
        }
      }
    }
    .table-container {
      width: 100%;
      border-radius: 10px;
      border: 0.5px solid #cccccc;
    }

    .custom-table {
      width: 100%;

      border-collapse: collapse;
      color: #1f2937;

      .details {
        width: 350px;
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
      padding-left: 12px;
      border-bottom: 1px solid #e5e7eb;
      color: #4d4d4d;
      font-size: 16px;
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
  }

  @media (max-width: 480px) {
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  margin-top: 20px;

  .wrapper {
    width: 100%;
    gap: 20px;
    padding-bottom: 20px;

    .btn_holder {
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      height: auto;

      .btn {
        width: 100%;
        height: 42px;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px;
        margin-top: 1.2rem;
      }
    }

    .card_holder {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      height: auto;
      margin-bottom: 20px;

      .card {
        width: 100%;
        height: 130px;
        border-radius: 12px;
        padding: 14px;
        border: 1px solid #e5e7eb;
        background-color: #f9fafb;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            line-height: 1.2;
          }

          span {
            font-size: 12px;
            font-weight: 500;
            color: #6b21a8;
            background-color: #f3e8ff;
            width: 26px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
          }
        }

        .down {
          font-size: 20px;
          font-weight: 600;
          color: #111827;
        }
      }
    }

    .recent_text {
      flex-direction: column;
      gap: 10px;
      height: auto;
      border: none;

      .dropdwn {
        width: 100%;
        height: 40px;
        justify-content: space-between;
        padding: 0 14px;
        border-radius: 8px;
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;

        p {
          font-size: 14px;
          font-weight: 500;
        }

        i {
          font-size: 20px;
        }
      }

      input {
        width: 100%;
        height: 40px;
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        background-color: #f9fafb;
      }
    }

    .cartigory_drop {
      height: auto;
      gap: 6px;
      padding: 8px 0;
      p {
        font-size: 14px;
        padding: 6px 12px;
      }
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid #e5e7eb;

      .custom-table {
        width: 700px; 
        font-size: 13px;

        th {
          background-color: #f3f4f6;
          color: #111827;
          font-size: 13px;
          font-weight: 600;
          text-transform: capitalize;
        }

        td {
          font-size: 13px;
          color: #4b5563;
          padding: 10px;
          white-space: nowrap;
        }
      }
    }
  }
}

`;
