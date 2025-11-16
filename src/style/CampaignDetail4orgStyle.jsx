import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .wrapper {
    display: flex;
    flex-direction: row !important;
    width: 920px;
    height: 1000px;
    max-width: 1000px;
    gap: 40px;
    padding: 34px 0;

    .left {
      width: 473px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 48px;

      .top_left {
        height: 456px;
        display: flex;
        flex-direction: column;
        width: 100%;

        p {
          font-size: 18px;
          font-weight: 700;
          padding-bottom: 34px;
        }

        .img_holder {
          height: 403px;
          width: 472px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }

      .down_left {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 60px;

        .btn_nav p.active {
          background-color: #1a1a1a;
          color: #cded8b;
        }

        .btn_nav {
          display: flex;
          height: 42px;
          width: 100%;

          .btn_left,
          .btn_right {
            background-color: #f8f9fa;
            font-size: 18px;
            font-weight: 700;
            width: 50%;
            cursor: pointer;
            color: #1a1a1a;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .coment_holder {
          height: 243px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .title {
            font-size: 14px;
            font-weight: 700;
            color: #617437;
          }
          .comment,
          .date,
          .react_holder p {
            font-size: 16px;
            font-weight: 400;
          }
          .date {
            font-style: italic;
          }
          .react_holder {
            display: flex;
            height: 20px;
            gap: 6px;
            align-items: center;

            .hrt_ {
              font-size: 20px;
            }
            .hrt_filled {
              font-size: 20px;
              color: #df0f23;
            }
          }
        }

        .share_btn {
          height: 43px;
          border: 2px solid #617437;
          color: #333333;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          &:hover {
            background-color: #45581c;
            color: white;
          }
          &:active {
            background-color: #8ab233;
          }
        }
      }
    }
  }

  .right {
    width: 520px;
    height: 100%;

    .p_top,
    .p_all {
      font-size: 22px;
      font-weight: 600;
      color: #333333;
      padding-bottom: 24px;
    }

    .top_right,
    .down_right {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 0.5px solid #c0c0c0;
      border-radius: 12px;
      gap: 24px;
      padding: 16px;

      .name_holder {
        display: flex;
        height: 56px;
        width: 321px;
        gap: 10px;

        i {
          font-size: 25px;
          height: 56px;
          width: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          background-color: #f0f9dd;
          color: #617437;
        }
        .name p {
          font-size: 16px;
          color: #4d4d4d;
        }
      }
    }

    .down_right {
      height: 555px;
      background-color: #f8f9fa;
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

  @media (max-width: 1024px) {
    .wrapper {
      width: 100%;
      flex-direction: column !important;
      height: auto;
      gap: 30px;
    }

    .left,
    .right {
      width: 100%;
    }

    .left .img_holder {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      padding: 20px;
      gap: 20px;
    }

    .btn_nav .btn_left,
    .btn_nav .btn_right {
      font-size: 16px;
    }

    .coment_holder {
      gap: 10px;
    }

    .down_right {
      height: auto;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      gap: 15px;
      padding: 16px;
    }

    .container p,
    .comment,
    .date,
    .react_holder p {
      font-size: 14px;
    }

    .share_btn {
      font-size: 14px;
      padding: 8px;
    }

    .btn_nav .btn_left,
    .btn_nav .btn_right {
      font-size: 14px;
    }
  }
`;
