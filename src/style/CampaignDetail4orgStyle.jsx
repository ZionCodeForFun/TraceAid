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
    max-width: 1000px;
    height: 1000px;
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
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: #1a1a1a;
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
          .date {
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

            p {
              font-size: 16px;
              font-weight: 400;
            }

            .hrt_,
            .hrt_filled {
              font-size: 20px;
            }

            .hrt_filled {
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
      }

      .p_top {
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
      }

      .top_right {
        height: 248px;
      }

      .down_right {
        height: 555px;
        background-color: #f8f9fa;
      }

      .name_holder {
        display: flex;
        align-items: center;
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

        .name {
          display: flex;
          flex-direction: column;

          p {
            font-size: 16px;
            color: #4d4d4d;
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
      }
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

  @media (min-width: 480px) and (max-width: 768px) {
    .wrapper {
      flex-direction: column !important;
      width: 100%;
      max-width: 100%;
      gap: 20px;
      padding: 20px 0;
    }

    .wrapper .left,
    .right {
      width: 100%;
    }

    .wrapper .left .top_left .img_holder {
      width: 100%;
      height: auto;
    }

    .wrapper .left .top_left .img_holder img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 480px;
    }

    .wrapper .left .down_left {
      gap: 24px;
    }

    .wrapper .left .down_left .btn_nav {
      flex-direction: row;
      height: auto;
    }

    .wrapper .left .down_left .btn_nav .btn_left,
    .wrapper .left .down_left .btn_nav .btn_right {
      font-size: 16px;
      width: 50%;
    }

    .right .p_top,
    .right .p_all {
      font-size: 18px;
      padding-bottom: 18px;
    }

    .right .top_right .name_holder,
    .right .down_right .name_holder {
      width: 100%;
    }

    .goback .icon p {
      font-size: 14px;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    .wrapper {
      flex-direction: row !important;
      width: 100%;
      max-width: 100%;
      gap: 28px;
      padding: 28px 0;
    }

    .wrapper .left,
    .right {
      width: 48%;
    }

    .wrapper .left .top_left .img_holder {
      width: 100%;
      height: auto;
    }

    .wrapper .left .top_left .img_holder img {
      width: 100%;
      height: auto;
      max-height: 420px;
    }

    .right .p_top,
    .right .p_all {
      font-size: 20px;
    }
  }
`;
