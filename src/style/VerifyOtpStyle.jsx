

// import styled from "styled-components";

// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   color: var(--NeutralGrey4-Text);

//   .wrapper {
//     width: 35%;
//     padding: 2.5rem 0;
//     height: max-content;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background-color: var(--Neutral_Offwhite);
//     border-radius: 40px;

//     img {
//       width: 100px;
//       height: 30px;
//       object-fit: contain;
//       margin-bottom: 20px;
//     }

//     .title {
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       text-align: center;
//       height: max-content;
//       margin-bottom: 20px;
//       gap: 5px;

//       .sign {
//         color: var(--NeutralGrey4-Text);
//         font-weight: 700;
//         font-size: 40px;
//         height: 48px;
//       }

//       .text {
//         font-size: 16px;
//         color: var(--NeutralGrey4-Text);
//         font-weight: 400;
//         height: 19px;
//       }
//     }

//     .otp_inputs {
//       display: flex;
//       justify-content: center;
//       margin: 1rem 0;

//       input {
//         width: 3rem;
//         height: 3.5rem;
//         text-align: center;
//         font-size: 1.5rem;
//         border-radius: 0.5rem;
//         border: 1px solid #ccc;
//         transition: border-color 0.3s ease;

//         &:focus {
//           border-color: var(--NeutralGrey4-Text);
//           outline: none;
//         }
//       }
//     }

//     .verify_btn {
//       font-weight: 600;
//       font-size: 16px;
//       height: 43px;
//       border-radius: 8px;
//       width: 67%;
//       background-color: var(--NeutralBlack);
//       color: var(--PrimaryBase);
//       cursor: pointer;
//       transition: all 0.3s ease;
//       &:hover {
//         background-color: var(--PrimaryBase);
//         color: var(--NeutralBlack);
//       }
//     }

//     .goBack {
//       margin-top: 1rem;
//       cursor: pointer;
//       color: #3a4621;
//       font-size: 16px;
//       font-weight: 400;
//       border-bottom: 1px solid #3a4621;
//       text-decoration: none;
//     }

//     .otpResendHolder {
//       margin-top: 1rem;
//       font-size: 14px;
//       display: flex;
//       justify-content: center;
//       gap: 5px;
//     }

//     .otpResend {
//       text-decoration: underline;
//       text-align: center;
//       cursor: pointer;
//       color: #3a4621;
//       gap: 5px;
//     }

//     .holder {
//       height: 90vh;
//       width: 100%;
//       top: 20%;
//       left: 0%;
//       z-index: 9999;
//       position: fixed;
//       background-color: rgba(192, 192, 192, 0.3);

//       .reciept_holder {
//         display: flex;
//         width: 512px;
//         height: 318px;
//         flex-direction: column;
//         background-color: white;
//         align-items: center;
//         padding: 20px;
//         top: 12%;
//         left: 30%;
//         z-index: 9999;
//         position: absolute;
//         gap: 17px;
//         border-radius: 8px;

//         .content-holder {
//           width: 462px;
//           height: 164px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 20px;
//           text-align: center;

//           @media (min-width:300px) and (max-width: 768px) {
//             width: 100%;
//             height: auto;
//             gap: 16px;
//           }

//           @media (min-width: 600px) and (max-width: 900px) {
//             width: 90%;
//             gap: 18px;
//           }

//           i {
//             height: 64px;
//             width: 64px;
//             font-size: 32px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: #00a63e;
//             background-color: #dcfce7;

//             @media (max-width: 768px) {
//               height: 48px;
//               width: 48px;
//               font-size: 24px;
//             }

//             @media (min-width: 600px) and (max-width: 900px) {
//               height: 56px;
//               width: 56px;
//               font-size: 28px;
//             }
//           }

//           .bigtext {
//             font-size: 18px;
//             font-weight: 700;

//             @media (max-width: 768px) {
//               font-size: 16px;
//             }

//             @media (min-width: 600px) and (max-width: 900px) {
//               font-size: 17px;
//             }
//           }

//           .small {
//             font-size: 14px;
//             font-weight: 400;

//             @media (min-width:300px) and (max-width: 768px) {
//               font-size: 13px;
//             }

