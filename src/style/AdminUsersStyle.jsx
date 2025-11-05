import styled from "styled-components";

export const AdminUsersWrapper = styled.div`
  height: 75vh;
  min-height: max-content;
  width: 100%;
  margin-top: 20px;
  background-color: #ffffff;
  border: 2px solid #ececf0;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .header-info {
    width: 100%;
  }

  .toogle-info {
    width: 10%;
    min-width: max-content;
    height: 36px;
    background-color: #ececf0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    gap: 10px;
  }

  .input-info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 0.5rem;

    .input-section {
      height: 36px;
      width: 65%;
      min-width: 200px;
      display: flex;
      align-items: center;

      .holder {
        display: flex;
        align-items: center;
        background-color: #f3f3f5;
        width: 100%;
        height: 100%;
        padding: 0 0.75rem;
        border-radius: 8px;
        gap: 10px;

        .logo {
          color: #717182;
          display: flex;
          align-items: center;
        }

        input {
          width: 100%;
          border: none;
          background: transparent;
          color: #717182;
          font-size: 14px;
          outline: none;
        }
      }
    }

    .status-info {
      height: 36px;
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f3f3f5;
      padding: 0.75rem;
      border-radius: 8px;
      gap: 10px;

      .all-stat {
        font-size: 14px;
        color: #717182;
        font-weight: 400;
      }

      .all-drop select {
        border: none;
        outline: none;
        cursor: pointer;
        color: #717182;
        background: transparent;
      }
    }
  }

  @media (max-width: 768px) {
    .toogle-info {
      width: 100%;
      flex-wrap: wrap;
    }
    .input-info {
      flex-direction: column;
      .input-section {
        width: 100%;
      }
      .status-info {
        width: 100%;
      }
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  border: 2px solid #ececf0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow-x: auto; 

  > * {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.2fr 1fr 0.8fr;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 2fr 3fr 1.5fr 1.5fr 1fr;
    padding: 10px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 2fr 3fr 2fr 2fr 1fr;
    padding: 8px;
    font-size: 12px;
  }
`;

export const HeaderItem = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.2fr 1fr 0.8fr;
  align-items: center;
  color: #2f2f2f;
  font-size: 15px;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 2fr 3fr 1.5fr 1.5fr 1fr;
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 2fr 3fr 2fr 2fr 1fr;
    padding: 8px;
    font-size: 13px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Email = styled.span`
  color: #4A5565;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Date = styled.span`
  color: #4A5565;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Amount = styled.span`
  font-weight: 600;
  color: #333333;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Status = styled.span`
  background-color: ${({ active }) => (active ? "#7aa62d" : "#f3f3f3")};
  color: ${({ active }) => (active ? "#fff" : "#7aa62d")};
  text-transform: lowercase;
  font-size: 13px;
  font-weight: 500;
  padding: 4px;
  border-radius: 12px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 2px;
  }
`;
