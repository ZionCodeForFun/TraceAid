import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TopCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
`;

export const Card = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ececf0;
  box-shadow: 0 1px 2px rgba(10,10,10,0.03);
`;

export const CardTitle = styled.div`
  font-size: 13px;
  color: #444;
  margin-bottom: 8px;
`;

export const CardValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #111;
`;

export const CardDelta = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: ${({ positive }) => (positive ? "#14AE5C" : "#EA4335")};
`;

export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ bg }) => bg || "#f3f3f5"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
`;

export const ChartCard = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ececf0;
  padding: 18px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
`;

export const ChartCardHeader = styled.div`
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;

  small {
    display: block;
    font-weight: 400;
    color: #8b8f97;
    margin-top: 6px;
    font-size: 13px;
  }
`;

export const ChartArea = styled.div`
  width: 100%;
  flex: 1;
`;

export const TableCard = styled(ChartCard)`
  grid-column: 1 / -1;
  padding: 16px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  font-weight: 600;
  border-radius: 8px;
  color: #333;
  background: #fff;
`;

export const TableBody = styled.div`
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f1f1f4;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

export const AmountBadge = styled.div`
  background: transparent;
  border: 1px solid #09b959;
  color: #09b959;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 600;
  width: fit-content;
`;

export const ControlsRow = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
`;

export const ExportButton = styled.button`
  background: #0b1226;
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;


export const StatCard = styled.div`
  background: ${({ bg }) => bg || "#fff"};
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #d1d5db;
  cursor: pointer;
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatIconContainer = styled.div`
  background: ${({ bg }) => bg || "#f0f0f0"};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatTitle = styled.h4`
  color: #4A5565;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.h2`
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  font-weight: 400;
  color: #101828;
`;

export const StatChange = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin-top: 0.5rem;
  color: ${({ up }) => (up ? "#34a853" : "#ea4335")};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;