// import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   background-color: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--NeutralGrey4-Text);
//   padding: 40px 20px;

//   .wrapper {
//     width: 480px;
//     padding: 40px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: var(--Neutral_Offwhite);
//     border-radius: 24px;
//     border: 0.5px solid var(--Neutral_Grey1);
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
//     gap: 20px;
//   }

//   .img_holder {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     margin-bottom: 10px;

//     img {
//       height: 26px;
//       object-fit: contain;
//     }
//   }

//   .content_holder {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;

//     .title {
//       text-align: center;
//       margin-bottom: 10px;

//       .sign {
//         color: var(--NeutralGrey4-Text);
//         font-weight: 700;
//         font-size: 28px;
//       }

//       .text {
//         font-size: 14px;
//         color: var(--NeutralGrey4-Text);
//       }
//     }

//     .input {
//       height: 42px;
//       border-radius: 10px;
//       font-size: 14px;
//     }

//     .signup_btn {
//       background-color: var(--NeutralBlack);
//       color: var(--PrimaryBase);
//       font-weight: 600;
//       font-size: 16px;
//       height: 43px;
//       border-radius: 8px;

//       &:hover {
//         background-color: var(--PrimaryBase);
//         color: var(--NeutralBlack);
//       }
//     }

//     .google_holder {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       width: 100%;
//       gap: 20px;

//       .google_btn {
//         background-color: white;
//         border: 2px solid var(--Primary700);
//         color: var(--NeutralGrey4-Text);
//         font-size: 16px;
//         font-weight: 600;
//         padding: 12px 30px;
//         height: 44px;
//         width: 100%;
//         border-radius: 8px;
//         transition: all 0.3s ease;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 10px;

//         &:hover {
//           background-color: var(--Primary200);
//         }

//         img {
//           height: 20px;
//           width: 20px;
//         }
//       }

//       .line-text {
//         display: flex;
//         align-items: center;
//         text-align: center;
//         color: #555;
//         margin: 5px 0;
//         gap: 7px;
//         font-weight: 400;
//         font-size: 16px;
//         width: 400px;
//         max-width: 100%;
//       }

//       .line-text::before,
//       .line-text::after {
//         content: "";
//         flex: 1;
//         border-bottom: 1px solid #c0c0c0;
//       }

//       p {
//         font-weight: 400;
//         font-size: 16px;
//       }
//     }

//     .custom-checkbox {
//       color: #333;
//       font-weight: 500;

//       a {
//         color: var(--NeutralBlack);
//       }

//       .ant-checkbox-inner {
//         border-color: #c0c0c0;
//       }

//       .ant-checkbox-checked .ant-checkbox-inner {
//         background-color: var(--NeutralBlack);
//         border-color: var(--NeutralGrey4-Text);
//       }
//     }

//     .already {
//       font-size: 14px;
//       margin-top: 20px;
//       display: flex;
//       justify-content: center;
//       gap: 8px;
//       flex-wrap: wrap;

//       p,
//       span {
//         font-size: 14px;
//       }
//     }
//   }

//   @media (min-width: 350px) and (max-width: 768px) {
//     padding: 30px 15px;

//     .wrapper {
//       width: 95%;
//       padding: 25px;
//       border-radius: 20px;
//       gap: 15px;
//     }

//     .img_holder img {
//       height: 22px;
//     }

//     .content_holder .title .sign {
//       font-size: 22px;
//     }

//     .content_holder .title .text {
//       font-size: 13px;
//     }

//     .input,
//     .signup_btn,
//     .google_holder .google_btn {
//       height: 38px;
//       font-size: 13px;
//       padding: 10px;
//     }

//     .google_holder .line-text {
//       width: 90%;
//       font-size: 13px;
//     }

