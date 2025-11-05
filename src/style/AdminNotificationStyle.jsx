import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 25px;
  }
`;

export const SettingsSection = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #ececf0;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #121212;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const PrimaryButton = styled.button`
  background-color: #000000;
  color: white;
  font-weight: 500;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px 14px;
    font-size: 14px;
  }
`;

export const ToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #f1f1f3;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: #111;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 13px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: 0.4s;
  }

  span::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #51ff00dc;
  }

  input:checked + span::before {
    transform: translateX(21px);
  }
`;

export const NotificationsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    font-weight: 500;
    color: #222;
    border: 1px solid #c9c9c3;
    padding: 6px 9px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      padding: 5px 7px;
      font-size: 13px;
    }
  }

  button {
    background: none;
    border: 1px solid #c9c9c3;
    border-radius: 8px;
    color: #000000;
    font-size: 14px;
    padding: 8px 9px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      padding: 6px 8px;
      font-size: 13px;
    }
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e2e2e7;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  width: 90%;
  background: #fafafa;

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  svg {
    color: #777;
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Dropdown = styled.select`
  border: 1px solid #e2e2e7;
  border-radius: 8px;
  padding: 10px 14px;
  background: #fafafa;
  font-size: 14px;
  cursor: pointer;
  color: #333;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const NotificationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  background: transparent;
  border-bottom: 1px solid #ececf0;
  border-top: 1px solid #ececf0;
  border-left: 1px solid #ececf0;
  border-right: 1px solid #ececf0;

  th {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    color: #000000dc;
    padding: 10px 12px;
    letter-spacing: 0.3px;

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 10px;
    }
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f1f1f3;
  background-color: ${({ $unread }) => ($unread ? "#fdfaff" : "#fff")};
  border-left: 1px solid #ececf0;
  border-right: 1px solid #ececf0;
  &:hover {
    background-color: #fafafa;
  }
`;

export const TableData = styled.td`
  padding: 10px 12px;
  font-size: 14px;
  color: #333;
  vertical-align: middle;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $type }) =>
    $type === "Donation"
      ? "#8402E3"
      : $type === "Campaign"
      ? "#0085FF"
      : $type === "Verification"
      ? "#00B894"
      : "#888"};
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UnreadDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #0d2aad;
  border-radius: 50%;
  margin-left: 6px;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #d11a2a;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
