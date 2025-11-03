import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #ececf0;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #111;
  margin: 0px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  background: transparent;
  border-radius: 8px;
  width: 100%;
`;
export const AdminCampaignInput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  
  .campaign-info {
    width: 100%;
    display: flex;
    align-content: center;
    gap: 20px;
    padding: 0.5rem;
    background: transparent;

    .campaign-section {
      height: 36px;
      width: 95%;
      display: flex;
      align-content: center;
      justify-content: center;

      .holder {
        display: flex;
        align-items: center;
        background-color: #f3f3f5;
        width: 100%;
        height: 100%;
        padding: 0 0.75rem;
        border-radius: 8px;
        gap: 10px;
        cursor: pointer;

        .logo {
          color: #717182;
          display: flex;
          align-items: center;
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
      cursor: pointer;

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

  `;

export const StatusFilter = styled.div`
  select {
    border: none;
    outline: none;
    background: transparent;
    color: #444;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececf0;
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1.5fr 1.1fr 1fr;
  padding: 12px 20px;
  font-weight: 600;
  color: #222;
  background-color: #f9f9fa;
  border-bottom: 1px solid #ececf0;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1.5fr 1.1fr 1fr;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #ececf0;
  font-size: 14px;
  color: #333;

  &:last-child {
    border-bottom: none;
  }
    & > div:nth-child(3) {
    margin-right: 45px; 
  }
    span:nth-last-child(2) {
    margin-right: 40px;
  }

`;

export const NGOName = styled.span`
  color: #3a4452;
  font-weight: 500;
`;

export const ProgressCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 8px;
  background: #e5e5e5;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#4b7e1f"
      : status === "active"
      ? "#ffea00"
      : status === "paused"
      ? "#ff0000"
      : "#e5e5e5"};
`;

export const StatusTag = styled.span`
  background-color: ${({ status }) =>
    status === "active"
      ? "#ffea00"
      : status === "completed"
      ? "#4b7e1f"
      : status === "paused"
      ? "#dfe1e6"
      : "#f3f3f3"};
  color: ${({ status }) =>
    status === "completed"
      ? "#fff"
      : status === "active"
      ? "#000"
      : "#555"};
  font-weight: 500;
  font-size: 13px;
  padding: 6px 6px;
  border-radius: 10px;
  text-transform: capitalize;
  text-align: center;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #fff;
  border: 1px solid #ececf0;
  border-radius: 10px;
  font-size: 13px;
  color: #333;
  padding: 6px 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }

  svg {
    font-size: 16px;
  }
`;





