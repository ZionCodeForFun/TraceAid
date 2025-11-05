import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 30px;
  background-color: transparent;
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1250px;

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 25px;
  }
`;

export const SettingsSection = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 25px;
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
  width: 100%;
  max-width: 1250px;

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 22px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 18px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 15px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #424242;
  margin-bottom: 10px;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StaticField = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 10px 14px;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  min-height: 40px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const SaveButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ToggleLabel = styled.span`
  font-size: 16px;
  color: #313131;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3.5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #00ff00;
  }

  input:checked + span:before {
    transform: translateX(18px);
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const AddAdminButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #555454;
  border: 1px solid #5554548f;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #dbdddf;
  }

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const AdminTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border: 1px solid #eee;
  }

  th {
    background-color: transparent;
    font-weight: 600;
    color: #555;
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    th,
    td {
      padding: 10px 8px;
      white-space: nowrap;
    }
  }
`;

export const StatusTag = styled.span`
  background-color: ${(props) =>
    props.status === "active" ? "#e6ffe6" : "#fff0f0"};
  color: ${(props) => (props.status === "active" ? "#4caf50" : "#f44336")};
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f44336;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
`;
