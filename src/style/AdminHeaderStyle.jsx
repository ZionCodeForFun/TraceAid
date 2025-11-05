import styled from "styled-components";

export const AdminHeaderContainer = styled.header`
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid #e5e7eb;
`;

export const AdminHeaderInner = styled.div`
  width: 1250px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    padding: 0 1rem;
    height: 60px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    height: auto;
  }
`;

export const AdminHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  img {
    height: 29px;
    cursor: pointer;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 25%;
    img {
      height: 25px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;

    img {
      height: 24px;
    }
  }
`;

export const AdminHeaderCenter = styled.div`
  width: 40%;
  display: flex;
  justify-content: start;

  .holder {
    display: flex;
    align-items: center;
    background-color: #f3f3f5;
    width: 448px;
    height: 36px;
    padding: 0 0.75rem;
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;

    .logo {
      color: #717182;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    input {
      cursor: pointer;
      width: 100%;
      border: none;
      background: transparent;
      color: #717182;
      font-size: 14px;
      outline: none;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;

    .holder {
      width: 100%;
      height: 34px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;

    .holder {
      width: 100%;
      height: 34px;
    }
  }
`;

export const AdminHeaderRight = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;

  .left {
    display: flex;
    align-items: center;
    gap: 10px;

    .profile_holder {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #6b7d43;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .name_holder {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .name {
        font-size: 15px;
        font-weight: 500;
        color: #111827;
      }

      .email {
        font-size: 12px;
        color: #6b7280;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 30%;
    justify-content: flex-end;

    .left {
      gap: 8px;
      .name {
        font-size: 14px;
      }
      .email {
        font-size: 11px;
      }
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-right: 0;

    .left {
      gap: 6px;

      .profile_holder {
        width: 32px;
        height: 32px;
      }

      .name_holder {
        align-items: center;
        .name {
          font-size: 14px;
        }
        .email {
          font-size: 11px;
        }
      }
    }
  }
`;
