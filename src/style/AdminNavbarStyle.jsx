import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 6px 10px;
  }
`;

export const NavbarContainer = styled.div`
  width: 1400px;
  height: 46px;
  background-color: #ececf0;
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  padding: 6px 6px;

  @media (max-width: 768px) {
    width: max-content;
    height: auto;
    border-radius: 10px;
    justify-content: flex-start;
    gap: 8px;
    padding: 8px 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;
    height: 44px;
    gap: 10px;
    justify-content: space-evenly;
    padding: 6px 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ $active }) => ($active ? "#000" : "#fff")};
  border-radius: 3px;
  color: ${({ $active }) => ($active ? "#a7c95e" : "#222")};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e1e3eb;
    color: white;
  }

  @media (max-width: 768px) {
    gap: 6px;
    padding: 6px 10px;
    font-size: 13px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: 7px;
    padding: 7px 12px;
    font-size: 14px;
  }
`;
