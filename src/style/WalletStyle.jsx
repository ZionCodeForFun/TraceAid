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

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 15px 30px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 100%;
      padding: 0 20px 30px;
    }
    .btn_holder {
      height: 16vh;
      display: flex;
      justify-content: end;
      align-items: end;
      margin-bottom: 40px;

      @media (max-width: 768px) {
        height: auto;
        margin-bottom: 24px;
        justify-content: center;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        height: auto;
        margin-bottom: 32px;
      }

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

        @media (max-width: 768px) {
          width: 100%;
          height: 42px;
          font-size: 16px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          width: 220px;
          height: 44px;
          font-size: 17px;
        }

        &:hover {
          opacity: 0.9;
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

      @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 16px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        gap: 20px;
        height: auto;
      }

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

        @media (max-width: 768px) {
          width: 100%;
          height: 140px;
          padding: 16px;
          border-radius: 10px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          height: 150px;
          padding: 20px;
        }

        .top {
          display: flex;
          justify-content: space-between;
          height: 64px;
          width: 100%;
          gap: 10px;

          @media (max-width: 768px) {
            height: 48px;
            gap: 8px;
          }

          p {
            line-height: 20px;
            height: 20px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            color: #4a5565;

            @media (max-width: 768px) {
              font-size: 16px;
              line-height: 18px;
              height: 18px;
            }

            @media (min-width: 600px) and (max-width: 900px) {
              font-size: 18px;
            }
          }

          span {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            color: #8402e3;
            width: 32px;
            height: 32px;
            padding: 8px;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            display: flex;
            background-color: #dfcbff;

            @media (max-width: 768px) {
              width: 28px;
              height: 28px;
              padding: 6px;
              font-size: 13px;
            }
          }
        }

        .down {
          color: #101828;
          height: 32px;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px;

          @media (max-width: 768px) {
            height: 28px;
            font-size: 24px;
            line-height: 28px;
          }

          @media (min-width: 600px) and (max-width: 900px) {
            font-size: 28px;
          }
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

      @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 10px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        gap: 12px;
      }

      .dropdwn {
        display: flex;
        align-items: center;
        gap: 15px;
        background-color: var(--sidebarBg);
        height: 100%;
        width: 180px;
        border-radius: 7px;
        justify-content: space-around;

        @media (max-width: 768px) {
          width: 100%;
          height: 36px;
        }

        p {
          font-weight: 400;
          font-size: 16px;

          @media (max-width: 768px) {
            font-size: 14px;
          }
        }
        i {
          font-weight: 500;
          font-size: 24px;
          cursor: pointer;

          @media (max-width: 768px) {
            font-size: 20px;
          }
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

        @media (max-width: 768px) {
          width: 100%;
          height: 36px;
          padding: 4px 10px 4px 32px;
          font-size: 13px;
        }

        @media (min-width: 600px) and (max-width: 900px) {
          width: calc(100% - 200px);
        }
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
      overflow-x: auto;

      @media (max-width: 768px) {
        border-radius: 8px;
      }
    }

    .custom-table {
      width: 100%;
      min-width: 650px;
      border-collapse: collapse;
      color: #1f2937;

      .details {
        width: 350px;

        @media (max-width: 768px) {
          width: 250px;
        }
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
      padding: 12px;
      border-bottom: 1px solid #e5e7eb;
      color: #4d4d4d;
      font-size: 16px;

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
        font-size: 14px;
        height: 36px;
        padding: 8px;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        padding: 10px;
        font-size: 15px;
      }
    }
  }
`;
