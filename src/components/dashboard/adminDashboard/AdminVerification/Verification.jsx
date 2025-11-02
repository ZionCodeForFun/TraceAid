import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { TbWallet } from "react-icons/tb";
import { LuTarget } from "react-icons/lu";
import { GrDocumentVerified } from "react-icons/gr";
const NavItem = ({ icon: Icon, label, isActive }) => {
  return (
    <NavButton isActive={isActive}>
      <Icon size={18} />
      {label}
    </NavButton>
  );
};

const Verification = () => {
  return (
    <div>
      <article>
        <NavContainer>
          <NavItem
            icon={GrDocumentVerified}
            label="Campaign Verification"
            isActive={true}
          />
          <NavItem
            icon={LuTarget}
            label="Milestone Verification"
            isActive={false}
          />
          <NavItem
            icon={TbWallet}
            label="Funds Disbursement"
            isActive={false}
          />
        </NavContainer>
        <div className="outlet_holder">
          <Outlet />
        </div>
      </article>{" "}
    </div>
  );
};

export default Verification;
const Container = styled.div`
  width: 100%;
  height: 100%;
  article {
    display: flex;
    flex-direction: column;
    .outlet_holder {
    }
  }
`;
const NavContainer = styled.div`
  width: 768px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #e5e7eb;
  border-radius: 6px;
  padding: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const NavButton = styled.button`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${(props) => (props.isActive ? 600 : 500)};
  color: ${(props) => (props.isActive ? "#ffffff" : "#4b5563")};
  background-color: ${(props) => (props.isActive ? "#65a30d" : "transparent")};
  padding: 6px 16px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.isActive ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};

  &:hover {
    background-color: ${(props) => (props.isActive ? "#65a30d" : "#d1d5db")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#1f2937")};
  }

  svg {
    margin-right: 8px;
  }
`;
