import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: 92vh;
  background: #fafafa;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
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

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  cursor: pointer;
`;

export const ChartTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const RecentActivity = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  cursor: pointer;

  h3 {
    color: #0a0a0a;
    font-size: 17px;
    font-weight: 500;
    line-height: 16px;
  }
  p {
    color: #717182;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ProfileHolder = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) =>
    type === "Donation"
      ? "#DCFCE7"
      : type === "Campaign"
      ? "#DBEAFE"
      : "#FFEDD4"};

  .img-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  gap: 0.8rem;

  &:last-child {
    border-bottom: none;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ActivityInfo = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    color: #101828;
  }

  p {
    color: #99a1af;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 0.3rem 0 0;
  }
`;

export const ActivityType = styled.span`
  background: transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  font-size: 12px;
  line-height: 16px;
  color: #0a0a0a;
  font-weight: 500;
`;
