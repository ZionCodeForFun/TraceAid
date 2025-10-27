import React from "react";
import { Container } from "../../../../style/SettingsStyle";
import { AiOutlineUser } from "react-icons/ai";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FiBell, FiLock } from "react-icons/fi";
import { LuIdCard, LuWalletCards } from "react-icons/lu";
import profile from "../../../../assets/profile.png";

const infor = [
  { id: 1, name: "Personal Information", icon: <AiOutlineUser />, path: "" },
  { id: 2, name: "KYC Verification", icon: <LuIdCard />, path: "kycVerify" },
  { id: 3, name: "Security", icon: <FiLock />, path: "security" },
  { id: 4, name: "Payout Details", icon: <LuWalletCards />, path: "payoutDetails" },
  { id: 5, name: "Notifications", icon: <FiBell />, path: "notification" },
];

const Settings = () => {
  const nav = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  return (
    <Container>
      <article className="wrapper">
        <aside className="left">
          <header className="top_profile">
            <div className="profile_holder">
              <img src={profile} alt="profile" />
            </div>
            <div className="name_holder">
              <p className="name">Slum2Africa</p>
              <p className="role">NGO</p>
            </div>
          </header>

          <section className="infor_holder">
            {infor.map((item) => {
              const itemFullPath =
                item.path === ""
                  ? "/organizationdashboard/settings"
                  : `/organizationdashboard/settings/${item.path.toLowerCase()}`;

              const isActive = currentPath === itemFullPath;

              return (
                <div
                  key={item.id}
                  className={`infor ${isActive ? "active" : ""}`}
                  onClick={() => nav(itemFullPath)}
                >
                  <i>{item.icon}</i>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </section>
        </aside>

        <Outlet />
      </article>
    </Container>
  );
};

export default Settings;