//     .already {
//       font-size: 12px;
//       gap: 5px;
//     }
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     .wrapper {
//       width: 80%;
//       padding: 35px;
//       border-radius: 22px;
//     }

//     .img_holder img {
//       height: 30px;
//     }

//     .content_holder .title .sign {
//       font-size: 24px;
//     }

//     .content_holder .title .text {
//       font-size: 13.5px;
//     }

//     .input,
//     .signup_btn,
//     .google_holder .google_btn {
//       height: 40px;
//       font-size: 14px;
//       padding: 10px 20px;
//     }

//     .google_holder .line-text {
//       width: 85%;
//       font-size: 14px;
//     }
//   }
// `;




import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--NeutralGrey4-Text);
  padding: 40px 20px;

  .wrapper {
    width: 480px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Neutral_Offwhite);
    border-radius: 24px;
    border: 0.5px solid var(--Neutral_Grey1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    gap: 20px;
  }

  .img_holder {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      height: 26px;
      object-fit: contain;
    }
  }

  .content_holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .title {
      text-align: center;
      margin-bottom: 10px;

      .sign {
        color: var(--NeutralGrey4-Text);
        font-weight: 700;
        font-size: 28px;
      }

      .text {
        font-size: 14px;
        color: var(--NeutralGrey4-Text);
      }
    }

    .input {
      height: 42px;
      border-radius: 10px;
      font-size: 14px;
    }

    .signup_btn {
      background-color: var(--NeutralBlack);
      color: var(--PrimaryBase);
      font-weight: 600;
      font-size: 16px;
      height: 43px;
      border-radius: 8px;

      &:hover {
        background-color: var(--PrimaryBase);
        color: var(--NeutralBlack);
      }
    }

    .google_holder {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;

      .google_btn {
        background-color: white;
        border: 2px solid var(--Primary700);
        color: var(--NeutralGrey4-Text);
        font-size: 16px;
        font-weight: 600;
        padding: 12px 30px;
        height: 44px;
        width: 100%;
        border-radius: 8px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        &:hover {
          background-color: var(--Primary200);
        }

        img {
          height: 20px;
          width: 20px;
        }
      }

      .line-text {
        display: flex;
        align-items: center;
        text-align: center;
        color: #555;
        margin: 5px 0;
        gap: 7px;
        font-weight: 400;
        font-size: 16px;
        width: 400px;
        max-width: 100%;
      }

      .line-text::before,
      .line-text::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #c0c0c0;
      }

      p {
        font-weight: 400;
        font-size: 16px;
      }
    }

    .custom-checkbox {
      color: #333;
      font-weight: 500;

      a {
        color: var(--NeutralBlack);
      }

      .ant-checkbox-inner {
        border-color: #c0c0c0;
      }

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: var(--NeutralBlack);
        border-color: var(--NeutralGrey4-Text);
      }
    }

    .already {
      font-size: 14px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;

      p,
      span {
        font-size: 14px;
      }
    }
  }

  /* ------------------ Extra Small Devices (Phones ≤ 480px) ------------------ */
  @media (max-width: 480px) {
    padding: 20px 10px;

    .wrapper {
      width: 100%;
      padding: 20px;
      gap: 12px;
      border-radius: 16px;
    }

    .img_holder img {
      height: 20px;
    }

    .content_holder .title .sign {
      font-size: 20px;
    }

    .content_holder .title .text {
      font-size: 12.5px;
    }

    .input,
    .signup_btn,
    .google_holder .google_btn {
      height: 36px;
      font-size: 13px;
      padding: 8px;
    }

    .google_holder .line-text {
      width: 90%;
      font-size: 12.5px;
    }

    .already {
      font-size: 12px;
      gap: 5px;
    }
  }

   @media (min-width: 400px) and (max-width: 768px) {
    padding: 30px 15px;

    .wrapper {
      width: 90%;
      padding: 25px;
      border-radius: 20px;
      gap: 15px;
    }

    .img_holder img {
      height: 22px;
    }

    .content_holder .title .sign {
      font-size: 22px;
    }

    .content_holder .title .text {
      font-size: 13px;
    }

    .input,
    .signup_btn,
    .google_holder .google_btn {
      height: 38px;
      font-size: 13px;
    }

    .google_holder .line-text {
      width: 90%;
      font-size: 13px;
    }

    .already {
      font-size: 13px;
    }
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    .wrapper {
      width: 75%;
      padding: 35px;
      border-radius: 22px;
    }

    .img_holder img {
      height: 28px;
    }

    .content_holder .title .sign {
      font-size: 25px;
    }

    .input,
    .signup_btn,
    .google_holder .google_btn {
      height: 40px;
      font-size: 14px;
      padding: 10px 20px;
    }

    .google_holder .line-text {
      width: 85%;
      font-size: 14px;
    }
  }

  @media (min-width: 1025px) {
    .wrapper {
      width: 480px;
    }
  }
`;
