import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  background-color: white;
  .ant-layout {
    background-color: #ffffff !important;
  }
  .wrapper {
    color: var(--NeutralGrey4-Text);
    background: white;
    .sider_holder {
      background-color: var(--sidebarBg);
      padding-top: 50px;
      height: 100vh;
      position: fixed;
      z-index: 999;

      .ant-menu-item-selected {
        background-color: var(--NeutralBlack) !important;
        color: var(--PrimaryBase) !important;
      }
      .ant-menu-item-selected a {
        color: var(--PrimaryBase) !important;
      }
      .logo {
        display: flex;
        width: 100%;
        height: 4rem;
        padding-left: 10px;

        align-items: center;
        justify-content: centerS;
        margin-bottom: 15px;
        img {
          object-fit: contain;
          height: fit-content;
          width: fit-content;
          cursor: pointer;
        }
      }
      .content_holder {
        background-color: transparent !important;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
        height: 80%;
        gap: 20px;

        .menu {
          height: 48px;
          display: flex;
          width: 99%;
          align-items: center;
          font-size: 16px;
          font-weight: 500;

          &:hover {
            background-color: #e1e1e1;
          }
        }
        .menulogout {
          color: #df0f23;
          font-size: 16px;
          font-weight: 500;
          height: 48px;
          display: flex;
          width: 99%;
          align-items: center;
          &:hover {
            background-color: #e1e1e1;
          }
        }
      }
    }
    .contentoutline_holder {
      width: 80%;
      margin-top: 60px;
      padding-top: 30px;
      margin-left: 13%;
      height: 100%;
    }
  }
  @media(min-width:300px) and (max-width: 768px) {
    .wrapper {
      .sider_holder {
        position: relative;                                                                                                                                                                                                                                                                                                                    ;
        position: fixed;                                                                                                                                                                                                                                                                                                                    ;
        height: 100vh;
        padding-top: 16px;
        width: 100%;

        .logo {
          padding-left: 0;
          justify-content: end;
          height: 1rem;
          margin-bottom: 25px;
          margin-top: 25px;

          img {
            height: 17px;
          }
        }

        .content_holder {
          gap: 16px;

          .menu,
          .menulogout {
            font-size: 14px;
            height: 42px;
            padding: 0 12px;
          }
        }
      }

      .contentoutline_holder {
        width: 100%;
        margin-left: 60px;
        margin-top: 75px;
        padding: 12px;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    .wrapper {
      .sider_holder {
        width: 250px;
        padding-top: 32px;

        .logo {
          height: 3.5rem;
          margin-bottom: 14px;

          img {
            height: 26px;
          }
        }

        .content_holder {
          gap: 18px;

          .menu,
          .menulogout {
            font-size: 15px;
            height: 45px;
            padding: 0 14px;
          }
        }
      }

      .contentoutline_holder {
        width: calc(100% - 250px);
        margin-left: 250px;
        margin-top: 30px;
        padding: 20px;
      }
    }
  }
`;












