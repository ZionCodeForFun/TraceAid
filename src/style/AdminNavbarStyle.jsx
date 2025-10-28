import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
`;

export const NavbarContainer = styled.div`
  width: 1400px;
  height: 46px;
  background-color: #ECECF0;
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  padding: 6px 6px;
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
  background-color: white; 
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #E1E3EB;
  }
  .icon {
    font-size: 16px;
    color: ${({ $active }) => ($active ? "#6B7D43" : "#6B7280")};
  }

  .text {
    font-size: 14px;
    color: ${({ $active }) => ($active ? "#111827" : "#6B7280")};
    font-weight: ${({ $active }) => ($active ? "500" : "400")};
  }


`;