//             @media (min-width: 600px) and (max-width: 900px) {
//               font-size: 13.5px;
//             }
//           }
//         }

//         .close_btn {
//           background-color: var(--NeutralBlack);
//           color: var(--PrimaryBase);
//           font-weight: 600;
//           font-size: 16px;
//           height: 43px;
//           border-radius: 8px;
//           width: 67%;
//           cursor: pointer;
//           transition: all 0.3s ease;

//           &:hover {
//             background-color: var(--PrimaryBase);
//             color: var(--NeutralBlack);
//           }
//         }
//       }
//     }
//   }


//   @media (max-width: 1024px) {
//     .wrapper {
//       width: 60%;
//       padding: 2rem 1.5rem;
//       border-radius: 32px;
//     }
//   }

//   @media (max-width: 768px) {
//     .wrapper {
//       width: 80%;
//       padding: 1.5rem 1rem;
//     }

//     .title .sign {
//       font-size: 32px;
//       height: 40px;
//     }

//     .title .text {
//       font-size: 14px;
//       height: auto;
//     }

//     .otp_inputs input {
//       width: 2.5rem;
//       height: 3rem;
//       font-size: 1.3rem;
//     }

//     .verify_btn,
//     .close_btn {
//       height: 40px;
//       font-size: 14px;
//       width: 80%;
//     }
//   }

//   @media (max-width: 300px) {
//     .wrapper {
//       width: 95%;
//       padding: 1rem;
//       border-radius: 24px;
//     }

//     .title .sign {
//       font-size: 28px;
//       height: 36px;
//     }

//     .title .text {
//       font-size: 13px;
//     }

//     .otp_inputs input {
//       width: 2rem;
//       height: 2.5rem;
//       font-size: 1.1rem;
//     }

//     .verify_btn,
//     .close_btn {
//       width: 100%;
//       height: 36px;
//       font-size: 13px;
//     }

//     .reciept_holder {
//       width: 90%;
//       height: auto;
//       left: 5%;
//       top: 10%;
//       padding: 15px;
//     }

//     .content-holder {
//       width: 100%;
//       gap: 14px;
//     }

//     .content-holder i {
//       height: 40px;
//       width: 40px;
//       font-size: 20px;
//     }

//     .content-holder .bigtext {
//       font-size: 15px;
//     }

