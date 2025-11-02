import React, { useEffect } from "react";
import {
  AdminHeaderContainer,
  AdminHeaderInner,
  AdminHeaderLeft,
  AdminHeaderCenter,
  AdminHeaderRight,
} from "../../../style/AdminHeaderStyle";
import logo from "../../../assets/logo2.png";
import { CiSearch } from "react-icons/ci";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../../global/adminAuthSlice";
import { toast } from "react-toastify";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const { admin, token, email } = useSelector((state) => state.adminAuth);
  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const storedToken = token;
        const adminId = admin?._id;

        if (!storedToken || !adminId) return;

        const res = await axios.get(
          `${import.meta.env.VITE_BaseUrl_Admin}/admin/${adminId}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );

        dispatch(setAdmin({ ...res.data.data, token: storedToken }));
      } catch (err) {
        console.error("Error fetching admin profile:", err);
        toast.error(err.response?.data?.message);
      }
    };

    fetchAdminProfile();
  }, [dispatch]);

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
            <div
              className="profile_holder"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {admin
                ? `${admin.firstName?.[0] || ""}${admin.lastName?.[0] || ""}`
                : "?"}
            </div>
            <div className="name_holder">
              <p className="name">
                {admin ? `${admin.firstName} ${admin.lastName}` : "Loading..."}
              </p>
              <p className="email">{admin?.email || "Fetching..."}</p>
            </div>
          </div>
        </AdminHeaderRight>
      </AdminHeaderInner>
    </AdminHeaderContainer>
  );
};

export default AdminHeader;
