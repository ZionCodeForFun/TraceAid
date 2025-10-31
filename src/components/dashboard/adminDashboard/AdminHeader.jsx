import React from "react";
import {
  AdminHeaderContainer,
  AdminHeaderInner,
  AdminHeaderLeft,
  AdminHeaderCenter,
  AdminHeaderRight,
} from "../../../style/AdminHeaderStyle";
import logo from "../../../assets/logo2.png";
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";

const AdminHeader = () => {
  return (
    <AdminHeaderContainer>
      <AdminHeaderInner>
        <AdminHeaderLeft>
          <img src={logo} alt="logo" />
        </AdminHeaderLeft>

        <AdminHeaderCenter>
          <div className="holder">
            <div className="logo">
              <CiSearch size={18} />
            </div>
            <input type="text" placeholder="Search campaigns, users, NGOs..." />
          </div>
        </AdminHeaderCenter>

        <AdminHeaderRight>
          <div className="left">
            <div className="profile_holder">
              <RxPerson size={18} color="#FFFFFF" />
            </div>
            <div className="name_holder">
              <p className="name">Annabel Ayomide</p>
              <p className="email">admin@traceaid.com</p>
            </div>
          </div>
        </AdminHeaderRight>
      </AdminHeaderInner>
    </AdminHeaderContainer>
  );
};

export default AdminHeader;
