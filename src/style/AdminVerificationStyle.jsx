import styled from "styled-components";



export const AdminVerificationContainer = styled.div`
  height: 75vh;
  min-height: max-content;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const AdminVerificationTitle = styled.h2`
  min-height: max-content;
  width: 60%;
  padding: 0.4rem;
  font-size: 24px;
  display: flex;
  background-color: #ececf0;
  border-radius: 20px;
  justify-content: space-between;

  button {
    min-width: max-content;
    width: 40%;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    background: transparent;
    border: none;
    font-weight: 500;
    color: #333;

    &.active {
      background-color: #67940B;
      color: #fff;
    }

    &:hover {
      background-color: #9fd434ce;
      color: #fff;
    }
  }
`;

export const AdminVerificationContent = styled.div`
  height: auto;
  min-height: max-content;
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 20px;
  border: 2px solid #ececf0;
  gap: 20px;
  flex-direction: column;

  .status-info {
    height: 36px;
    width: 200px;
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
`;

export const AdminVerificationTop = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 5px;

  text {
    font-size: 18px;
    line-height: 16px;
    color: #0a0a0a;
  }

  .text1 {
    font-size: 14px;
    line-height: 16px;
    color: #90909b;
  }
`;
export const AdminVerificationInput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  
  .input-info {
    width: 100%;
    display: flex;
    align-content: center;
    gap: 20px;
    padding: 0.5rem;

    .input-section {
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

export const AdminVerificationItem = styled.div`
  height: auto;
  min-height: max-content;
  gap: 20px;
`;

export const TableContainer = styled.div`
  width: 100%;
  border: 2px solid #ececf0;
  border-radius: 6px;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > * {
    width: 100%;
  }
  `;
export const CampaignHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr 0.8fr 0.5fr 0fr; 
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;
  margin-left: 8px;
  `;

export const HeaderItem = styled.span`
  font-size: 14px;
  line-height: 20px;
  min-width: max-content;
  color: #333333;
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr 0.8fr 0.5fr 0.6fr;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr 0.8fr 0.5fr 0.6fr;
  align-items: center;
  color: #2f2f2f;
  font-size: 15px;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;
  width: 100%;
`;
export const CampaignRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr 0.8fr 0.5fr 0fr; 
  align-items: center;
  color: #2f2f2f;
  font-size: 15px;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 20px;
  width: 100%;
`;
export const Cell = styled.div`
  flex: 1;
  text-align: left;
  font-size: 14px;
  color: #333;
`;

export const CampaignName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #333333;
`;

export const NGO = styled.span`
  color: #4a5565;
  font-size: 14px;
`;

export const CreatedDate = styled.span`
  color: #4a5565;
  font-size: 14px;
`;

export const Goal = styled.span`
  font-weight: 600;
  color: #333333;
  font-size: 14px;
`;

export const Status = styled.span`
  background-color: ${({ active }) => (active ? "#7aa62d" : "#f3f3f3")};
  color: ${({ active }) => (active ? "#fff" : "#7aa62d")};
  text-transform: lowercase;
  font-size: 13px;
  font-weight: 500;
  padding: 7px 6px;
  margin-right: 20px;
  border-radius: 12px;
  text-align: center;
`;
// export const MilestoneStatus = styled.span`
//   background-color: ${({ active }) => (active ? "#000000" : "#e5e5e5")};
//   color: ${({ active }) => (active ?  "#f3f3f3" : "#000000")};
//   text-transform: lowercase;
//   font-size: 13px;
//   font-weight: 500;
//   padding: 7px 6px;
//   margin-right: 20px;
//   border-radius: 12px;
//   text-align: center;
// `;
export const MilestoneFundsStatus = styled.span`
  background-color: ${({ status }) =>
    status === "approved"
      ? "#7aa62d" 
      : status === "rejected"
      ? "#ff0004b9"
      : "#e5e5e5"};
  color: ${({ status }) =>
    status === "approved" || status === "rejected" ? "#fff" : "#000"};
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 500;
  padding: 7px 12px;
  margin-right: 20px;
  border-radius: 12px;
  text-align: center;
`;

export const Actions = styled.button`
  background-color: transparent;
  color: black;
  padding: 7px 6px; 
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  font-size: 12px; 
  cursor: pointer;
  font-weight: 500;
  margin-left: 20px; 

  &:hover {
    background-color: #e5e5e5;
    color: #000000;
  }
`;
export const Evidence = styled.div`
  color: black;
  font-size: 12px; 
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: start;
  align-content: center;
  padding-left: 30px;
`;
