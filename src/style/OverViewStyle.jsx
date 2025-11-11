import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 32px;
  }

  .wrapper {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 16px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 100%;
      padding: 0 24px;
    }

    .card_holder {
      display: flex;
      flex-wrap: wrap;
      width: 85%;
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
    @media (max-width: 768px) {
      .card_holder {
        flex-direction: column;
        height: auto;
        gap: 16px;
        width: auto;
        .card {
          width: 84%;
          height: auto;
          padding: 16px;
        }
      }
    }
    .recent_text {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 10px 0 20px 0;

      @media (max-width: 768px) {
        gap: 12px;
        padding: 8px 0 16px 0;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        gap: 14px;
        padding: 10px 0 18px 0;
      }

      p {
        font-weight: 500;
        font-size: 24px;

        @media (max-width: 768px) {
          font-size: 20px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          font-size: 22px;
        }
      }

      .search_wrapper {
        position: relative;
        width: 100%;

        @media (max-width: 768px) {
          width: 99%;
        }
      }

      .search_icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #4a5565;
        font-size: 18px;

        @media (max-width: 768px) {
          left: 10px;
          font-size: 16px;
        }
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
        border-radius: 6px;
        box-sizing: border-box;

        @media (max-width: 768px) {
          height: 34px;
          width: 80%;
          padding: 4px 10px 4px 32px;
          font-size: 13px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          height: 35px;
          font-size: 14px;
        }
      }
    }
    .table-container {
      width: 100%;
      border-radius: 10px;
      border: 0.5px solid #cccccc;
      overflow-x: auto;

      @media (max-width: 768px) {
        border-radius: 8px;
        width: 84%;
      }
    }

    .custom-table {
      width: 100%;
      min-width: 650px;
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
      padding: 12px;

      @media (max-width: 768px) {
        height: 48px;
        padding: 8px;
        font-size: 14px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        padding: 10px;
        font-size: 15px;
      }
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
      padding: 12px;

      @media (max-width: 768px) {
        height: 36px;
        padding: 8px;
        font-size: 14px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        padding: 10px;
        font-size: 15px;
      }
    }
  }
`;
