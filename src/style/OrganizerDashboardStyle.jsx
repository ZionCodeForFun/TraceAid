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
        height: 100%;
        gap: 20px;
        .menu {
          height: 73px;
          display: flex;
          width: 99%;
          align-items: center;
          font-size: 18px;
          font-weight: 500;

          &:hover {
            background-color: #e1e1e1;
          }
        }
        .menulogout {
          color: #df0f23;
          font-size: 18px;
          font-weight: 500;
          height: 4rem;
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
      margin-left: 20%;
      height: 100%;
    }
  }
`;