//     .content-holder .small {
//       font-size: 12px;
//     }
//   }
// `;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--NeutralGrey4-Text);

  .wrapper {
    width: 35%;
    padding: 2.5rem 0;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--Neutral_Offwhite);
    border-radius: 40px;

    img {
      width: 100px;
      height: 30px;
      object-fit: contain;
      margin-bottom: 20px;
    }

    .title {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      gap: 5px;

      .sign {
        color: var(--NeutralGrey4-Text);
        font-weight: 700;
        font-size: 40px;
        height: 48px;
      }

      .text {
        font-size: 16px;
        color: var(--NeutralGrey4-Text);
        font-weight: 400;
        height: 19px;
      }
    }

    .otp_inputs {
      display: flex;
      justify-content: center;
      margin: 1rem 0;

      input {
        width: 3rem;
        height: 3.5rem;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: var(--NeutralGrey4-Text);
          outline: none;
        }
      }
    }

    .verify_btn {
      font-weight: 600;
      font-size: 16px;
      height: 43px;
      border-radius: 8px;
      width: 67%;
      background-color: var(--NeutralBlack);
      color: var(--PrimaryBase);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--PrimaryBase);
        color: var(--NeutralBlack);
      }
    }

    .goBack {
      margin-top: 1rem;
      cursor: pointer;
      color: #3a4621;
      font-size: 16px;
      font-weight: 400;
      border-bottom: 1px solid #3a4621;
      text-decoration: none;
    }

    .otpResendHolder {
      margin-top: 1rem;
      font-size: 14px;
      display: flex;
      justify-content: center;
      gap: 5px;
    }

    .otpResend {
      text-decoration: underline;
<<<<<<< HEAD
      cursor: pointer;
      color: #3a4621;
=======

      text-align: center;

      cursor: pointer;
      color: #3a4621;

      gap: 5px;
>>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
    }

    .holder {
      height: 90vh;
      width: 100%;
      top: 20%;
      left: 0;
      z-index: 9999;
      position: fixed;
      background-color: rgba(192, 192, 192, 0.3);

      .reciept_holder {
        display: flex;
        width: 512px;
        height: 318px;
        flex-direction: column;
        background-color: white;
        align-items: center;
        padding: 20px;
        top: 12%;
        left: 30%;
        z-index: 9999;
        position: absolute;
        gap: 17px;
        border-radius: 8px;

        .content-holder {
          width: 462px;
          height: 164px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;

          i {
            height: 64px;
            width: 64px;
            font-size: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #00a63e;
            background-color: #dcfce7;
          }

          .bigtext {
            font-size: 18px;
            font-weight: 700;
          }

          .small {
            font-size: 14px;
            font-weight: 400;
          }
        }

        .close_btn {
          background-color: var(--NeutralBlack);
          color: var(--PrimaryBase);
          font-weight: 600;
          font-size: 16px;
          height: 43px;
          border-radius: 8px;
          width: 67%;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--PrimaryBase);
            color: var(--NeutralBlack);
          }
        }
      }
    }
  }

  /* ---------- TABLET (max-width: 1024px) ---------- */
  @media (max-width: 1024px) {
    .wrapper {
      width: 60%;
      padding: 2rem 1.5rem;
      border-radius: 32px;
    }
  }

  /* ---------- MOBILE (max-width: 768px) ---------- */
  @media (max-width: 768px) {
    .wrapper {
      width: 80%;
      padding: 1.5rem 1rem;
      border-radius: 28px;
    }

    .title .sign {
      font-size: 32px;
      height: 40px;
    }

    .title .text {
      font-size: 14px;
    }

    .otp_inputs input {
      width: 2.5rem;
      height: 3rem;
      font-size: 1.3rem;
    }

    .verify_btn,
    .close_btn {
      height: 40px;
      font-size: 14px;
      width: 80%;
    }
  }

  /* ---------- SMALL MOBILE (min-width: 300px, max-width: 480px) ---------- */
  @media (min-width: 300px) and (max-width: 600px) {
    .wrapper {
      width: 95%;
      padding: 1rem;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .title { 
      display: flex;
      justify-content: space-around;
      
      .sign {
      font-size: 5px;
      height: auto;
    }

     .text {
      font-size: 3px;
    }
  }
    .otp_inputs input {
      width: 2rem;
      height: 2.5rem;
      font-size: 1.0rem;
    }

    .verify_btn,
    .close_btn {
      width: 100%;
      height: 36px;
      font-size: 13px;
    }

    .holder .reciept_holder {
      width: 90%;
      height: auto;
      left: 5%;
      top: 10%;
      padding: 15px;
    }

    .holder .content-holder {
      width: 100%;
      gap: 14px;
    }

    .holder .content-holder i {
      height: 40px;
      width: 40px;
      font-size: 20px;
    }

    .holder .content-holder .bigtext {
      font-size: 15px;
    }

    .holder .content-holder .small {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      width: 95%;
      padding: 1.5rem 1rem;
      border-radius: 18px;
      box-shadow: none;
      background-color: var(--Neutral_Offwhite);
      gap: 16px;

      img {
        width: 90px;
        height: 26px;
        margin-bottom: 10px;
      }

      .title .sign {
        font-size: 22px;
        height: auto;
      }

      .title .text {
        font-size: 12px;
        color: #6b6b6b;
      }

      .otp_inputs {
        margin: 1rem 0;
        gap: 10px;

        input {
          width: 2.6rem;
          height: 3rem;
          font-size: 1.2rem;
          border-radius: 8px;
        }
      }

      .verify_btn {
        width: 100%;
        height: 46px;
        font-size: 14px;
        border-radius: 10px;
      }

      .otpResendHolder {
        font-size: 12px;
        gap: 4px;
      }

      .otpResend {
        font-size: 12px;
      }

      .goBack {
        font-size: 12px;
        margin-top: 8px;
        border-bottom: none;
        text-decoration: underline;
      }
    }
  }
`;
