import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .wrapper {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .card_holder {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 57vh;
      gap: 34px;
      margin-bottom: 30px;
      .card {
        display: flex;
        flex-direction: column;
        width: 48%;
        background-color: var(--content_1bg);
        height: 166px;
        border: 1px solid #b1d8ff;
        border-radius: 14px;
        justify-content: space-between;
        padding: 24px;
        .top {
          display: flex;
          justify-content: space-between;
          height: 64px;
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
      flex-direction: column;
      gap: 15px;
      padding: 10px 0 20px 0;
      p {
        font-weight: 500;
        font-size: 24px;
      }
      input {
        outline: none;
        border: 0.5px;
        background-color: var(--sidebarBg);
        padding: 4px 12px 4px 36px;
        height: 36px;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
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
    }

    .custom-table thead {
      background-color: #f9fafb;
    }

    .custom-table td {
      text-align: start;
      height: 56px;
      border-bottom: 1px solid #e5e7eb;
      color: #4d4d4d;
      padding-left: 12px;
    }

    .custom-table th {
      color: #0a0a0a;
      border-bottom: 1px solid #e5e7eb;
      font-family: 400;
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
  margin-top: 20px;
  justify-content: flex-start;
  align-items: center;

  .wrapper {
    width: 100%;
    padding: 0 10px;
    gap: 20px;
    
    .card_holder {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      height: auto;
      margin-bottom: 20px;

      .card {
        width: 100%;
        height: 130px;
        padding: 16px;
        border-radius: 12px;
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
            color: #374151;
            line-height: 1.3;
          }

          span {
            font-size: 12px;
            font-weight: 500;
            color: #6b21a8;
            background-color: #f3e8ff;
            width: 28px;
            height: 28px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
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
      gap: 8px;
      padding: 0;
      p {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
      }

      input {
        width: 100%;
        height: 38px;
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        background-color: #f9fafb;
      }
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid #e5e7eb;

      .custom-table {
        width: 700px;
        font-size: 14px;

        th {
          font-size: 13px;
          font-weight: 600;
          background-color: #f3f4f6;
          color: #111827;
        }

        td {
          font-size: 13px;
          color: #4b5563;
          padding: 10px;
        }
      }
    }
  }
}

`;
